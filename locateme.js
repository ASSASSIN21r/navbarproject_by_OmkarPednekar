var gpsbutton = document.getElementById('gpsbtn');
var homebutton=document.getElementById('homebtn');
var aboutusbutton=document.getElementById('aboutbtn');
var warning=document.getElementById('warning')
var logobtn=document.getElementById('logo')
var x = document.getElementById("demo");



homebutton.addEventListener('click',function(){
    window.location='/navbar.html'
})
aboutusbutton.addEventListener('click',function(){
    window.location='/aboutus.html'
})
logobtn.addEventListener('click',function(){
    window.location='/navbar.html'
})
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [78.962883,20.593683],
zoom: 3 // starting zoom
});

gpsbutton.addEventListener('click',function getLocation() {
    
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat= position.coords.latitude 
           var lng = position.coords.longitude 
           mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
           var map = new mapboxgl.Map({
           container: 'map', // container ID
           style: 'mapbox://styles/mapbox/streets-v11', // style URL
           center: [lng,lat],
           zoom: 14 // starting zoom
           });
        });
    
    
   
     
    
} 
    warning.innerHTML='For Security Purposes Exact Loaction Cant Be revealed!' }
)


