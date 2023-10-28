import Image from "next/image";
import { requestHeatmap } from "./Heatmap.js";

export default async function Home() {
  let point = {lat:51, lng:0};
  var scale = 12;
  
  let b64Response = await requestHeatmap(point,scale);
  var outputImg = b64Response;
  
  //var doc = document.implementation.createHTMLDocument('');
  var htmlString =(<div className="relative">
  <div className="relative h-screen">
    <header className="flex relative text-8xl text-white drop-shadow-xl font-extrabold justify-center mt-10">
      Treoguessr
    </header>
  </div>
  <Image
      src={outputImg}
      width={500}
      height={500}
      alt="test Image"
    />
  <div className="inset-y-10 bottom-0 bottom-100 rounded bg-slate-600 text-2xl text-white justify-center">
    <h1 className="justify-center">About</h1>
    <br />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
      aliquam ab sed ea ut, impedit aliquid! Voluptas illum tempore debitis.
      Itaque officiis eveniet eius explicabo culpa esse hic voluptates
      perferendis?
    </p>
  </div>
</div>);
  return (htmlString);
}
