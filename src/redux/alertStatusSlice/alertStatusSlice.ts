import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";

interface IOptionsAlert {
  message: string;
  valid: "error" | "success";
}
export interface IAlertStatus {
  statusAlert: boolean;
  message: string;
  valid: "error" | "success";
}

const initialState: IAlertStatus = {
  statusAlert: false,
  message: "",
  valid: "error",
};

export const alertStatusSlice = createSlice({
  name: "alertStatus",
  initialState,
  reducers: {
    openAlertStatus: (state, action: PayloadAction<IOptionsAlert>) => {
      state.message = action.payload.message;
      state.valid = action.payload.valid;
      state.statusAlert = true;
    },
    closeAlertStatus: (state) => {
      state.statusAlert = false;
      state.message = "";
    },
  },
});

export const { openAlertStatus } = alertStatusSlice.actions;
export const { closeAlertStatus } = alertStatusSlice.actions;

export const selectStatusAlert = (state: AppState) => state.alertStatus;

export default alertStatusSlice.reducer;
