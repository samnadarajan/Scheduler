import {Component} from "@angular/core";
import {UserListComponent} from "./user-list.component";
import {DutyListComponent} from "./duty-list.component";

@Component({
  selector: "admin",
  template: `
    <div class="padding-top"></div>
      <div class="container">
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s4"><a class="active" href="#users">Users</a></li>
              <li class="tab col s4"><a href="#duties">Duties</a></li>
              <li class="tab col s4"><a href="#test4">Duty Schedule</a></li>
            </ul>
          </div>
          <div id="users" class="col s12">
            <div class="padding-top"></div>
            <user-list></user-list>
          </div>
          <div id="duties" class="col s12">
            <div class="padding-top"></div>
            <duty-list></duty-list>
          </div>
      </div>
    </div>
  `
})
export class AdminComponent {

}
