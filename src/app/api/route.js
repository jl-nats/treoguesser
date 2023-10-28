import { NextResponse } from 'next/server'


export async function GET() {
    const res = await fetch(`https://airquality.googleapis.com/v1/mapTypes/UAQI_RED_GREEN/heatmapTiles/3/2/2?key=AIzaSyC5J5dQoUahFsI-C0SVOu0OlFLsrESGvpk`);
    
    return res;
    
  }