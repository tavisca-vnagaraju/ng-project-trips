import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TripsService } from 'src/app/services/app.trips.service';
import {TripsList} from '../../models/app.trips-list.model';

@Component({
  selector: 'app-trips-list-component',
  templateUrl: './app.trips-list.component.html',
  styleUrls: ['./app.trips-list.component.css']
})

export class TripsListComponent {
  title = "Trips List";
  trips:Array<TripsList>;
  errorResponse:any;

  constructor(private tripsService:TripsService,private router:Router){}
  ngOnInit(){
    this.tripsService.getAllTrips().subscribe(
      (data:Array<TripsList>) => {
        this.trips = data;
      },
      (error) => this.errorResponse = error
    );
  }

  cardClicked(tripId):void{
    this.router.navigate(['/trip/details',tripId]);
  }
}