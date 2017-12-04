import { Component, OnInit } from '@angular/core';
import { DynamicServiceService } from '../../../dynamic-service.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-dashboards',
  templateUrl: './manage-dashboards.component.html',
  styleUrls: ['./manage-dashboards.component.css']
})
export class ManageDashboardsComponent implements OnInit {

  
    cars: Array<object>;
    selectedDashboard:any;
     constructor(private dynamicService: DynamicServiceService, private router: Router) { }

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

        this.dynamicService.getDashboards().subscribe(
          result => {
            console.log("Manage Dashboards Data")
            console.log(result);
            let temp=[];
            for(let i=0; i<result.length; i++)
            {
              temp.push({Name:result[i].title, Owner:result[i].username, id:result[i].id});
            }
            console.log(temp);
            this.cars=temp;
          }
        )
        
    }

    changeSort(event) {
        if (!event.order) {
          //this.sortF = 'year';
        } else {
          //this.sortF = event.field;
        }
    }

    removeDashboard(data,dt)
    {
      console.log("Removing Dashboard...");
      //console.log(data);

      for(let i=0; i<this.cars.length; i++)
      {
                
        if(data.id === this.cars[i]["id"])
        {
          console.log(this.cars[i]["id"]);
          this.cars.splice(i,1);
          console.log(this.cars);
          console.log(dt);
         
        }
      }

      
      
    }

    test(data)
    {
      console.log("Data CLikced");
      console.log(data);
      this.router.navigate(['/iceGrid', data.id]);
    }
    
   }
