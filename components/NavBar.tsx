import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/components/NavBar.module.scss'

import Clock from "./Clock"
import MainInput from "./MainInput"

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={pathname === '/' ? `${styles.active}` : ''}>할일</a>
          </Link>
          <Link href="/alarm">
            <a className={pathname === '/alarm' ? `${styles.active}` : ''}>알람</a>
          </Link>
        </div>
      </nav>
      <Clock />
      <MainInput />
    </>
  )
}