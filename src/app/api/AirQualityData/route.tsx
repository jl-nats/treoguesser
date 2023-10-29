import { NextResponse } from "next/server";

const apiKey = "AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI";
const lat = 37.419734;
const long = -122.0827784;

// Build the URL for the static map
var dataUrl =
  "https://airquality.googleapis.com/v1/currentConditions:lookup?key=" + apiKey;

function getAQI(lat: number, long: number): Promise<number> {
  return new Promise((resolve, reject) => {
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
          reject(`Request failed for latitude ${lat}, longitude ${long}`);
        }
      })
      .then((data) => {
        if (data !== null) {
          resolve(data.indexes[0]["aqi"]);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
        reject(`Network error for latitude ${lat}, longitude ${long}`);
      });
  });
}

async function meanAQI(lat: number, long: number) {
  const numberOfRequests = 5; //Number of concurrent requests
  const requests = [];

  for (let i = 0; i < numberOfRequests; i++) {
    requests.push(getAQI(lat + i / 10, long + i / 10));
  }
  for (let i = 0; i < numberOfRequests; i++) {
    requests.push(getAQI(lat - i / 10, long - i / 10));
  }
  try {
    const responses = await Promise.all(requests);

    const sum = responses.reduce((acc: number, cur: number) => {
      return acc + cur;
    }, 0);

    let mean = sum / responses.length;
    return mean;
  } catch (error) {
    console.error(error);
  }
}

export { getAQI, meanAQI };
/*
function calculateTreesNeeded(mean){
    
}*/
