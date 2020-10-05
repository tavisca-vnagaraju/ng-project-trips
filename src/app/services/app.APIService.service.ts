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
}
