function initialize() {
  var styles = [
                  {  
                    featureType: 'road',  
                    elementType: 'geometry',  
                    stylers: [ { hue: '#FBC100' }]  
                  },
                  {  
                    featureType: 'road.local',  
                    elementType: 'all',  
                    stylers: [  { hue: '#FBC100' },  { saturation: 100 },  { lightness: -12 } ]  
                  },
                  {
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [ { hue: '#ffffff' }, { gamma: 1.4 }, { saturation: 82 }, { lightness: 96 }]
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                      { hue: "#555555" }
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