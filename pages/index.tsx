import { GetServerSideProps } from "next";
import { wrapper } from "../store";

import styles from "../styles/pages/Home.module.scss";

import Seo from "../components/Seo";
import ToDoList from "../components/ToDoList";
import { ChangeEvent, FormEvent, useState } from "react";
import CustomInput from "../components/CustomInput";
import { addTodo } from "../slices/toDoSlice";
import { useDispatch } from "react-redux";

export interface Todo {
  id: number,
  todo: string
}

export default function Home() {
  const dispatch = useDispatch()
  const [toDo, setToDo] = useState('')

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value)
  }
  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const toDoObj = {
      id: new Date().valueOf(),
      todo: toDo
    }

    setToDo('')
    dispatch(addTodo(toDoObj))
  }
  return (
    <div className={styles.container}>
      <Seo title={'ToDo'}></Seo>
      <h2 className={styles.title}>할 일 📝</h2>
      <CustomInput
        inputValue={toDo}
        inputChange={inputChange}
        submit={submitTodo}
        placeholder="할 일을 입력해 주세요."
      />
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


