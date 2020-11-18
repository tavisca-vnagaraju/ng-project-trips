import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../models/address';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  @Input() profile: Profile;
  address: Address;
  title:string = "Update Address";
  constructor(private profileService:ProfileService,private router:Router) { 
    this.address = new Address("","","","","","","");
  }
  submitAddress(){
    this.address.email = this.profile.email;
    this.profileService.postAddress(this.address).subscribe(
      data =>{
        this.router.navigate(["/user/profile"]);
      }
    )
  }
  validateNumber(event) {
    //to prevent entering alphabets
    const keyCode = event.keyCode;
    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
}
