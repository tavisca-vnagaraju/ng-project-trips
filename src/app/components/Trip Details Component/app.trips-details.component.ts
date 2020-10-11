import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/app.APIService.service';
import { TripDetails } from '../../models/app.trip-details.model';
import {FlightBookingDetails} from '../../models/app.flight-booking-details.model';
@Component({
  selector: 'app-trip-details-component',
  templateUrl: './app.trip-details.component.html',
  styleUrls: ['./app.trip-details.component.css']
})
export class TripsDetailsComponent {
  id:any;
  tripDetails:TripDetails;
  flightBookingDetails:FlightBookingDetails;
  color:string;
  flightStatusColor:string;
  constructor(private apiService:APIService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.apiService.getTripDetailsById(this.id).subscribe(
        data=> this.tripDetails = data,
      );
    });
  }
  ngAfterContentChecked(){
    if(this.tripDetails){
      // this.getFlightDetailsById(this.tripDetails.flightBookingId);
      if(this.tripDetails.status == "Booked"){
        this.color = "green";
      }else {
        this.color = "red";
      }
      if(this.tripDetails.flightInfo.status == "Booked"){
        this.flightStatusColor = "green";
      }else{
        this.flightStatusColor = "red";
      }
    }
  }
  getFlightDetailsById(flightBookingId){
    this.apiService.getFlightDetailsById(flightBookingId).subscribe(
      data => this.flightBookingDetails = data
    )
  }
}