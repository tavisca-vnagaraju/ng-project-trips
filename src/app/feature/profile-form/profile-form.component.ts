import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  frmProduct: FormGroup;
  @Input() profile: Profile;
  title:string = "Update Profile";
  constructor(private profileService:ProfileService,private router:Router) { 
    this.profile = new Profile("","","",null,"","");
    this.frmProduct = new FormGroup({
      phone : new FormControl(this.profile.phone,
       Validators.compose([
         Validators.required,
         Validators.minLength(10),
         Validators.maxLength(10),
         Validators.pattern('[0-9]*')
      ])),
      DOB : new FormControl(this.profile.DOB,
        Validators.compose([
          Validators.required,
          CustomValidator.CheckDOB
      ])),
      gender:new FormControl(this.profile.gender,
        Validators.required,
      )
    });
  }
  
  ngOnInit(): void {
  }
  save(){
    this.profile.DOB = this.frmProduct.value.DOB;
    this.profile.gender = this.frmProduct.value.gender;
    this.profile.phone = this.frmProduct.value.phone;
    this.profileService.postProfile(this.profile).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/user/profile"]);
      }
    )
  }
}
