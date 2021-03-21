'use strict';

// Get datasets object
var datasets = [{"Name":"Sentinel-2 L2A 120m Mosaic","Description":"Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As there are some parts of the world, which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).","AdditionalInfo":"[Additional info](sentinel-s2-l2a-mosaic-120/README.MD)","Resolution":"120m","GeographicalCoverage":"Land surface area between 58 degrees South and 72 degrees North.","TemporalAvailability":"2019 (2020 coming in April 2021, past years later on)","UpdateFrequency":"New data will be added annually.","BandInformation":"B02 (blue), B03 (green), B04 (red), B08 (NIR), B11 (SWIR), B12 (SWIR). The values are corresponding to digital numbers (DN), typically going from 0-10000.","Contact":"https://forum.sentinel-hub.com","Provider":"[Sentinel Hub](https://www.sentinel-hub.com/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","machine learning","multi spectral imagery","satellite imagery"],"License":"CC-BY 4.0, Credit: Contains modified Copernicus data [year] processed by Sentinel Hub\n","Resources":[{"EndPoint":"services.sentinel-hub.com","Type":"BYOC","CollectionId":"0074520d-bcf5-4811-8f6f-afd946e77695"},{"EndPoint":"creodias.sentinel-hub.com","Type":"BYOC","CollectionId":"eaa027cc-1d9b-40fc-a15c-9dc486caebd7"}],"DataAtWork":{"Tutorials":[{"Title":"How to Make the Perfect Time-Lapse of the Earth","URL":"https://medium.com/sentinel-hub/how-to-make-the-perfect-time-lapse-of-the-earth-351f214527f6","AuthorName":"Lubej M.","AuthorURL":"https://medium.com/@lubej.matic"}],"Tools & Applications":[{"Title":"Digital Twin Sandbox","URL":"https://apps.sentinel-hub.com/digital_twin_sandbox","AuthorName":"Sentinel Hub","AuthorURL":"http://www.sentinel-hub.com/"}],"Publications":[{"Title":"Digital Twin Sandbox Sentinel-2 collection available to everyone","URL":"https://medium.com/sentinel-hub/digital-twin-sandbox-sentinel-2-collection-available-to-everyone-20f3b5de846e","AuthorName":"Milcinski G., Lubej M."}]},"RegistryEntryAdded":"2021-03-21","RegistryEntryLastModified":"2021-03-21","Slug":"sentinel-s2-l2a-mosaic-120","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"CORINE Land Cover","Description":"The CORINE Land Cover (CLC) inventory consists of 44 land cover and land use classes derived from a series of satellite missions since it was first established.","AdditionalInfo":"[Additional info](corine-land-cover/README.MD)","Resolution":"100m","GeographicalCoverage":"Pan-European, French overseas regions and departments (DOMs)","TemporalAvailability":"1990, 2000, 2006, 2012, 2018","UpdateFrequency":"Every 6 years.","BandInformation":"CLC (land cover class)","Contact":"[Copernicus Land Monitoring Service Contact](https://land.copernicus.eu/contact)","Provider":"[European Environment Agency](https://www.eea.europa.eu/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Collabs":{"ASDI":{"Tags":["derived data"]}},"Tags":["CLMS","land cover","machine learning"],"License":"Full, open and free access, Copernicus license ([details](https://land.copernicus.eu/terms-of-use)).\n","Resources":[{"EndPoint":"creodias.sentinel-hub.com","Type":"BYOC","CollectionId":"cbdba844-f86d-41dc-95ad-b3f7f12535e9"}],"RegistryEntryAdded":"2021-03-21","RegistryEntryLastModified":"2021-03-21","Slug":"corine-land-cover","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Sentinel-2 L1C","Description":"The [Sentinel-2 mission](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is\na land monitoring constellation of two satellites that provide high resolution\noptical imagery and provide continuity for the current SPOT and Landsat missions.\nThe mission provides a global coverage of the Earth's land surface every 5 days,\nmaking the data of great use in on-going studies. L1C data are available from\nJune 2015 globally. L2A data are available from September 2016 over wider Europe\nregion and globally since January 2017. \n","Documentation":"[here](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/)","Resolution":"10m","GeographicalCoverage":"Land surface area ([more info](https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/revisit-coverage))","TemporalAvailability":"2015 - ongoing","UpdateFrequency":"New Sentinel data are added regularly, usually within few hours after they are available on Copernicus Hub.","BandInformation":"Information about [bands and data](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/#available-bands-and-data)","Contact":"https://forum.sentinel-hub.com","Provider":"[Copernicus](https://copernicus.eu/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Collabs":{"ASDI":{"Tags":["satellite imagery"]}},"Tags":["agriculture","core collection","disaster response","multi spectral imagery","natural resource","satellite imagery"],"License":"[License](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/#attribution-and-use)\n","Resources":[{"EndPoint":"services.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"creodias.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"code-de.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"shservices.mundiwebservices.com","Type":"S2L1C","Notes":"Europe coverage since July 2015. Rolling policy of 12 months for World."}],"Custom scripts":[{"Title":"Collection of Sentinel-2 custom scripts","URL":"https://custom-scripts.sentinel-hub.com/#sentinel-2"}],"RegistryEntryAdded":"2018-04-17","RegistryEntryLastModified":"2021-03-21","Slug":"sentinel-2-l1c","Sources":["awslabs-open-data-registry"],"rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"}];

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