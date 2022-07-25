import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimeState {
  hour: string;
  minute: string;
  ampm: string;
}

const initialState: TimeState = {
  hour: "00",
  minute: "00",
  ampm: "AM",
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<TimeState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setTime } = timeSlice.actions;

export default timeSlice.reducer;
