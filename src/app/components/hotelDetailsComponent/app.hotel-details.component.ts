import { Component , Input,Output,EventEmitter} from '@angular/core';
import { HotelBookingDetails } from '../../models/app.hotel-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { APIService } from 'src/app/services/app.APIService.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent , ConfirmDialogModel } from '../confirmDialogCommponent/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-details-component',
  templateUrl: './app.hotel-details.component.html',
  styleUrls: ['./app.hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input() tripDetails: TripDetails;
  @Output() onCancelTripDetailsEvent = new EventEmitter<TripDetails>();
  hotelBookingDetails:HotelBookingDetails;
  hotelStatusColor:string;
  expanded:boolean = true;
  errorResponse:any;
  constructor(private apiService:APIService,private route: ActivatedRoute,public dialog: MatDialog) {
    
  }
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
    this.apiService.getHotelBookingDetailsById(hotelBookingId).subscribe(
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
      this.apiService.cancelHotelByIds(this.tripDetails.hotelBookingId,this.tripDetails.id).subscribe(
        (data:any) => {
          this.tripDetails = data.trips_details;
          this.onCancelTripDetailsEvent.emit(this.tripDetails);
        }
      )
    }
  }
}