import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


import {GridsterItem} from './lib/index';
import {GridsterConfigS} from './lib/gridsterConfigS.interface';

import {GridsterConfig} from 'angular-gridster2'
@Component({
  selector: 'app-ice-grid',
  templateUrl: './ice-grid.component.html',
  styleUrls: ['./ice-grid.component.css']
})
export class IceGridComponent implements OnInit {

  options: GridsterConfigS;
  dashboard: Array<GridsterItem>;

  constructor() { }

  

  ngOnInit() {
    
    this.options = {
      gridType: 'fit',
      compactType: 'none',
      itemChangeCallback: IceGridComponent.itemChange,
      itemResizeCallback: IceGridComponent.itemResize,
      itemInitCallback: IceGridComponent.itemInit,
      itemRemovedCallback: IceGridComponent.itemRemoved,
      margin: 5,
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
      fixedColWidth: 105,
      fixedRowHeight: 105,
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
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
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
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false
    };

    if(localStorage.getItem('dashBoardPerference')==null){
    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0 , chartId:1},
      {cols: 4, rows: 4, y: 0, x: 2, chartId:2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 1, rows: 1, y: 2, x: 5},
      {cols: undefined, rows: undefined, y: 1, x: 0},
      {cols: 1, rows: 1, y: undefined, x: undefined},
      {cols: 2, rows: 2, y: 3, x: 5},
      {cols: 2, rows: 2, y: 2, x: 0},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 2, x: 4},
      {cols: 1, rows: 1, y: 2, x: 6}
    ];
  }
  else{
    this.dashboard=JSON.parse(localStorage.getItem('dashBoardPerference'));
  }

    console.log("-------------------");
    console.log(this.dashboard);
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
    console.info('eventStop', item, itemComponent, event);
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  static itemInit(item, itemComponent) {
    console.info('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item, itemComponent) {
    console.info('itemRemoved', item, itemComponent);
  }

  emptyCellClick(event, item) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }

  savePreference(dashboard)
  {
    console.log("preference Saved");
    console.log(dashboard);
    localStorage.setItem("dashBoardPerference",JSON.stringify(dashboard));
    
  }
}
