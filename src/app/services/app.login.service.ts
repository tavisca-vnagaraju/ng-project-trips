import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AUTH0_APIS } from 'src/environments/environment';
import {UserInfo} from '../models/app.userInfo.model';

@Injectable({providedIn: 'root'})

export class LoginService {
    
    private url: string;
    public userInfo:Observable<UserInfo>;
    constructor(private http: HttpClient) {  }

    getUserInfoAPI(requestParams:string):Observable<UserInfo>{
        let resp:Observable<UserInfo>;
        this.url = AUTH0_APIS.DOMAIN_LINK + AUTH0_APIS.USERINFO + "?" + requestParams;
        resp = this.http.get<UserInfo>(this.url);
        this.userInfo = resp;
        return resp;
    }
    getUserInfo(){
        return this.userInfo;
    }
    setStorage(tok:string):void{
        localStorage.setItem('tok',tok);
    }

    loggedIn(){
        return !!localStorage.getItem('tok');
    }
}