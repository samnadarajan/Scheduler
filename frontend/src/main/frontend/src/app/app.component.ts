import { Component } from '@angular/core';
import {MySchedulerComponent} from './component/my-scheduler.component';

@Component({
  selector: 'app-scheduler',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schedules';
}
