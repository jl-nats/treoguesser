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
  use,
} from "react";
import PinComponent from "./PinComponent";
import "../css/Animations.css";
import { getMapURL } from "../app/api/StaticMap/route.js";
import { calculateScores, userEntrytoCoords } from "../app/calculateScores";

function handleClick(
  e: MouseEvent<HTMLImageElement>,
  pinOn: boolean,
  setPinX: Dispatch<SetStateAction<number>>,
  setPinY: Dispatch<SetStateAction<number>>,
  setPinOn: Dispatch<SetStateAction<boolean>>,
  setRectX: Dispatch<SetStateAction<number>>,
  setRectY: Dispatch<SetStateAction<number>>
) {
  setRectX(e.currentTarget.getBoundingClientRect().left);
  setRectY(e.currentTarget.getBoundingClientRect().top);
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
};

export default function MapComponent({ setGameResult }: MapProps) {
  const [pinX, setPinX] = useState(0);
  const [pinY, setPinY] = useState(0);
  const [pinOn, setPinOn] = useState(false);
  const [img, setImg] = useState("");
  const [rectX, setRectX] = useState(0);
  const [rectY, setRectY] = useState(0);

  useEffect(() => {
    if (pinX == 0) {
      setPinX(0);
      return;
    }

    const [lat, long] = userEntrytoCoords(pinX - rectX, pinY - rectY, 600, 600);
    const score = calculateScores(long, lat);
    setGameResult([
      ["NULL", 0],
      ["Score", score],
    ]);
  }, [pinX, pinY, rectX, rectY]);

  useEffect(() => {
    const lat: number = Math.floor(Math.random() * 340) - 170;
    const long: number = Math.floor(Math.random() * 160) - 80;
    const fetchImg = async () => {
      const url = await getMapURL(lat, long);
      setImg(url);
    };

    fetchImg();
  }, []);

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
          handleClick(e, pinOn, setPinX, setPinY, setPinOn, setRectX, setRectY)
        }
      />
      <PinComponent {...{ pinX: pinX, pinY: pinY, pinOn: pinOn }} />
    </div>
  );
}
