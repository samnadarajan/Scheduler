import {Injectable} from "@angular/core";
import {UserProfileDuty} from "app/class/UserProfileDuty";
import {Http, Headers, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class DutyService {
  constructor(private http: Http) {}
  response

  getUserDuties(): Observable<any> {
    return this.http.get("scheduler/userprofileduty/list").map(response => response.json());
  }

  handleError(error: any): Promise<any> {
    console.log("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
