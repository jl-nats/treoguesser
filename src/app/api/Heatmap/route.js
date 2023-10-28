import { NextResponse } from 'next/server'


export async function GET() {
    let point = {lat:53.4808, lng:2.2426};
    let coord = project(point, 8);
    const res = await fetch(`https://airquality.googleapis.com/v1/mapTypes/UAQI_RED_GREEN/heatmapTiles/3/2/2?key=AIzaSyC5J5dQoUahFsI-C0SVOu0OlFLsrESGvpk`);
    
    return res;
    
  }

// The mapping between latitude, longitude and pixels is defined by the web
// mercator projection.
function project(point,scale) {
    
    let siny = Math.sin((point.lat * Math.PI) / 180);
  
    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
    let coord = {lat:(scale * (0.5 + point.lng / 360)), lng: (scale * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)))};
    return coord;
  }

  