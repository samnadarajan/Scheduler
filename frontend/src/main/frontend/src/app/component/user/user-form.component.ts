import {Component, Output, EventEmitter, OnInit, Input} from "@angular/core";
import {RestDataService} from "../../service/rest-data.service";
import {IUser} from "../../class/IUser.model";

/*
 * Contains form for the user
 * Receives a user object (empty if adding a new user) and form title from the UserListComponent
 * Passes user on form to UserListComponent
 */
@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html",
  styles: [`
    .secondary-title {
      color: #9e9e9e
    }
    `
  ]
})
export class UserFormComponent {
  constructor(private restDataService: RestDataService) {}
  @Input() user: IUser;
  @Input() formTitle;
  @Output() saveUserForm = new EventEmitter();
  @Output() cancelUserForm = new EventEmitter();

  save(formValues) {
    this.saveUserForm.emit(formValues);
  }

  cancel() {
    this.cancelUserForm.emit();
  }

  ngOnInit() {

  }
}
