"use client";
import Image from "next/image";
import Pin from "../../public/Images/TreePin.png";

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
