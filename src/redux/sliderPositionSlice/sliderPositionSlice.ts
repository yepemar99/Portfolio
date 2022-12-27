import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";

export interface ISliderPosition {
  sliderPosition: number;
}

const initialState: ISliderPosition = {
  sliderPosition: 0,
};

export const sliderPositionSlice = createSlice({
  name: "sliderPosition",
  initialState,
  reducers: {
    changeSliderPosition: (state, action: PayloadAction<number>) => {
      state.sliderPosition = action.payload;
    },
  },
});

export const { changeSliderPosition } = sliderPositionSlice.actions;

export const selectSliderPosition = (state: AppState) =>
  state.sliderPosition.sliderPosition;

export default sliderPositionSlice.reducer;
