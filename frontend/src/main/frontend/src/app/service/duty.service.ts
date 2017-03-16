import {Injectable} from "@angular/core";
import {Duty} from "app/class/Duty";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DutyService {
  constructor(private http: Http) {}

  getAllDuties(): Promise<Duty[]> {
    return this.http.get("scheduler/duty/list").toPromise().then(response => response.json() as Duty[]).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.log("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
