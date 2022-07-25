import { useEffect, useState } from "react";
import styles from "../styles/components/Clock.module.scss";
import { setTime } from "../slices/timeSlice";
import { useDispatch } from "react-redux";

export default function Clock() {
  const dispatch = useDispatch();
  const [HH, setHH] = useState(String(new Date().getHours()).padStart(2, "0"));
  const [MM, setMM] = useState(
    String(new Date().getMinutes()).padStart(2, "0")
  );
  const [SS, setSS] = useState(
    String(new Date().getSeconds()).padStart(2, "0")
  );
  const [AMPM, setAMPM] = useState("AM");

  const updateTime = () => {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    setHH(hours);
    setMM(minutes);
    setSS(seconds);

    if (Number(HH) > 12) {
      setAMPM("PM");
    } else {
      setAMPM("AM");
    }

    dispatch(
      setTime({
        hour: HH,
        minute: MM,
        ampm: AMPM,
      })
    );
  };

  useEffect(() => {
    let timer = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1 className={styles.clock}>{`${HH}:${MM}:${SS}`}</h1>
    </div>
  );
}
