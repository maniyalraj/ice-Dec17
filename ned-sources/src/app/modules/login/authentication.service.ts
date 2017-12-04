import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://' + environment.serverIpAddress + '/ned-sources-api/login',
      JSON.stringify({ username: username, password: password }),
      new RequestOptions({ headers: headers }))
      .map((response) => {
        if (response.json().success) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username }));
          return true;
        }
        else {
          //return false to indicate failed login
          return false;
        }
      });
  }

}
