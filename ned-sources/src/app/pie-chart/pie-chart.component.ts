import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() data: any;
  ngOnInit() {
      console.log("Pie Component TS");
      console.log(this.data);
  }

  constructor() {
  
  }
}
