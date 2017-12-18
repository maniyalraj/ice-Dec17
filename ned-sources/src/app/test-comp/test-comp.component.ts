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
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Router } from '@angular/router';


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
  widgetName : any;
  dashboardId:any;

  component = ViewHolderComponent;
   constructor(private dynamicService: DynamicServiceService, private componentFactoryResolver: ComponentFactoryResolver, 
    private dropDownService: DropDownService, private confirmationService: ConfirmationService, private router: Router) {

  }

  ngOnInit() {
    
    let createWidget = new CreateWidgetComponent(this.dropDownService, this.componentFactoryResolver, new ActivatedRoute(), this.dynamicService, this.router );
    
    let options;

    this.dynamicService.getOneWidget(this.index).subscribe((result)=>{
        this.widgetName=result.widgetName;
        this.dashboardId= result.dashboard.id;
        options=JSON.parse(result.requestJson)
        this.dropDownService.getData(options).subscribe((result) => {
        let adItem = createWidget.getComponent(options, result);
        this.resolveView(adItem);
      
    })

    
    // let widgets = JSON.parse(localStorage.getItem("Widgets"));
   

       
    //   options= widgets[this.index-1].options;
   
   
 
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

  deleteWidget(){
   
    this.confirm(this.index);

  }

  confirm(widgetId): boolean {
    let confirmation = false;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.dynamicService.deleteWidget(widgetId).subscribe((result)=>{
          console.log("Widget Deleted"+widgetId);
        })
      },
      reject: () => {
        
        confirmation = false;
      }
    });
    return confirmation;
  }

  editWidget(){
    
    this.router.navigate(['./create-widget', { "dashboardId": this.dashboardId, "widgetId": this.index }]);

  }

  ngOnChanges(changes: SimpleChange) {
  }


}
