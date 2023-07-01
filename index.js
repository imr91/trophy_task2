var lat = 55.68344327;
var lon = 12.5717693;

var map = L.map('map').setView([lat, lon], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var finishCircle = L.circle([55.232816, 11.767130], {
    color: 'red',
    fillColor: '#f04',
    fillOpacity: 0.35,
    radius: 1000
}).addTo(map);

var tomatoIcon = L.icon({
    iconUrl: 'tomato-svgrepo-com.svg',
    iconSize: [30,30],
    iconAnchor: [15,15]
})

var speedKm = 500;
var distanceMeter = (speedKm * 1000 / (60*60)).toFixed(2);
//console.log(distanceMeter);

var playerMarker = L.marker([lat, lon], {icon: tomatoIcon}).addTo(map);

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37: //left
            lon = lon - (distanceMeter / 6378000) * (180/ Math.PI) / Math.cos(lat * Math.PI/180); 
            console.log(lon);
            moveMarker(lat, lon);
       break;
       case 38: //up
            lat = lat + (distanceMeter / 6378000) * (180/ Math.PI);
            moveMarker(lat, lon);
       break; 
       case 39: //right
            lon = lon + (distanceMeter / 6378000) * (180/ Math.PI) / Math.cos(lat * Math.PI/180); 
            console.log(lon);
            moveMarker(lat, lon);
       break;
       case 40: //down
            lat = lat - (distanceMeter / 6378000) * (180/ Math.PI);
            moveMarker(lat, lon);
       break;
    }
 };


 function moveMarker(lat, lon){

    playerMarker.setLatLng([lat, lon]).update();
    map.panTo(new L.LatLng(lat,lon));
    //map.setView(new L.LatLng(lat,lon), 14);
 };