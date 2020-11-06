import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {TripsList} from '../models/app.trips-list.model';
import {TripDetails} from '../models/app.trip-details.model';

@Injectable({providedIn: 'root'})

export class TripsService {
    
    private url: string;
    constructor(private http: HttpClient) {  }
    
    getAllTrips():Observable<Array<TripsList>>{
        let resp:Observable<Array<TripsList>>;
        this.url = "http://localhost:3001/trips";
        resp = this.http.get<Array<TripsList>>(this.url);
        return resp;
    }
    
    getTripDetailsById(id:string):Observable<TripDetails>{
        let resp:Observable<TripDetails>;
        this.url = "http://localhost:3001/trip/details/"+id;
        resp = this.http.get<TripDetails>(this.url);
        return resp;
    }
}