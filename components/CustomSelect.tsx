import { Ref, useEffect, useRef, useState } from "react";
import styles from "../styles/components/CustomSelect.module.scss";
import { ChevronDown } from "react-feather";

interface Props {
  options: number[] | string[];
  placeholder: string;
}

export default function CustomSelect({ options, placeholder }: Props) {
  const dropdown = useRef<HTMLUListElement>(null);

  const [currentSelect, setCurrentSelect] = useState<number | string>(0);

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
      setCurrentSelect(val + 1);
    } else {
      setCurrentSelect(val);
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
        <span>
          {typeof currentSelect === "number" && currentSelect === 0
            ? placeholder
            : `${currentSelect}${placeholder}`}
        </span>
        <ChevronDown size={"16px"} />
      </button>

      <ul ref={dropdown} className={styles.dropdownMenu}>
        {options.map((hour, i) => {
          return (
            <li key={`hour-${i}`} className={styles.dropdownMenuItem}>
              <button onClick={() => selectValue(hour)}>
                {typeof hour === "string" ? hour : hour + 1}
                {placeholder === "시" ? "시" : placeholder === "분" ? "분" : ""}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
