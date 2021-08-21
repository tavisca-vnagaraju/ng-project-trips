//modules start
import { NgModule , CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModule } from './feature/feature.module';
//modules end
import './lit-elements/app.MyElement.litelement';
import './lit-elements/app.footer.litelement';
import {HeadingElement} from './ng-element/app.heading.element';
//components imports start
import { AppComponent } from './app.component';
import { Loading } from './components/loadingComponent/app.loading.component';
import { LoginComponent } from './components/LoginComponent/app.login.component';
import { TripsDetailsComponent } from './components/Trip Details Component/app.trips-details.component';
import {AdditionComponent} from './components/jestSetupTest/app.addition.component';
import {UserProfileComponent} from './components/auth0 setup Test/app.user-profile';
import { AppHeaderComponent } from './components/headerComponent/app.header.component';
import {AuthButtonComponent} from './components/auth0 setup Test/app.auth-button.component';
import { TripsListComponent } from './components/Trips List Component/app.trips-list.component';
import {FlightDetailsComponent} from './components/flightDetailsComponent/app.flight-details.component';
import { HotelDetailsComponent } from './components/hotelDetailsComponent/app.hotel-details.component';
import { CarDetailsComponent } from './components/carDetailsComponent/app.car-details.component';
import { ConfirmDialogComponent } from './components/confirmDialogCommponent/confirm-dialog.component';
//components imports end

import  { AuthGuard } from './auth.guard';
import { ColorDirective } from './directives/app.color.directive';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {loginReducer} from './ngrx/state/login/login.reducer';
import { createCustomElement } from '@angular/elements';
import { EffectsModule } from '@ngrx/effects';
import { mainReducers } from './reducers/app.reducers';
import { TripsEffects } from './effects/app.trips.effect';
@NgModule({
  declarations: [
    Loading,
    AppComponent,
    LoginComponent,
    AdditionComponent,
    TripsListComponent,
    AppHeaderComponent,
    AuthButtonComponent,
    UserProfileComponent,
    TripsDetailsComponent,
    FlightDetailsComponent,
    HotelDetailsComponent,
    CarDetailsComponent,
    ConfirmDialogComponent,
    ColorDirective,
    HeadingElement
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeatureModule,
    StoreModule.forRoot(mainReducers),
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forRoot([TripsEffects]),
    StoreDevtoolsModule.instrument({
      name:"Booking Manager",
      maxAge:40,
    }),
  ],
  providers: [AuthGuard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ConfirmDialogComponent,HeadingElement],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){
    const headingElement = createCustomElement(HeadingElement,{injector:this.injector});
    customElements.define('heading-element',headingElement);
  }
}
