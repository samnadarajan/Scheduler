import {Component, Output, EventEmitter} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";

@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html"
})
export class UserFormComponent {
  constructor(private restDataService: RestDataService) {}
  @Output() saveNewUser = new EventEmitter();
  @Output() cancelNewUser = new EventEmitter();

  saveUser(formValues) {
    this.saveNewUser.emit(formValues);
  }

  cancel() {
    this.cancelNewUser.emit();
  }
}
