import { Component } from '@angular/core';
import { APIService } from '../../services/app.APIService.service';
import { UserInfo } from '../../models/app.userInfo.model';
import {AUTH0_PARAMS,AUTH0_APIS} from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { getToken } from '../../ngrx/state/login/login.selector';
@Component({
  selector: 'app-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.css']
})

export class AppHeaderComponent {
  userInfo:UserInfo;
  requestParams:string;
  errorResponse:any;
  constructor(private apiService:APIService,private store: Store<any>){}
  ngOnInit(){
    this.store.select(getToken).subscribe(
      accessToken => {
          if(accessToken != ""){
            this.callUserInfoAPI(accessToken)
          }
          else{
            if(this.apiService.loggedIn() && (this.userInfo == null || this.userInfo == undefined) ){
              let access_token = localStorage.getItem('tok');
              this.callUserInfoAPI(access_token);
            }
          }
      }
    );
  }
  callUserInfoAPI(accessToken){
    this.requestParams = "access_token="+accessToken+"&" + AUTH0_PARAMS.SCOPE;
    this.apiService.getUserInfoAPI(this.requestParams).subscribe(
      (user:UserInfo) =>  this.userInfo = user,
      (error) => this.errorResponse = error
    )
  }
  logout(){
    localStorage.clear();
    window.location.href=AUTH0_APIS.DOMAIN_LINK + AUTH0_APIS.LOGOUT + "?" +AUTH0_PARAMS.CLIENT_ID+ "&"+ AUTH0_PARAMS.LOGOUT_RETURN_TO_URI;
  }
}
