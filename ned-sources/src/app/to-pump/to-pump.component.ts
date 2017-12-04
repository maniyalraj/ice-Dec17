import { Component, OnInit, Input} from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-to-pump',
  templateUrl: './to-pump.component.html',
  styleUrls: ['./to-pump.component.css']
})
export class ToPumpComponent implements AdComponent {
  
  @Input() data: any;
  

}
