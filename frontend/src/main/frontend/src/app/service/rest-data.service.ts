import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RestDataService {
  constructor(private http: Http) {}
  ROOT: string = "/scheduler";

  getData(dataPath: string): Observable<any> {
    return this.http.get(this.ROOT + dataPath).map(response => response.json());
  }
}
