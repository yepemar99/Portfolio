import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";

export interface IModalChallenge {
  statusModal: boolean;
}

const initialState: IModalChallenge = {
  statusModal: false,
};

export const modalChallengeSlice = createSlice({
  name: "modalChallenge",
  initialState,
  reducers: {
    openModalChallenge: (state) => {
      state.statusModal = true;
    },
    closeModalChallenge: (state) => {
      state.statusModal = false;
    },
  },
});

export const { openModalChallenge } = modalChallengeSlice.actions;
export const { closeModalChallenge } = modalChallengeSlice.actions;

export const selectStatusModalChallenge = (state: AppState) =>
  state.modalStatus.statusModal;

export default modalChallengeSlice.reducer;
