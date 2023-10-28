"use client";

import Image from "next/image";
import WorldMap from "../../public/Images/TempMap.webp";
import { MouseEvent, use, useState, Dispatch, SetStateAction } from "react";
import PinComponent from "./PinComponent";

function handleClick(
  e: MouseEvent<HTMLImageElement>,
  setPinX: Dispatch<SetStateAction<number>>,
  setPinY: Dispatch<SetStateAction<number>>,
  setPinOn: Dispatch<SetStateAction<boolean>>
) {
  const x = e.clientX;
  const y = e.clientY;
  setPinX(x);
  setPinY(y);
  setPinOn(true);
}

export default function MapComponent() {
  const [pinX, setPinX] = useState(0);
  const [pinY, setPinY] = useState(0);
  const [pinOn, setPinOn] = useState(false);
  return (
    <>
      <Image
        src={WorldMap}
        alt="World Map"
        onClick={(e: MouseEvent<HTMLImageElement>) =>
          handleClick(e, setPinX, setPinY, setPinOn)
        }
      />
      <PinComponent {...{ pinX: pinX, pinY: pinY, pinOn: pinOn }} />
    </>
  );
}
