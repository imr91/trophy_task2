var lat = "55.68344327";
var lon = "12.5717693";

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

L.marker([lat, lon], {icon: tomatoIcon}).addTo(map);