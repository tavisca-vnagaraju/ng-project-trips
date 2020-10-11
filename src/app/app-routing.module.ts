import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Loading } from './components/loadingComponent/app.loading.component';
import { LoginComponent } from './components/LoginComponent/app.login.component';
import { TripsDetailsComponent } from './components/Trip Details Component/app.trips-details.component';
import { TripsListComponent } from './components/Trips List Component/app.trips-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login' ,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'tripsList', component: TripsListComponent , canActivate:[AuthGuard]},
  { path: 'trip/details/:id', component: TripsDetailsComponent, canActivate:[AuthGuard]},
  { path: 'loading', component: Loading },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
