import {Component, OnInit, EventEmitter} from "@angular/core";
import {RestDataService} from "../../service/rest-data.service";
import {IUser} from "../../class/IUser.model";
import {UserFormComponent} from "./user-form.component";
import {MaterializeAction} from "angular2-materialize";

/*
 * Shows list of users, complete with add/edit/delete operations
 * UserFormComponent a child component of this
 */
@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  users: IUser[];
  userForForm: IUser; //passed to the UserFormComponent as its user variable
  userFormTitle: string; //passed to the UserFormComponent as its formTitle variable
  userToDelete: IUser;
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
    this.userForForm = {} as IUser;
    this.userFormTitle = "Add User";
  }

  editUser(index: number) {
    this.showUserForm = true;
    this.userForForm = this.users[index];
    this.userFormTitle = "Edit"
  }

  /*
   * Handles both adding/editing for users
   */
  saveUser(user:IUser) {
    this.restDataService.postData("/user/save", user)
      .subscribe(response => {
        this.users = response.users;
        this.showUserForm = false;

      });
  }

  cancelUser() {
    this.showUserForm = false;
  }

  deleteUser(userProfileId: number) {
    this.restDataService.deleteData("/user/delete?userProfileId=" + userProfileId)
      .subscribe(response => {
        this.users = response.users;
      });
  }

  openDeleteUserModal(user: IUser) {
    this.userToDelete = user;
    this.deleteUserModal.emit({action:"modal",params:['open']});
  }

  closeDeleteUserModal() {
    this.deleteUserModal.emit({action:"modal",params:['close']});
  }

  ngOnInit() : void {
    this.getAllUsers();
    this.userToDelete = {} as IUser;
  }
}
