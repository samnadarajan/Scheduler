import {Component, OnInit} from "@angular/core";
import {DutyService} from "app/service/duty.service";
import {UserProfileDuty} from "../class/UserProfileDuty";

@Component({
  selector: "user-duty-list",
  template: `
    <h5 class="center-align">{{title}}</h5>
    <div *ngFor="let duty of userDutyList">
      <div class="row center-align">
          <div class="col s12">
            <div class="card light-grey darken-1">
              <div class="card-content black-text">
                <span class="card-title">{{duty.dutyCode | lookupNameByCode:this.dutyMap}}</span>
                <span class="left-align">Due Date <p>{{duty.dutyDate | date}}</p></span>
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
export class UserDutyListComponent implements OnInit {
  constructor(
    private dutyService: DutyService
  ){}

  title = "My Duties";
  userDutyList: UserProfileDuty[];
  dutyMap: Map<String, String>;

  getAllDuties(): void {
    this.dutyService.getUserDuties()
      .subscribe(response => {
        this.userDutyList = response.userDutyList;
        this.dutyMap = response.dutyMap;
      });


  }

  ngOnInit(): void {
    this.getAllDuties();
  }

}

