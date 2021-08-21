import { createSelector } from '@ngrx/store';
import { IAppTripsState } from "../state/app.state";
import { ITripsState } from '../state/app.trip.state';

const selectTrips = (state: IAppTripsState) => state.trips;

export const selectTripsList = createSelector(
    selectTrips,
    (state: ITripsState) => state.trips
);