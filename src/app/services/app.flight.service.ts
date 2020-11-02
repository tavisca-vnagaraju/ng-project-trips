import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FlightBookingDetails} from '../models/app.flight-booking-details.model';

@Injectable({providedIn: 'root'})

export class FlightService{

    private url: string;
    constructor(private http: HttpClient) {  }

    getFlightBookingDetailsById(id:string):Observable<FlightBookingDetails>{
        let resp:Observable<FlightBookingDetails>;
        this.url = "http://localhost:3001/flight/booking/details/"+id;
        resp = this.http.get<FlightBookingDetails>(this.url);
        return resp;
    }

    cancelFlightByIds(flightBookingId: string, id: string) {
        let resp:any;
        const payload = {
          "flightConfirmationId":flightBookingId,
          "tripId":id
        }
        this.url = "http://localhost:3001/flight/booking/cancel";
        resp = this.http.put<any>(this.url,payload);
        return resp;
    }
}