import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';
import {FeatureRoutingModule} from './feature-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AddressFormComponent } from './address-form/address-form.component';
import { CardDetailsFormComponent } from './card-details-form/card-details-form.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
@NgModule({
  declarations: [
    UserProfileInfoComponent,
    ProfileFormComponent,
    AddressFormComponent,
    CardDetailsFormComponent,
    UserProfileEditComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports:[
    UserProfileInfoComponent
  ]
})
export class FeatureModule { }
