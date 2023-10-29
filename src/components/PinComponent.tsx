"use client";
import Image from "next/image";
import Pin from "../../public/Images/TreePin.png";

type PinProps = {
  pinX: number;
  pinY: number;
  pinOn: boolean;
};

export default function PinComponent(props: PinProps) {
  return props.pinOn ? (
    <Image
      height={20}
      width={20}
      style={{
        position: "absolute",
        top: props.pinY - 30,
        left: props.pinX - 10,
      }}
      src={Pin}
      alt="Pin"
    />
  ) : (
    <></>
  );
}
