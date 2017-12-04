import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
 options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }
  //constructor() { }

  ngOnInit() {
    this.options = {
     itemChangeCallback: DashboardComponent.itemChange,
     itemResizeCallback: DashboardComponent.itemResize,
   };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }
  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

}

