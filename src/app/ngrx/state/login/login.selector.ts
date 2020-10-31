
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILogin } from './login.reducer';

const getLoginFeatureState = createFeatureSelector<ILogin>('login');

export const getToken = createSelector(
    getLoginFeatureState,
    state => state.token
);
