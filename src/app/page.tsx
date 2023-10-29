"use client";
import Image from "next/image";
import WorldMap from "../../public/Images/TempMap.webp";
import MapComponent from "@/components/MapComponent";
import PinComponent from "@/components/PinComponent";
import { useState, Dispatch, SetStateAction } from "react";
import ResultsComponent from "@/components/ResultsComponent";

export default function Home() {
  const [gameResult, setGameResult]: [
    [string, number][],
    Dispatch<SetStateAction<[string, number][]>>
  ] = useState([["NULL", 0]]);

  const [pinOn, setPinOn] = useState(false);
  const [loadMap, setLoadMap] = useState(true);

  return (
    <div className="relative">
      <section className="relative h-screen">
        <header className="flex relative text-8xl text-white drop-shadow-xl font-extrabold justify-center mt-10">
          Treoguessr
        </header>
        <MapComponent
          setGameResult={setGameResult}
          pinOn={pinOn}
          setPinOn={setPinOn}
          loadMap={loadMap}
        />
        <div
          className={`flex justify-center ${
            gameResult.length > 1 ? " result-slide " : " opacity-0 "
          }`}
        >
          <ResultsComponent
            data={gameResult}
            setData={setGameResult}
            setPinOn={setPinOn}
            setLoadMap={setLoadMap}
            loadMap={loadMap}
          />
        </div>
      </section>
      <section className="h-screen flex flex-wrap inset-y-10 bottom-0 bottom-100 bg-green-800 text-2xl text-white justify-center">
        <h1 className="pt-4 text-4xl">About</h1>
        <p className="pl-10 pr-10">
          Treoguessr is a new and exploratory way to show you how air pollution
          affacts our world and how trees can help us fix it. We show you a
          place in our world, you click the map to tell us where you thinks it
          needs trees the most we calculate how efficient your choice was, based
          on API data about pollution in the area.
        </p>
      </section>
    </div>
  );
}
