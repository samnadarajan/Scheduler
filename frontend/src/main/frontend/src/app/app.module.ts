import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserDutyListComponent} from './component/user-duty-list.component';
import {DutyService} from "./service/duty.service";
import {LookupNameByCodePipe} from "./pipe/lookupNameByCode.pipe";

@NgModule({
  declarations: [
    AppComponent, UserDutyListComponent, LookupNameByCodePipe
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
