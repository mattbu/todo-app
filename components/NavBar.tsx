import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/NavBar.module.scss";
import { persistor, RootState } from "../store";
import { useSelector } from "react-redux";
import { UserState } from "../slices/userSlice";

import Clock from "./Clock";
import Greeting from "./Greeting";
import ColorSwitch from "./ColorSwitch";

export default function NavBar() {
  const { pathname } = useRouter();
  const { isSubmitted } = useSelector<RootState, UserState>(
    (state) => state.user
  );

  const exit = () => {
    setTimeout(() => {
      persistor.purge();
    }, 1000);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={pathname === "/" ? `${styles.active}` : ""}>할일</a>
          </Link>
          <Link href="/alarm">
            <a className={pathname === "/alarm" ? `${styles.active}` : ""}>
              알람
            </a>
          </Link>
          <div className={styles.switchBtn}>
            <ColorSwitch />
          </div>
          {isSubmitted ? (
            <button className={styles.exitBtn} onClick={exit}>
              나가기
            </button>
          ) : null}
        </div>
      </nav>
      <Clock />
      <Greeting />
    </>
  );
}
