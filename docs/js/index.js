'use strict';

// Get datasets object
var datasets = [{"Name":"Sentinel-2 L2A 120m Mosaic","Description":"Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As there are some parts of the world, which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).","AdditionalInfo":"[Additional info](sentinel-s2-l2a-mosaic-120/README.MD)","Resolution":"120m","GeographicalCoverage":"Land surface area between 58 degrees South and 72 degrees North.","TemporalAvailability":"2019 (2020 coming in April 2021, past years later on)","UpdateFrequency":"New data will be added annually.","BandInformation":{"Table":{"Columns":[{"Name":"Name","Title":"Name"},{"Name":"Description","Title":"Description"},{"Name":"Notes","Title":"Notes"}],"Rows":[{"Name":"B02","Description":"Blue","Notes":"DN, typically from 0-10000"},{"Name":"B03","Description":"Green","Notes":"DN, typically from 0-10000"},{"Name":"B04","Description":"NIR","Notes":"DN, typically from 0-10000"},{"Name":"B11","Description":"SWIR","Notes":"DN, typically from 0-10000"},{"Name":"B12","Description":"SWIR","Notes":"DN, typically from 0-10000"}]}},"Contact":"https://forum.sentinel-hub.com","Provider":"[Sentinel Hub](https://www.sentinel-hub.com/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Tags":["agriculture","machine learning","multi spectral imagery","satellite imagery"],"License":"CC-BY 4.0, Credit: Contains modified Copernicus data [year] processed by Sentinel Hub\n","Resources":[{"EndPoint":"services.sentinel-hub.com","Type":"BYOC","CollectionId":"0074520d-bcf5-4811-8f6f-afd946e77695"},{"EndPoint":"creodias.sentinel-hub.com","Type":"byoc-eaa027cc-1d9b-40fc-a15c-9dc486caebd7","CollectionId":"eaa027cc-1d9b-40fc-a15c-9dc486caebd7"}],"DataAtWork":{"Tutorials":[{"Title":"How to Make the Perfect Time-Lapse of the Earth","URL":"https://medium.com/sentinel-hub/how-to-make-the-perfect-time-lapse-of-the-earth-351f214527f6","AuthorName":"Lubej M.","AuthorURL":"https://medium.com/@lubej.matic"}],"Tools & Applications":[{"Title":"Digital Twin Sandbox","URL":"https://apps.sentinel-hub.com/digital_twin_sandbox","AuthorName":"Sentinel Hub","AuthorURL":"http://www.sentinel-hub.com/"}],"Publications":[{"Title":"Digital Twin Sandbox Sentinel-2 collection available to everyone","URL":"https://medium.com/sentinel-hub/digital-twin-sandbox-sentinel-2-collection-available-to-everyone-20f3b5de846e","AuthorName":"Milcinski G., Lubej M."}]},"RegistryEntryAdded":"2021-03-21","RegistryEntryLastModified":"2021-03-21","Slug":"sentinel-s2-l2a-mosaic-120","rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"CORINE Land Cover","Description":"The CORINE Land Cover (CLC) inventory consists of 44 land cover and land use classes derived from a series of satellite missions since it was first established.","AdditionalInfoExternal":{"Title":"Additional info","Path":"corine-land-cover/README.MD"},"Resolution":"100m","GeographicalCoverage":"Pan-European, French overseas regions and departments (DOMs)","TemporalAvailability":"1990, 2000, 2006, 2012, 2018","UpdateFrequency":"Every 6 years.","BandInformation":"CLC (land cover class)","Contact":"[Copernicus Land Monitoring Service Contact](https://land.copernicus.eu/contact)","Provider":"[European Environment Agency](https://www.eea.europa.eu/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Tags":["CLMS","derived data","land cover","machine learning"],"License":"Full, open and free access, Copernicus license ([details](https://land.copernicus.eu/terms-of-use)).\n","Resources":[{"EndPoint":"creodias.sentinel-hub.com","Type":"byoc-cbdba844-f86d-41dc-95ad-b3f7f12535e9","CollectionId":"cbdba844-f86d-41dc-95ad-b3f7f12535e9"}],"RegistryEntryAdded":"2021-03-21","RegistryEntryLastModified":"2021-03-21","Slug":"corine-land-cover","rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Global Land Cover","Description":"Global Land Cover products at 100 m resolution are delivered annually by the [global component of the Copernicus Land Service](https://land.copernicus.eu/global/products/lc). The most recent collection 3 (version 3.0.1) of 100 m Land Cover products for the years 2015 - 2019 were generated from the PROBA-V 100 m and 300 m satellite observations and several other ancillary datasets with global coverage. These Land Cover products provide a main discrete land cover classification map according to UN-FAO Land Cover Classification System [LCCS](https://land.copernicus.eu/global/products/lc). Additional continuous fractional layers for all basic land cover classes which give the percentage of a 100 m pixel that is filled with a specific land cover class, are also included in the Land Cover products to provide more detailed information on each land cover class.","AdditionalInfoExternal":{"Title":"Additional info","Path":"global-land-cover/README.MD"},"Resolution":"100m","GeographicalCoverage":"Global coverage of land surface area with longitude from 180??W to 180??E and latitude from 78.25??N to 60??S.","TemporalAvailability":"2015 - ongoing","UpdateFrequency":"Annualy.","BandInformation":"Discrete_Classification_map, Discrete_Classification_proba, Forest_Type_layer, Bare_CoverFraction_layer, Crops_CoverFraction_layer, Grass_CoverFraction_layer, MossLichen_CoverFraction_layer, Shrub_CoverFraction_layer, Snow_CoverFraction_layer, Tree_CoverFraction_layer, BuiltUp_CoverFraction_layer, PermanentWater_CoverFraction_layer, SeasonalWater_CoverFraction_layer, DataDensityIndicator, Change_Confidence_layer","Contact":"[Copernicus Land Monitoring Service Contact](https://land.copernicus.eu/contact)","Provider":"[European Commission Joint Research Centre (JRC)](https://land.copernicus.eu/global/about)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Tags":["CLMS","derived data","land cover","machine learning"],"License":"free and open access policy as defined in the European Union???s Copernicus regulation ([details](https://land.copernicus.eu/global/about))\n","Resources":[{"EndPoint":"creodias.sentinel-hub.com","Type":"byoc-f0a97620-0e88-4c1f-a1ac-bb388fabdf2c","CollectionId":"f0a97620-0e88-4c1f-a1ac-bb388fabdf2c"}],"RegistryEntryAdded":"2021-03-20","RegistryEntryLastModified":"2021-03-21","Slug":"global-land-cover","rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"},{"Name":"Sentinel-2 L1C","Description":"The [Sentinel-2 mission](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) is\na land monitoring constellation of two satellites that provide high resolution\noptical imagery and provide continuity for the current SPOT and Landsat missions.\nThe mission provides a global coverage of the Earth's land surface every 5 days,\nmaking the data of great use in on-going studies. L1C data are available from\nJune 2015 globally. L2A data are available from September 2016 over wider Europe\nregion and globally since January 2017. \n","Documentation":"[here](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/)","Resolution":"10m","GeographicalCoverage":"Land surface area ([more info](https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/revisit-coverage))","TemporalAvailability":"2015 - ongoing","UpdateFrequency":"New Sentinel data are added regularly, usually within few hours after they are available on Copernicus Hub.","BandInformation":"Information about [bands and data](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/#available-bands-and-data)","Contact":"https://forum.sentinel-hub.com","Provider":"[Copernicus](https://copernicus.eu/)","ManagedBy":"[Sentinel Hub](https://www.sentinel-hub.com/)","Tags":["agriculture","core collection","disaster response","multi spectral imagery","natural resource","satellite imagery"],"License":"[License](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l1c/#attribution-and-use)\n","Resources":[{"EndPoint":"services.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"creodias.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"code-de.sentinel-hub.com","Type":"S2L1C","Notes":"Global since November 2015"},{"EndPoint":"shservices.mundiwebservices.com","Type":"S2L1C","Notes":"Europe coverage since July 2015. Rolling policy of 12 months for World."}],"CustomScripts":{"Title":"Collection of Sentinel-2 custom scripts","URL":"https://custom-scripts.sentinel-hub.com/#sentinel-2"},"RegistryEntryAdded":"2018-04-17","RegistryEntryLastModified":"2021-03-21","Slug":"sentinel-2-l1c","rootUrl":"https://developer1510.github.io/OpenDataRegistry/","githubRepo":"Developer1510/OpenDataRegistry","githubBranch":"master"}];

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