import Seo from '../components/Seo'
import styles from '../styles/pages/Alarm.module.scss'

export default function Alarm() {
  return (
    <div className={styles.container}>
      <Seo title={'알람'} />
      <h2>알람 ⏰</h2>
    </div>
  )
}