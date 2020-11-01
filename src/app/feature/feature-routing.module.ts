import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';


const routes: Routes = [
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