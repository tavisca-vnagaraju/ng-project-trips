import { Component , Input} from '@angular/core';
import { CarBookingDetails } from 'src/app/models/app.car-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { APIService } from 'src/app/services/app.APIService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details-component',
  templateUrl: './app.car-details.component.html',
  styleUrls: ['./app.car-details.component.css']
})
export class CarDetailsComponent {
  @Input() tripDetails: TripDetails;
  carBookingDetails:CarBookingDetails;
  expanded:boolean = true;
  errorResponse:any;
  color:string;
  carStatusColor:string;
  constructor(private apiService:APIService,private route: ActivatedRoute) {
    
  }
  ngOnInit(){
    if(this.tripDetails.isCarBooked){
      this.getcarDetailsById(this.tripDetails.carBookingId);
    }
  }
  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.status == "Booked"){
        this.color = "green";
      }else {
        this.color = "red";
      }
      if(this.tripDetails.isCarBooked){
        if(this.tripDetails.carInfo.status == "Booked"){
          this.carStatusColor = "green";
        }else{
          this.carStatusColor = "red";
        }
      }
    }
  }
  expandLess(carBookingId){
    this.expanded = false;
    if(this.carBookingDetails == undefined){
      this.getcarDetailsById(carBookingId);
    }
  }
  expandMore(carBookingId){
    this.expanded = true;
    if(this.carBookingDetails == undefined){
      this.getcarDetailsById(carBookingId);
    }
  }
  getcarDetailsById(carBookingId){
    this.apiService.getcarDetailsById(carBookingId).subscribe(
      (data:CarBookingDetails) => this.carBookingDetails = data,
      (error) => this.errorResponse = error
    )
  }
}