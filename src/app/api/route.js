import { NextResponse } from 'next/server'


export async function GET() {
    const res = await fetch(`https://airquality.googleapis.com/v1/mapTypes/UAQI_RED_GREEN/heatmapTiles/3/2/2?key=AIzaSyC5J5dQoUahFsI-C0SVOu0OlFLsrESGvpk`);
    
    return res;
    
  }

// The mapping between latitude, longitude and pixels is defined by the web
// mercator projection.
function project(lat,long) {
    let siny = Math.sin((lat * Math.PI) / 180);
  
    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
  
    return new google.maps.Point(
      TILE_SIZE * (0.5 + long / 360),
      TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
    );
  }

  