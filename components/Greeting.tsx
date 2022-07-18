import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../slices/userSlice";
import { RootState } from "../store";
import styles from "../styles/components/Greeting.module.scss";
import { setUserName } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { persistor } from "../store";

import CustomInput from './CustomInput'

export default function MainInput() {
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const currentUser = useSelector<RootState, UserState>(state => state.user)

  const submitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUserName({ name }))
    setIsSubmitted(true);
  };

  const exit = async () => {
    setName('')
    await setTimeout(() => {
      persistor.purge()
    }, 500)
    await setTimeout(() => {
      setIsSubmitted(false);
    }, 1000)
  }
  useEffect(() => {
    return () => clearTimeout()
  })
  return (
    <div className={styles.container}>
      <div>
        <h1
          className={currentUser.name ? `${styles.greeting} ${styles['show']}` : `${styles.greeting} ${styles['hide']}`}
        >
          {currentUser.name ? `안녕하세요,` : '안녕히 계세요.'} {currentUser.name}
        </h1>
        {currentUser.name && <button className={styles.exitBtn} onClick={exit}>나가기</button>}
      </div>
      {!currentUser.name && !isSubmitted ? (
        <div>
          <CustomInput
            submit={submitName}
            inputValue={name}
            inputChange={changeName}
            placeholder="당신은 누구십니까?"
          />
        </div>
      ) : (null
      )}
    </div>
  );
};
