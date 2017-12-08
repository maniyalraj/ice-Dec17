import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';


@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AdComponent {

    @Input() data: any;
    options:any;
    ngOnInit() {
        console.log("Bar Component TS");
        // console.log(this.data);
        this.data;//=this.processData(this.data);
        // this.data.options = {
        //     scales: {
        //         xAxes: [{
        //             type: 'time',
        //             distribution: 'linear',
        //             stacked: true,
        //             ticks: {
        //                 source: 'auto'
        //             },
        //             time:{
        //                 unit:"day",
        //                 unitStepSize:"0.5"
        //             },
        //             bounds:'ticks'
        //         }]
        //     }
        // }
        
    }

    constructor() {
        // this.data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //         {
        //             label: 'My First dataset',
        //             borderColor: '#1E88E5',
        //             data: [65, 59, 80, 81, 56, 55, 40]
        //         },
        //         {
        //             label: 'My Second dataset',
        //             borderColor: '#7CB342',
        //             data: [28, 48, 40, 19, 86, 27, 90]
        //         }
        //     ]
        // }

        // this.options = {
        //     scales: {
        //         xAxes: [{
        //             type: 'time',
        //             distribution: 'linear',
        //             stacked: true,
        //             ticks: {
        //                 source: 'auto'
        //             },
        //             time:{
        //                 unit:"day",
        //                 unitStepSize:"0.5"
        //             },
        //             bounds:'ticks'
        //         }]
        //     }
        // }


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
