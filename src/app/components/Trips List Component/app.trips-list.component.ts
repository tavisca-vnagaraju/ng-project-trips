import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {APIService} from '../../services/app.APIService.service';
import { UserInfo } from '../../models/app.userInfo.model';

@Component({
  selector: 'app-trips-list-component',
  templateUrl: './app.trips-list.component.html',
  styleUrls: ['./app.trips-list.component.css']
})
export class TripsListComponent {
  title = "The Trips List Component working then";
  queryParams:any;
  queryParamString:string;
  userInfo:UserInfo;
  constructor(private route: ActivatedRoute,private apiService:APIService) {
    this.userInfo = new UserInfo('',null,'','','','','','','','');
    this.queryParams = this.getQueryParams();
    this.queryParamString = this.route.snapshot.fragment;
    this.apiService.getUserInfo(this.queryParamString).subscribe( userInfo => this.userInfo=userInfo);
  }
  ngOnInit(){
  }
  getQueryParams():any{
    let queryParams = {};
    let routeFragment = this.route.snapshot.fragment;
    let fragments = routeFragment.split("&");
    fragments.forEach(element => {
        queryParams[element.split("=")[0]] = element.split("=")[1];
    });
    return queryParams;
  }
}