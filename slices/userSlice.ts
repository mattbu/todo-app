import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

export interface UserState {
  name: string
}

const initialState: UserState = {
  name: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<UserState>) => {
      state = action.payload
      return state
    },
    removeUserName: (state) => {
      state = {name: ""}
      return state
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
}
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer