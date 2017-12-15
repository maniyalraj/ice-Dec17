import { ChangeDetectionStrategy, Component, OnInit, OnChanges } from '@angular/core';


import { GridsterItem } from './lib/index';
import { GridsterConfigS } from './lib/gridsterConfigS.interface';

import { GridsterConfig } from 'angular-gridster2'
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DynamicServiceService } from '../dynamic-service.service';

@Component({
  selector: 'app-ice-grid',
  templateUrl: './ice-grid.component.html',
  styleUrls: ['./ice-grid.component.css']
})
export class IceGridComponent implements OnInit, OnChanges, OnDestroy {

  options: GridsterConfigS;
  dashboard: Array<GridsterItem>;
  id: any;
  dashboardTitle: any;
  constructor(private route: ActivatedRoute, private router: Router, private dynamicService: DynamicServiceService) { }



  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      console.log("ID==");
      console.log(params['id']); // (+) converts string 'id' to a number
      this.id = params['id'];
      // In a real app: dispatch action to load the details here.


    });

    this.options = {
      gridType: 'fixed',//fit
      compactType: 'none',
      itemChangeCallback: IceGridComponent.itemChange,
      itemResizeCallback: IceGridComponent.itemResize,
      itemInitCallback: IceGridComponent.itemInit,
      itemRemovedCallback: IceGridComponent.itemRemoved,
      margin: 20,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: IceGridComponent.eventStop
      },
      resizable: {
        delayStart: 0,
        enabled: true,
        stop: IceGridComponent.eventStop,
        handles: {
          s: false,
          e: false,
          n: false,
          w: false,
          se: true,
          ne: false,
          sw: false,
          nw: false
        }
      },
      api: {
        resize: IceGridComponent.eventStop,
        optionsChanged: IceGridComponent.eventStop,
        getNextPossiblePosition: IceGridComponent.eventStop,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false
    };

    this.dynamicService.getSingleDashboard(this.id).subscribe((result) => {
      this.dashboardTitle = result.title;
      let data = { "dashboardId": this.id };

      this.dynamicService.getWidgets(data).subscribe((result) => {

        this.dashboard = []

        for (let i = 0; i < result.length; i++) {
          this.dashboard.push({
            cols: result[i].columnSize,
            rows: result[i].rowSize,
            chartId: result[i].id,
            x: result[i].xPosition,
            y:result[i].yPosition,
          });
        }


      })

    })
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



  static eventStop(item, itemComponent, event) {
    //  console.info('eventStop', item, itemComponent, event);
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
   
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
    console.log(itemComponent.dashboard);
    localStorage.removeItem("dashBoardPerference");
    // localStorage.setItem("dashBoardPerference",JSON.stringify(dashboard));
  }

  static itemInit(item, itemComponent) {
    // console.info('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item, itemComponent) {
    console.info('itemRemoved', item, itemComponent);
  }

  emptyCellClick(event, item) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }

  updateDashboardTitle() {
    let data = {
      "title": this.dashboardTitle,
      "user": 1
    }
    this.dynamicService.updateDashboardTitle(this.id, data).subscribe((result) => {
      console.log("Title Updated");
    });
  }

  createWidget() {
    this.router.navigate(['./create-widget', { "dashboardId": this.id, "widgetId": 1 }]);
  }

  savePreference(dashboard) {
    console.log("preference Saved");
    console.log(dashboard);
    localStorage.setItem("dashBoardPerference", JSON.stringify(dashboard));

  }

  ngOnChanges() {
    console.log("----->");
    console.log(this.dashboard);

  }

  ngOnDestroy() {
    console.log("-----XX");
    console.log(this.dashboard);
    localStorage.setItem("dashBoardPerference", JSON.stringify(this.dashboard));
  }
}
