'use strict';

// Get datasets object
var datasets = [{"Name":"Sentinel-3","Description":"This data set consists of observations from the Sentinel-3 satellite of the European Commission’s Copernicus Earth Observation Programme. Sentinel-3 is a polar orbiting satellite that completes 14 orbits of the Earth a day. It carries the Ocean and Land Colour Instrument (OLCI) for medium resolution marine and terrestrial optical measurements, the Sea and Land Surface Termperature Radiometer (SLSTR), the SAR Radar Altimeter (SRAL), the MicroWave Radiometer (MWR) and the Precise Orbit Determination (POD) instruments. The satellite was launched in 2016 and entered routine operational phase in 2017. Data is available from July 2017 onwards.","Documentation":"https://github.com/Sentinel-5P/data-on-s3/blob/master/DocsForAws/Sentinel3Description.md","Contact":"sentinel3@meeo.it","ManagedBy":"[Meteorological Enviromental Earth Observation](http://www.meeo.it/)","UpdateFrequency":"Daily","Tags":["aws-pds","earth observation","environmental","geospatial","land","oceans","satellite imagery","sustainability"],"License":"https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice","Resources":[{"Description":"Sentinel-3 Near Real Time Data (NRT) format","ARN":"arn:aws:s3:::meeo-s3/NRT/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Not Time Critical (NTC) format","ARN":"arn:aws:s3:::meeo-s3/NTC/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Short Time Critical (STC) format","ARN":"arn:aws:s3:::meeo-s3/STC/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Cloud Optimized GeoTIFF (COG) format","ARN":"arn:aws:s3:::meeo-s3-cog/","Region":"eu-central-1","Type":"S3 Bucket"}],"DataAtWork":{"Tutorials":[{"Title":"Accessing Sentinel-3 Data on S3 by MEEO","URL":"https://github.com/Sentinel-5P/data-on-s3/blob/master/notebooks/Sentinel3_Tutorial.ipynb","AuthorName":"Meteorological Envionmental Earth Observation","AuthorURL":"http://www.meeo.it/"}],"Tools & Applications":[{"Title":"Catalogue of data set","URL":"https://meeo-s3.s3.amazonaws.com/index.html#/?t=catalogs","AuthorName":"Meteorological Envionmental Earth Observation","AuthorURL":"https://www.meeo.it/"},{"Title":"Sentinel-3 Toolbox","URL":"https://step.esa.int/main/toolboxes/sentinel-3-toolbox/","AuthorName":"European Space Agency","AuthorURL":"https://www.esa.int/"}],"Publications":[{"Title":"Sentinel-3 Document Library","URL":"https://sentinel.esa.int/web/sentinel/user-guides","AuthorName":"European Space Agency","AuthorURL":"https://www.esa.int/"}]},"RegistryEntryAdded":"2020-07-08","RegistryEntryLastModified":"2020-07-08","Slug":"sentinel-3","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Sentinel-1 SLC dataset for South and Southeast Asia, Taiwan, Korea and Japan","Description":"The S1 Single Look Complex (SLC) dataset contains Synthetic Aperture Radar (SAR) data in the C-Band wavelength. The SAR sensors are installed on a two-satellite (Sentinel-1A and Sentinel-1B) constellation orbiting the Earth with a combined revisit time of six days, operated by the European Space Agency. The S1 SLC data are a Level-1 product that collects radar amplitude and phase information in all-weather, day or night conditions, which is ideal for studying natural hazards and emergency response, land applications, oil spill monitoring, sea-ice conditions, and associated climate change effects.\n","Documentation":"https://github.com/earthobservatory/sentinel1-opds/","Contact":"For any enquires regarding data delivery, please email ehill@ntu.edu.sg and stchin@ntu.edu.sg","ManagedBy":"[Earth Observatory of Singapore, Nanyang Technological University](https://earthobservatory.sg)","UpdateFrequency":"S1 SLC data for the region of interest will be updated regularly, as it becomes available on the Alaska Satellite Facility endpoint.","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["aws-pds","disaster response","earth observation","environmental","geospatial","satellite imagery","sustainability"],"License":"The data usage will inherit and fully comply with the free and open data policy from ESA’s [Sentinel Data Policy](https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf).\n","Resources":[{"Description":"Public access to Sentinel-1 SLC IW scenes over South and Southeast Asia, Taiwan and Japan","ARN":"arn:aws:s3:::sentinel1-slc-seasia-pds","Region":"ap-southeast-1","Type":"S3 Bucket"}],"DataAtWork":{"Tutorials":[{"Title":"Sentinel-1 Opendataset Wiki and Tutorials","URL":"https://github.com/earthobservatory/sentinel1-opds/wiki","AuthorName":"Earth Observatory of Singapore","AuthorURL":"https://earthobservatory.sg/research-group/geodesy-group-emma-hill/people"}],"Publications":[{"Title":"Rapid flood and damage mapping using synthetic aperture radar in response to Typhoon Hagibis, Japan","URL":"https://www.nature.com/articles/s41597-020-0443-5","AuthorName":"Cheryl W. J. Tay, Sang-Ho Yun, Shi Tong Chin, Alok Bhardwaj, Jungkyo Jung & Emma M. Hill"}]},"RegistryEntryAdded":"2019-04-10","RegistryEntryLastModified":"2020-04-24","Slug":"sentinel1-slc-seasia-pds","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Sentinel-2 L1C","Description":"The [Sentinel-2 mission](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is\na land monitoring constellation of two satellites that provide high resolution\noptical imagery and provide continuity for the current SPOT and Landsat missions.\nThe mission provides a global coverage of the Earth's land surface every 5 days,\nmaking the data of great use in on-going studies. L1C data are available from\nJune 2015 globally. L2A data are available from September 2016 over wider Europe\nregion and globally since January 2017. \n","Documentation":"Documentation is available [here](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/).","Contact":"https://forum.sentinel-hub.com","ManagedBy":"[Sinergise](https://www.sinergise.com/)","UpdateFrequency":"New Sentinel data are added regularly, usually within few hours after they are available on Copernicus Hub.","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","core collection","disaster response","multi spectral imagery","natural resource","satellite imagery"],"License":"[License](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/#attribution-and-use)\n","Resources":[{"Description":"Global since November 2015","ARN":"services.sentinel-hub.com","Region":"S2L1C"},{"Description":"Global since November 2015","ARN":"creodias.sentinel-hub.com","Region":"S2L1C"},{"Description":"Global since November 2015","ARN":"code-de.sentinel-hub.com","Region":"S2L1C"},{"Description":"Europe coverage since July 2015. Rolling policy of 12 months for World.","ARN":"shservices.mundiwebservices.com","Region":"S2L1C"}],"DataAtWork":{"Tutorials":[{"Title":"Tutorial for using Sentinel-2 data","URL":"https://medium.com/@anttilip/seeing-earth-from-space-from-raw-satellite-data-to-beautiful-high-resolution-images-feb522adfa3f","AuthorName":"Antti Lipponen","AuthorURL":"https://medium.com/@anttilip"}],"Tools & Applications":[{"Title":"Sentinel Hub WMS/WMTS/WCS Service","URL":"http://www.sentinel-hub.com/apps/wms","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"}],"Publications":[{"Title":"Using Remote Sensing Images and Cloud Services on AWS to Improve Land Use and Cover Monitoring","URL":"https://ieeexplore.ieee.org/abstract/document/9165649","AuthorName":"K. R. Ferreira, et al."}]},"RegistryEntryAdded":"2018-04-17","RegistryEntryLastModified":"2021-03-21","Slug":"sentinel-2","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Sentinel-2 L2A 120m Mosaic","Description":"Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As there are some parts of the world, which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).","Documentation":"Documentation is available [here](https://sentinel-s2-l2a-mosaic-120.s3.amazonaws.com/readme.html).","Resolution":"120m","Geographical coverage":"Land surface area between 58 degrees South and 72 degrees North.","Temporal availability":"2019 (2020 coming in April 2021, past years later on)","UpdateFrequency":"New data will be added annually.","Band information":"B02 (blue), B03 (green), B04 (red), B08 (NIR), B11 (SWIR), B12 (SWIR). The values are corresponding to digital numbers (DN), typically going from 0-10000.","Contact":"https://forum.sentinel-hub.com","ManagedBy":"[Sinergise](https://www.sinergise.com/)","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","machine learning","multi spectral imagery","satellite imagery"],"License":"CC-BY 4.0, Credit: Contains modified Copernicus data [year] processed by Sentinel Hub\n","Resources":[{"Description":"Global for year 2019","ARN":"services.sentinel-hub.com","Region":"BYOC","Type":"0074520d-bcf5-4811-8f6f-afd946e77695"},{"Description":"Global for year 2019","ARN":"creodias.sentinel-hub.com","Region":"BYOC","Type":"eaa027cc-1d9b-40fc-a15c-9dc486caebd7"}],"DataAtWork":{"Publications":[{"Title":"Digital Twin Sandbox Sentinel-2 collection available to everyone","URL":"https://medium.com/sentinel-hub/digital-twin-sandbox-sentinel-2-collection-available-to-everyone-20f3b5de846e","AuthorName":"Milcinski G., Lubej M."},{"Title":"How to Make the Perfect Time-Lapse of the Earth","URL":"https://medium.com/sentinel-hub/how-to-make-the-perfect-time-lapse-of-the-earth-351f214527f6","AuthorName":"Lubej M."}]},"RegistryEntryAdded":"2021-01-26","RegistryEntryLastModified":"2021-01-26","Slug":"sentinel-s2-l2a-mosaic-120","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"}];

// Function to set matching count number
var setMatchingCount = function (count) {
  $("#count-matching").text(count);
  if (count > 1) {
    $("#count-matching-text").text("datasets");
  } else {
    $("#count-matching-text").text("dataset");
  }
}

// Set initial matching datasets count
setMatchingCount($(".dataset").length);

// Listen for changes in search box and filter based
// on input
$("#search-box").on('input', function () {
  var searchText = $(this).val();
  // Loop over each item and hide non-matching
  let countMatching = 0;
  $(".dataset").each(function() {
    if (isMatch($(this).attr('id'), searchText)) {
      countMatching++;
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  // Set matching datasets count
  setMatchingCount(countMatching);
});

// Make sure we're not trying to submit anything if you press
// enter in the text box
$("#search-box").on("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    return;
  }
});

// Helper function to see if dataset has some match
var isMatch = function(slug, text) {
  // Lowercase search text
  text = text.toLowerCase();
  // Find matching dataset
  var dataset;
  for (var i = 0; i < datasets.length; i++) {
    if (datasets[i].Slug === slug) {
      dataset = datasets[i];
      break;
    }
  }

  // Short circuit for special case of query like tags:foo,bar
  var tagsRE = /tags:(.*)/.exec(text);
  if(tagsRE) {
    var tags = tagsRE[1].split(',');
    var hasMatch = false;
    tags.forEach(function(tag) {
      if (dataset.Tags.includes(tag.trim())) {
        hasMatch = true;
      }
    });
    if (hasMatch) { return true; }
  }

  // Short circuit for special case of query like managedBy:foo
  var managedByRE = /managedby:(.*)/.exec(text);
  if(managedByRE && dataset.ManagedBy) {
    var managedBy = managedByRE[1];
    return dataset.ManagedBy.toLowerCase().includes(managedBy.trim());
  }

  // Check dataset name
  if (dataset.Name.toLowerCase().indexOf(text) !== -1) {
    return true;
  }

  // Check dataset tags
  for (var i = 0; i < dataset.Tags.length; i++) {
    if (dataset.Tags[i].toLowerCase().indexOf(text) !== -1) {
      return true;
    }
  }

  // Check dataset description
  if (dataset.Description.toLowerCase().indexOf(text) !== -1) {
    return true;
  }

  // Check resources Type
  var hasMatch = false;
  for (var i = 0; i < dataset.Resources.length; i++) {
    if (!dataset.Resources[i].Type) { continue; }
    if (dataset.Resources[i].Type.toLowerCase().indexOf(text) !== -1) {
      hasMatch = true;
      break;
    }
  }
  if (hasMatch) { return true; }

  // Check resources ARN
  hasMatch = false;
  for (var i = 0; i < dataset.Resources.length; i++) {
    if (!dataset.Resources[i].ARN) { continue; }
    if (dataset.Resources[i].ARN.toLowerCase().indexOf(text) !== -1) {
      hasMatch = true;
      break;
    }
  }
  if (hasMatch) { return true; }

  // Check resources region
  hasMatch = false;
  for (var i = 0; i < dataset.Resources.length; i++) {
    if (!dataset.Resources[i].Region) { continue; }
    if (dataset.Resources[i].Region.toLowerCase().indexOf(text) !== -1) {
      hasMatch = true;
      break;
    }
  }
  if (hasMatch) { return true; }

  // If we're here, no match
  return false;
};

var triggerInput = function (text) {
  $("#search-box").focus();
  $("#search-box").val(text);
  $('#search-box').trigger('input');
}

// Listen for clicks on the tags and go to appropriate page
$('.tag').click(function () {
  window.location.href = rootUrl + 'tag/' + $(this).text().replace(/ /g, '-');
});

// Handle query passed in url via ?search=foo
var search = /search=(.*)/.exec(window.location.search);
if (search) {
  triggerInput(decodeURIComponent(search[1]));
}

// Load page with search box in focus
$("#search-box").focus();