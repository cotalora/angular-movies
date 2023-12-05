import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/app.state.interface";


export const selectSpinnerFeature = (state: AppState) => state.spinner;

export const spinnerSelector = createSelector(selectSpinnerFeature, state => state.show);
