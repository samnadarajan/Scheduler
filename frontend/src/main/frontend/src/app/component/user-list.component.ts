import {Component, OnInit} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";
import {User} from "../class/User";
import {UserDetailComponent} from "./user-detail.component"

@Component({
  selector: "user-list",
  template: `
    <div class="center-align" *ngFor="let user of users">
        <div class="row">
            <user-detail [user]="user"></user-detail>
        </div>
    </div>
  `
})
export class UserListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  users: User[];

  getAllUsers(): void {
    this.restDataService.getData("/user/list")
      .subscribe(response => this.users = response.users);
  }

  ngOnInit() : void {
    this.getAllUsers();
  }
}
