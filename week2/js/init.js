// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [-122.32270410130093, 37.56414483125629], // Starting position [lng, lat]
    zoom: 13 // Starting zoom level
});



    function addMarker(lng,lat,title,message){
        let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
        new maplibregl.Marker()
            .setLngLat([lng, lat])
            .setPopup(new maplibregl.Popup().setHTML(popup_message))
            .addTo(map)
            createButtons(lat,lng,title);
    }
    
    addMarker(-122.3296, 37.5508, "Aragon High School", "The high school that I currently attend")
    addMarker(-122.32311266123108, 37.56608627483537, "BonChan", "My favorite place to eat in my local downtown area")
    addMarker(-122.27494546131878,37.54923399508327, "Tennis", "Where I usually play tennis")
    
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





    

