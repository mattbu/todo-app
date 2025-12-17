// import sound from "../public/mixkit-casino-win-alarm-and-coins-1990.mp3";
import sound from "../public/assets/mixkit-casino-win-alarm-and-coins-1990.mp3";
const audio: HTMLAudioElement = new Audio(sound);
console.log(audio);

import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/pages/Alarm.module.scss";

import { useSelector } from "react-redux";
import { TimeState } from "../slices/timeSlice";
import { RootState } from "../store";

import CustomSelect from "../components/CustomSelect";

const hourNumber = Array.from(Array(12).keys());
const minuteNumber = Array.from(Array(60).keys());
const AMPM = ["AM", "PM"];

export default function Alarm() {
  const [alarmStatus, setAlarmStatus] = useState(false);

  const [alarmHour, setAlarmHour] = useState<number | string>("00");
  const [alarmMin, setAlarmMin] = useState<number | string>("00");
  const [alarmAMPM, setAlarmAMPM] = useState<number | string>("AM");

  const storedTime = useSelector<RootState, TimeState>((state) => state.time);

  const calculateTime = () => {
    let time;
    if (Number(storedTime.hour) > 12) {
      time = `${String(Number(storedTime.hour) - 12).padStart(2, "0")}:${
        storedTime.minute
      } ${storedTime.ampm}`;
    } else {
      time = `${storedTime.hour}:${storedTime.minute} ${storedTime.ampm}`;
    }
    return time;
  };

  // const realTime = calculateTime();
  const alarmTime = `${alarmHour}:${alarmMin} ${alarmAMPM}`;

  const toggleAlarm = () => {
    setAlarmStatus((prev) => !prev);
  };

  useEffect(() => {
    const realTime = calculateTime();
    if (alarmTime === realTime) {
      console.log("같다");
    } else {
      console.log("다르다");
    }
  }, [alarmTime]);

  return (
    <div className={styles.container}>
      <Seo title={"알람"} />
      <h2>알람 ⏰</h2>
      <div className={styles.timeSelect}>
        <CustomSelect
          name={"hour"}
          options={hourNumber}
          setAlarm={setAlarmHour}
        />
        <CustomSelect
          name={"minute"}
          options={minuteNumber}
          setAlarm={setAlarmMin}
        />
        <CustomSelect name={"ampm"} options={AMPM} setAlarm={setAlarmAMPM} />
      </div>
      <button className={styles.alarmToggle} onClick={toggleAlarm}>
        {!alarmStatus ? "설정" : "알람 끄기"}
      </button>
    </div>
  );
}
