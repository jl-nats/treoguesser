import Image from "next/image";

import { requestHeatmap } from "./Heatmap.js";

export default function Home() {
  let point = {lat:51, lng:0};
  var scale = 12;
  
  let b64Response = requestHeatmap(point,scale);

  var outputImg = document.createElement('img');
  outputImg.src = 'data:image/png;base64,'+b64Response;
  
// append it to your page
  document.body.appendChild(outputImg);
}
