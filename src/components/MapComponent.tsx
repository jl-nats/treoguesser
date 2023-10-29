"use client";

import Image from "next/image";
import WorldMap1 from "../../public/Images/TempMap.webp";
import WorldMap2 from "../../public/Images/TempMap2.jpg";
import React, {
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import PinComponent from "./PinComponent";
import "../css/Animations.css";
import { getMapURL } from "../app/api/StaticMap/route";
import { calculateScores } from "../app/api/StaticMap/calculateScores";

function handleClick(
  e: MouseEvent<HTMLImageElement>,
  pinOn: boolean,
  setPinX: Dispatch<SetStateAction<number>>,
  setPinY: Dispatch<SetStateAction<number>>,
  setPinOn: Dispatch<SetStateAction<boolean>>
) {
  const x = e.clientX;
  const y = e.clientY;
  if (!pinOn) {
    setPinX(x);
    setPinY(y);
    setPinOn(true);
  }
}

type MapProps = {
  setGameResult: Dispatch<SetStateAction<[string, number][]>>;
  pinOn: boolean;
  setPinOn: Dispatch<SetStateAction<boolean>>;
  loadMap: boolean;
};

export default function MapComponent({
  setGameResult,
  pinOn,
  setPinOn,
  loadMap,
}: MapProps) {
  const [pinX, setPinX] = useState(0);
  const [pinY, setPinY] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (pinX == 0) {
      setPinX(0);
      return;
    }
    const score = calculateScores(pinX, pinY);
    setGameResult([
      ["NULL", 0],
      ["Score", 0.3],
    ]);
  }, [pinX, pinY, setGameResult]);

  useEffect(() => {
    const fetchImg = async () => {
      const lat: number = Math.floor(Math.random() * 340) - 170;
      const long: number = Math.floor(Math.random() * 160) - 80;
      const url = await getMapURL(lat, long);
      setImg(url);
    };

    fetchImg();
  }, [loadMap]);

  return (
    <div className="flex justify-center mt-12">
      <Image
        src={img}
        alt="World Map"
        width={600}
        height={600}
        className={
          "absolute origin-bottom-left border-black border-4 border-solid"
        }
        onClick={(e: MouseEvent<HTMLImageElement>) =>
          handleClick(e, pinOn, setPinX, setPinY, setPinOn)
        }
      />
      <PinComponent {...{ pinX: pinX, pinY: pinY, pinOn: pinOn }} />
    </div>
  );
}
