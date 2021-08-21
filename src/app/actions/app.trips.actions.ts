import { createAction,props } from '@ngrx/store';
import { TripsList } from '../models/app.trips-list.model';

export const getTrips =  createAction(
    '[Trips] Get Trips'
  );
  // success action
  export const getTripsSuccess =  createAction(
    '[Trips] Get Trips Success', // acction type
     props<{trips: TripsList[]}>() // payload (input and/or output parameter )
  );