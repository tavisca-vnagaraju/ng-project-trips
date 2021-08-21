import { createReducer, on } from '@ngrx/store';
import { TripsActions } from '../actions';

import { initialTripsState } from '../state/app.trip.state';
export const reducer = createReducer(
    initialTripsState,
    on(TripsActions.getTripsSuccess,(state,{trips})=>({
        ...state,
        trips
    })),
)