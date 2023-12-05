import { createReducer, on } from '@ngrx/store';
import * as SpinnerActions from '../actions/spinner.actions';
import { SpinnerState } from '../interfaces/spinner.state.interface';

export const initialState: SpinnerState = {
    show: false
};

export const spinnerReducer = createReducer(
    initialState,
    on(SpinnerActions.showSpinner, (state, action) => ({ ...state, show: action.show })),
);
