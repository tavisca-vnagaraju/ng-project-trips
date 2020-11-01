import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/app.login.service';
import { UserInfo } from '../../models/app.userInfo.model';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent implements OnInit {
  userInfo:UserInfo;
  profile:Profile;
  constructor(private loginService:LoginService) { 
    this.profile = new Profile("","","",null,"","");
  }

  ngOnInit(): void {
    this.loginService.getUserInfo().subscribe(
      (data:UserInfo) => {
        this.userInfo = data;
        this.profile.email = this.userInfo.email;
        this.profile.name = this.userInfo.name;
        this.profile.nickname = this.userInfo.nickname; 
      }
    )
  }
}
