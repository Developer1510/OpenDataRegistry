'use strict';

// Get datasets object
var datasets = [{"Name":"Sentinel-2","Description":"The [Sentinel-2 mission](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is\na land monitoring constellation of two satellites that provide high resolution\noptical imagery and provide continuity for the current SPOT and Landsat missions.\nThe mission provides a global coverage of the Earth's land surface every 5 days,\nmaking the data of great use in on-going studies. L1C data are available from\nJune 2015 globally. L2A data are available from September 2016 over wider Europe\nregion and globally since January 2017. Test change\n","Documentation":"Documentation is available for [Sentinel-2 L1C](https://roda.sentinel-hub.com/sentinel-s2-l1c/readme.html) and [Sentinel-2 L2A](https://roda.sentinel-hub.com/sentinel-s2-l2a/readme.html).","Contact":"https://forum.sentinel-hub.com/c/aws-sentinel","ManagedBy":"[Sinergise](https://www.sinergise.com/)","UpdateFrequency":"New Sentinel data are added regularly, usually within few hours after they are available on Copernicus OpenHub.","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","aws-pds","disaster response","earth observation","geospatial","natural resource","satellite imagery","sustainability"],"License":"Access to Sentinel data is free, full and open for the broad Regional, National, European and International user community. View [Terms and Conditions](https://scihub.copernicus.eu/twiki/do/view/SciHubWebPortal/TermsConditions).\n","Resources":[{"Description":"Level 1C scenes and metadata, in [Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) S3 bucket","ARN":"arn:aws:s3:::sentinel-s2-l1c","Region":"eu-central-1","Type":"S3 Bucket","RequesterPays":true,"Explore":["[Earth Search STAC Catalog](https://earth-search.aws.element84.com/v0/collections/sentinel-s2-l1c)"]},{"Description":"[S3 Inventory](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html#storage-inventory-contents) files for L1C (ORC and CSV)","ARN":"arn:aws:s3:::sentinel-inventory/sentinel-s2-l1c","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Level 2A scenes and metadata, in [Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) S3 bucket","ARN":"arn:aws:s3:::sentinel-s2-l2a","Region":"eu-central-1","Type":"S3 Bucket","Explore":["[Earth Search STAC Catalog](https://earth-search.aws.element84.com/v0/collections/sentinel-s2-l2a)"],"RequesterPays":true},{"Description":"[S3 Inventory](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html#storage-inventory-contents) files for L2A (ORC and CSV)","ARN":"arn:aws:s3:::sentinel-inventory/sentinel-s2-l2a","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Zipped archives for each product with 7 day retention period, in Requester Pays bucket","ARN":"arn:aws:s3:::sentinel-s2-l1c-zips","Region":"eu-central-1","Type":"S3 Bucket","RequesterPays":true},{"Description":"New scene notifications for L1C, can subscribe with [Lambda](https://aws.amazon.com/lambda/) or [SQS](https://aws.amazon.com/sqs/).","ARN":"arn:aws:sns:eu-west-1:214830741341:NewSentinel2Product","Region":"eu-west-1","Type":"SNS Topic"},{"Description":"New scene notifications for L2A, can subscribe with [Lambda](https://aws.amazon.com/lambda/) or [SQS](https://aws.amazon.com/sqs/).","ARN":"arn:aws:sns:eu-central-1:214830741341:SentinelS2L2A","Region":"eu-central-1","Type":"SNS Topic"}],"DataAtWork":{"Tutorials":[{"Title":"Exploring the Chile wildfires with Landsat and Sentinel-2 imagery","URL":"https://www.gearthblog.com/blog/archives/2017/02/exploring-chile-wildfires-landsat-sentinel-2-imagery.html","AuthorName":"Timothy Whitehead"},{"Title":"Integrate imagery from the Sentinel-2 archive into your own apps, maps, and analysis with the Sentinel-2 image service","URL":"https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/imagery/sentinel-2-more-than-meets-the-eye/","AuthorName":"Esri","AuthorURL":"https://www.esri.com/en-us/home"},{"Title":"Learning Custom Scripts to Make Useful and Beautiful Satellite Images","URL":"https://medium.com/sentinel-hub/create-useful-and-beautiful-satellite-images-with-custom-scripts-8ef0e6a474c6","AuthorName":"Monja Šebela"},{"Title":"Tutorial for using Sentinel-2 data","URL":"https://medium.com/@anttilip/seeing-earth-from-space-from-raw-satellite-data-to-beautiful-high-resolution-images-feb522adfa3f","AuthorName":"Antti Lipponen","AuthorURL":"https://medium.com/@anttilip"},{"Title":"Using Vector tiles and AWS Lambda, we can build a really simple API to get Landsat and Sentinel images","URL":"https://remotepixel.ca/blog/searchapi_20171211.html","AuthorName":"Remote Pixel","AuthorURL":"https://remotepixel.ca/"}],"Tools & Applications":[{"Title":"EO Browser","URL":"http://apps.sentinel-hub.com/eo-browser/","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"},{"Title":"EOS Land Viewer","URL":"https://eos.com/landviewer/","AuthorName":"Earth Observing System","AuthorURL":"https://eos.com/"},{"Title":"FME Landsat-8/Sentinel-2 File Selector","URL":"http://demos.fmeserver.com/landsat-sentinel-selector/","AuthorName":"Safe Software","AuthorURL":"https://www.safe.com/"},{"Title":"Interactive map with AI detected fields and crops based on Sentinel-2 imagery","URL":"https://map.onesoil.ai/","AuthorName":"OneSoil","AuthorURL":"https://onesoil.ai/"},{"Title":"Python package for working with Sentinel-2 AWS data","URL":"https://github.com/sentinel-hub/sentinelhub-py","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"},{"Title":"QGIS plugin for Sentinel-2 data","URL":"https://medium.com/sentinel-hub/control-sentinel-hub-from-within-qgis-2a83eb7f13db","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"},{"Title":"Satellite Search by Remote Pixel","URL":"https://remotepixel.ca/projects/satellitesearch.html","AuthorName":"Remote Pixel","AuthorURL":"https://remotepixel.ca/"},{"Title":"Sentinel Hub WMS/WMTS/WCS Service","URL":"http://www.sentinel-hub.com/apps/wms","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"},{"Title":"Sentinel Playground","URL":"http://apps.sentinel-hub.com/sentinel-playground/","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"},{"Title":"Sentinel-2 Cloudless Atlas","URL":"https://s2maps.eu/","AuthorName":"EOX","AuthorURL":"https://eox.at"},{"Title":"Spectator - tracking Sentinel 2, accessing the data and quick preview","URL":"https://spectator.earth/","AuthorName":"Spectator","AuthorURL":"https://spectator.earth/"},{"Title":"Sterling Geo Using Sentinel-2 on Amazon Web Services to Create NDVI","URL":"https://www.youtube.com/watch?v=3tIIUr-keps","AuthorName":"Sterling Geo"},{"Title":"Use the Sentinel Explorer app to explore, visualize, and analyze the entire Sentinel-2 archive","URL":"https://sentinel2explorer.esri.com/","AuthorName":"Esri","AuthorURL":"https://www.esri.com/en-us/home"}],"Publications":[{"Title":"Coral-spawn slicks: Reflectance spectra and detection using optical satellite data","URL":"https://www.sciencedirect.com/science/article/pii/S0034425720304284","AuthorName":"Hiroya Yamano, Asahi Sakuma, Saki Harii"},{"Title":"Using Remote Sensing Images and Cloud Services on AWS to Improve Land Use and Cover Monitoring","URL":"https://ieeexplore.ieee.org/abstract/document/9165649","AuthorName":"K. R. Ferreira, et al."}]},"RegistryEntryAdded":"2018-04-17","RegistryEntryLastModified":"2020-12-01","Slug":"sentinel-2","Sources":["awslabs-open-data-registry"]},{"Name":"Sentinel-3","Description":"This data set consists of observations from the Sentinel-3 satellite of the European Commission’s Copernicus Earth Observation Programme. Sentinel-3 is a polar orbiting satellite that completes 14 orbits of the Earth a day. It carries the Ocean and Land Colour Instrument (OLCI) for medium resolution marine and terrestrial optical measurements, the Sea and Land Surface Termperature Radiometer (SLSTR), the SAR Radar Altimeter (SRAL), the MicroWave Radiometer (MWR) and the Precise Orbit Determination (POD) instruments. The satellite was launched in 2016 and entered routine operational phase in 2017. Data is available from July 2017 onwards.","Documentation":"https://github.com/Sentinel-5P/data-on-s3/blob/master/DocsForAws/Sentinel3Description.md","Contact":"sentinel3@meeo.it","ManagedBy":"[Meteorological Enviromental Earth Observation](http://www.meeo.it/)","UpdateFrequency":"Daily","Tags":["aws-pds","earth observation","environmental","geospatial","land","oceans","satellite imagery","sustainability"],"License":"https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice","Resources":[{"Description":"Sentinel-3 Near Real Time Data (NRT) format","ARN":"arn:aws:s3:::meeo-s3/NRT/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Not Time Critical (NTC) format","ARN":"arn:aws:s3:::meeo-s3/NTC/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Short Time Critical (STC) format","ARN":"arn:aws:s3:::meeo-s3/STC/","Region":"eu-central-1","Type":"S3 Bucket"},{"Description":"Sentinel-3 Cloud Optimized GeoTIFF (COG) format","ARN":"arn:aws:s3:::meeo-s3-cog/","Region":"eu-central-1","Type":"S3 Bucket"}],"DataAtWork":{"Tutorials":[{"Title":"Accessing Sentinel-3 Data on S3 by MEEO","URL":"https://github.com/Sentinel-5P/data-on-s3/blob/master/notebooks/Sentinel3_Tutorial.ipynb","AuthorName":"Meteorological Envionmental Earth Observation","AuthorURL":"http://www.meeo.it/"}],"Tools & Applications":[{"Title":"Catalogue of data set","URL":"https://meeo-s3.s3.amazonaws.com/index.html#/?t=catalogs","AuthorName":"Meteorological Envionmental Earth Observation","AuthorURL":"https://www.meeo.it/"},{"Title":"Sentinel-3 Toolbox","URL":"https://step.esa.int/main/toolboxes/sentinel-3-toolbox/","AuthorName":"European Space Agency","AuthorURL":"https://www.esa.int/"}],"Publications":[{"Title":"Sentinel-3 Document Library","URL":"https://sentinel.esa.int/web/sentinel/user-guides","AuthorName":"European Space Agency","AuthorURL":"https://www.esa.int/"}]},"RegistryEntryAdded":"2020-07-08","RegistryEntryLastModified":"2020-07-08","Slug":"sentinel-3","Sources":["awslabs-open-data-registry"]},{"Name":"Sentinel-1 SLC dataset for South and Southeast Asia, Taiwan, Korea and Japan","Description":"The S1 Single Look Complex (SLC) dataset contains Synthetic Aperture Radar (SAR) data in the C-Band wavelength. The SAR sensors are installed on a two-satellite (Sentinel-1A and Sentinel-1B) constellation orbiting the Earth with a combined revisit time of six days, operated by the European Space Agency. The S1 SLC data are a Level-1 product that collects radar amplitude and phase information in all-weather, day or night conditions, which is ideal for studying natural hazards and emergency response, land applications, oil spill monitoring, sea-ice conditions, and associated climate change effects.\n","Documentation":"https://github.com/earthobservatory/sentinel1-opds/","Contact":"For any enquires regarding data delivery, please email ehill@ntu.edu.sg and stchin@ntu.edu.sg","ManagedBy":"[Earth Observatory of Singapore, Nanyang Technological University](https://earthobservatory.sg)","UpdateFrequency":"S1 SLC data for the region of interest will be updated regularly, as it becomes available on the Alaska Satellite Facility endpoint.","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["aws-pds","disaster response","earth observation","environmental","geospatial","satellite imagery","sustainability"],"License":"The data usage will inherit and fully comply with the free and open data policy from ESA’s [Sentinel Data Policy](https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf).\n","Resources":[{"Description":"Public access to Sentinel-1 SLC IW scenes over South and Southeast Asia, Taiwan and Japan","ARN":"arn:aws:s3:::sentinel1-slc-seasia-pds","Region":"ap-southeast-1","Type":"S3 Bucket"}],"DataAtWork":{"Tutorials":[{"Title":"Sentinel-1 Opendataset Wiki and Tutorials","URL":"https://github.com/earthobservatory/sentinel1-opds/wiki","AuthorName":"Earth Observatory of Singapore","AuthorURL":"https://earthobservatory.sg/research-group/geodesy-group-emma-hill/people"}],"Publications":[{"Title":"Rapid flood and damage mapping using synthetic aperture radar in response to Typhoon Hagibis, Japan","URL":"https://www.nature.com/articles/s41597-020-0443-5","AuthorName":"Cheryl W. J. Tay, Sang-Ho Yun, Shi Tong Chin, Alok Bhardwaj, Jungkyo Jung & Emma M. Hill"}]},"RegistryEntryAdded":"2019-04-10","RegistryEntryLastModified":"2020-04-24","Slug":"sentinel1-slc-seasia-pds","Sources":["awslabs-open-data-registry"]},{"Name":"Sentinel-2 L2A 120m Mosaic","Description":"Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As there are some parts of the world, which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).","Documentation":"Documentation is available [here](https://sentinel-s2-l2a-mosaic-120.s3.amazonaws.com/readme.html).","Contact":"https://forum.sentinel-hub.com/c/aws-sentinel","ManagedBy":"[Sinergise](https://www.sinergise.com/)","UpdateFrequency":"New data will be added annually.","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","aws-pds","earth observation","geospatial","machine learning","natural resource","satellite imagery","sustainability"],"License":"CC-BY 4.0, Credit: Contains modified Copernicus data [year] processed by Sentinel Hub\n","Resources":[{"Description":"Sentinel-2 L2A 120m mosaics data in a S3 bucket","ARN":"arn:aws:s3:::sentinel-s2-l2a-mosaic-120","Region":"eu-central-1","Type":"S3 Bucket","RequesterPays":false}],"DataAtWork":{"Tools & Applications":[{"Title":"Sentinel Hub WMS/WMTS/WCS Service and Process API","URL":"https://github.com/sentinel-hub/public-collections/blob/main/collections/sentinel-s2-l2a-mosaic-120.md","AuthorName":"Sinergise","AuthorURL":"http://www.sinergise.com/"}]},"RegistryEntryAdded":"2021-01-26","RegistryEntryLastModified":"2021-01-26","Slug":"sentinel-s2-l2a-mosaic-120","Sources":["awslabs-open-data-registry"]}];

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