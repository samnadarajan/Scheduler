import { Component } from '@angular/core';
import {MySchedulerComponent} from './component/my-scheduler.component';

@Component({
  selector: 'app-scheduler',
  template: `
    <nav class="blue-grey">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Scheduler</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/admin">Admin</a></li>
          <li><a routerLink="/myscheduler">User</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schedules';
}
