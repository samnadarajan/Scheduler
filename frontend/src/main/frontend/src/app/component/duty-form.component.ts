import {Component} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";

@Component({
  selector: 'duty-form',
  templateUrl: "./duty-form.component.html"
})
export class DutyFormComponent {
  constructor(private restDataService: RestDataService) {}
  showDutyForm: boolean = false;

  addDuty() {
    this.showDutyForm = true;
  }

  cancel() {
    this.showDutyForm = false;
  }

  saveDuty(formValues) {
    this.restDataService.postData("/duty/save", formValues).subscribe(response => console.log(response));
  }
}
