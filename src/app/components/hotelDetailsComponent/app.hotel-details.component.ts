import { Component ,Input} from '@angular/core';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { APIService } from 'src/app/services/app.APIService.service';
import {HotelBookingDetails} from '../../models/app.hotel-booking-details.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel-details-component',
  templateUrl: './app.hotel-details.component.html',
  styleUrls: ['./app.hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input() tripDetails: TripDetails;
  hotelBookingDetails:HotelBookingDetails;
  hotelStatusColor:string = 'green';
  expanded:boolean = true;
  errorResponse:any;
  constructor(private apiService:APIService,private route: ActivatedRoute) {
    
  }
  ngOnInit(){
    if(this.tripDetails.isHotelBooked){
      this.gethotelDetailsById(this.tripDetails.hotelBookingId);
    }
  }
  expandLess(hotelBookingId){
    this.expanded = false;
    if(this.hotelBookingDetails == undefined){
      this.gethotelDetailsById(hotelBookingId);
    }
  }
  expandMore(hotelBookingId){
    this.expanded = true;
    if(this.hotelBookingDetails == undefined){
      this.gethotelDetailsById(hotelBookingId);
    }
  }
  gethotelDetailsById(hotelBookingId){
    this.apiService.gethotelDetailsById(hotelBookingId).subscribe(
      (data:HotelBookingDetails) => { 
        this.hotelBookingDetails = data;
       } ,
      (error) => this.errorResponse = error
    )
  }
}