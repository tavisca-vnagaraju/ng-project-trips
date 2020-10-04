import { Component } from '@angular/core';
import { APIService } from '../../services/app.APIService.service';
import { UserInfo } from '../../models/app.userInfo.model';
import {AUTH0_PARAMS,AUTH0_APIS} from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.css']
})

export class AppHeaderComponent {
  userInfo:UserInfo;
  requestParams:string;
  constructor(private apiService:APIService,private router:Router){
    let access_token = localStorage.getItem('tok');
    if(access_token != null){
      this.requestParams = "access_token="+access_token+"&" + AUTH0_PARAMS.SCOPE;
      this.apiService.getUserInfoAPI(this.requestParams).subscribe(
        user =>  this.userInfo = user
      )
    }
  }
  logout(){
    localStorage.clear();
    window.location.href=AUTH0_APIS.DOMAIN_LINK + AUTH0_APIS.LOGOUT + "?" +AUTH0_PARAMS.CLIENT_ID+ "&"+ AUTH0_PARAMS.LOGOUT_RETURN_TO_URI;
  }
}
