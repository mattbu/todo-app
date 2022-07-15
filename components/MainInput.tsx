import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../slices/userSlice";
import { RootState } from "../store";
import styles from "../styles/components/MainInput.module.scss";
import { setUserName } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const MainInput = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const currentUser = useSelector<RootState, UserState>(state => state.user)  

  const submitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUserName({name}))
    setIsSubmitted(true);
  };
  useEffect(() => {
    console.log(currentUser);
  })
  return (
    <>
      <h1 className={isSubmitted ? `${styles.greeting} ${styles['show']}` : `${styles.greeting}` }>안녕하세요, {currentUser.name}</h1>
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
      ) : (null
      )}
    </>
  );
};

export default MainInput;
