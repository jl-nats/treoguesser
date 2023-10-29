import { NextResponse } from "next/server";

var apiKey = "AIzaSyBU8OhxRDRtnaRFo6Dv-hKhFMi1Dezg8HI";
var mapSize = "500x400"; //WidthxHeight
var mapCenter = "51,0";
var zoomLevel = "12";

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
//"https://maps.googleapis.com/maps/api/staticmap?center=${mapCenter}&zoom=${zoomLevel}&size=${mapSize}&key=${apiKey}"

export async function getMapURL() {
  return mapUrl;
}
