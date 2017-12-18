import { Component, OnInit, Input,ViewEncapsulation,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { AdComponent } from '../ad.component';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements AdComponent,OnInit, AfterViewInit {

    @Input() data: any;
    @ViewChild('chart') chart: ElementRef;
    @ViewChild('legend') legend: ElementRef;
    options: any;
    legendHtml: string = "";
    customLegend: any;

    ngOnInit() {
        console.log("Bar Component TS");
        this.data;
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

    processData(input) {
        let labels = [];
        let data = { labels: [], datasets: [] };
        console.log(input.data);

        for (let key in input.data) {
            console.log(key);
            labels.push(key);

            data.datasets.push({ label: key, data: input.data[key] });
        }
        data.labels.push(labels);
        console.log(data);
        //this.data = data;
        return data;

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
