import { Injectable } from '@angular/core';
// of --> the method, monitor the execution of
// the Observale thorugh effect
import { of } from 'rxjs';
// Store --> reference of the store that will be impacted
// select --> Used to execute a 'selector' (?) on store using effect
import { Store, select } from '@ngrx/store';
// importing all required objects for defining and executing effects
// Actions --> the actions those are input and output for
// effects
// ofType --> Current action name for which the effect will be executed
// createEffect --> creating the effect definition
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
// IAppTripsState --> Initial State Schema for the store
// that will be affected by the Effects after execution
import { IAppTripsState } from '../state/app.state';
// importing all actions
import { TripsActions } from './../actions/index';
// importing HTTPService that contains all Async Calls
import { TripsService } from '../services/app.trips.service';

// switchMap --> Reda data from Observable and Process it
// map --> Map the NGRX action to the payload
// and help switchMap to read data for processing
// withLatestFrom --> Used to select specific amount / type of data
// from observale like 'select' query
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { TripsList } from '../models/app.trips-list.model';

@Injectable()
export class TripsEffects {
  // if any declaration is of the type promise /observale for async
  // operations are used then postfix-it using $ sign
  // _action$.pipe() method that will be executed
  // for the action being dispatched
  getTrips$ = createEffect(() => this._action$.pipe(
    ofType(TripsActions.getTrips), // if store dispatch the getTrips action then
    switchMap(() => this._serv.getAllTrips()), // subscribe to the getData() method of NG Service
    // subscribe to the observable, process it and return the succes action
    switchMap((trips: TripsList[]) => of(TripsActions.getTripsSuccess({trips})))
  ));

  constructor(
    // tslint:disable-next-line: variable-name
    private _serv: TripsService,
    // tslint:disable-next-line: variable-name
    private _action$: Actions,
    // tslint:disable-next-line: variable-name
    private _store: Store<IAppTripsState>
  ){}
}