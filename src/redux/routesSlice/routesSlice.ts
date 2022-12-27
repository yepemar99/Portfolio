import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoute } from "../../types/interfaces";
import type { AppState } from "../store";

export interface IRoutesSlice {
  routes: IRoute[];
}

const initialState: IRoutesSlice = {
  routes: [],
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<IRoute[]>) => {
      state.routes = [...action.payload];
    },
  },
});

export const { setRoutes } = routesSlice.actions;

export const selectRoutes = (state: AppState) => state.routesStauts.routes;

export default routesSlice.reducer;
