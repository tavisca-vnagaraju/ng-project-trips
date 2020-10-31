import { Component , Input,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HotelBookingDetails } from '../../models/app.hotel-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { ConfirmDialogComponent , ConfirmDialogModel } from '../confirmDialogCommponent/confirm-dialog.component';
import { HotelService } from 'src/app/services/app.hotel.service';

@Component({
  selector: 'app-hotel-details-component',
  templateUrl: './app.hotel-details.component.html',
  styleUrls: ['./app.hotel-details.component.css']
})

export class HotelDetailsComponent {
  isDisabled:boolean = false;
  @Input() tripDetails: TripDetails;
  @Output() onCancelTripDetailsEvent = new EventEmitter<TripDetails>();
  hotelBookingDetails:HotelBookingDetails;
  hotelStatusColor:string;
  expanded:boolean = true;
  errorResponse:any;

  constructor(private hotelService:HotelService,public dialog: MatDialog) {}

  ngOnInit(){
    if(this.tripDetails.isHotelBooked){
      this.getHotelBookingDetailsById(this.tripDetails.hotelBookingId);
    }
  }

  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.isHotelBooked){
        if(this.tripDetails.hotelInfo.status == "Booked"){
          this.hotelStatusColor = 'green';
        }else{
          this.hotelStatusColor = 'red';
          this.isDisabled = true;
        }
      }
    }
  }

  expandLess(hotelBookingId){
    this.expanded = false;
    if(this.hotelBookingDetails == undefined){
      this.getHotelBookingDetailsById(hotelBookingId);
    }
  }

  expandMore(hotelBookingId){
    this.expanded = true;
    if(this.hotelBookingDetails == undefined){
      this.getHotelBookingDetailsById(hotelBookingId);
    }
  }

  getHotelBookingDetailsById(hotelBookingId){
    this.hotelService.getHotelBookingDetailsById(hotelBookingId).subscribe(
      (data:HotelBookingDetails) => { 
        this.hotelBookingDetails = data;
       } ,
      (error) => this.errorResponse = error
    )
  }

  confirmDialog(): void {
    const message = `Are you sure you want to cancel the Hotel ?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.cancelHotel(dialogResult);
    });
  }
  
  cancelHotel(isCancelHotel:boolean):void{
    if(isCancelHotel){
      this.hotelService.cancelHotelByIds(this.tripDetails.hotelBookingId,this.tripDetails.id).subscribe(
        (data:any) => {
          this.tripDetails = data.trips_details;
          this.onCancelTripDetailsEvent.emit(this.tripDetails);
        }
      )
    }
  }
}