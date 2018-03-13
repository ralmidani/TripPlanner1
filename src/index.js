const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiaG9ndXRpZXIiLCJhIjoiY2plcTJvemk1MDBjbTMzcDlkZG9sNHd5bCJ9.qdZGyVIUxfOob3IUAfCMaw";



const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

/* const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"; */

new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);


