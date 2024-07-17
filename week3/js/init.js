// Initialize the map
const center = [-122.322, 37.564]
const zoom = 13

let myObject = {"zoom": 13, "center" : [-122.322, 37.564]}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: myObject.center, // Starting position [lng, lat]
    zoom: myObject.zoom, // Starting zoom level
});



    function addMarker(lng,lat,title,message){
        let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
        new maplibregl.Marker()
            .setLngLat([lng, lat])
            .setPopup(new maplibregl.Popup().setHTML(popup_message))
            .addTo(map)
            createButtons(lat,lng,title);
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


function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
    
function changeBackground() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    let portfolio = document.getElementById("portfolio")
    console.log(portfolio)
    portfolio.style.backgroundColor = rndCol
    // document.getElementsByClassName("portfolio").style.backgroundColor = rndCol;
}

document.getElementById("myBtn").addEventListener("click", changeBackground);

function processData(data){
    // console.log(data)
    data.features.forEach(result => {
        console.log(result)
        addMarker(result.geometry.coordinates[0], result.geometry.coordinates[1], result.properties.title, result.properties.message)
    })
}

map.on("load", function(){
    console.log("Hey look the map loaded!")
    fetch("map.geojson") 
    .then(results =>
        {
        return results.json()
    })
    .then(results =>{
        processData(results)
    });

});





const sampeDataArray = [{'lat':37,'lng':-122,'title':'Wow!','message':'This is the first marker in our array!'},{'lat':32,'lng':-118,'title':'Nice!','message':'Another marker in our array?!!'},{'lat':39,'lng':-119,'title':'OMG!','message':'This is marker 3!'},{'lat':36,'lng':-120,'title':'Cool!','message':'The marker is too cool 4 school!'}]
sampeDataArray.forEach(data => addMarker(data.lng, data.lat, data.title, data.message))

