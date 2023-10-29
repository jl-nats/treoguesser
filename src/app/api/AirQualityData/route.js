import { NextResponse } from 'next/server'

var apiKey = 'AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI';
const lat = 37.419734;
const long = -122.0827784;

// Build the URL for the static map
var dataUrl = "https://airquality.googleapis.com/v1/currentConditions:lookup?key="+apiKey;

function getAQI(lat, long) {
    return new Promise((resolve, reject) => {
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                    console.error('Error:', response.status, response.statusText);
                    reject(`Request failed for latitude ${lat}, longitude ${long}`);
                }
            })
            .then((data) => {
                if (data !== null) {
                    resolve(data.indexes[0]['aqi']);
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
                reject(`Network error for latitude ${lat}, longitude ${long}`);
            });
    });
}
  
async function meanAQI(lat,long) {
    const numberOfRequests = 5; //Number of concurrent requests
    const requests = [];
  
    for (let i = 0; i < numberOfRequests; i++) {
      requests.push(getAQI(lat + (i / 10), long + (i / 10)));
    }
    for (let i = 0; i < numberOfRequests; i++) {
        requests.push(getAQI(lat - (i / 10), long - (i / 10)));
    }
    try {
      const responses = await Promise.all(requests);

      let sum = 0; //This calculates the means of the responses array
      for (let i=0; i<responses.length; i++){
        sum += responses[i];
      }
      let mean = sum/responses.length;
      return mean;
    } catch (error) {
      console.error(error);
    }
}

let mean = await meanAQI(lat,long);
console.log(mean);

function calculateTreesNeeded(lat,long,mean){
    return new Promise((resolve, reject) => {
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location: {
                latitude: lat,
                longitude: long,
                },
            }),
            extraComputations: [
                "DOMINANT_POLLUTANT_CONCENTRATION",
                "POLLUTANT_CONCENTRATION",
              ],
        };
  
        fetch(dataUrl, requestData)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Error:', response.status, response.statusText);
                    reject(`Request failed for latitude ${lat}, longitude ${long}`);
                }
            })
            .then((data) => {
                if (data !== null) {
                    resolve(data.indexes[0]['aqi']);
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
                reject(`Network error for latitude ${lat}, longitude ${long}`);
            });
    });
}

calculateTreesNeeded(lat,long,5);