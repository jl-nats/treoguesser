import Image from "next/image";
import WorldMap from "../../public/Images/TempMap.webp";
import MapComponent from "@/components/MapComponent";
import PinComponent from "@/components/PinComponent";
export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-screen">
        <header className="flex relative text-8xl text-white drop-shadow-xl font-extrabold justify-center mt-10">
          Treoguessr
        </header>
        <MapComponent />
      </section>
      <section className="h-screen flex flex-wrap inset-y-10 bottom-0 bottom-100 bg-green-800 text-2xl text-white justify-center">
        <h1>About</h1>
        <br />
        <p className="pl-10 pr-10">
          Lorem ipsum dolor, sit amet con sectetur adipisicing elit. Recusandae
          aliquam ab sed ea ut, impedit aliquid! Voluptas illum tempore debitis.
          Itaque officiis eveniet eius explicabo culpa esse hic voluptates
          perferendis?
        </p>
      </section>
    </div>
  );
}
