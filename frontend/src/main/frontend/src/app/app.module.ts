import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserDutyListComponent} from './component/user-duty-list.component';
import {LookupNameByCodePipe} from "./pipe/lookupNameByCode.pipe";
import {MySchedulerComponent} from "./component/my-scheduler.component";
import {AppRoutingModule} from "./app-routing.module";
import {AdminComponent} from "./component/admin.component";
import {RestDataService} from "./service/rest-data.service";
import {UserListComponent} from "./component/user-list.component";
import {UserDetailComponent} from "./component/user-detail.component";
import {NavigationComponent} from "./component/navigation.component";
import {UserFormComponent} from "./component/user-form.component";
import {LoginComponent} from "./component/login.component";
import {DutyListComponent} from "./component/duty-list.component";
import {DutyFormComponent} from "./component/duty-form.component";
import {MaterializeModule} from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent, UserDutyListComponent, LookupNameByCodePipe, MySchedulerComponent, AdminComponent, UserListComponent, UserDetailComponent,
    NavigationComponent, UserFormComponent, LoginComponent, DutyListComponent, DutyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [RestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
