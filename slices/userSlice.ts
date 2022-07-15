import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    }
  }
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer