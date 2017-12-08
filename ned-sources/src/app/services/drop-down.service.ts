import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';



@Injectable()
export class DropDownService {

  constructor(private http: Http) { }

  getAccounts(): Observable<any> {

    let my_headers = new Headers();


    // my_headers.set("Content-Type", "application/x-www-form-urlencoded");
    // my_headers.set("Authorization", "Basic skhan:Gn123456");


    // console.log("Calling API GetAccounts");
    // return this.http.get("https://ec2-34-195-35-246.compute-1.amazonaws.com/ice/dashboard/getAccounts"
    //   ,new RequestOptions({headers:my_headers})).map((response) => {

    //     console.log(response.json());
    //     return response.json();
    //   });

    // my_headers.set("Authorization","Basic "+ btoa("postman:password"));
    // // my_headers.append("Access-Control-Allow-Origin","*");

    //   return this.http.get("https://postman-echo.com/basic-auth",
    // new RequestOptions({headers:my_headers})).map((response)=>{
    //   console.log(response);
    // });

    return this.http.get(environment.serverIpAddress + "/dashboard/getAccounts").map((response) => {
      console.log("API Call success");
      console.log(response.json());
      return response.json();
    });

  }

  getRegions(accounts): Observable<any> {
    let url = "getRegions";
    let data = "account=";

    if (this.checkNullOrEmpty(accounts))
      for (let i = 0; i < accounts.length; i++) {
        if (i == 0)
          data = data + accounts[i];
        else {
          data = data + "," + accounts[i];
        }
      }
    else {
      data = "";
    }


    console.log(data);
    return this.apiGet(url, data);

  }

  getProducts(accounts, regions): Observable<any> {

    let url = "getProducts";
    let accountParam = "account=";
    let regionParam = "region=";
    let data = "";

    if (accounts != undefined)
      for (let i = 0; i < accounts.length; i++) {
        if (i == 0)
          accountParam = accountParam + accounts[i];
        else {
          accountParam = accountParam + "," + accounts[i];
        }
      }

    if (regions != undefined)
      for (let i = 0; i < regions.length; i++) {
        if (i == 0)
          regionParam = regionParam + regions[i];
        else {
          regionParam = regionParam + "," + regions[i];
        }
      }

    if (accountParam != "account=" && regionParam == "region=") {
      data = accountParam;
    }
    if (accountParam == "account=" && regionParam != "region=") {
      data = regionParam;
    }
    if (regionParam != "region=" && accountParam != "account=") {
      data = accountParam + "&" + regionParam;
    }

    return this.apiGet(url, data);


  }


  getResourceChange(accounts, regions, products)
  {
    let url = "getResourceGroups";
    let data = { "account": this.processInput(accounts), "region": this.processInput(regions), "product": this.processInput(products)};

    data = this.processJson(data);

    return this.apiPost(url, data);
  }

  getOperations(accounts, regions, products, resources) {
    // {"account":"351151954641","region":"ap-northeast-1","product":"Simple Notification Service"}
    let url = "getOperations";
    let data = { "account": this.processInput(accounts), "region": this.processInput(regions), "product": this.processInput(products), "resource": this.processInput(resources) };

    data = this.processJson(data);

    return this.apiPost(url, data);

  }

  getUsageTypes(accounts, regions, products, operations) {
    let url = "getUsageTypes";
    let data = { "account": this.processInput(accounts), "region": this.processInput(regions), "product": this.processInput(products), "operations": this.processInput(operations) };

    data = this.processJson(data);


    return this.apiPost(url, data);
  }

  getData(input)
  {
    let url="getData";
    let data=input;
  
    return this.apiPost(url, data);

  }
  checkNullOrEmpty(value) {
    return (value != undefined && value != "");

  }

  processJson(input): any {

    for (let key in input) {
      if (input[key] === "")
        delete input[key];
    }

    return input;
  }

  processInput(input): String {
    try {
      let temp = "";
      if (input != undefined) {
        for (let i = 0; i < input.length; i++) {
          if (i == 0)
            temp = temp + input[i];
          else
            temp = temp + "," + input[i];
        }
      }
      return temp;
    }
    catch (error) {
      console.error(error);
      return "";

    }
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
}
