function initialize() {
  var styles = [
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      { "visibility": "on" },
                      { "color": "#97ffff" }
                    ]
                  },{
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#ffffff" }
                    ]
                  },{
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#d1ffd1" }
                    ]
                  },{
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                      { "hue": '#fbc100' },  
                      { "lightness": 15 } 
                    ]
                  },{
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      { "color": '#fbc100' }
                    ]
                  },{
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.fill",
                    "stylers": [
                      { "hue": '#fbc100' },  
                      { "lightness": -20 } 
                    ]
                  },{
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                      { "color": "#ffffff" }
                    ]
                  },{
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      { "color": "#fbc100" }
                    ]
                  },{
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      { "color": "#555555" }
                    ]
                  },{
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      { "color": "#555555" }
                    ]
                  },{
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                      { "color": "#ffffff" }
                    ]
                  },{
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      { "color": "#fbc100" }
                    ]
                  },{
                    "elementType": "labels.text.fill",
                    "stylers": [
                      { "color": "#555555" }
                    ]
                  }
                ];
  var mapOptions = {
    mapTypeControlOptions: {mapTypeIds: ['Styled']},
    center: new google.maps.LatLng(40.42, -3.70),
    zoom: 10,
    mapTypeId: 'Styled',
    disableDefaultUI: true
  };
  var mapCanvas = document.getElementById("map-canvas");
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var styledMapType = new google.maps.StyledMapType(styles,{ name: 'Styled' });  
  map.mapTypes.set('Styled', styledMapType);  
}


function loadScript() {
  console.log("loadScript executed");
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAfHhHNN_KVG4BWnR-WfTlZHp1_V6RDco0&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

//window.onload = loadScript;