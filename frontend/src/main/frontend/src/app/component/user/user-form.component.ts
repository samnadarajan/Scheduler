import {Component, Output, EventEmitter, OnInit, Input} from "@angular/core";
import {RestDataService} from "../../service/rest-data.service";
import {IUser} from "../../class/IUser.model";

@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html"
})
export class UserFormComponent {
  constructor(private restDataService: RestDataService) {}
  @Input() user: IUser;
  @Output() saveNewUser = new EventEmitter();
  @Output() cancelNewUser = new EventEmitter();

  saveUser(formValues) {
    this.saveNewUser.emit(formValues);
  }

  cancel() {
    this.cancelNewUser.emit();
  }

  ngOnInit() {

  }
}
