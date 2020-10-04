//modules start
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//modules end

//components imports start
import { AppComponent } from './app.component';
import { Loading } from './components/loadingComponent/app.loading.component';
import { LoginComponent } from './components/LoginComponent/app.login.component';
import {AdditionComponent} from './components/jestSetupTest/app.addition.component';
import {UserProfileComponent} from './components/auth0 setup Test/app.user-profile';
import { AppHeaderComponent } from './components/headerComponent/app.header.component';
import {AuthButtonComponent} from './components/auth0 setup Test/app.auth-button.component';
import { TripsListComponent } from './components/Trips List Component/app.trips-list.component';
//components imports end

import { AUTH_CONFIG } from 'src/environments/environment';
import  { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    Loading,
    AppComponent,
    LoginComponent,
    AdditionComponent,
    TripsListComponent,
    AppHeaderComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: AUTH_CONFIG.DOMAIN,
      clientId: AUTH_CONFIG.CLIENT_ID
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
