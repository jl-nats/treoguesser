import { Karla } from "next/font/google";
const karla = Karla({ subsets: ["latin"] });
import { Dispatch, SetStateAction, MouseEvent } from "react";

type NextProps = {
  setPinOn: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<[string, number][]>>;
  setLoadMap: Dispatch<SetStateAction<boolean>>;
  loadMap: boolean;
};

function handleClick(
  e: MouseEvent<HTMLButtonElement>,
  setPinOn: Dispatch<SetStateAction<boolean>>,
  setData: Dispatch<SetStateAction<[string, number][]>>,
  setLoadMap: Dispatch<SetStateAction<boolean>>,
  loadMap: boolean
) {
  setPinOn(false);
  setData([["NULL", 0]]);
  setLoadMap(!loadMap);
}

export default function NextComponent({
  setPinOn,
  setData,
  setLoadMap,
  loadMap,
}: NextProps) {
  return (
    <div className={`flex justify-center ${karla} font-bold text-lg`}>
      <button
        onClick={(e) => handleClick(e, setPinOn, setData, setLoadMap, loadMap)}
      >
        Go Next
      </button>
    </div>
  );
}
