import EntryComponent from "./EntryComponent";
import NextComponent from "./NextComponent";
import { Dispatch, SetStateAction } from "react";

import "@/css/Animations.css";
type ResultsProps = {
  data: [string, number][];
  setData: Dispatch<SetStateAction<[string, number][]>>;
  setPinOn: Dispatch<SetStateAction<boolean>>;
  setLoadMap: Dispatch<SetStateAction<boolean>>;
  loadMap: boolean;
};

export default function ResultsComponent({
  data,
  setPinOn,
  setData,
  setLoadMap,
  loadMap,
}: ResultsProps) {
  const maxNameLen = data.reduce((acc, [curName, curVal]) => {
    return Math.max(acc, curName.length);
  }, -1);

  const items = data.map(([nam, value]) => {
    return (
      <li key={nam}>
        <EntryComponent name={nam} value={value} maxNameLen={maxNameLen} />
      </li>
    );
  });

  return (
    <div className={"bg-slate-50 rounded-xl w-1/4 shadow-2xl"}>
      <NextComponent
        setPinOn={setPinOn}
        setData={setData}
        setLoadMap={setLoadMap}
        loadMap={loadMap}
      />
      <ul className="justify-center">{items}</ul>
    </div>
  );
}
