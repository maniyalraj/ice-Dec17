import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { AdvancedSearchForm } from '../modules/programming-services/prog-serv-searchbox/prog-serv-searchbox.component';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment'

@Injectable()
export class ProgServService {

  responseSource: any;
  currentResponse: any;

  constructor(private http: Http) { }

  /*advancedSearchServerCall(advancedSearchServerCallBean: AdvancedSearchForm): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://' + environment.serverIpAddress + '/ned-sources-api/advanced-search',
      JSON.stringify(advancedSearchServerCallBean),
      new RequestOptions({ headers: headers }))
      .map((response) => {
        this.responseSource = new BehaviorSubject<Response>(response);
        this.currentResponse = this.responseSource.asObservable();
        return response.json();
      });
  }

  getEditProgrammingServiceDetails(progServiceId: string): Observable<any> {
    return this.http.get('http://' + environment.serverIpAddress + '/ned-sources-api/edit-prog-service/' + progServiceId)
      .map((response) => {
        return response.json();
      });
   }*/
}