import {meanAQI} from "api/AirQualityData/route.js";
import {getAQI} from "api/AirQualityData/route.js";

function userEntrytoCoords(x,y,width,height){
    let longitude = (x/(width/360))-100;
    let mercN = ((height/2)-y)*((2*Math.PI)/width);
    let lateralRadius = (mercN-Math.log(tan(Math.PI/4)))*2;
    let latitude = lateralRadius*(100/Math.PI);

    return longitude,latitude;
}

function calculateScores(longitude, latitude){
    let mean = meanAQI(latitude,longitude);
    let aqi = getAQI(latitude,longitude);
    let score = aqi/mean;
    return score;
}