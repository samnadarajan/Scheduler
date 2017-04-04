import {Component, OnInit} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";
import {IDuty} from "../class/IDuty";
import {DutyFormComponent} from "./duty-form.component";

@Component({
  selector: 'duty-list',
  template: `
    <div class="row">
      <div class="col s11">
        <duty-form #dutyForm></duty-form>
        <table class="highlight responsive-table">
              <thead>
              <tr>
                <th>Duty Code</th>
                <th>Duty Name</th>
                <th>Section Name</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr *ngFor="let duty of duties; let i = index">
                <td>{{duty.dutyCode}}</td>
                <td>{{duty.dutyName}}</td>
                <td>{{duty.sectionCode}}</td>
                <td><i class="fa fa-pencil fa-lg"></i></td>
                <td><i class="fa fa-trash fa-lg"></i></td>
              </tr>
              </tbody>
        </table>
      </div>
     <div class="col s1">
      <a class="btn-floating btn-large waves-effect waves-light orange darken-3"
         [ngClass]="{'disabled': dutyForm.showDutyForm }"
         (click)="dutyForm.addDuty()"><i class="material-icons">add</i>
      </a>
    </div>
  </div>
`
})
export class DutyListComponent implements OnInit {
  constructor(private restDataService: RestDataService) {}
  duties: IDuty[];

  getAllDuties() {
    this.restDataService.getData("/duty/list")
      .subscribe(response => this.duties = response.duties as IDuty[])
  }

  ngOnInit() : void {
    this.getAllDuties();
  }
}
