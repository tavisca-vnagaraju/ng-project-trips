import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AUTH0_APIS } from 'src/environments/environment';
@Injectable({providedIn: 'root'})

export class APIService { 
  private url: string;
  constructor(private http: HttpClient) {  }
  getUserInfoAPI(requestParams:string):any{
    let resp:any;
    this.url = AUTH0_APIS.DOMAIN_LINK + AUTH0_APIS.USERINFO + "?" + requestParams;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  setStorage(tok:string):void{
    localStorage.setItem('tok',tok);
  }
  loggedIn(){
    return !!localStorage.getItem('tok');
  }
  getAllTrips(){
    let resp:any;
    this.url = "http://localhost:3001/trips";
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getTripDetailsById(id:string):any{
    let resp:any;
    this.url = "http://localhost:3001/trip/details/"+id;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getFlightBookingDetailsById(id:string){
    let resp:any;
    this.url = "http://localhost:3001/flight/booking/details/"+id;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getHotelBookingDetailsById(hotelBookingId: string) {
    let resp:any;
    this.url = "http://localhost:3001/hotel/booking/details/"+hotelBookingId;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getCarBookingDetailsById(carBookingId: any) {
    let resp:any;
    this.url = "http://localhost:3001/car/booking/details/"+carBookingId;
    resp = this.http.get<any>(this.url);
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
  cancelHotelByIds(hotelBookingId: string, id: string) {
    let resp:any;
    const payload = {
      "hotelConfirmationId":hotelBookingId,
      "tripId":id
    }
    this.url = "http://localhost:3001/hotel/booking/cancel";
    resp = this.http.put<any>(this.url,payload);
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
