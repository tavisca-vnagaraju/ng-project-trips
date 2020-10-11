import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/app.APIService.service';
import {TripsList} from '../../models/app.trips-list.model';
@Component({
  selector: 'app-trips-list-component',
  templateUrl: './app.trips-list.component.html',
  styleUrls: ['./app.trips-list.component.css']
})
export class TripsListComponent {
  trips:TripsList;
  constructor(private apiService:APIService,private router:Router){
    this.apiService.getAllTrips().subscribe(
      x => this.trips = x
    );
  }
  cardClicked(tripId):void{
    this.router.navigate(['/trip/details',tripId]);
  }
}