import {Component, OnInit} from "@angular/core";
import {DutyService} from "app/service/duty.service";
import {Duty} from "../class/Duty";

@Component({
  selector: "duties",
  template: `
    <h5 class="center-align">{{title}}</h5>
    <div *ngFor="let duty of dutyList">
      <div class="row center-align">
          <div class="col s12">
            <div class="card light-grey darken-1">
              <div class="card-content black-text">
                <span class="card-title">{{duty.dutyName}}</span>
                <span class="left-align">Due Date</span><p>{{duty.beginDate}}</p>
              </div>
              <div class="card-action">
                <a href="#">Delete</a>
                <a href="#">Switch</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  `
})
export class DutyListComponent implements OnInit {
  constructor(
    private dutyService: DutyService
  ){}

  title = "My Duties";
  dutyList: Duty[];

  getAllDuties(): void {
    this.dutyService.getAllDuties().then(dutyList => this.dutyList = dutyList);
  }

  ngOnInit(): void {
    this.getAllDuties();
  }

}

