import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address: Address;
  constructor() { 
    this.address = new Address("","","","","","");
  }
  ngOnInit(): void {
  }
  submitAddress(){
    console.log(this.address);
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
