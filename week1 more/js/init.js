// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/023d9a5a-affa-4182-934a-e669871ed182/?key=758DedtCmLJrvKpuMXNR#-0.2/0.00000/17.47768', // Your style URL
    center: [ -118.444, 34.0709], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([ -118.444, 34.0709])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I used to work in '))
    .addTo(map);




// Add a marker to the map
const marker = new maplibregl.Marker()
    .setLngLat([-118.45, 34.05])
    .addTo(map);

// Add a marker to the map
const drakemarker = new maplibregl.Marker()
    .setLngLat([-118.45, 34.0534])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
    .setHTML(' <div class = "wrapper"Hello! This is an HTML popup, meaning I can add any <tags> I want here! Just be sure to close them </tags></div>'))
    .addTo(map);