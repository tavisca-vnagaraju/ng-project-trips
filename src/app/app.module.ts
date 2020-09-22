import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components imports start
import {AdditionComponent} from './components/jestSetupTest/app.addition.component';
//components imports end
@NgModule({
  declarations: [
    AppComponent,AdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AdditionComponent]
})
export class AppModule { }
