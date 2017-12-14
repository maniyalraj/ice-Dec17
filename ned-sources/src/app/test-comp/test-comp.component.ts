import { Component, OnInit, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DynamicServiceService } from '../dynamic-service.service';
import { DynamicDirective } from '../directives/dynamic.directive';
import { AdItem } from '../aditem';
import { ToPumpComponent } from '../to-pump/to-pump.component';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { ViewHolderComponent } from '../view-holder/view-holder.component';
import { AdComponent } from '../ad.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DropDownService } from '../services/drop-down.service';
import { CreateWidgetComponent } from '../modules/inner-pages/create-widget/create-widget.component';


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
   constructor(private dynamicService: DynamicServiceService, private componentFactoryResolver: ComponentFactoryResolver, private dropDownService: DropDownService) {

  }

  ngOnInit() {
    
    let createWidget = new CreateWidgetComponent(this.dropDownService, this.componentFactoryResolver);
    let widgets = JSON.parse(localStorage.getItem("Widgets"));
    let options;

       
      options= widgets[this.index-1].options;
   
   
    this.dropDownService.getData(options).subscribe((result) => {
    let adItem = createWidget.getComponent(options, result);
    this.resolveView(adItem);
    })

  }

  process() {
      
  }

  resolveView(adItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  ngOnChanges(changes: SimpleChange) {
  }


}
