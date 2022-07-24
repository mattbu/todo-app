import { useRouter } from "next/router";
import { ChangeEvent, FormEvent } from "react";
import styles from "../styles/components/CustomInput.module.scss";
import { ArrowRightCircle } from "react-feather";
interface Props {
  inputValue: string;
  placeholder: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  submit: (e: FormEvent<HTMLFormElement>) => void;
  isTodo?: boolean;
}

export default function CustomInput({
  submit,
  inputValue,
  inputChange,
  placeholder,
  isTodo,
}: Props) {
  const { asPath } = useRouter();

  return (
    <>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={
            inputValue
              ? `${styles.input} ${styles["entered"]}`
              : `${styles.input}`
          }
          type="text"
          value={inputValue}
          onChange={inputChange}
        />
        <span className={styles.placeholder}>{placeholder}</span>
        <button className={styles.formBtn} type="submit">
          {isTodo ? "+" : <ArrowRightCircle className={styles.enterIcon} />}
        </button>
      </form>
    </>
  );
}
