import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { HotelBookingDetails } from '../models/app.hotel-booking-details.model';

@Injectable({providedIn: 'root'})

export class HotelService{
    
    private url: string;    
    constructor(private http: HttpClient) {  }

    getHotelBookingDetailsById(hotelBookingId: string):Observable<HotelBookingDetails> {
        let resp:Observable<HotelBookingDetails>;
        this.url = "http://localhost:3001/hotel/booking/details/"+hotelBookingId;
        resp = this.http.get<HotelBookingDetails>(this.url);
        return resp;
    }
    cancelHotelByIds(hotelBookingId: string, id: string):any {
        let resp:any;
        const payload = {
          "hotelConfirmationId":hotelBookingId,
          "tripId":id
        }
        this.url = "http://localhost:3001/hotel/booking/cancel";
        resp = this.http.put<any>(this.url,payload);
        return resp;
    }
}