import { useRef, useState } from "react"
import styles from '../styles/components/SelectTime.module.scss'

const hourNumber = Array.from(Array(12).keys())
const minuteNumber = Array.from(Array(60).keys())

export default function SelectTime() {
  const [hours, setHours] = useState()
  const hourDropdown = useRef<HTMLUListElement>(null)
  const minuteDropdown = useRef<HTMLUListElement>(null)
  const toggleDropdown = (type: string, action: string) => {
    if (type === 'hour') {
      if (action === 'toggle') {
        hourDropdown.current?.classList.toggle(styles['show'])
      } else {
        hourDropdown.current?.classList.remove(styles['show'])
      }
    }
    else {
      if (action === 'toggle') {
        minuteDropdown.current?.classList.toggle(styles['show'])
      } else {
        minuteDropdown.current?.classList.remove(styles['show'])
      }
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.hourDropdown}>
        <button className={styles.hourDropdownToggle} onClick={() => toggleDropdown('hour', 'toggle')}>시</button>

        <ul ref={hourDropdown} className={`${styles.hourDropdownMenu}`}>
          {hourNumber.map(((hour, i) => {
            return <li key={`hour-${i}`} className={styles.hourDropdownMenuItem}>
              <button>{hour + 1}</button>
            </li>
          }))}
        </ul>
      </div>
      <div className={styles.minuteDropdown}>
        <button className={styles.minuteDropdownToggle} onClick={() => toggleDropdown('minute', 'toggle')}>분</button>
        <ul ref={minuteDropdown} className={`${styles.minuteDropdownMenu}`}>
          {minuteNumber.map(((hour, i) => {
            return <li key={`hour-${i}`} className={styles.minuteDropdownMenuItem}>
              <button>{hour + 1}</button>
            </li>
          }))}
        </ul>
      </div>
    </div>
  )
}