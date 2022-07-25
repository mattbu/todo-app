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
  const realTime = `${storedTime.hour}:${storedTime.minute} ${storedTime.ampm}`;
  const alarmTime = `${alarmHour}:${alarmMin} ${alarmAMPM}`;

  const toggleAlarm = () => {
    setAlarmStatus((prev) => !prev);
  };

  useEffect(() => {
    console.log(alarmTime, "알람시간");
    console.log(realTime, "실제시간");
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
