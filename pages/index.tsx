import { GetServerSideProps } from "next";
import { wrapper } from "../store";

import styles from "../styles/Home.module.scss";

import Seo from "../components/Seo";
import ToDoList from "../components/ToDoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo title={'ToDo'}></Seo>
      <ToDoList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  store.getState().user
  return {
    props: {}
  }
})


