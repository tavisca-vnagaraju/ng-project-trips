import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetails } from '../models/card-details';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.css']
})
export class CardDetailsFormComponent implements OnInit {
  cardDetails: CardDetails;
  months:Array<string>;
  years:Array<string>;
  title:string = "Update Card Details";
  @Input() profile: Profile;
  constructor(private profileService:ProfileService,private router:Router) { 
      this.cardDetails = new CardDetails("","","","January",2020);
      this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.years = new Array(11);
  }
  ngOnInit(): void {
  }
  selectedMonth(event){
    this.cardDetails.ExpirationMonth = event.target.value;
  }
  selectedYear(event){
    this.cardDetails.ExpirationYear = event.target.value;
  }
  submitCard(){
    this.cardDetails.email = this.profile.email;
    this.profileService.postCardDetails(this.cardDetails).subscribe(
      data =>{
        console.log(data);
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