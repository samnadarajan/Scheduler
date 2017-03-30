import {Component} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";

@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html"
})
export class UserFormComponent {
  constructor(private restDataService: RestDataService) {}
  showUserForm: boolean = false;

  addUser() {
    this.showUserForm = true;
  }

  cancel() {
    this.showUserForm = false;
  }

  saveUser(formValues) {
    this.restDataService.postData("/user/save", formValues).subscribe(response => console.log(response));
  }
}
