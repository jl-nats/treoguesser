"use client";
import Image from "next/image";
import Pin from "../../public/Images/TempPin.png";

type pinProps = {
  pinX: number;
  pinY: number;
  pinOn: boolean;
};

export default function PinComponent(props: pinProps) {
  return props.pinOn ? (
    <Image
      height={20}
      width={20}
      className={`absolute right-${props.pinX} top-${props.pinY}`}
      src={Pin}
      alt="Pin"
    />
  ) : (
    <></>
  );
}
