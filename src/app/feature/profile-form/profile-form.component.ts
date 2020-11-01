import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../models/profile';
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  frmProduct: FormGroup;
  constructor() { 
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
  @Input() profile: Profile;
  ngOnInit(): void {
  }
  submitProfile(){
    console.log(this.profile);
  }
  save(){
    console.log(this.frmProduct.value);
  }
}
