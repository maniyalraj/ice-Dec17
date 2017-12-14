import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { UIChart } from 'primeng/primeng';
import { AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chart: ElementRef;
  @ViewChild('legend') legend: ElementRef;
  @Input() data: any;
  legendHtml: string = "";
  customLegend: any;
  
  ngOnInit() {
    console.log("Pie Component TS");
    console.log(this.data);
  }
  ngAfterViewInit() {

    try{
    this.callMe();
    }
    catch(error)
    {
      
    }
    // if (this.legend.nativeElement.innerHtml === undefined)
    //   this.generateLegend(this.chart);
  }

  constructor(private sanitizer: DomSanitizer) {
  }

  generateLegend(chart: any) {
    let tempChart = chart.chart;
    console.log("Generating Legends");
    this.customLegend = this.sanitizer.bypassSecurityTrustHtml(tempChart.generateLegend());
    this.legendHtml = this.customLegend;
  }


  updateDataset = function (e, datasetIndex) {
    var index = datasetIndex;
    var ci = e.view.weightChart;
    var meta = ci.getDatasetMeta(index);

    // See controller.isDatasetVisible comment
    meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    ci.update();
  }

  callMe() {
    this.generateLegend(this.chart);
  }

  onLegendClick(chart, e) {
    let tempChart = chart.chart;

    for (let i = 0; i < tempChart.legend.legendItems.length; i++) {
      if (e.srcElement.innerText === tempChart.legend.legendItems[i].text) {
        tempChart.getDatasetMeta(0).data[i].hidden = !tempChart.getDatasetMeta(0).data[i].hidden;
      }
    }
    tempChart.update();
  }
}
