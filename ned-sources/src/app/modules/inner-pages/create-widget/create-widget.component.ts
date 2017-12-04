import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
 

@Component({
  selector: 'app-create-widget',
  templateUrl: './create-widget.component.html',
  styleUrls: ['./create-widget.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class CreateWidgetComponent implements OnInit {
  widgetType: SelectItem[];
  groupby:SelectItem[];
  limit:SelectItem[];
  Agreegate:SelectItem[];
  account:SelectItem[];
  region:SelectItem[];
  product:SelectItem[];
  operation:SelectItem[];
  usageType:SelectItem[];
  cars: SelectItem[];
  acc: SelectItem[];
  reg: SelectItem[];
  prod: SelectItem[];
  opera: SelectItem[];
  previewClass:any="preview_small_rect";
  small_rect:any="active";
  small_square:any;
  vertical_rect:any;
  large_square:any;
  large_vertical_rect:any;
  
  

  constructor() { 

    

    this.widgetType = [];
    this.widgetType.push({label:'Widget Type', value:null});
    this.widgetType.push({label:'chart', value:'NY'});
    this.widgetType.push({label:'pie', value:'RM'});
    this.widgetType.push({label:'table', value:'LDN'});
    this.widgetType.push({label:'Istanbul', value:'IST'});
    this.widgetType.push({label:'Paris', value:'PRS'});

    // For Group By
    this.groupby=[];
    this.groupby.push({label:'Operation', value:'NY'});
    this.groupby.push({label:'Account', value:'NY'});
    this.groupby.push({label:'Region', value:'NY'});
    this.groupby.push({label:'Product', value:'NY'});
    this.groupby.push({label:'Usage Type', value:'NY'});


    // For limit
    this.limit=[];
    this.limit.push({label:'5', value:'NY'});

     // For agreegate
     this.Agreegate=[];
     this.Agreegate.push({label:'Hourly', value:'NY'});
     this.Agreegate.push({label:'Daily', value:'NY'});
     this.Agreegate.push({label:'Weekly', value:'NY'});
     this.Agreegate.push({label:'Monthly', value:'NY'});

     // For account
     this.acc = [
      {label: 'c1.medium', value: 'c1.medium'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows'},
      {label: 'c1.medium', value: 'c1.medium1'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge1'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge1  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows1'},
       
  ];
     // For region
     this.reg = [
      {label: 'c1.medium', value: 'c1.medium'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows'},
      {label: 'c1.medium', value: 'c1.medium1'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge1'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge1  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows1'},
       
  ];
      
      // For product
      this.prod = [
        {label: 'c1.medium', value: 'c1.medium'},
        {label: 'c3.2xlarge', value: 'c3.2xlarge'},
        {label: 'c3.4xlarge  ', value: 'c3.4xlarge  '},
        {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows'},
        {label: 'c1.medium', value: 'c1.medium1'},
        {label: 'c3.2xlarge', value: 'c3.2xlarge1'},
        {label: 'c3.4xlarge  ', value: 'c3.4xlarge1  '},
        {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows1'},
         
    ];
     
     // For operation
     this.opera = [
      {label: 'c1.medium', value: 'c1.medium'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows'},
      {label: 'c1.medium', value: 'c1.medium1'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge1'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge1  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows1'},
       
  ];
    
      // For account
     

    this.cars = [
      {label: 'c1.medium', value: 'c1.medium'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows'},
      {label: 'c1.medium', value: 'c1.medium1'},
      {label: 'c3.2xlarge', value: 'c3.2xlarge1'},
      {label: 'c3.4xlarge  ', value: 'c3.4xlarge1  '},
      {label: 'c3.4xlarge.windows', value: 'c3.4xlarge.windows1'},
       
  ];
    
  
     
  }

  ngOnInit() {
  }
  
  changeClass(className)
  {
    switch(className)
    {
      case "small_rect":
      {
        this.small_rect="active";
        this.small_square="";
        this.vertical_rect="";
        this.large_square="";
        this.vertical_rect="";
        this.large_vertical_rect="";
      }
      break;
      case "small_square":
      {
        this.small_rect="";
        this.small_square="active";
        this.vertical_rect="";
        this.large_square="";
        this.large_vertical_rect="";
      }
      break;
      case "vertical_rect":
      {
        this.small_rect="";
        this.small_square="";
        this.vertical_rect="active";
        this.large_square="";
        this.large_vertical_rect="";
       
      }
      break;
      case "large_square":
      {
        this.small_rect="";
        this.small_square="";
        this.vertical_rect="";
        this.large_square="active";
        this.large_vertical_rect="";
      }
      break;
      case "large_vertical_rect":
      {
        this.small_rect="";
        this.small_square="";
        this.vertical_rect="";
        this.large_square="";
        this.large_vertical_rect="active";
      }
      break;
      
    }
    this.previewClass="preview_"+className;
  }

}
export class ModelComponent {
  
      selectedValue: string;
  
  }
  
 