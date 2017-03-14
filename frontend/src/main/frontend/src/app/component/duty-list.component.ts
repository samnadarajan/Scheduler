import {Component, OnInit} from "@angular/core";
import {DutyService} from "app/service/duty.service";
import {Duty} from "../class/Duty";

@Component({
  selector: "duties",
  template: `
    <h5>{{title}}</h5>
    <div *ngFor="let duty of dutyList">
        <span>{{duty.name}}</span>
        <p>Occurs on {{duty.dutyDate}}</p>
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
    this.dutyService.getAllDuties().then(duties => this.dutyList = duties);
  }

  ngOnInit(): void {
    this.getAllDuties();
  }

}

