//modules start
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//modules end

//components imports start
import { AppComponent } from './app.component';
import { LoginComponent } from './components/LoginComponent/app.login.component';
import {AdditionComponent} from './components/jestSetupTest/app.addition.component';
import {UserProfileComponent} from './components/auth0 setup Test/app.user-profile';
import {AuthButtonComponent} from './components/auth0 setup Test/app.auth-button.component';
import { TripsListComponent } from './components/Trips List Component/app.trips-list.component';
//components imports end

import { AUTH_CONFIG } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdditionComponent,
    TripsListComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: AUTH_CONFIG.DOMAIN,
      clientId: AUTH_CONFIG.CLIENT_ID
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
