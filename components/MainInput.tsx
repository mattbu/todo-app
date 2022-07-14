import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/components/MainInput.module.scss";

const MainInput = () => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const submitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <>
      {!isSubmitted ? (
        <form className={styles.form} onSubmit={submitName}>
          <input
            className={
              name
                ? `${styles.mainInput} ${styles["entered"]}`
                : `${styles.mainInput}`
            }
            type="text"
            value={name}
            onChange={changeName}
          />
          <span className={styles.placeholder}>당신은 누구십니까?</span>
        </form>
      ) : (
        <h1 className={styles.greeting}>안녕하세요, {name}</h1>
      )}
    </>
  );
};

export default MainInput;
