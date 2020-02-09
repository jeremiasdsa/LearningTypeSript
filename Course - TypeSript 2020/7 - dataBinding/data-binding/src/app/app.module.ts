import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule//,
    // NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
