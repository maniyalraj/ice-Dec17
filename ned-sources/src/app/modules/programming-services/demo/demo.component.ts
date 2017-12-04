import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Country } from '../../../components/lookups/lookups.component';
import { LookupService } from '../../../services/lookups/lookup.service';
//import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { SelectItem } from 'primeng/primeng';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit {

  countriesList: Country[] = new Array();
  cities: SelectItem[];
  selectedCity: string;
  multiselectedCities: string[];
  closeResult: string;
  
  
    open(content) {
      this.modalService.open(content).result.then((result) => {
        //this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  constructor(private lookupService: LookupService, private modalService: NgbModal) {
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:'NY'});
    this.cities.push({label:'Rome', value:'RM'});
    this.cities.push({label:'London', value:'LDN'});
    this.cities.push({label:'Istanbul', value:'IST'});
    this.cities.push({label:'Paris', value:'PRS'});
  }

  ngOnInit() {
    this.loadCountries();
  }
  
  ngAfterViewInit() {
    

  }

  validateQuickSearchForm() {
    console.log("City: "+this.selectedCity);
    console.log("Multi city: "+this.multiselectedCities)
  }
 
  loadCountries() {
		this.lookupService.getAllCountries().subscribe((countriesList) => {
      console.log(countriesList);
		  this.countriesList = countriesList;
		  //this.countriesMultiSelect = new Array();
		  //this.buildCountriesMultiselectOptions();
		  }
		);
  }
  
  /*buildCountriesMultiselectOptions() {
		for(var i=0; i<this.countriesList.length; i++) {
		  this.countriesMultiSelect.push({'id':this.countriesList[i].tag, 'name':this.countriesList[i].name});
		}
	}*/

}
