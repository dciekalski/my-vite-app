import Leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';
const WBS = [52.457131, 13.54007];

const map = Leaflet.map('map').setView(WBS, 13);
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const markerIcon = Leaflet.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [10, 20],
});
// Leaflet.marker(WBS, { icon: markerIcon })
//     .addTo(map);



const myLocations = [
    {
        name: "Berliner Tor",
        location: [52.51776262541976, 13.377906222593007],
        description: "Capital Monument",
    },

    {
        name: "Berghain",
        location: [52.511152114813385, 13.44318958949098],
        description: "Gates to hell or heaven",
    },

    {
        name: "Reichstaggebäude",
        location: [52.51865169072065, 13.376285736290155],
        description: "Parlament Building",
    },

    {
        name: "WBS Coding School",
        location: [52.457131, 13.54007],
        description: "Hard Coding School",
    }];


myLocations.forEach((spot) => {
  Leaflet.marker(spot.location, { icon: markerIcon })
    .bindPopup(spot.description)
    .addTo(map);
});

const bounds = Leaflet.latLngBounds(
  myLocations.map((spot) => spot.location),
);
map.fitBounds(bounds);