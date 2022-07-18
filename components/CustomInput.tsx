import { ChangeEvent, FormEvent } from 'react'
import styles from '../styles/components/CustomInput.module.scss'

interface Props {
  inputValue: string,
  placeholder: string,
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  submit: (e: FormEvent<HTMLFormElement>) => void,
}

export default function CustomInput({ submit, inputValue, inputChange, placeholder }: Props) {
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
      </form>
    </>
  )
}