import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

export interface UserState {
  name: string;
  isSubmitted: boolean;
}

const initialState: UserState = {
  name: "",
  isSubmitted: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<UserState>) => {
      console.log(action.payload);

      state = action.payload;
      return state;
    },
    removeUserName: (state) => {
      state = { name: "", isSubmitted: false };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
