import { Component } from '@angular/core';
import {DynamicServiceService} from './dynamic-service.service';
import { AdItem } from './aditem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  ads:AdItem[];
  constructor(private dynamicService:DynamicServiceService) {
    
  }

  ngOnInit() {
    this.ads = this.dynamicService.getData();
    console.log(this.ads);
  }

  isUserLoggedIn()
  {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

}
