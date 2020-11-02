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
  constructor(private loginService:LoginService,private profileService:ProfileService) { 
    this.profile = new Profile("","","",null,"","");
  }

  ngOnInit(): void {
    this.loginService.getUserInfo().subscribe(
      (data:UserInfo) => {
        this.userInfo = data;
        this.profile.email = this.userInfo.email;
        this.profile.name = this.userInfo.name;
        this.profile.nickname = this.userInfo.nickname;
        this.profileService.getProfile(this.userInfo.email).subscribe(
          (dataProfile:Profile) => {
            if(dataProfile != null){
              this.profile = dataProfile;
            }
          }
        );
        this.profileService.getAddress(this.userInfo.email).subscribe(
          (dataProfile:Address) => {
            if(dataProfile != null){
              this.address = dataProfile;
            }
          }
        );
        this.profileService.getCardDetails(this.userInfo.email).subscribe(
          (dataProfile:CardDetails) => {
            if(dataProfile != null){
              this.cardDetails = dataProfile;
            }
          }
        );
      }
    )
  }
}
