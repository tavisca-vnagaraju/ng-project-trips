import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripsService } from 'src/app/services/app.trips.service';
import { TripDetails } from '../../models/app.trip-details.model';

@Component({
  selector: 'app-trip-details-component',
  templateUrl: './app.trip-details.component.html',
  styleUrls: ['./app.trip-details.component.css']
})

export class TripsDetailsComponent {
  id:any;
  tripDetails:TripDetails;
  errorResponse:any;
  color:string;
  flightStatusColor:string;

  constructor(private tripsService:TripsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.tripsService.getTripDetailsById(this.id).subscribe(
        (data:TripDetails)=> {
          this.tripDetails = data;
        },
        (error) => this.errorResponse = error
      );
    });
  }

  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.status == "Booked"){
        this.color = "green";
      }else {
        this.color = "red";
      }
    }
  }

  updateTripDetails(updatedTripDetails){
    this.tripDetails = updatedTripDetails;
  }
  
}