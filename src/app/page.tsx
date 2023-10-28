import Image from "next/image";
import WorldMap from "../../public/Images/TempMap.webp";
import MapComponent from "@/components/MapComponent";
import PinComponent from "@/components/PinComponent";

export default function Home() {
  return (
    <div>
      <PinComponent {...{ pinX: 400, pinY: 400, pinOn: true }} />
    </div>
  );
}
