import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWidgetComponent } from './create-widget/create-widget.component';
import { ManageDashboardsComponent } from './manage-dashboards/manage-dashboards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule, DropdownModule,RadioButtonModule,SpinnerModule,OverlayPanelModule,MultiSelectModule,DataTableModule,SharedModule,TooltipModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    SpinnerModule,
    OverlayPanelModule,
    MultiSelectModule,
    DataTableModule,
    SharedModule,
    TooltipModule
  ],
  declarations: [CreateWidgetComponent, ManageDashboardsComponent, DashboardComponent]
})
export class InnerPagesModule {
  
 }

