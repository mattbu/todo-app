import styles from "../styles/Home.module.scss";
import MainInput from "../components/MainInput";
import Clock from "../components/Clock";
import { GetServerSideProps } from "next";
import {wrapper} from "../store";

const Home = () => {
  return (
    <div className={styles.container}>
      <Clock />
      <MainInput />
    </div>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  store.getState().user
  return {
    props: {}
  }
})


