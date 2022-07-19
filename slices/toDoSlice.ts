import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  id: number,
  todo: string
}

const initialState: TodoState[] = []

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload)
      return state
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo } = toDoSlice.actions

export default toDoSlice.reducer