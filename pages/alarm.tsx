import { useState } from "react";
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

  const storedTime = useSelector<RootState, TimeState>((state) => state.time);
  console.log(storedTime);

  const toggleAlarm = () => {
    setAlarmStatus((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <Seo title={"알람"} />
      <h2>알람 ⏰</h2>
      <div className={styles.timeSelect}>
        <CustomSelect options={hourNumber} placeholder="시" />
        <CustomSelect options={minuteNumber} placeholder="분" />
        <CustomSelect options={AMPM} placeholder="" />
      </div>
      <button className={styles.alarmToggle} onClick={toggleAlarm}>
        {!alarmStatus ? "설정" : "알람 끄기"}
      </button>
    </div>
  );
}
