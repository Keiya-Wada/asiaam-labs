// declare variables
let mapOptions = {'centerLngLat': [-118.444,34.0709],'startingZoomLevel':5}

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1',
    center: [-122.32270410130093, 37.56414483125629], // Starting position [lng, lat]
    zoom: 13 // Starting zoom level
});

function addMarker(feature){
    let popup_message;
    let lng = feature['lng'];
    let lat = feature['lat'];
    let title = feature['share the experience']
    let message = feature['Have you ever played tennis?']
    if(message == "Yes"){
        popup_message = '<h2>Tennis person!</h2>'
    }
    else{
        popup_message = "<h2>Not a tennis person</h2>"
    }
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message

}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVZ6cWX8iuXX14aqpxGwYAIscnXtY2sZGS0vn03F4_-8-0j3UyrNBXYP3wlMhGOoUf4NbeUKQ9NXKq/pub?output=csv"

map.on('load', function() {
    // Use PapaParse to fetch and parse the CSV data from a Google Forms spreadsheet URL
    Papa.parse(dataUrl, {
        download: true, // Tells PapaParse to fetch the CSV data from the URL
        header: true, // Assumes the first row of your CSV are column headers
        complete: (results) => {
            console.log(results)
            processData(results.data);
        }
    });
});

function processData(results){
    //console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        // console.log(feature) // for debugging: are we seeing each feature correctly?
        // assumes your geojson has a "title" and "message" attribute
        // let coordinates = feature.geometry.coordinates;
        let longitude = feature.lng;
        let latitude = feature.lat;
        let title = feature["share the experience"]
        let message = feature["Have you ever played tennis?"]
        // let title = feature.properties.title;
        // let message = feature.properties.message;
        addMarker(feature);
        console.log(feature)
    });
};