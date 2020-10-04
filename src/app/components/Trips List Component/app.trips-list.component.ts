import { Component } from '@angular/core';
import { APIService } from 'src/app/services/app.APIService.service';

@Component({
  selector: 'app-trips-list-component',
  templateUrl: './app.trips-list.component.html',
  styleUrls: ['./app.trips-list.component.css']
})
export class TripsListComponent {
  trips:any;
  constructor(private apiService:APIService){
    this.apiService.getAllTrips().subscribe(
      x => this.trips = x
    );
  }
}