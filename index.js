import './functions.js'; // Load a separate file for functions
import './formValidation.js';

function initMap() {
    // Replace with your desired latitude and longitude
    const myLatLng = {41.2401° N, 81.4407° W };
  
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
  
    // (Optional) Add a marker
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
    });
  }
  
  // Load the Google Maps API with your API key
  window.onload = function () {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    document.head.appendChild(script);
  };