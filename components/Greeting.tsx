import { useState, ChangeEvent, FormEvent, useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../slices/userSlice";
import { RootState } from "../store";
import styles from "../styles/components/Greeting.module.scss";
import { setUserName } from "../slices/userSlice";
import { persistor } from "../store";

import CustomInput from "./CustomInput";

export default function MainInput() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const currentUser = useSelector<RootState, UserState>((state) => state.user);

  const submitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      setTimeout(() => {
        dispatch(setUserName({ name, isSubmitted: true }));
      }, 500);
      setName("");
    }
  };

  const exit = async () => {
    setName("");
    await setTimeout(() => {
      persistor.purge();
    }, 1000);
  };
  useEffect(() => {
    return () => clearTimeout();
  });
  return (
    <div className={styles.container}>
      {/* <div>
        <h1
          className={
            currentUser.name
              ? `${styles.greeting} ${styles["show"]}`
              : `${styles.greeting} ${styles["hide"]}`
          }
        >
          {currentUser.name ? `안녕하세요,` : "안녕히 가세요."}{" "}
          {currentUser.name}
        </h1>
        {currentUser.name && (
          <button className={styles.exitBtn} onClick={exit}>
            나가기
          </button>
        )}
      </div> */}

      {!currentUser.isSubmitted ? (
        <div className={styles.nameInput}>
          <CustomInput
            submit={submitName}
            inputValue={name}
            inputChange={changeName}
            placeholder="당신은 누구십니까?"
          />
        </div>
      ) : (
        <div>
          <h1
            className={
              currentUser.name
                ? `${styles.greeting} ${styles["show"]}`
                : `${styles.greeting} ${styles["hide"]}`
            }
          >
            {currentUser.name ? `안녕하세요,` : "안녕히 가세요."}{" "}
            {currentUser.name}
          </h1>
        </div>
      )}
    </div>
  );
}
