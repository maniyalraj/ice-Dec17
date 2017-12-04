import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
// import { ProgServSearchboxComponent } from './prog-serv-searchbox/prog-serv-searchbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule, MultiSelectModule, DataTableModule, SharedModule, TabViewModule, OverlayPanelModule } from 'primeng/primeng';
// import { EditProgServiceComponent } from './edit-prog-service/edit-prog-service.component';
// import { SummaryTabComponent } from './summary-tab/summary-tab.component';
// import { AttributesTabComponent } from './attributes-tab/attributes-tab.component';
// import { SourceHistoryTabComponent } from './source-history-tab/source-history-tab.component';
// import { RelationshipsTabComponent } from './relationships-tab/relationships-tab.component';
// import { ContactsTabComponent } from './contacts-tab/contacts-tab.component';
// import { InstructionsTabComponent } from './instructions-tab/instructions-tab.component';
// import { UpdateLogTabComponent } from './update-log-tab/update-log-tab.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    DataTableModule,
    TabViewModule,
    OverlayPanelModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    // AdvancedSearchComponent,
    // DemoComponent,
    // ProgServSearchboxComponent,
    // EditProgServiceComponent,
    // SummaryTabComponent,
    // AttributesTabComponent,
    // SourceHistoryTabComponent,
    // RelationshipsTabComponent,
    // ContactsTabComponent,
    // InstructionsTabComponent,
    // UpdateLogTabComponent
  ],
  providers: [

  ]
})
export class ProgrammingServicesModule { }
