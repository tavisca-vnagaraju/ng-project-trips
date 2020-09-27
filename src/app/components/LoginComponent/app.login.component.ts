import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AUTH0_APIS, AUTH0_PARAMS, AUTH_CONFIG } from 'src/environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class LoginComponent {
  constructor (private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
    const googleLogoURL = 
    "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
    this.matIconRegistry.addSvgIcon("logo",
                  this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }
  loginLink:string = "https://" + 
                      AUTH_CONFIG.DOMAIN + 
                      AUTH0_APIS.AUTHORIZE +
                      "?"+ AUTH0_PARAMS.RESPONSE_TYPE + "&" +
                      AUTH0_PARAMS.CLIENT_ID + "&" +
                      AUTH0_PARAMS.CONNECTION+ "&" +
                      AUTH0_PARAMS.REDIRECT_URI+"&" +
                      AUTH0_PARAMS.SCOPE;
}
