import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { APIService } from './services/app.APIService.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiSerice:APIService , private router:Router){  }
  canActivate():boolean{
    if(this.apiSerice.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
