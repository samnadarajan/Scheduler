import {Component, Output, EventEmitter, OnInit, Input} from "@angular/core";
import {RestDataService} from "../../service/rest-data.service";
import {IUser} from "../../class/IUser.model";

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
  @Input() userFormTitle;
  @Output() saveUser = new EventEmitter();
  @Output() cancelUser = new EventEmitter();

  saveUserForm(formValues) {
    this.saveUser.emit(formValues);
  }

  cancelUserForm() {
    this.cancelUser.emit();
  }

  ngOnInit() {

  }
}
