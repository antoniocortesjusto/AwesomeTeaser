function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.42, -3.70),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}
function loadScript() {
  console.log("loadScript executed");
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAfHhHNN_KVG4BWnR-WfTlZHp1_V6RDco0&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;


function showSearch(){
  
}