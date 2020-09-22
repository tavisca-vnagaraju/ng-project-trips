// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components imports start
import {AdditionComponent} from './components/jestSetupTest/app.addition.component';
import {AuthButtonComponent} from './components/auth0 setup Test/app.auth-button.component';
import {UserProfileComponent} from './components/auth0 setup Test/app.user-profile';
//components imports end
@NgModule({
  declarations: [
    AppComponent,AdditionComponent,AuthButtonComponent,UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'DOMAIN_NAME_HERE',
      clientId: 'CLIENT_ID_HERE'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
