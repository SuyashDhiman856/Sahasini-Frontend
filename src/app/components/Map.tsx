// // Initialize the map without setting a view initially
// const map = L.map('map');

// // Add a tile layer to the map (OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Function to handle the success case of geolocation
// function onSuccess(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     // Set the map view to the user's location
//     map.setView([latitude, longitude], 13);

//     // Add a marker at the user's location
//     L.marker([latitude, longitude]).addTo(map)
//         .bindPopup('You are here')
//         .openPopup();
// }

// // Function to handle errors
// function onError(error) {
//     console.error('Error getting location:', error);
//     // You might want to show an error message to the user here
// }

// // Request the user's location
// navigator.geolocation.getCurrentPosition(onSuccess, onError);


export default function Map() {
    return (
        <>
            <div id="map"></div>
            <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        </>
    )
}