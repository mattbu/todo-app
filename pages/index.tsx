import styles from "../styles/Home.module.scss";
import MainInput from "../components/MainInput";
import Clock from "../components/Clock";

const Home = () => {
  return (
    <div className={styles.container}>
      <Clock />
      <MainInput />
    </div>
  );
};

export default Home;
