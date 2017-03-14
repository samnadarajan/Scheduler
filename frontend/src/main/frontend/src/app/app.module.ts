import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DutyListComponent } from './component/duty-list.component';
import {DutyService} from "./service/duty.service";

@NgModule({
  declarations: [
    AppComponent, DutyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DutyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
