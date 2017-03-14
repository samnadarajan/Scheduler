import {Injectable} from "@angular/core";
import {Duty} from "app/class/Duty";
import {DUTIES} from "app/data/mock-duties";

@Injectable()
export class DutyService {
  getAllDuties(): Promise<Duty[]> {
    return Promise.resolve(DUTIES);
  }
}
