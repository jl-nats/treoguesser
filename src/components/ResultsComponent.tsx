import EntryComponent from "./EntryComponent";
import "@/css/Animations.css";
type ResultsProps = {
  data: [string, number][];
};

export default function ResultsComponent({ data }: ResultsProps) {
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
    <div className={"bg-slate-50 rounded-xl w-2/6 shadow-2xl"}>
      <ul className="justify-center">{items}</ul>
    </div>
  );
}
