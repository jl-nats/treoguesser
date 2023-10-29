import { NextResponse } from "next/server";

var apiKey = "AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI";

//"https://maps.googleapis.com/maps/api/staticmap?center=${mapCenter}&zoom=${zoomLevel}&size=${mapSize}&key=${apiKey}"

export async function getMapURL(longitude: number, latitude: number) {
  var mapSize = "500x400"; //WidthxHeight
  var mapCenter = `${longitude},${latitude}`;
  var zoomLevel = "6";

  // Build the URL for the static map
  var mapUrl =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    mapCenter +
    "&zoom=" +
    zoomLevel +
    "&size=" +
    mapSize +
    "&key=" +
    apiKey;
  return mapUrl;
}
