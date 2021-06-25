
var gpsbutton = document.getElementById('gpsbtn');
var homebutton=document.getElementById('homebtn');
var aboutusbutton=document.getElementById('aboutbtn');
var warning=document.getElementById('warning')
var logobtn=document.getElementById('logo')
var x = document.getElementById("demo");
var searchbtn=document.getElementById("searchbtn")
var search=document.getElementById("searchbox")
var data;
var lat;var lng;
var code=0

aboutusbutton.addEventListener('click',function(){
    window.location='/aboutus.html'
})
logobtn.addEventListener('click',function(){
    window.location='/navbar.html'
})
homebutton.addEventListener('click',function(){
    window.location='/navbar.html'
    
})
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
var map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [78.962883,20.593683],//coord of home page i.e INDIA 
zoom: 3 
});

gpsbutton.addEventListener('click',function getLocation() {
    
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat= position.coords.latitude 
           var lng = position.coords.longitude 
           mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
           var map = new mapboxgl.Map({
           container: 'map', 
           style: 'mapbox://styles/mapbox/streets-v11', 
           center: [lng,lat],
           zoom: 14 // 
           });
        });
    
    
   
     
    
} 
    warning.innerHTML='For Security Purposes Exact Loaction Cant Be revealed!' }
)


searchbtn.addEventListener('click',function(event){
    
    var cityname=search.value.toLowerCase()
    
   if(cityname=='delhi'){
    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=0
        
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 7 // 
               })
            })
    }})
    
   
}
else if(cityname=="mumbai"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=1
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="banglore"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=3
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
  
else if(cityname=="pune"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=6
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}

else if(cityname=="kolkata"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=2
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}

else if(cityname=="hyderabad"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=5
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="ahmedabad"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=7
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="surat"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=8
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="lucknow"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=9
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}

else if(cityname=="jaipur"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=10
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="nagpur"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=13
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="indore"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=15
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="bhopal"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=18
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="patna"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=20
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="amritsar"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=37
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="chennai"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=4
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="jammu"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=91
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="mathura"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=125
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="allahabad"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=34
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(cityname=="jabalpur"){

    fetch("in.json")
    .then(response=>response.json())
    .then(data=>{
         code=31
        console.log(data[code].city)
        lat= data[code].lat
         lng=data[code].lng
        console.log(data[code].country)
        console.log(data[code].population)
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
               
               mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzYXNzaW4yMXIiLCJhIjoiY2txYXRvYWVzMTMyczJub3dzbTg5YTU4eCJ9.XJ8uZswi7D-pJDyk97Auig';
               map = new mapboxgl.Map({
               container: 'map', 
               style: 'mapbox://styles/mapbox/streets-v11', 
               center: [lng,lat],
               zoom: 10 // 
               })
            })
    }})
   
}
else if(search.value==""){
 alert('error')
}



})


