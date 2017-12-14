import { Component, OnInit } from '@angular/core';
import { DynamicServiceService } from '../../../dynamic-service.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-manage-dashboards',
  templateUrl: './manage-dashboards.component.html',
  styleUrls: ['./manage-dashboards.component.css']
})
export class ManageDashboardsComponent implements OnInit {


  dashboards: Array<object>;
  selectedDashboard: any;
  msgs: any;
  constructor(private dynamicService: DynamicServiceService, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.dynamicService.getDashboards().subscribe(
      result => {
        console.log("Manage Dashboards Data")
        console.log(result);
        let temp = [];
        for (let i = 0; i < result.length; i++) {
          temp.push({ Name: result[i].title, Owner: result[i].username, id: result[i].id });
        }
        console.log(temp);
        this.dashboards = temp;
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

  confirm(data, dt): boolean {
    let confirmation = false;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        {
          for (let i = 0; i < this.dashboards.length; i++) {
            if (data.id === this.dashboards[i]["id"]) {
              this.dynamicService.deleteDashboard(this.dashboards[i]["id"]).subscribe((result) => {
                console.log(result);
                this.dashboards.splice(i, 1);
              },
                (error) => {
                  console.log(error);
                }
              )
           }
          }
        }
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
        confirmation = false;
      }
    });
    return confirmation;
  }


  removeDashboard(data, dt) {
    this.confirm(data, dt)
  }

  test(data) {
    console.log("Data CLikced");
    console.log(data);
    this.router.navigate(['/dashboard', data.id]);
  }

}
