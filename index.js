var lat = 55.68344327;
var lon = 12.5717693;
var playTime = 0;

var map = L.map('map').setView([lat, lon], 13);
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

//speed to distance
var normalSpeedKmph = 500;
var turboSpeedKmph = 1000;
var distanceMeter = (normalSpeedKmph * 1000 / (60*60)).toFixed(2);
var distanceMeterTurbo = (turboSpeedKmph * 1000 / (60*60)).toFixed(2);

//constants with normal and turbo distance to calculate new lat lon coordinates
const calLon = (distanceMeter / 6378000) * (180/ Math.PI) / Math.cos(lat * Math.PI/180);
const calLonTurbo = (distanceMeterTurbo / 6378000) * (180/ Math.PI) / Math.cos(lat * Math.PI/180);
const calLat = (distanceMeter / 6378000) * (180/ Math.PI);
const calLatTurbo = (distanceMeterTurbo / 6378000) * (180/ Math.PI);

var playerMarker = L.marker([lat, lon], {icon: tomatoIcon}).addTo(map);

var controlKeys =[];
document.addEventListener('keydown', (event) => {
    controlKeys[event.key] = true;

    if (controlKeys[' '] && controlKeys['ArrowLeft']) {
        lon = lon - calLonTurbo; 
            moveMarker(lat, lon);
    }
    if (controlKeys[' '] && controlKeys['ArrowUp']) {
        lat = lat + calLatTurbo;
            moveMarker(lat, lon);
    }
    if (controlKeys[' '] && controlKeys['ArrowRight']) {
        lon = lon + calLonTurbo; 
            moveMarker(lat, lon);
    }
    if (controlKeys[' '] && controlKeys['ArrowDown']) {
        lat = lat - calLatTurbo;
            moveMarker(lat, lon);
    }
    if (controlKeys['ArrowLeft']) {
        lon = lon - calLon; 
            moveMarker(lat, lon);
    }
    if (controlKeys['ArrowUp']) {
        lat = lat + calLat;
            moveMarker(lat, lon);
    }
    if (controlKeys['ArrowRight']) {
        lon = lon + calLon; 
            moveMarker(lat, lon);
    }
    if (controlKeys['ArrowDown']) {
        lat = lat - calLat;
            moveMarker(lat, lon);
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete controlKeys[event.key];
 });

 function moveMarker(lat, lon){

    playerMarker.setLatLng([lat, lon]).update();
    map.panTo(new L.LatLng(lat,lon));
    //map.setView(new L.LatLng(lat,lon), 14);
    checkFinish();
 };

 function checkFinish(){
    var distToFinish = map.distance(playerMarker.getLatLng(), finishCircle.getLatLng());
    var isTomatoFinished = distToFinish <= finishCircle.getRadius();
    //console.log(distToFinish + ' ' + isTomatoFinished);
    if(isTomatoFinished){
        clearInterval(time);
        prompt("Tomato found its family in " + playTime + ' seconds.\nEnter your name for the scoreboard.');
    }
 };

 function countTime(){
    playTime += 1;
 };

 var time = setInterval(countTime, 1000);