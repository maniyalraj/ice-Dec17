import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { AdItem } from './aditem';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ToPumpComponent } from './to-pump/to-pump.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { environment } from '../environments/environment.prod';
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

  getPieChartData(): Observable<any> {
    return this.http.get("./assets/input.json").map((response) => {
      console.log("Chart Response");
      console.log(response.json().data);
      return [new AdItem(PieChartComponent, {
        data: {
          labels: ['A', 'B', 'C'],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ]
            }]
        }
      })];
    });

  }

  getSingleDashboard(data): Observable<any> {
    
    return this.http.get("http://woi-lt-259:9090/ice/userDashboard/show/"+data).map((response) => {
      return response.json();
    }
    )
  }

  updateDashboardTitle(id,data):Observable<any>{
    return this.http.put("http://woi-lt-259:9090/ice/userDashboard/update/"+id,data).map((response) => {
      return response.json();
    }
    )
  }

  getDashboards(): Observable<any> {
    
    return this.http.post("http://woi-lt-259:9090/ice/userDashboard/index",{}).map((response) => {
      return response.json();
    }
    )
  }


  saveUpdateWidget(data):Observable<any>{

    return this.http.post("http://woi-lt-259:9090/ice/widget/save",data).map((response) => {
      return response.json();
    }
    )
    
  }

  updateWidget(id,data) : Observable<any>{

    return this.http.put("http://woi-lt-259:9090/ice/widget/update/"+id,data).map((response) => {
      return response.json();
    }
    )
  }

  getWidgets(data):Observable<any>{
    
        return this.http.post("http://woi-lt-259:9090/ice/widget/index",data).map((response) => {
          return response.json();
        }
        )
    
      }

  getOneWidget(data):Observable<any>{
    
    return this.http.get("http://woi-lt-259:9090/ice/widget/show/"+data).map((response) => {
      return response.json();
    }
    )

  }

  saveDashboard(data): Observable<any>{

    return this.http.post("http://woi-lt-259:9090/ice/userDashboard/save",data).map((response)=>{
      return response.json();
    })

  }

  deleteDashboard(data): Observable<any>{
  
    return this.http.delete('http://woi-lt-259:9090/ice/userDashboard/delete/'+data).map((response) => {
    return response.json();
  }
  )
  }

  deleteWidget(widgetId): Observable<any>{
    
    return this.http.delete('http://woi-lt-259:9090/ice/widget/delete/'+widgetId).map((response) => {
      return response.json();
    }
    )
  }


  apiGet(url, data): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/form-data');
    url = environment.serverIpAddress + "/dashboard/" + url + "?" + data;
    return this.http.get(url).map((response) => {
      return response.json();
    })
  }

  apiPost(url, data): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/form-data');
    url = environment.serverIpAddress + "/dashboard/" + url;
    return this.http.post(url, data, new RequestOptions({ headers: headers })).map((response) => {
      return response.json();
    })
  }

  // createUser(roleId, userName ): Observable<any> {
  //   let formData = new FormData();
  //   formData.append("roleId", roleId);
  //   formData.append("username", userName);
  //   return this.http.post('http://woi-lt-259:8080/ice/user/save', formData).map((response)=> {
  //     return response.json();
  //   })
  //} 

  

    // getApi(url): Response{
      
    //   return this.http.get(this.url).map((response)=>{
    //     return response;
    //   })
    // }
  


}




