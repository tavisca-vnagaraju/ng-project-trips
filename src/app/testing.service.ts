import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestingService {
  constructor(private http: HttpClient) {  }
  getCategories(){
    let url = "https://api.chucknorris.io/jokes/categories";
    let resp:any;
    resp = this.http.get<any>(url);
    return resp;
  }
}
