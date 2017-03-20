import { Component } from '@angular/core';
import {UserComponent} from './component/user.component';

@Component({
  selector: 'app-scheduler',
  template: `
    <nav class="blue-grey">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Scheduler</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="sass.html">Admin</a></li>
          <li><a routerLink="/user">User</a></li>
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
