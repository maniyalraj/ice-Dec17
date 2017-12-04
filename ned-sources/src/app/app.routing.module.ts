import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateWidgetComponent } from './modules/inner-pages/create-widget/create-widget.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login/login.component';
import { LogoutComponent } from './modules/login/logout/logout.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DemoComponent } from './modules/programming-services/demo/demo.component';
import { IceGridHolderComponent } from './ice-grid-holder/ice-grid-holder.component';
import { DashboardComponent } from './modules/inner-pages/dashboard/dashboard.component';
import { ManageDashboardsComponent } from './modules/inner-pages/manage-dashboards/manage-dashboards.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create-widget', component: CreateWidgetComponent, canActivate: [AuthenticationGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'manage-dashboards', component: ManageDashboardsComponent, canActivate: [AuthenticationGuard] },
  { path: 'demo', component: DemoComponent, canActivate: [AuthenticationGuard] },
  { path: 'iceGrid/:id', component: IceGridHolderComponent, canActivate: [AuthenticationGuard] },
  /*{ path: 'user-management', component: UserComponent, canActivate: [AuthGuard] },*/
  { path: '', redirectTo: '/create-widget', pathMatch: 'full' },//default path
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRoutingModule { }