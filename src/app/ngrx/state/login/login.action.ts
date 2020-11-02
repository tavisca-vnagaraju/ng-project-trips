/* NgRx */
import { createAction, props } from '@ngrx/store';

export const setAccessToken = createAction(
  '[Login] Set Access Token',
  props<{token:string}>()
);