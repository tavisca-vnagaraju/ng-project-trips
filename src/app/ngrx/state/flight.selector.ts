
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlight } from './flight.reducer';

const getProductFeatureState = createFeatureSelector<IFlight>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showFlightCode
);
