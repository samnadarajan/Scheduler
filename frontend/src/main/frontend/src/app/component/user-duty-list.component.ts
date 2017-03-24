import {Component, OnInit} from "@angular/core";
import {RestDataService} from "../service/rest-data.service";
import {UserProfileDuty} from "../class/UserProfileDuty";

@Component({
  selector: "user-duty-list",
  template: `
    <h5 class="center-align">{{title}}</h5>
    <div *ngFor="let userDuty of userDutyList">
      <div class="row center-align">
          <div class="col s12">
            <div class="card light-grey darken-1">
              <div class="card-content black-text">
                <span class="card-title">{{userDuty.dutyCode | lookupNameByCode:this.dutyMap}}</span>
                <span class="left-align">Due Date <p>{{userDuty.dutyDate | date}}</p></span>
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
    private restDataService: RestDataService
  ){}

  title = "My Duties";
  userDutyList: UserProfileDuty[];
  dutyMap: Map<String, String>;

  getAllDuties(): void {
    this.restDataService.getData("/userprofileduty/list")
      .subscribe(response => {
        this.userDutyList = response.userDutyList;
        this.dutyMap = response.dutyMap;
      });


  }

  ngOnInit(): void {
    this.getAllDuties();
  }

}

