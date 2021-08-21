import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { TripsActions } from 'src/app/actions';
import { selectTripsList } from 'src/app/selectors/app.trips.selector';
import { TripsService } from 'src/app/services/app.trips.service';
// import {TripsList} from '../../models/app.trips-list.model';
import { IAppTripsState } from '../../state/app.state';
@Component({
  selector: 'app-trips-list-component',
  templateUrl: './app.trips-list.component.html',
  styleUrls: ['./app.trips-list.component.css']
})

export class TripsListComponent {
  title = "Trips List";
  // trips:Array<TripsList>;
  errorResponse:any;
  trips$ =  this._store.pipe(select(selectTripsList));
  constructor(private _store: Store<IAppTripsState>,private tripsService:TripsService,private router:Router){}
  ngOnInit(){
    // this.tripsService.getAllTrips().subscribe(
    //   (data:Array<TripsList>) => {
    //     this.trips = data;
    //   },
    //   (error) => this.errorResponse = error
    // );
    this._store.dispatch(TripsActions.getTrips());
  }

  cardClicked(tripId):void{
    this.router.navigate(['/trip/details',tripId]);
  }
}