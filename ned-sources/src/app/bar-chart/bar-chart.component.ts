import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';


@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AdComponent {

    @Input() data: any;
    options: any;
    ngOnInit() {
        console.log("Bar Component TS");
        this.data;
    }

    constructor() {
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

}
