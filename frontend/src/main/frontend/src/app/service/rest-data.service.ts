import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RestDataService {
  constructor(private http: Http) {}
  ROOT: string = "/scheduler";
  headers = new Headers({
    'Content-Type': 'application/json'
  });
  options = new RequestOptions({headers: this.headers});

  getData(dataPath: string): Observable<any> {
    return this.http.get(this.ROOT + dataPath).map(response => response.json());
  }

  postData(dataPath: string, data: {}): Observable<Response> {
    return this.http.post(this.ROOT + dataPath, data, this.options);
  }
}
