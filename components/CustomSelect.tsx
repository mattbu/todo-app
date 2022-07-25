import {
  Dispatch,
  Ref,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../styles/components/CustomSelect.module.scss";
import { ChevronDown } from "react-feather";

interface Props {
  options: number[] | string[];
  setAlarm?: Dispatch<SetStateAction<number | string>>;
  name?: string;
}

export default function CustomSelect({ options, setAlarm, name }: Props) {
  const dropdown = useRef<HTMLUListElement>(null);

  const [currentSelect, setCurrentSelect] = useState<number | string>("선택");

  const checkPropOptions = () => {
    if (Array.isArray(options)) {
      let isStringArr = false;
      options.forEach((item) => {
        if (typeof item === "string") {
          isStringArr = true;
        }
      });
      if (isStringArr && options.length > 0) {
        setCurrentSelect("AM");
      } else {
        if (name === "hour") {
          setCurrentSelect("시간 선택");
        } else {
          setCurrentSelect("분 선택");
        }
      }
    }
  };

  const toggleDropdown = () => {
    dropdown.current?.classList.toggle(styles["show"]);
  };

  const blurDropdown = () => {
    dropdown.current?.classList.remove(styles["show"]);
  };

  const selectValue = (val: number | string) => {
    if (typeof val === "number") {
      if (name === "hour") {
        setCurrentSelect(val + 1);
        if (setAlarm) {
          setAlarm(String(val + 1).padStart(2, "0"));
        }
      } else if (name === "minute") {
        setCurrentSelect(val);
        if (setAlarm) {
          setAlarm(String(val).padStart(2, "0"));
        }
      }
    } else {
      setCurrentSelect(val);
      if (setAlarm) {
        setAlarm(val);
      }
    }
  };
  useEffect(() => {
    checkPropOptions();
  }, []);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={toggleDropdown}
        onBlur={blurDropdown}
      >
        <span>{currentSelect}</span>
        <ChevronDown size={"16px"} />
      </button>

      <ul ref={dropdown} className={styles.dropdownMenu}>
        {options.map((hour, i) => {
          return (
            <li key={`hour-${i}`} className={styles.dropdownMenuItem}>
              <button onClick={() => selectValue(hour)}>
                {typeof hour === "number" && name === "hour" ? hour + 1 : hour}
                {name === "hour" ? "시" : name === "minute" ? "분" : ""}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
