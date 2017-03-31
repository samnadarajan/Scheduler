import {Component, OnInit} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";
import {IUser} from "../class/IUser.model";
import {UserDetailComponent} from "./user-detail.component";
import {UserFormComponent} from "./user-form.component";

@Component({
  selector: "user-list",
  template: `
    <user-form #userForm></user-form>     
    <div class="row">
        <div class="col s11">
          <table class="highlight responsive-table">
              <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th></th>
                </tr>
              </thead>
              <tbody *ngFor="let user of users; let i = index">
                <tr [ngClass]="{'row-expanded-top':user.expanded}">
                  <td>{{user.firstName}}</td>
                  <td>{{user.lastName}}</td>
                  <td>{{user.phone}}</td>
                  <td>{{user.email}}</td>
                  <td><i class="material-icons">mode_edit</i></td>
                  <td (click)="expandCollapseUser(i)"><i class="fa" [ngClass]="{'fa-chevron-down': !user.expanded, 'fa-chevron-up': user.expanded}" aria-hidden="true"></i></td>
                </tr>
                <tr [hidden]="!user.expanded" [ngClass]="{'row-expanded-bottom':user.expanded}"><td colspan="6"><p>Hello</p>, <span>My name is {{user.firstName}}</span></td></tr>
              </tbody>
            </table>
        </div>
        <div class="col s1">
             <a class="btn-floating btn-large waves-effect waves-light orange darken-3" 
                [ngClass]="{'disabled': userForm.showUserForm }" 
                (click)="userForm.addUser()"><i class="material-icons">add</i>
             </a>
        </div>
     </div>
  `,
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  users: IUser[];

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

  ngOnInit() : void {
    this.getAllUsers();
  }
}
