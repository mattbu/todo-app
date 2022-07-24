import { useState } from "react";
import styles from "../styles/components/ColorSwitch.module.scss";

export default function ColorSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.switchContainer}>
      <input id="switch" type="checkbox" hidden />
      <label
        htmlFor="switch"
        className={
          toggle ? `${styles.switch} ${styles["active"]}` : `${styles.switch}`
        }
        onClick={() => setToggle((prev) => !prev)}
      >
        <span className={styles.switchBtn} />
      </label>
    </div>
  );
}
