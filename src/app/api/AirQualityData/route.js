import { NextResponse } from 'next/server'

var apiKey = 'AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI';
var lat = 37.419734;
var long = -122.0827784;

// Build the URL for the static map
var dataUrl = "https://airquality.googleapis.com/v1/currentConditions:lookup?key="+apiKey;

const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      location: {
        latitude: lat,
        longitude: long,
      },
    }),
};
  
fetch(dataUrl, requestData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Error:", response.status, response.statusText);
        return null;
      }
    })
    .then((data) => {
      if (data !== null) {
        console.log(data['aqi']);
        // Handle the data as needed
      }
    })
    .catch((error) => {
      console.error("Network error:", error);
    });