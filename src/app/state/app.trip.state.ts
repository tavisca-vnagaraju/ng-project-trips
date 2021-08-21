import { TripsList } from 'src/app/models/app.trips-list.model';

export interface ITripsState {
   trips: TripsList[];
};

export const initialTripsState: ITripsState = {
  trips:null
};
