import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { AdItem } from './aditem';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ToPumpComponent } from './to-pump/to-pump.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
@Injectable()
export class DynamicServiceService {

  constructor(private http: Http) { }

  getData() {

    return [
      new AdItem(ToPumpComponent, { name: 'Bombasto', bio: 'Brave as they come' }),

      new AdItem(ToPumpComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),

      new AdItem(ToPumpComponent, { name: '2', bio: 'Brave 2' }),

      new AdItem(ToPumpComponent, { name: '3', bio: 'Brave 3' }),
    ]
  }

  getOne(index): Observable<any> {
    //return[new AdItem(ToPumpComponent, {name: 'PieChart', bio: 'Brave as they come'})]
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // return this.http.get("https://jsonplaceholder.typicode.com/posts/"+index
    // ,new RequestOptions({ headers: headers })).map((response) => {
    //   return response.json();
    // });

    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + index).map((response) => {
      // return response.json();
      return [new AdItem(ToPumpComponent, { name: response.json().title, bio: 'Brave as they come' })]
    });
  }
  getChartData(): Observable<any> {
    return this.http.get("./assets/input.json").map((response) => {
      console.log("Chart Response");
      console.log(response.json().data);
      return [new AdItem(BarChartComponent, {
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        }
      })];
    })

  }

}




