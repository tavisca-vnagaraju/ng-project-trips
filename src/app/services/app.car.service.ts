import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class CarService{
    
    private url: string;
    constructor(private http: HttpClient) {  }

    getCarBookingDetailsById(carBookingId: any) {
        let resp:any;
        this.url = "http://localhost:3001/car/booking/details/"+carBookingId;
        resp = this.http.get<any>(this.url);
        return resp;
    }
    
    cancelCarByIds(carBookingId: string, id: string) {
        let resp:any;
        const payload = {
            "carConfirmationId":carBookingId,
            "tripId":id
        }
        this.url = "http://localhost:3001/car/booking/cancel";
        resp = this.http.put<any>(this.url,payload);
        return resp;
    }
}