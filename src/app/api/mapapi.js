/*<style>
    #map{
      height:400px;
      width:100%;
    }
  </style>
*/
/*
<body>
  <h1>Google Maps Test</h1>
  <div id="map"></div>
*/
/*
    MAKE A JS FILE WITH JUST THE SCRIPT, THEN NAME A DIV IN MAIN FRONTEND SCRIPT WITH id='map' and style with height and width
*/

var apiKey = "AIzaSyC5J5dQoUahFsI-C0SVOu0OlFLsrESGvpk";
var script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";
document.head.appendChild(script);

function initMap(){
    var options = {
    zoom:8,
    center: {lat:53.4808, lng:2.2426}
    }

    var map = new google.maps.Map(document.getElementById('map'),options);
}
