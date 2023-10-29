import {meanAQI} from "api/AirQualityData/route.js";
import {getAQI} from "api/AirQualityData/route.js";

function userEntrytoCoords(x,y){
    
}

function calculateScores(longitude, latitude){
    let mean = meanAQI(latitude,longitude);
    let aqi = getAQI(latitude,longitude);
    let score = aqi/mean;
    return score;
}