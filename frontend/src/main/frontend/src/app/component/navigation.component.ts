import {Component} from "@angular/core";

@Component({
  selector: "nav-bar",
  template: `
    <div class="navbar-fixed">
       <nav class="light-blue darken-4">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">Scheduler</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a routerLink="/admin">Admin</a></li>
            <li><a routerLink="/myscheduler">My Profile</a></li>
          </ul>
        </div>
       </nav>
    </div>
  `
})
export class NavigationComponent {

}
