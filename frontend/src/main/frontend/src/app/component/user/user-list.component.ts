import {Component, OnInit, EventEmitter} from "@angular/core";
import {RestDataService} from "../../service/rest-data.service";
import {IUser} from "../../class/IUser.model";
import {UserDetailComponent} from "./user-detail.component";
import {UserFormComponent} from "./user-form.component";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  users: IUser[];
  showUserForm: boolean = false;
  deleteUserModal = new EventEmitter<string|MaterializeAction>();

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

  openDeleteUserModal(user: IUser) {
    this.deleteUserModal.emit({action:"modal",params:['open']});
  }

  closeDeleteUserModal() {
    this.deleteUserModal.emit({action:"modal",params:['close']});
  }

  ngOnInit() : void {
    this.getAllUsers();
  }
}
