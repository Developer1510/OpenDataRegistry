/**
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

'use strict';

var gulp = require('gulp');
var yaml = require('gulp-yaml');
var jsyaml = require('yaml');
var del = require('del');
var handlebars = require('handlebars');
var hb = require('gulp-hb');
var rename = require('gulp-rename');
var flatmap = require('gulp-flatmap');
var requireDir = require('require-dir');
var path = require('path');
var marked = require('marked');
var renderer = new marked.Renderer();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var fs = require('fs');
var _ = require('lodash');
var reduce = require('object.reduce');
var ndjson = require('ndjson');
let allDatasets;

const dataSourcesDirectory = './collections/';

// Overriding MD renderer to remove outside <p> tags
renderer.paragraph = function (text, level) {
  return text;
};

var externalPages = [];

// Helper function to alpha sort DataAtWork sections
const sortDataAtWork = function (dataAtWork) {
  for (var k in dataAtWork) {
    if (!dataAtWork[k]) { return dataAtWork[k]; }
    dataAtWork[k].sort((a, b) => {
      if (a.Title.toUpperCase() < b.Title.toUpperCase()) {
        return -1;
      }
      if (a.Title.toUpperCase() > b.Title.toUpperCase()) {
        return 1;
      }
      return 0;
    });
  }

  return dataAtWork;
};

// Helper function to grab datasets from JSON files
const getDatasets = function (ignoreRank=false) {
  if (allDatasets && !ignoreRank) {
    return allDatasets;
  }

  var datasets = requireDir('./tmp');
  var arr = [];
  for (var k in datasets) {
    // Handle deprecated datasets
    if (datasets[k].Deprecated) {
      continue;
    }

    // If we have no items in a category, remove it
    for (var category in datasets[k].DataAtWork) {
      if (!datasets[k].DataAtWork[category] || (datasets[k].DataAtWork[category] && datasets[k].DataAtWork[category] === 0)) {
        delete datasets[k].DataAtWork[category];
      }
    }

    // If we have no items at all, delete DataAtWork
    if (_.flatMap(datasets[k].DataAtWork).length === 0) {
      delete datasets[k].DataAtWork;
    }

    var dataset = datasets[k];
    dataset.Slug = generateSlug(k);
    dataset.rootUrl = process.env.ROOT_URL;
    dataset.githubRepo = process.env.GIT_HUB_REPO;
    dataset.githubBranch = process.env.GIT_HUB_BRANCH;
    arr.push(datasets[k]);
  }

  // Rank the datasets
  arr = rankDatasets(arr, ignoreRank);

  // Sort DataAtWork section by alpha
  arr = arr.map((d) => {
    if (d.DataAtWork) {
      d.DataAtWork = sortDataAtWork(d.DataAtWork);
    }

    return d;
  });

  // Sort the Tags
  arr = arr.map((d) => {
    if (d.Tags) {
      d.Tags = d.Tags.sort((a, b) => a.localeCompare(b));
    }

    return d;
  });

  if (ignoreRank) {
    return arr.slice();
  }
  allDatasets = arr.slice();
  return allDatasets;
};

// Helper function to get unique tags
const getUniqueTags = function (datasets) {
  // Build up list of unique tags
  let tags = [];
  datasets.forEach((d) => {
    d.Tags.forEach((t) => {
      if (tags.includes(t) === false) {
        tags.push(t);
      }
    });
  });

  return tags;
};

// Helper function to get unique dates
const getUniqueDates = function (datasets) {
  // Build up list of unique tags
  let dates = [];
  datasets.forEach((d) => {
    if (dates.includes(d.RegistryEntryAdded) === false) {
      dates.push(d.RegistryEntryAdded);
    }
  });
  // Sort by descending order
  dates.sort();
  dates.reverse();
  return dates;
};

// Helper function to generate slug from file name
const generateSlug = function (file) {
  return path.basename(file, '.json').toLowerCase();
};

// Helper function to rank the datasets in some order
const rankDatasets = function (datasets, ignoreRank) {
  // Calculate rank
  datasets = datasets.map((d) => {
    d.rank = 0;
    if (d['Tags'].includes('aws-pds')) { d.rank += 3; }
    if (d['DataAtWork']) { d.rank += 1 * _.flatMap(d['DataAtWork']).length; }

    return d;
  });

  // Order
  if (ignoreRank) {
    datasets = _.orderBy(datasets, ['Name'], ['asc']);
  } else {
    datasets = _.orderBy(datasets, ['rank', 'Name'], ['desc', 'asc']);
  }

  // Remove rank variable
  datasets = datasets.map((d) => {
    delete d.rank;

    return d;
  });

  return datasets;
};

// Handlebars helper functions
const hbsHelpers = {
  toJSON: function (obj) {
    return new hb.handlebars.SafeString(JSON.stringify(obj));
  },
  checkLength: function (obj, len, options) {
    if (_.flatMap(obj).length > len) {
      return options.fn(this);
    }
    return options.inverse(this);
  },
  pickRandom: function (arr, len, options) {
    let ret = '';
    const shuffle = function (a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    arr = shuffle(_.flatMap(arr));
    arr = arr.slice(0, len);
    arr = arr.forEach((a) => {
      ret += options.fn(a);
    });
    return ret;
  },
  isEqual: function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  },
  isAWSURL: function (link, options) {
    // AWS blog
    if (/https?:\/\/aws.amazon.com.*/.test(link)) {
      return options.fn(this);
    }

    // Docs site
    if (/https?:\/\/docs.opendata.aws.*/.test(link)) {
      return options.fn(this);
    }

    // AWS GitHub repos
    if (/https?:\/\/github.com\/(awslabs|aws-samples)\/.*/.test(link)) {
      return options.fn(this);
    }

    // AWS GitHub repos viewed through NBViewer
    if (/https?:\/\/nbviewer.jupyter.org\/github\/(awslabs|aws-samples)\/.*/.test(link)) {
      return options.fn(this);
    }
    
    // go.aws shortener
    if (/https?:\/\/go.aws.*/.test(link)) {
      return options.fn(this);
    }    

    return options.inverse(this);
  },
  md: function (str, escapeStr=false) {
    // Keep from exiting if we have an undefined string
    if (!str) {
      return str;
    }
    var res = marked(str, {renderer: renderer});
    if (escapeStr===true) {
      res = res.replace(/\"/g, '\\\"');
    }
    return res;
  },
  mdExternal: function (data, escapeStr=false) {
    // Keep from exiting if we have an undefined string
    if (!data || !data.Title || !data.Path) {
      return data;
    }
    
    var mdFile = data.Path;
    var htmlFile = path.basename(path.basename(mdFile, '.md'), '.MD').toLowerCase();
    if (htmlFile === "index") {
    	htmlFile = "index1";
    }
    htmlFile += ".html";
    
    var dir = path.dirname(mdFile);
    var dirAbsolute = path.join(dataSourcesDirectory, dir);
    
    if (!fs.existsSync('./docs/' + dir)) {
      fs.mkdirSync('./docs/' + dir);
    }
    
    var extraFiles = fs.readdirSync(dirAbsolute).filter(function(file) {
      return path.extname(file).toLowerCase() !== '.md';
    });
      
    for (var i in extraFiles) {
	  var file = extraFiles[i];
	  fs.writeFileSync("./docs/" + dir + "/" + file, fs.readFileSync(path.join(dirAbsolute, file)));
    }
    
    var mdContent = fs.readFileSync(path.join(dataSourcesDirectory, mdFile), "utf-8");
    var htmlContent = marked(mdContent, {renderer: renderer});
    
    var templateData = {
      baseURL: process.env.BASE_URL,
      buildDate: new Date().toUTCString(),
      rootUrl: process.env.ROOT_URL,
      githubRepo: process.env.GIT_HUB_REPO,
      githubBranch: process.env.GIT_HUB_BRANCH
    };
    var htmlHeader = handlebars.compile(fs.readFileSync('./src/partials/header.hbs', 'utf-8'))(templateData);
    var htmlFooter = handlebars.compile(fs.readFileSync('./src/partials/footer.hbs', 'utf-8'))(templateData);
    
    htmlContent = htmlHeader + htmlContent + htmlFooter;
    
    fs.writeFileSync("./docs/" + dir + "/" + htmlFile, htmlContent);

    return "<a href=\"" + process.env.ROOT_URL + dir + "/" + htmlFile + "\">" + data.Title + "</a>";
  },
  escapeTag: function (str) {
    // Keep from exiting if we have an undefined string
    if (!str) {
      return str;
    }
    return str.replace(/ /g, '-');
  },
  managedByRenderer: function (str, wantLogo=true) {
    // Keep from exiting if we have an undefined string
    if (!str) {
      return str;
    }

    // Check to see if we have a markdown link
    let logoPath, managedByURL, managedByName;
    if (/\[(.*)\]\((.*)\)/.test(str)) {
      managedByName = /\[(.*)\]/.exec(str)[1];
      logoPath = `/img/logos/${managedByName.toLowerCase().replace(/ /g, '-').replace(/[.,+]/g, '')}-logo.png`;
      managedByURL = /\((.*)\)/.exec(str)[1];
    } else {
      logoPath = `/img/logos/${str.toLowerCase().replace(/ /g, '-').replace(/[.,+]/g, '')}-logo.png`;
    }

    // Check to see if we have a logo and render that if we do
    if (wantLogo && fs.existsSync(`src/${logoPath}`)) {
      return `<a href="${managedByURL}"><img src="${logoPath}" class="managed-by-logo" alt="${managedByName}"></a>`;
    }

    // No logo if we're here, just render markdown
    return marked(str, {renderer: renderer});
  },
  urlListRenderer: function (urlListData) {
	  if (!urlListData) {
		  return "";
	  }
	  
	  if (urlListData.Title) { // was a single resource, not a list
		  return "<p><a href=\"" + urlListData.URL + "\">" + urlListData.Title + "</a></li></p>";
	  }
	  
	  var html = "<ul>";
	  for (var urlIndex in urlListData) {
		  var urlData = urlListData[urlIndex];
		  html += "<li><a href=\"" + urlData.URL + "\">" + urlData.Title + "</a></li>";
	  }
	  html += "</ul>\n";
	  
	  return html;
  },
  tabelaricRenderer: function (tabelaricData) {
    if (!tabelaricData) {
      return "";
    }
    
    if (!tabelaricData.Table) {
    	return "<p>" + tabelaricData + "</p>"; // was a simple non-tabelaric string
    }
    
    var html = "";
	var tableData = tabelaricData.Table;
	html += "<table><thead><tr>";
	
	var cols = [];
	for (var colIndex in tableData.Columns) {
		var colData = tableData.Columns[colIndex];
		cols.push(colData.Name);
		html += "<th>" + colData.Title + "</th>";
	}
	
	html += "</tr></thead><tbody>";
	
	for (var rowIndex in tableData.Rows) {
		html += "<tr>";
		var rowData = tableData.Rows[rowIndex];
		for (var colIndex in cols) {
			var colName = cols[colIndex];
			html += "<td>" + rowData[colName] + "</td>";
		}
		html += "</tr>";
	}
		
	html += "</tbody></table>\n";
    
    return html;
  },
  toType: function (str) {
    return str ? str.toLowerCase().replace(/\s/g, '-') : str;
  },
  arnToBucket: function (str) {
    if (str) {
      let bucket = str.split(":::", 2)[1];
      if (String(bucket).endsWith('/')) {
        return bucket;
      } else {
        return bucket + '/';
      }
    }
    return str;
  },
  trimHTML: function(passedString, length) {
    // This function will trim an HTML string to a desired length
    // while keeping links intact.
    const regexAllTags = /<[^>]*>/;
    const regexIsTag = /<|>/;
    const regexOpen = /<[^\/][^>]*>/;
    const regexClose = /<\/[^>]*>/;
    const regexAttribute = /<[^ ]*/;

    let necessaryCount = 0;
    if (passedString.replace(regexAllTags, "").length <= length) {
        return passedString;
    }

    const split = passedString.split(regexAllTags);
    let counter = '';

    split.forEach(item => {
       if (counter.length < length && counter.length + item.length >= length) {
           necessaryCount = passedString.indexOf(item, counter.length)
           + item.substring(0, length - counter.length).length;

           return;
       }

       counter += item;
    });

    if (necessaryCount == 0) {
      necessaryCount = counter.length;
    }

    let x = passedString.match(regexIsTag, necessaryCount);
    if (x != null && x[0] == ">") {
        necessaryCount = x.index + 1;
    }
    let subs = passedString.substring(0, necessaryCount);
    let openTags = subs.match(regexOpen) || [];
    let closeTags = subs.match(regexClose) || [];
    let OpenTags = [];
    openTags.forEach(item => {
      let trans = item.toString().match(regexAttribute)[0];
      trans = '</' + trans.substring(1, trans.length - 1);
      if (trans.charAt(trans.length-1) != '>') {
          trans += '>';
      }

      OpenTags.push(trans);
    });

    closeTags.forEach((close, index) => {
      OpenTags.splice(index, 1);
    });

    for (var i = OpenTags.length - 1; i >= 0; i--) {
        subs += OpenTags[i];
    }

    subs += '...';

    return subs;
  }
};
exports.hbsHelpers = hbsHelpers; // exporting for testing purposes

// Clean docs directory
function clean () {
  return del(['./docs/**/*', './tmp/**/*']);
};

// Convert YAML to JSON
function yamlConvert () {
  if (!fs.existsSync('./tmp/')) {
    fs.mkdirSync('./tmp/');
  }
	
  var datasetFiles = fs.readdirSync(dataSourcesDirectory).filter(function(file) {
    return path.extname(file).toLowerCase() === '.yaml';
  });
  
  for (var i in datasetFiles) {
	  var dataset = jsyaml.parse(fs.readFileSync(path.join(dataSourcesDirectory, datasetFiles[i]), 'utf8'));
      var datasetName = path.basename(datasetFiles[i], '.yaml').toLowerCase();
	  fs.writeFileSync(`./tmp/${datasetName}.json`, JSON.stringify(dataset));
  }

  return gulp.src('./tmp/');
};

// Compile the top level ndjson and move to docs
function jsonOverview (cb) {
  // Loop over each dataset JSON and save to in-memory string
  const serialize = ndjson.serialize();
  let json = '';
  serialize.on('data', function(line) {
    json += line;
  });
  const datasets = requireDir('./tmp');
  for (var k in datasets) {
    serialize.write(datasets[k]);
  }
  serialize.end();

  // Save string to file
  fs.writeFileSync('./docs/index.ndjson', json);

  return cb();
};

// Copy CSS files to docs
function css () {
  return gulp.src('./src/css/**/*.css')
    .pipe(gulp.dest('./docs/css/'));
};

// Compile the RSS feed and move to docs
function rss () {
  var templateData = {
    datasets: getDatasets(),
    baseURL: process.env.BASE_URL,
    buildDate: new Date().toUTCString(),
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  return gulp.src('./src/rss.xml.hbs')
    .pipe(hb({data: templateData, helpers: hbsHelpers, handlebars: handlebars}))
    .pipe(rename('rss.xml'))
    .pipe(gulp.dest('./docs/'));
};

// Copy font files to docs
function fonts () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./docs/fonts/'));
};

// Copy images to docs
function img () {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./docs/img/'));
};

// Compile the sitemap and move to docs
function htmlSitemap () {
  // Build up sitemap items
  let slugs = [];
  const datasets = getDatasets();
  datasets.forEach((d) => {
    // Detail page
    slugs.push(d.Slug);

    // Tag pages
    d.Tags.forEach((t) => {
      if (slugs.includes(t) === false) {
        slugs.push(`tag/${t.replace(/ /g, '-')}`);
        slugs.push(`tag/${t.replace(/ /g, '-')}/usage-examples`);
      }
    });
  });

  var templateData = {
    slugs: slugs,
    baseURL: process.env.BASE_URL,
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  return gulp.src('./src/sitemap.hbs')
    .pipe(hb({data: templateData, handlebars: handlebars}))
    .pipe(rename('sitemap.txt'))
    .pipe(gulp.dest('./docs/'));
};

// Compile JS and move to docs
function js () {
  // HBS templating
  var templateData = {
    datasets: getDatasets(),
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };
  const options = {
    helpers: hbsHelpers
  };

  return gulp.src('./src/**/*.js')
    .pipe(hb({data: templateData, helpers: hbsHelpers, handlebars: handlebars}))
    .pipe(gulp.dest('./docs/'));
};

// Compile overview page and move to docs
function htmlOverview () {
  const datasets = getDatasets();

  // Do some work to alter the datasets data for display
  datasets.map((d) => {
    d.examplesCount = d['DataAtWork'] ? _.flatMap(d['DataAtWork']).length : 0;

    return d;
  });

  // HBS templating
  var templateData = {
    datasets: datasets,
    isHome: true,
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  return gulp.src('./src/index.hbs')
    .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./docs/'));
};

// Compile redirect pages and move to docs
function htmlRedirects (cb) {
  const file = fs.readFileSync('./src/config.yaml', 'utf8');
  const config = jsyaml.parse(file);
  // Exit if we have no redirects
  if (!config.redirects) {
    return cb();
  }

  // Create redirect page for each
  config.redirects.forEach((r) => {
    // HBS templating
    const templateData = {
      target: r.target,
      rootUrl: process.env.ROOT_URL,
      githubRepo: process.env.GIT_HUB_REPO,
      githubBranch: process.env.GIT_HUB_BRANCH
    };

    return gulp.src('./src/redirect.hbs')
      .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
      .pipe(rename(`${r.source}`))
      .pipe(gulp.dest('./docs/'));
  });

  return cb();
};

// Compile the usage examples page and move to docs
function htmlExamples () {
  const templateData = {
    datasets: getDatasets(),
    isHome: false,
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  // Handle pretty name for data at work field
  templateData.datasets.forEach((d) => {
    if (d.DataAtWork && d.DataAtWork['Tools & Applications']) {
      d.DataAtWork.Tools = d.DataAtWork['Tools & Applications'];
      delete d.DataAtWork['Tools & Applications'];
    }
  });

  return gulp.src('./src/examples.hbs')
    .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./docs/usage-examples/'));
};

// Compile tag usage examples pages and move to docs
function htmlTagUsage (cb) {
  const datasets = getDatasets();

  // Build up list of unique tags
  const tags = getUniqueTags(datasets);

  // Loop over each tag and build the page
  tags.forEach((t) => {
    // Filter out datasets without a matching tag
    let filteredDatasets = datasets.filter((d) => {
      return d.Tags.includes(t);
    });

    // HBS templating
    var templateData = {
      datasets: filteredDatasets,
      isHome: false,
      tag: t,
      rootUrl: process.env.ROOT_URL,
      githubRepo: process.env.GIT_HUB_REPO,
      githubBranch: process.env.GIT_HUB_BRANCH
    };

    return gulp.src('./src/examples.hbs')
      .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
      .pipe(rename(`tag/${t.replace(/ /g, '-')}/usage-examples/index.html`))
      .pipe(gulp.dest('./docs/'));
  });

  return cb();
};

// Compile detail pages and move to docs
function htmlDetail () {
  return gulp.src('./tmp/*.json')
    .pipe(flatmap(function (stream, file) {
      var templateData = JSON.parse(file.contents.toString('utf8'));
      templateData.rootUrl = process.env.ROOT_URL;
      templateData.githubRepo = process.env.GIT_HUB_REPO;
      templateData.githubBranch = process.env.GIT_HUB_BRANCH;
      // If we have no DataAtWork, remove it
      if (!templateData.DataAtWork || (templateData.DataAtWork && _.compact(_.flatMap(templateData.DataAtWork)).length === 0)) {
        delete templateData.DataAtWork;
      }

      // Sort DataAtWork entries by alpha and handle naming
      if (templateData.DataAtWork) {
        sortDataAtWork(templateData.DataAtWork);

        // Handle pretty name for data at work field
        if (templateData.DataAtWork['Tools & Applications']) {
          templateData.DataAtWork.Tools = templateData.DataAtWork['Tools & Applications'];
          delete templateData.DataAtWork['Tools & Applications'];
        }
      }

      // Sort Tags
      if (templateData.Tags) {
        templateData.Tags.sort((a, b) => a.localeCompare(b))
      }
      
      // Generate slug
      const slug = generateSlug(file.path);

      // Add link to other datasets managed by dataset owner, default to search
      if (templateData.ManagedBy) {
        let managedByName = templateData.ManagedBy;
        // Check if ManagedBy is using Markdown
        if (/\[(.*)\]\((.*)\)/.test(templateData.ManagedBy)) {
          managedByName = /\[(.*)\]/.exec(templateData.ManagedBy)[1];
        }
        templateData.managedByLink = `${process.env.ROOT_URL}?search=managedBy:${managedByName.toLowerCase()}`;
        templateData.managedByName = managedByName;
      }

      // Render
      return gulp.src('./src/detail.hbs')
        .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
        .pipe(rename(`${slug}/index.html`))
        .pipe(gulp.dest('./docs/'));
    }));
};

// Compile tag pages and move to docs
function htmlTag (cb) {
  const datasets = getDatasets();

  // Build up list of unique tags
  const tags = getUniqueTags(datasets);

  // Loop over each tag and build the page
  tags.forEach((t) => {
    // Filter out datasets without a matching tag
    let filteredDatasets = datasets.filter((d) => {
      return d.Tags.includes(t);
    });

    // HBS templating
    var templateData = {
      datasets: filteredDatasets,
      isHome: false,
      tag: t,
      tagURL: t.replace(/ /g, '-'),
      rootUrl: process.env.ROOT_URL,
      githubRepo: process.env.GIT_HUB_REPO,
      githubBranch: process.env.GIT_HUB_BRANCH
    };

    return gulp.src('./src/index.hbs')
      .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
      .pipe(rename(`tag/${t.replace(/ /g, '-')}/index.html`))
      .pipe(gulp.dest('./docs/'));
  });

  return cb();
};


// Compile page for when datasets were added
function htmlAdditions (cb) {
  const datasets = getDatasets();

  // Build up list of unique tags
  const dates = getUniqueDates(datasets);

  var filteredDatasets = {};
  reduce(dates, function(acc, key) {
    // Filter out datasets without a matching tag
    acc[key] = datasets.filter((d) => {
      return d.RegistryEntryAdded == key;
    });
    return acc;
  }, filteredDatasets);

  // HBS templating
  var templateData = {
    datasets: filteredDatasets,
    isHome: false,
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  return gulp.src('./src/changelogindex.hbs')
    .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
    .pipe(rename(`change-log/index.html`))
    .pipe(gulp.dest('./docs/'));
};

// Compile providers page and move to docs
function htmlProviders (cb) {
  const logos = fs.readdirSync('./src/img/logos').map((c) => {
    return `img/logos/${c}`;
  });

  // HBS templating
  const templateData = {
    Providers: logos,
    rootUrl: process.env.ROOT_URL,
    githubRepo: process.env.GIT_HUB_REPO,
    githubBranch: process.env.GIT_HUB_BRANCH
  };

  return gulp.src('./src/providers.hbs')
    .pipe(hb({data: templateData, helpers: hbsHelpers, partials: ['./src/partials/*'], handlebars: handlebars}))
    .pipe(rename(`/providers.html`))
    .pipe(gulp.dest('./docs/'));
};

// Server with live reload
exports.serve = gulp.series(clean, gulp.parallel(css, fonts, img, yamlConvert), jsonOverview, js, rss, gulp.parallel(htmlAdditions, htmlDetail, htmlOverview, htmlSitemap, htmlExamples, htmlTag, htmlTagUsage, htmlProviders), htmlRedirects, function () {

  browserSync({
    port: 3000,
    server: {
      baseDir: ['docs']
    }
  });

  // watch for changes and add a debounce for docs changes
  var timer;
  gulp.watch([
    'docs/**/*'
  ]).on('change', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      reload();
    }, 500);
  });

  gulp.watch('src/**/*', gulp.series('default'));
});

exports.build = gulp.series(clean, gulp.parallel(css, fonts, img, yamlConvert), jsonOverview, js, rss, gulp.parallel(htmlAdditions, htmlDetail, htmlOverview, htmlSitemap, htmlExamples, htmlTag, htmlTagUsage, htmlProviders), htmlRedirects);
exports.default = exports.build;

