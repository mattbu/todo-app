import { useEffect, useState } from "react";
import styles from "../styles/components/Clock.module.scss";

export default function Clock() {
  const [HH, setHH] = useState("");
  const [MM, setMM] = useState("");
  const [SS, setSS] = useState("");

  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      const hours = String(today.getHours()).padStart(2, "0");
      const minutes = String(today.getMinutes()).padStart(2, "0");
      const seconds = String(today.getSeconds()).padStart(2, "0");
      setHH(hours);
      setMM(minutes);
      setSS(seconds);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className={styles.clock}>{`${HH}:${MM}:${SS}`}</h1>
    </div>
  );
};
