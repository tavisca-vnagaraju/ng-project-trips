import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string;
  constructor(private http: HttpClient) {  }
  getProfile(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/profile/"+payload;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getAddress(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/address/"+payload;
    resp = this.http.get<any>(this.url);
    return resp;
  }
  getCardDetails(payload:any):any{
    let resp:any;
    this.url = "http://localhost:3001/user/card/"+payload;
    resp = this.http.get<any>(this.url);
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
