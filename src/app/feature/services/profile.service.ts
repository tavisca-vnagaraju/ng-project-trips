import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Profile } from '../models/profile';
import { Address } from '../models/address';
import { CardDetails } from '../models/card-details';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string;
  constructor(private http: HttpClient) {  }
  getProfile(payload:any):Observable<Profile>{
    let resp:Observable<Profile>;
    this.url = "http://localhost:3001/user/profile/"+payload;
    resp = this.http.get<Profile>(this.url);
    return resp;
  }
  getAddress(payload:any):Observable<Address>{
    let resp:Observable<Address>;
    this.url = "http://localhost:3001/user/address/"+payload;
    resp = this.http.get<Address>(this.url);
    return resp;
  }
  getCardDetails(payload:any):Observable<CardDetails>{
    let resp:Observable<CardDetails>;
    this.url = "http://localhost:3001/user/card/"+payload;
    resp = this.http.get<CardDetails>(this.url);
    return resp;
  }
  postProfile(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/profile/";
    resp = this.http.post<any>(this.url,payload);
    return resp;
  }
  postAddress(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/address/";
    resp = this.http.post<any>(this.url,payload);
    return resp;
  }
  postCardDetails(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/card/";
    resp = this.http.post<any>(this.url,payload);
    return resp;
  }
}
