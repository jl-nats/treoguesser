import { meanAQI } from "@/app/api/AirQualityData/route";
import { getAQI } from "@/app/api/AirQualityData/route";

function userEntrytoCoords(
  x: number,
  y: number,
  width: number,
  height: number
) {
  //Currently assumes map is zoomed fully out
  let longitude = x / (width / 360) - 100;
  let mercN = (height / 2 - y) * ((2 * Math.PI) / width);
  let lateralRadius = (mercN - Math.log(Math.tan(Math.PI / 4))) * 2;
  let latitude = lateralRadius * (100 / Math.PI);
  return [longitude, latitude];
}

async function calculateScores(longitude: number, latitude: number) {
  let mean = await meanAQI(latitude, longitude);
  let aqi = await getAQI(latitude, longitude);
  if (mean === undefined) {
    return 0;
  }
  let score = aqi / mean;
  return score;
}

export { calculateScores, userEntrytoCoords };
