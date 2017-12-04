import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-dashboards',
  templateUrl: './manage-dashboards.component.html',
  styleUrls: ['./manage-dashboards.component.css']
})
export class ManageDashboardsComponent implements OnInit {

  
      cars: Array<object>;
     constructor() { }

      ngOnInit() {
        var a= [{
          Name: "EC2 Analysis",
          Owner: "Justin Franks",
          //Action: "<i class=\'fa fa-files-o\' ></i>"
          //Action: ""
        },
        {
          Name: "EC2 Savings",
          Owner: "sanjivani",
         // Action: "red"
        },
        {
          Name: "Justin Franks Dashboard",
          Owner: "Justin Franks",
          //Action: "red"
        },
        {
          Name: "EC2 Reservations",
          Owner: "Shoeb",
          //Action: "red"
        },
        {
          Name: " Finance (Cost)",
          Owner: "Justin Franks",
         // Action: "red"
        },
        {
          Name: "Operations (Usage)",
          Owner: "rajendra",
         // Action: "red"
        },
        {
          Name: "red",
          Owner: "Mangesh",
         // Action: "red"
        }];
        this.cars=a;
        
        
        //this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        //this.carService.getCarsSmall().then(cars => this.cars2 = cars);
    }

    changeSort(event) {
        if (!event.order) {
          //this.sortF = 'year';
        } else {
          //this.sortF = event.field;
        }
    }
}
