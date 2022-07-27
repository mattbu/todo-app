import styles from "../styles/components/ToDoList.module.scss";

import { Todo } from "../pages";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { removeTodo, TodoState } from "../slices/toDoSlice";
import { useDispatch } from "react-redux";

export default function ToDoList() {
  const dispatch = useDispatch();
  const toDos = useSelector<RootState, TodoState[]>((state) => state.todos);

  return (
    <>
      <div className={styles.container}>
        {toDos &&
          toDos.map((item: Todo, i: number) => {
            return (
              <div key={item.id} className={styles.card} draggable="true">
                <h3>{item.todo}</h3>
                <button
                  className={styles.deleteBtn}
                  onClick={() => dispatch(removeTodo(item.id))}
                >
                  ❌
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
