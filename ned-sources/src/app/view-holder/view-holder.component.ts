import { Component,Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from '../aditem';
import { DynamicDirective } from '../directives/dynamic.directive';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-view-holder',
  templateUrl: './view-holder.component.html',
  styleUrls: ['./view-holder.component.css']
})
export class ViewHolderComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  @Input() index: number;
 
  @ViewChild(DynamicDirective) adHost: DynamicDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
 
  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy() {
    //clearInterval(this.interval);
  }
  
  loadComponent() {
    // this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    // let adItem = this.ads[this.currentAddIndex];
    
    let adItem=this.ads[0];

    
    // if(this.index!=undefined)
    // {
    //   adItem = this.ads[this.index];
    // }
    // else
    // {
    //   if(this.i>=3)
    //   this.i=0;
    //   adItem = this.ads[this.i];
    //   this.i++;

    // }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.loadComponent();
  }

}
