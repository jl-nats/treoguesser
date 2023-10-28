import { NextResponse } from 'next/server'

var apiKey = 'AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI';
var lat = 37.419734;
var long = -122.0827784;

// Build the URL for the static map
var dataUrl = "https://airquality.googleapis.com/v1/currentConditions:lookup?key="+apiKey;

function getAQI(lat,long) {
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
            console.log(data.indexes[0]['aqi']);
            return data.indexes[0]['aqi'];
            // Handle the data as needed
        }
        })
        .catch((error) => {
        console.error("Network error:", error);
        });
}

function meanAQI(lat,long) {
    let sum = 0;
    let curAQI = 0;
    for (let i=-5;i=5;i++){
        for (let j=-5;j=5;j++){
            curAQI = getAQI(37.419734+(i/10), -122.0827784+(j/10));
            console.log(curAQI);
            sum += curAQI;
        }
    }
    var mean = sum/20;
    return mean;
}

console.log(meanAQI(lat,long));