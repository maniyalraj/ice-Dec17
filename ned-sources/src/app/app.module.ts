import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartModule, CalendarModule, DropdownModule, RadioButtonModule, SpinnerModule, OverlayPanelModule, MultiSelectModule, DataTableModule, SharedModule, TooltipModule} from 'primeng/primeng';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './modules/login/login.module';
import { ProgrammingServicesModule } from './modules/programming-services/programming-services.module';
import { InnerPagesModule } from './modules/inner-pages/inner-pages.module';

import { ProgServService } from './services/prog-serv.service';
import { LookupService } from './services/lookups/lookup.service';
import { GlobalErrorHandlerService } from './services/error-handler/global-error-handler.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
/*import { SidebarComponent } from './components/sidebar/sidebar.component';*/
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LookupsComponent } from './components/lookups/lookups.component';

import { GridsterModule } from 'angular-gridster2';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IceGridComponent } from './ice-grid/ice-grid.component';
import { IceGridHolderComponent } from './ice-grid-holder/ice-grid-holder.component';
import {
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatTooltipModule,
  MatCheckboxModule, MatSidenavModule
} from '@angular/material';

import 'hammerjs';
import { TestCompComponent } from './test-comp/test-comp.component';
// import { DynamicComponentLoaderDirective } from './dynamic-component-loader.directive';
import {DynamicDirective} from './directives/dynamic.directive';
import { DynamicServiceService } from './dynamic-service.service';
import { ViewHolderComponent } from './view-holder/view-holder.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ToPumpComponent } from './to-pump/to-pump.component';
import { DynamicModule } from 'ng-dynamic-component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CreateWidgetComponent } from './modules/inner-pages/create-widget/create-widget.component';
import { DashboardComponent } from './modules/inner-pages/dashboard/dashboard.component';
import { ManageDashboardsComponent } from './modules/inner-pages/manage-dashboards/manage-dashboards.component';
import { DemoComponent } from './modules/programming-services/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    /*SidebarComponent,*/
    PageNotFoundComponent,
    LookupsComponent,
    IceGridComponent,
    IceGridHolderComponent,
    TestCompComponent,
    DynamicDirective,
    ViewHolderComponent,
    FirstComponentComponent,
    ToPumpComponent,
    BarChartComponent,
    CreateWidgetComponent,
    DashboardComponent,
    ManageDashboardsComponent,
    DemoComponent
    // DynamicComponentLoaderDirective
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ProgrammingServicesModule,
    LoginModule,
    AppRoutingModule,
    MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatTooltipModule, MatCheckboxModule, MatSidenavModule,
    GridsterModule,
    ChartModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    SpinnerModule,
    OverlayPanelModule,
    MultiSelectModule,
    DataTableModule,
    SharedModule,
    TooltipModule

    // DynamicModule.withComponents([ViewHolderComponent])
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    ProgServService,
    LookupService,
    DynamicServiceService
  ],
  entryComponents:[FirstComponentComponent,ToPumpComponent,ViewHolderComponent,BarChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
