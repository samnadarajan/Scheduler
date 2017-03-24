import {Component, Input} from "@angular/core";
import {User} from "../class/User";

@Component({
  selector: "user-detail",
  template: `
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{user.firstName}} {{user.lastName}}</span>
          <span class="data-label">Phone Number <p class="data">{{user.phone}}</p></span>
          <span class="data-label">Email <p class="data">{{user.email}}</p></span>
        </div>
        <div class="card-action">
          <a href="#">Edit</a>
        </div>
      </div>
    </div>
  `

})
export class UserDetailComponent {
  @Input() user: User;
}
