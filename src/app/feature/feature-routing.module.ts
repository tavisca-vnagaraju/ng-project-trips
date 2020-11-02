import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';


const routes: Routes = [
  {
    path: 'profile/edit',
    component: UserProfileEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileInfoComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }