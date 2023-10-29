import { Karla } from "next/font/google";
const karla = Karla({ subsets: ["latin"] });
import styles from "../css/Entry.module.css";

type EntryProps = {
  name: string;
  value: number;
  maxNameLen: number;
};

export default function EntryComponent({
  name,
  value,
  maxNameLen,
}: EntryProps) {
  const newName = name.padEnd(maxNameLen);
  if (name == "NULL") return <></>;

  return (
    <>
      <span className={`${karla.className} ${styles.name} font-bold text-lg`}>
        <pre>{newName}</pre>
      </span>
      <div
        className={`${styles.progress}`}
        style={{ width: `${value * 60}%` }}
      ></div>
      <span className={`${karla.className} ${styles.value} font-bold text-lg`}>
        {value * 100}%
      </span>
    </>
  );
}
