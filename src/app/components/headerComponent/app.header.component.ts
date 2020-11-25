import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserInfo } from '../../models/app.userInfo.model';
import {AUTH0_PARAMS,AUTH0_APIS} from '../../../environments/environment';
import { LoginService } from 'src/app/services/app.login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.css']
})

export class AppHeaderComponent {
  userInfo:UserInfo;
  requestParams:string;
  errorResponse:any;

  constructor(private loginService:LoginService,private store: Store<any>,private route:Router){}
  
  ngOnInit(){
    this.store.select('login').subscribe(
      accessToken => {
          if(accessToken.token != ""){
            this.callUserInfoAPI(accessToken.token)
          }
          else{
            if(this.loginService.loggedIn() && this.userInfo == null ){
              let access_token = localStorage.getItem('tok');
              this.callUserInfoAPI(access_token);
            }
          }
      }
    );
  }

  callUserInfoAPI(accessToken){
    this.requestParams = "access_token="+accessToken+"&" + AUTH0_PARAMS.SCOPE;
    this.loginService.getUserInfoAPI(this.requestParams).subscribe(
      (user:UserInfo) =>  {
        this.userInfo = user;
      },
      (error) => {
        this.errorResponse = error;
          localStorage.clear();
          this.route.navigate(['/login']);
      }
    )
  }
  
  toUserProfileInfo(){
    this.route.navigate(["/user/profile"]);
  }
  
  redirectToHome(){
    if(this.loginService.loggedIn()){
      this.route.navigate(["/tripsList"]);
    }else{
      this.route.navigate(["/login"]);
    }
  }

  logout(){
    localStorage.clear();
    window.location.href = AUTH0_APIS.DOMAIN_LINK + AUTH0_APIS.LOGOUT + "?" +AUTH0_PARAMS.CLIENT_ID+ "&"+ AUTH0_PARAMS.LOGOUT_RETURN_TO_URI;
  }
}
