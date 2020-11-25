import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/app.login.service';
import { ProfileService }   from '../services/profile.service';
import { UserInfo } from '../../models/app.userInfo.model';
import { Profile } from '../models/profile';
import { Address} from '../models/address';
import {CardDetails } from '../models/card-details';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent implements OnInit {
  userInfo:UserInfo;
  profile:Profile;
  address:Address;
  cardDetails:CardDetails;
  errorResponse:any;
  constructor(private loginService:LoginService,private profileService:ProfileService) { 
    this.profile = new Profile("","","",null,"","");
  }

  ngOnInit(): void {
    this.loginService.getUserInfo().subscribe(
      (data:UserInfo) => {
        this.userInfo = data;
        this.profileService.getProfile(this.userInfo.email).subscribe(
          (dataProfile:Profile) => {
            if(dataProfile!=null){
              this.profile = dataProfile;
            }
            else{
              this.profile.email = this.userInfo.email;
              this.profile.name = this.userInfo.name;
              this.profile.nickname = this.userInfo.nickname;
            }
          },
          (error) =>{
            this.errorResponse = error
          }
        );
        this.profileService.getAddress(this.userInfo.email).subscribe(
          (dataProfile:Address) => {
              this.address = dataProfile;
          },
          (error) =>{
            this.errorResponse = error
          }
        );
        this.profileService.getCardDetails(this.userInfo.email).subscribe(
          (dataProfile:CardDetails) => {
              this.cardDetails = dataProfile;
          },
          (error) =>{
            this.errorResponse = error
          }
        );
      }
    )
  }
}
