import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { DynamicServiceService } from '../../../dynamic-service.service';
import { Sidebar } from './sidebar';
import { DropDownService } from '../../../services/drop-down.service';
import { DynamicDirective } from '../../../directives/dynamic.directive';

import { AdComponent } from '../../../ad.component';
import { AdItem } from '../../../aditem';
import { BarChartComponent } from '../../../bar-chart/bar-chart.component';
import { PieChartComponent } from '../../../pie-chart/pie-chart.component';



@Component({
  selector: 'app-create-widget',
  templateUrl: './create-widget.component.html',
  styleUrls: ['./create-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateWidgetComponent implements OnInit {


  @ViewChild(DynamicDirective) adHost: DynamicDirective;

  widgetType: SelectItem[];
  groupby: SelectItem[];
  limit: SelectItem[];
  Agreegate: SelectItem[];
  account: SelectItem[];
  region: SelectItem[];
  product: SelectItem[];
  operation: SelectItem[];
  usageType: SelectItem[];
  cars: SelectItem[];
  acc: SelectItem[];
  reg: SelectItem[];
  prod: SelectItem[];
  opera: SelectItem[];
  resourceGroup: SelectItem[];
  previewClass: any = "preview_small_rect";
  small_rect: any = "active";
  small_square: any;
  vertical_rect: any;
  large_square: any;
  large_vertical_rect: any;
  selectedAccounts: any[];
  selectedRegions: any[];
  selectedProducts: any[];
  selectedOperations: any[];
  selectedUsageType: any[];
  selectedResourceGroup: any[];
  selectedwidgetType: any;
  selectedGroupBy: any;
  selectedLimit: any;
  selectedAgreegate: any;
  isCost: boolean;
  selectedRange: any;
  previewOptions: any;
  previewData: any;
  isPreview: boolean = true;




  constructor(private dropDownService: DropDownService, private componentFactoryResolver: ComponentFactoryResolver) {

    this.widgetType = [];
    this.widgetType.push({ label: 'Widget Type', value: null });
    this.widgetType.push({ label: 'Bar', value: 'bar' });
    this.widgetType.push({ label: 'Pie', value: 'pie' });
    this.widgetType.push({ label: 'Table', value: 'table' });


    this.groupby = [];
    this.groupby.push({ label: 'Operation', value: 'Operation' });
    this.groupby.push({ label: 'Account', value: 'Account' });
    this.groupby.push({ label: 'Region', value: 'Region' });
    this.groupby.push({ label: 'Product', value: 'Product' });
    this.groupby.push({ label: 'Usage Type', value: 'UsageType' });


    this.limit = [];
    this.limit.push({ label: 'Top', value: 'Top' });
    this.limit.push({ label: 'Bottom', value: 'Bottom' });


    this.Agreegate = [];
    this.Agreegate.push({ label: 'Hourly', value: 'hourly' });
    this.Agreegate.push({ label: 'Daily', value: 'daily' });
    this.Agreegate.push({ label: 'Weekly', value: 'weekly' });
    this.Agreegate.push({ label: 'Monthly', value: 'monthly' });


    this.dropDownService.getAccounts().subscribe((result) => {
      this.acc = this.formatDropDownJson(result.data);
      this.onAccountChange();
    });


  }

  formatDropDownJson(inputData): any {
    let temp = []
    for (let i = 0; i < inputData.length; i++) {
      temp.push({ "label": inputData[i].name, "value": inputData[i].name });
    }
    return temp;
  }

  ngOnInit() {
  }

  changeClass(className) {

    try {
      this.preview();
    }
    catch (error) {

    }
    switch (className) {
      case "small_rect":
        {
          this.small_rect = "active";
          this.small_square = "";
          this.vertical_rect = "";
          this.large_square = "";
          this.vertical_rect = "";
          this.large_vertical_rect = "";
        }
        break;
      case "small_square":


        {
          this.small_rect = "";
          this.small_square = "active";
          this.vertical_rect = "";
          this.large_square = "";
          this.large_vertical_rect = "";
        }
        break;
      case "vertical_rect":
        {
          this.small_rect = "";
          this.small_square = "";
          this.vertical_rect = "active";
          this.large_square = "";
          this.large_vertical_rect = "";

        }
        break;
      case "large_square":
        {
          this.small_rect = "";
          this.small_square = "";
          this.vertical_rect = "";
          this.large_square = "active";
          this.large_vertical_rect = "";
        }
        break;
      case "large_vertical_rect":
        {
          this.small_rect = "";
          this.small_square = "";
          this.vertical_rect = "";
          this.large_square = "";
          this.large_vertical_rect = "active";
        }
        break;

    }
    this.previewClass = "preview_" + className;
  }

  onAccountChange() {
    console.log("getting regions");
    this.dropDownService.getRegions(this.selectedAccounts).subscribe((result) => {
      this.reg = this.formatDropDownJson(result.data);
      this.selectedRegions = this.getIntersection(this.selectedRegions, this.reg);
      this.onRegionsChange();
    })
  }

  onRegionsChange() {
    this.dropDownService.getProducts(this.selectedAccounts, this.selectedRegions).subscribe((result) => {
      this.prod = this.formatDropDownJson(result.data);
      this.selectedProducts = this.getIntersection(this.selectedProducts, this.prod);
      this.onProductsChange();
    })
  }

  onProductsChange() {
    this.dropDownService.getResourceChange(this.selectedAccounts, this.selectedRegions, this.selectedProducts).subscribe((result) => {
      this.resourceGroup = this.formatDropDownJson(result.data);
      this.selectedResourceGroup = this.getIntersection(this.selectedResourceGroup, this.resourceGroup);
      this.onResourceChange();
    })
  }


  onResourceChange() {

    this.dropDownService.getOperations(this.selectedAccounts, this.selectedRegions, this.selectedProducts, this.selectedResourceGroup).subscribe((result) => {
      this.opera = this.formatDropDownJson(result.data);
      this.selectedOperations = this.getIntersection(this.selectedOperations, this.opera);
      this.onOperationsChange();
    })

  }

  onOperationsChange() {
    this.dropDownService.getUsageTypes(this.selectedAccounts, this.selectedRegions, this.selectedProducts, this.selectedOperations).subscribe((result) => {
      this.usageType = this.formatDropDownJson(result.data);
      this.selectedUsageType = this.getIntersection(this.selectedUsageType, this.usageType);
    })
  }


  getData() {

    this.previewOptions = {
      account: this.processInput(this.selectedAccounts),
      aggregate: "stats",
      breakdown: false,
      consolidate: this.selectedAgreegate,
      end: this.formatDate(this.selectedRange[1]),
      factorsps: false,
      family: false,
      groupBy: this.selectedGroupBy,
      isCost: this.isCost,
      operation: this.processInput(this.selectedOperations),
      region: this.processInput(this.selectedRegions),
      showsps: false,
      start: this.formatDate(this.selectedRange[0]),
      usageType: this.processInput(this.selectedUsageType),
      usageUnit: "",
      widgetType: this.selectedwidgetType,
      limit: this.selectedLimit,
      reg: this.processInput(this.selectedRegions),
      prod: this.processInput(this.selectedProducts),

      selectedRange: this.processInput(this.selectedRange)

    };

    this.previewOptions = this.processJson(this.previewOptions);
    console.log(this.previewOptions);

    this.dropDownService.getData(this.previewOptions).subscribe((result) => {
      console.log("Get Data...");
      console.log(result);
      this.previewData = result;
      this.preview();
      this.saveData();
    })
  }

  saveData() {
    let widgets = [];
    let widget = {};
    widget["id"] = 1;
    widget["options"] = this.previewOptions;
    widget["size"] = this.getWidgetSize();
    widgets.push(widget);

    if (localStorage.getItem("Widgets") == null) {
      localStorage.setItem("Widgets", JSON.stringify(widgets));
    }
    else {
      let widgets = JSON.parse(localStorage.getItem("Widgets"));
      widgets.push(widget)
      localStorage.setItem("Widgets", JSON.stringify(widgets));
    }

  }
 
  preview() {
    
    
        if (this.previewOptions.widgetType === "bar") {
          let data = this.processData(this.previewData);
          let adItem = new AdItem(BarChartComponent, data);
          this.resolveView(adItem);
        }
        if (this.previewOptions.widgetType === "pie") {
          let data = this.processDataForPieChart(this.previewData);
          let adItem = new AdItem(PieChartComponent, data);
          this.resolveView(adItem);
    
        }
    
      }
    


  getWidgetSize() {

    switch (this.previewClass.substr(8, this.previewClass.length)) {
      case "small_rect":
        {
          return { rows: 4, cols: 2 };
        }

      case "small_square":
        {
          return { rows: 4, cols: 4 };
        }

      case "vertical_rect":
        {
          return { rows: 2, cols: 4 };
        }

      case "large_square":
        {
          return { rows: 6, cols: 6 };
        }

      case "large_vertical_rect":
        {
          return { rows: 6, cols: 4 };
        }

    }

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
  formatDate(date) {
    let temp = "";

    temp = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " 05AM";

    return temp;

  }

  getIntersection(selectedValues, availableValues): any {
    if (selectedValues != undefined) {
      for (let i = 0; i < selectedValues.length; i++) {
        let flag = false;
        for (let j = 0; j < availableValues.length; j++) {
          if (selectedValues[i] == availableValues[j].value) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          selectedValues.splice(i, 1);
        }
      }
    }
    return selectedValues;
  }



  

 

  processData(input) {
    let labels = [];
    let data = { labels: [], datasets: [] };
    let labelSize = 0;
    console.log(input);

    for (let key in input.data) {
      console.log(key);
      // labels.push(key);
      labelSize = input.data[key].length;
      data.datasets.push({ label: key, data: input.data[key], backgroundColor: this.randomHexColor(), borderColor: "#FFF" });
    }

    let start = new Date(input.start);
    let interval = input.interval;
    for (let i = 0; i < labelSize; i++) {
      labels.push(start);
      start = new Date(start.getTime() + interval);
    }

    data.labels = labels;
    console.log(data);
    //this.data = data;

    let unit = "";
    if (input.interval === 3600000) {
      unit = "hour";
    }
    else {
      unit = "day";
    }

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: "#000080",
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          distribution: 'series',
          stacked: true,
          ticks: {
            source: 'auto',
            autoSkip: true
          },
          time: {
            unit: unit,
            unitStepSize: "0.5"
          },
          bounds: 'ticks'
        }]
      }
    }

    return { data, options };


  }

  processDataForPieChart(input) {

    let labels = [];
    let data = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
    let labelSize;
    for (let key in input.stats) {
      if (key != "aggregated") {
        console.log(key);
        // labels.push(key);
        labelSize = input.stats[key].length;
        data.labels.push(key);
        data.datasets[0].data.push(input.stats[key].total);
        data.datasets[0].backgroundColor.push(this.randomHexColor());
      }
    }

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: "#000080",
        },
       legendCallback:function(chart) {
          var text = [];
          console.log("...Legend CallBack...")
          text.push('<div>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color:#333">');
            text.push(chart.data.datasets[i].label)
            text.push('</span></li>');
          }
          text.push('</div>');
          return text.join("");
        }
      }
    }

    return { data, options };

  }

  randomHexColor(): String {

    return "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });;
  }
  
  resolveView(adItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getComponent(options, inputData) {
    if (options.widgetType === "bar") {
      let data = this.processData(inputData);
      let adItem = new AdItem(BarChartComponent, data);
      return adItem;
    }
    if (options.widgetType === "pie") {
      let data = this.processDataForPieChart(inputData);
      let adItem = new AdItem(PieChartComponent, data);
      return adItem;

    }
  }
}
export class ModelComponent {

  selectedValue: string;

}

