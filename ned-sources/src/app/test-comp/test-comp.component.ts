import { Component, OnInit, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DynamicServiceService } from '../dynamic-service.service';
import { DynamicDirective } from '../directives/dynamic.directive';
import { AdItem } from '../aditem';
import { ToPumpComponent } from '../to-pump/to-pump.component';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { ViewHolderComponent } from '../view-holder/view-holder.component';
import { AdComponent } from '../ad.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  @Input() index: number;
  @ViewChild(DynamicDirective) adHost: DynamicDirective;
  ads: AdItem[];
  test: string = "before";
  component = ViewHolderComponent;
  // inputs=[new AdItem(ToPumpComponent, {name: "During API CAll", bio: 'Brave as they come'})];
  constructor(private dynamicService: DynamicServiceService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    this.process();
  }

  process() {
    console.log("calling dynamic Data..." + this.index);
    if (this.index == undefined)
      this.ads = this.dynamicService.getData();
    else if(this.index==1) {
      console.log('API Call Start:Index==' + this.index);
      this.dynamicService.getOne(this.index).subscribe(
        result => {
          this.ads = result;
          //this.ads=[new AdItem(ToPumpComponent, {name: "During API CAll", bio: 'Brave as they come'})]
          console.log('API Call Complete');
          let adItem = this.ads[0];
          this.resolveView(adItem);
        }
      );

    }
    else if(this.index==2)
    {
      console.log('Calling Charts API' + this.index);
      this.dynamicService.getChartData().subscribe(
        result => {
          this.ads = result;
          //this.ads=[new AdItem(ToPumpComponent, {name: "During API CAll", bio: 'Brave as they come'})]
          console.log('API Call Complete');
          //let adItem = this.ads[0];
          let adItem=new AdItem(BarChartComponent, {
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: '#9CCC65',
                  borderColor: '#7CB342',
                  data: [28, 48, 40, 19, 86, 27, 90]
                }
              ]
            }
          })

          this.resolveView(adItem);
        }
      );
    }
  }

  resolveView(adItem)
  {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  ngOnChanges(changes: SimpleChange) {
    if (changes['ads']) {
      console.log('Ads changes');
      this.ads = this.ads;
    }
  }


}
