// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // Your style URL
    center: [-122.32270410130093, 37.56414483125629], // Starting position [lng, lat]
    zoom: 13 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-122.3296, 37.5508])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('The high school that I currently attend '))
    .addTo(map);

    new maplibregl.Marker()
    .setLngLat([-122.32311266123108, 37.56608627483537])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('My favorite place to eat in my local downtown area'))
    .addTo(map);
