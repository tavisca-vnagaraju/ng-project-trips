import { Component , Input,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CarBookingDetails } from 'src/app/models/app.car-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { ConfirmDialogComponent , ConfirmDialogModel } from '../confirmDialogCommponent/confirm-dialog.component';
import { CarService } from 'src/app/services/app.car.service';

@Component({
  selector: 'app-car-details-component',
  templateUrl: './app.car-details.component.html',
  styleUrls: ['./app.car-details.component.css']
})

export class CarDetailsComponent {
  isDisabled:boolean = false;
  @Input() tripDetails: TripDetails;
  @Output() onCancelTripDetailsEvent = new EventEmitter<TripDetails>();
  carBookingDetails:CarBookingDetails;
  expanded:boolean = true;
  errorResponse:any;
  color:string;
  carStatusColor:string;

  constructor(private carService:CarService,public dialog: MatDialog) {}

  ngOnInit(){
    if(this.tripDetails.isCarBooked){
      this.getCarBookingDetailsById(this.tripDetails.carBookingId);
    }
  }

  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.isCarBooked){
        if(this.tripDetails.carInfo.status == "Booked"){
          this.carStatusColor = "green";
        }else{
          this.carStatusColor = "red";
          this.isDisabled = true;
        }
      }
    }
  }

  expandLess(carBookingId){
    this.expanded = false;
    if(this.carBookingDetails == undefined){
      this.getCarBookingDetailsById(carBookingId);
    }
  }

  expandMore(carBookingId){
    this.expanded = true;
    if(this.carBookingDetails == undefined){
      this.getCarBookingDetailsById(carBookingId);
    }
  }

  getCarBookingDetailsById(carBookingId){
    this.carService.getCarBookingDetailsById(carBookingId).subscribe(
      (data:CarBookingDetails) => {this.carBookingDetails = data;},
      (error) => this.errorResponse = error
    )
  }

  confirmDialog(): void {
    const message = `Are you sure you want to cancel the Flight ?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.cancelCar(dialogResult);
    });
    
  }

  cancelCar(isCancelCar: boolean) {
    if(isCancelCar){
      this.carService.cancelCarByIds(this.tripDetails.carBookingId,this.tripDetails.id).subscribe(
        (data:any)=>{
          this.tripDetails = data.trips_details;
          this.onCancelTripDetailsEvent.emit(this.tripDetails);
        }
      )
    }
  }
  
}