import { SpinnerState } from "../interfaces/spinner.state.interface";
import { spinnerReducer } from "./spinner.reducers";
import * as SpinnerActions from '../actions/spinner.actions';

describe('Reducer: Spinner', () => {

    it('should have initial state of showSpinner', () => {
        const expected: SpinnerState = {
            show: true
        };
        expect(spinnerReducer(undefined, SpinnerActions.showSpinner({ show: true }))).toEqual(expected);
    });
});