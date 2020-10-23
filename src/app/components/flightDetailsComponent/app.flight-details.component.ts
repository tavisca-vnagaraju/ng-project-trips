import { Component , Input} from '@angular/core';
import { FlightBookingDetails } from 'src/app/models/app.flight-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { APIService } from 'src/app/services/app.APIService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details-component',
  templateUrl: './app.flight-details.component.html',
  styleUrls: ['./app.flight-details.component.css']
})
export class FlightDetailsComponent {
  @Input() tripDetails: TripDetails;
  flightBookingDetails:FlightBookingDetails;
  expanded:boolean = true;
  errorResponse:any;
  color:string;
  flightStatusColor:string;
  constructor(private apiService:APIService,private route: ActivatedRoute) {
    
  }
  ngOnInit(){
    if(this.tripDetails.isFlightBooked){
      this.getFlightDetailsById(this.tripDetails.flightBookingId);
    }
  }
  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.status == "Booked"){
        this.color = "green";
      }else {
        this.color = "red";
      }
      if(this.tripDetails.isFlightBooked){
        if(this.tripDetails.flightInfo.status == "Booked"){
          this.flightStatusColor = "green";
        }else{
          this.flightStatusColor = "red";
        }
      }
    }
  }
  expandLess(flightBookingId){
    this.expanded = false;
    if(this.flightBookingDetails == undefined){
      this.getFlightDetailsById(flightBookingId);
    }
  }
  expandMore(flightBookingId){
    this.expanded = true;
    if(this.flightBookingDetails == undefined){
      this.getFlightDetailsById(flightBookingId);
    }
  }
  getFlightDetailsById(flightBookingId){
    this.apiService.getFlightDetailsById(flightBookingId).subscribe(
      (data:FlightBookingDetails) => this.flightBookingDetails = data,
      (error) => this.errorResponse = error
    )
  }
}