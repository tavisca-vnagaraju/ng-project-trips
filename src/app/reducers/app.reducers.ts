import {ActionReducerMap} from '@ngrx/store';
import { IAppTripsState } from '../state/app.state';
import { reducer } from './app.trips.reducers';

export const mainReducers: ActionReducerMap<IAppTripsState,any> = {
  trips:reducer
};