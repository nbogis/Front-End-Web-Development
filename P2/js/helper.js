
/*
This file contains all of the code running in the background that makes resumeBuilder.js possible.
*/

var menu = '<li id="%data%"><a>%data%</a></li>';
var bottomMenu = '<ul class="flex-menu"></ul>'

var HTMLheaderName = '<h1 id="name" class="full-name black-text">%data%</h1>';
var HTMLheaderRole = '<span class="white-text" id="role">%data%</span><hr/>';
var internationalizeButton = '<button>Internationalize</button>';

var HTMLmobile = '<li><span class="white-text">mobile</span><span class="black-text">%data%</span></li>';
var HTMLemail = '<li><span class="white-text">email</span><span class="black-text">%data%</span></li>';
var HTMLtwitter = '<li><span class="white-text">twitter</span><span class="black-text">%data%</span></li>';
var HTMLgithub = '<li><span class="white-text">github</span><a href="#" class="black-text inline">%data%</a></li>';
var HTMLlocation = '<li class="flex-item"><span class="white-text">location</span><span class="black-text">%data%</span></li>';

var HTMLbioPic = '<img class="biopic img-responsive" src="%data%" srcset="%data1% 1x,%data2% 2x" alt ="%data3%">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h1 id="skills-h3">Skills at a Glance:</h1><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li><p class="black-text">%data%</p></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = ' <a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div> ';
var HTMLworkLocation = '<span class="location-text">%data%</span>';
var HTMLworkDescStart = '<ul class="desc-Start"></ul>'
var HTMLworkDescription = '<li> %data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<p class="location-text">%data%</p>';
var HTMLprocjectCourse = '<p class="right-space date-text">course: %data%</p>';
var HTMLprojectDescription = '<p1> %data%</p1>';
var HTMLprojectImage = '<img class="img-responsive center-block" src="%data%" srcset="%data1% 1x,%data2% 2x" alt="%data3%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLprojectScl = '<div class="right-space">%data%</div>';

var HTMLschoolName = '<a href="#">%data%</a>';
var HTMLschoolDegree = '<p1 class="date-text">%data% -- %data1%</p1>';

var HTMLschoolLocation = '<span class="location-text">&#127890 %data%</span>';
var HTMLschoolMajor = '<br><em> Major: %data%</em>';
var HTMLschoolMinor = '<br><em> Minor/Focus: %data%</em>';

var HTMLonlineTitle = '<a href="#">%data1% -- %data%</a>';
var HTMLonline = '<span class="location-text"> &#128187 Online Course</span>';
var HTMLonlineDate = '<div class="date-text">%data%</div>';
var HTMLOnlineprojStart = '<ul class="projs"></ul>'
var HTMLonlineprojects = '<li> %data%</li>'

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var riyadh = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Riyadh, Saudi Arabia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Riyadh</b>, is the capital city of <b>Saudi Arabia</b> and it is '+
      'where I spent all of my childhood and early teenage. I went to Kindergarden, '+
      'elementary school, and the first 2 years of middle school.' 
      '</div>'+
      '</div>';

  var makkah = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Makkah, Saudi Arabia</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Makkah</b>, is the holy city for Muslims and it is where I was born. '+
    'I did not live in Makkah, but I have families there. We went visiting Makkah '+
    'many times to visit my families and to do Islamic Rituals.'
    '</div>'+
    '</div>';

  var madrid = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading">Madrid, Spain</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Madrid</b>, is the place where I spent most of my life after Saudi Arabia. ' +
    'In Madrid, I lived my last year of middle school, all 3 years of high-school '+
    'and 3 years of undergraduate. I attended <b>Saint Louis University</b> the first '+
    'three undergraduate then I had to finish my degree at the main campus in <b>MO</b>. '+
    '</div>'+
    '</div>';

  var DC = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading">Washington, DC</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Washington</b>, is where I obtained my Masters degree in <b>Computer Engineering</b>. '+
    'I attended the George Washington University in downtown DC. '+
    '</div>'+
    '</div>';

  var STL = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading">Saint Louis, MO</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Saint Louis</b>, is a city in <b>Missourri</b> state in USA. where I continued my undergrad after leaving Spain. '+
    'I lived in Saint Louis for 2 years. I graduated from the Saint Louis University and '+
    'got my Bachelors in Computer Engineering.'+
    '</div>'+
    '</div>';

  var HB = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading">Huntington Beach, CA</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Huntington Beach</b>, is where I currently live with my husband. I moved to HB after I finished my Masters. '+
    'I am looking for a job and enjoying taking the <b>Front-End Web Devlopment Nanodegree</b> program from <b>Udacity</b>.'+
    '</div>'+
    '</div>';

  var Irvine = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading">Irvine, CA</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Irvine</b>, is where I currently work. I am working at Edwards Lifescience as a Software Engineer. '+
    'My work within Automated Software Testing Team to develop automated test script is challenging and exciting.'+
    '</div>'+
    '</div>';

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
  // jump to Education //
  $('#edu').click(function() {
    window.location = 'index.html#education';
  });
  // jump to Projects //
  $('#pro').click(function() {
    window.location = 'index.html#projects';
  });
  // jump to Work Experience // 
  $('#work').click(function() {
    window.location = 'index.html#workExperience';
  });
  // jump to map //
  $('#mp').click(function() {
    window.location = 'index.html#mapDiv';
  });

  $('#btop').click(function() {
    window.location = 'index.html#main';
  });
  // jump to bio //
  $('#biog').click(function() {
    window.location = 'index.html';
  });

});

/*
The next few lines about clicks are for the Collecting Click Locations.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


// internationalize name; firt name's first letter is capitalized and last name is entirely capitalized //
function inName(){
  var intName = bio.name.trim().split(' ');
  intName[0] = intName[0].slice(0,1).toUpperCase()+intName[0].slice(1).toLowerCase();
  intName[1] = intName[1].toUpperCase();

  return intName.join(' ');
}

var map;    // declares a global map variable


/*
initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    //adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school=0; school < education.schools.length; school++) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job=0; job < work.jobs.length; job++) {
      locations.push(work.jobs[job].location);
    }
    console.log(locations);

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // show info window of the clicked marker on the map //
    google.maps.event.addListener(marker, 'click', function() {
      if (marker.title =='Madrid, Madrid, Spain') {
        var infoWindow = new google.maps.InfoWindow({
          content: madrid
        });
      }
      else if (marker.title =='Washington, DC, USA') {
        var infoWindow = new google.maps.InfoWindow({
          content: DC
        });
      }
      else if (marker.title =='St Louis, MO, USA') {
        var infoWindow = new google.maps.InfoWindow({
          content: STL
        });
      }  
      else if (marker.title =='Huntington Beach, CA, USA') {
        var infoWindow = new google.maps.InfoWindow({
          content: HB
        });
      }    
      else if (marker.title =='Riyadh Saudi Arabia') {
        var infoWindow = new google.maps.InfoWindow({
          content: riyadh
        });
      }    
      else if (marker.title =='Mecca Saudi Arabia') {
        var infoWindow = new google.maps.InfoWindow({
          content: makkah
        });
      }    
      else if (marker.title =='Irvine, CA, USA') {
        var infoWindow = new google.maps.InfoWindow({
          content: Irvine
        });
      }   
      infoWindow.open(map, marker);  
    });
    

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
 
    // Iterates through the array of locations, creates a search object for each location
    for (var place=0; place < locations.length; place++) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
    // add Riyadh to the map //
    var request = {
        query: 'Riyadh, Saudi Arabia'
      };
    service.textSearch(request, callback);
    // add Makkah to the map //
    var request = {
        query: 'Makkah, Saudi Arabia'
      };
    service.textSearch(request, callback);
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();
  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
