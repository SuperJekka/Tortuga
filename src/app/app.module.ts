import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CaptainsOrdersComponent } from './captains-orders/captains-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    CaptainsOrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
