import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/LoginComponent/app.login.component';
import { TripsListComponent } from './components/Trips List Component/app.trips-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login' ,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'tripsList', component: TripsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
