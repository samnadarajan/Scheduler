import {Component, OnInit} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";
import {IUser} from "../class/IUser.model";
import {UserDetailComponent} from "./user-detail.component";
import {UserFormComponent} from "./user-form.component";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  users: IUser[];
  showUserForm: boolean = false;

  getAllUsers(): void {
    this.restDataService.getData("/user/list")
      .subscribe(response => {
        this.users = response.users as IUser[];
        for (var i = 0; i < this.users.length; i++) {
          this.users[i].expanded = false;
        }
      });

  }

  expandCollapseUser(i: number) {
    this.users[i].expanded = !this.users[i].expanded
  }

  addUser() {
    this.showUserForm = true;
  }

  saveNewUser(user:IUser) {
    this.restDataService.postData("/user/save", user)
      .subscribe(response => {
        this.users.unshift(response.user);
        this.showUserForm = false;
      });
  }

  cancelNewUser() {
    this.showUserForm = false;
  }

  ngOnInit() : void {
    this.getAllUsers();
  }
}
