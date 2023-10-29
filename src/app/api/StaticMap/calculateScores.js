import { meanAQI } from "@/app/api/AirQualityData/route";
import { getAQI } from "@/app/api/AirQualityData/route";

function userEntrytoCoords(x, y) {}

function calculateScores(longitude, latitude) {
  let mean = meanAQI(latitude, longitude);
  let aqi = getAQI(latitude, longitude);
  let score = aqi / mean;
  return score;
}

export { calculateScores };
