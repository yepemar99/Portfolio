import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IChallenge,
  IChallengesPerYear,
  ISkills,
  ITopic,
} from "../../types/interfaces";
import type { AppState } from "../store";

export interface IProjectsSlice {
  skillsPeerCategory: ITopic[];
  challengePeerYear: IChallengesPerYear[];
}

const initialState: IProjectsSlice = {
  skillsPeerCategory: [],
  challengePeerYear: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSkillsPeerCategory: (state, action: PayloadAction<ISkills[]>) => {
      let aux: string[] = [];

      action.payload.map((itemSkill) => {
        if (aux.length > 0) {
          let present: boolean = false;
          aux.map((auxItem) => {
            if (auxItem === itemSkill.category) {
              present = true;
            }
          });
          if (!present) {
            aux.push(itemSkill.category);
          }
        } else {
          aux.push(action.payload[0].category);
        }
      });

      aux.map((auxItem, key) => {
        state.skillsPeerCategory.push({
          id: key,
          name: auxItem,
          skills: [],
        });
      });

      state.skillsPeerCategory.map((stateItem) => {
        action.payload.map((itemSkill) => {
          if (stateItem.name === itemSkill.category) {
            stateItem.skills.push(itemSkill);
          }
        });
      });
    },
    setchallengePeerYear: (state, action: PayloadAction<IChallenge[]>) => {
      let aux: number[] = [];
      let aux2: IChallengesPerYear[] = [];

      action.payload.map((itemChallenge) => {
        if (aux.length > 0) {
          let present: boolean = false;
          aux.map((auxItem) => {
            if (auxItem === itemChallenge.year) {
              present = true;
            }
          });
          if (!present) {
            aux.push(itemChallenge.year);
          }
        } else {
          aux.push(action.payload[0].year);
        }
      });

      aux.map((auxItem, key) => {
        aux2.push({
          id: key,
          year: auxItem,
          challenges: [],
        });
      });

      aux2.map((stateItem) => {
        action.payload.map((itemChallenge) => {
          if (stateItem.year === itemChallenge.year) {
            stateItem.challenges.push(itemChallenge);
          }
        });
      });

      state.challengePeerYear = aux2.sort((a, b) => b.year - a.year);
    },
  },
});

export const { setSkillsPeerCategory } = projectsSlice.actions;
export const { setchallengePeerYear } = projectsSlice.actions;

export const selectSkillsPeerCategory = (state: AppState) =>
  state.projectStatus.skillsPeerCategory;
export const selectChallengesPeerYear = (state: AppState) =>
  state.projectStatus.challengePeerYear;

export default projectsSlice.reducer;
