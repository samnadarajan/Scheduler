import {Component} from "@angular/core";
import {UserDutyListComponent} from "app/component/user-duty-list.component";

@Component({
  selector: "user",
  template: `
  <div class="row">
      <div class="col s4">
        User Profile View
      </div>
      <div class="col s4">
        <user-duty-list></user-duty-list>
      </div>
      <div class="col s4">
        Place for Editing details
      </div>
  </div>
  <router-outlet></router-outlet>
  `
})
export class MySchedulerComponent {

}
