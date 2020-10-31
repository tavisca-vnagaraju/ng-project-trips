import { Component , Input,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { FlightBookingDetails } from 'src/app/models/app.flight-booking-details.model';
import { TripDetails } from 'src/app/models/app.trip-details.model';
import { ConfirmDialogComponent , ConfirmDialogModel } from '../confirmDialogCommponent/confirm-dialog.component';
import { FlightService } from 'src/app/services/app.flight.service';
import * as FlightActions from '../../ngrx/state/flight/flight.action';
import {  getShowFlightCode } from '../../ngrx/state/flight/flight.selector';

@Component({
  selector: 'app-flight-details-component',
  templateUrl: './app.flight-details.component.html',
  styleUrls: ['./app.flight-details.component.css']
})

export class FlightDetailsComponent {
  isDisabled:boolean = false;
  @Input() tripDetails: TripDetails;
  @Output() onCancelTripDetailsEvent = new EventEmitter<TripDetails>();
  flightBookingDetails:FlightBookingDetails;
  flightStatusColor:string;
  expanded:boolean = true;
  errorResponse:any;
  displayCode: boolean = false;

  constructor(private store: Store<any>,
              private flightService:FlightService,
              public dialog: MatDialog) {}

  ngOnInit(){
    if(this.tripDetails.isFlightBooked){
      this.getFlightBookingDetailsById(this.tripDetails.flightBookingId);
    }
    this.store.select(getShowFlightCode).subscribe(
      showFlightCode => this.displayCode = showFlightCode
    );
  }

  ngAfterContentChecked(){
    if(this.tripDetails){
      if(this.tripDetails.isFlightBooked){
        if(this.tripDetails.flightInfo.status == "Booked"){
          this.flightStatusColor = "green";
        }else{
          this.flightStatusColor = "red";
          this.isDisabled = true;
        }
      }
    }
  }

  expandLess(flightBookingId){
    this.expanded = false;
    if(this.flightBookingDetails == undefined){
      this.getFlightBookingDetailsById(flightBookingId);
    }
  }
  expandMore(flightBookingId){
    this.expanded = true;
    if(this.flightBookingDetails == undefined){
      this.getFlightBookingDetailsById(flightBookingId);
    }
  }

  getFlightBookingDetailsById(flightBookingId){
    this.flightService.getFlightBookingDetailsById(flightBookingId).subscribe(
      (data:FlightBookingDetails) => this.flightBookingDetails = data,
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
      this.cancelFlight(dialogResult);
    });
  }

  cancelFlight(isCancelFlight:boolean):void{
    if(isCancelFlight){
      this.flightService.cancelFlightByIds(this.tripDetails.flightBookingId,this.tripDetails.id).subscribe(
        (data:any) => {
          this.tripDetails = data.trips_details;
          this.onCancelTripDetailsEvent.emit(this.tripDetails);
        }
      )
    }
  }

  checkChanged(): void {
    this.store.dispatch(FlightActions.toggleFlightCode());
  }
  
}