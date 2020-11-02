import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/app.login.service';
import { AUTH0_APIS, AUTH0_PARAMS, AUTH_CONFIG } from 'src/environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})

export class LoginComponent {
  constructor (private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router:Router,
              private service:LoginService
  ) {
  const googleLogoURL = 
    "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
  this.matIconRegistry.addSvgIcon("logo",
                  this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    if(this.service.loggedIn()){
      this.router.navigate(['/tripsList']);
    }
  }

  loginLink:string = "https://" + 
                      AUTH_CONFIG.DOMAIN + 
                      AUTH0_APIS.AUTHORIZE +
                      "?"+ AUTH0_PARAMS.RESPONSE_TYPE + "&" +
                      AUTH0_PARAMS.CLIENT_ID + "&" +
                      AUTH0_PARAMS.CONNECTION+ "&" +
                      AUTH0_PARAMS.LOGIN_REDIRECT_URI+"&" +
                      AUTH0_PARAMS.SCOPE;

  loginWithGoogle(){
      window.location.href = this.loginLink;
  }
  
}
