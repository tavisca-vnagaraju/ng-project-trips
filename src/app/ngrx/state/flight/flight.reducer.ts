/* NgRx */
import { createReducer, on, createAction } from '@ngrx/store';
import * as FlightActions from './flight.action';
export interface IFlight{
  showFlightCode:boolean;
}
export const initialState: IFlight = {
  showFlightCode : false
};

export const flightReducer = createReducer<IFlight>(
  initialState,
  on(FlightActions.toggleFlightCode, (state):IFlight =>{
    return{
      ...state,
      showFlightCode: !state.showFlightCode
    }
  })
);