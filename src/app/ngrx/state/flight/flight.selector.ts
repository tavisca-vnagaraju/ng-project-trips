
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlight } from './flight.reducer';

const getFlightFeatureState = createFeatureSelector<IFlight>('flight');

export const getShowFlightCode = createSelector(
    getFlightFeatureState,
    state => state.showFlightCode
);
