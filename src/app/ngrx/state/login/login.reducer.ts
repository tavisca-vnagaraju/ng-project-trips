/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.action';

export interface ILogin{
  token:string;
}
export const initialState: ILogin = {
  token : ""
};

export const loginReducer = createReducer<ILogin>(
  initialState,
  on(LoginActions.setAccessToken, (state, {token}) => ({ 
    ...state,
     token : token
  })),
);