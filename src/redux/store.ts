import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import alertStatusSlice from "./alertStatusSlice/alertStatusSlice";
import modalChallengeSlice from "./modalChallengeSlice/modalChallengesSlice";
import projectsSlice from "./projectsSlice/projectsSlice";
import routesSlice from "./routesSlice/routesSlice";
import sliderPositionSlice from "./sliderPositionSlice/sliderPositionSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      sliderPosition: sliderPositionSlice,
      modalStatus: modalChallengeSlice,
      projectStatus: projectsSlice,
      routesStauts: routesSlice,
      alertStatus: alertStatusSlice,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
