import { createAction, props } from '@ngrx/store';

export const showSpinner = createAction(
    '[Spinner] show Spinner',
    props<{ show: boolean }>()
);
