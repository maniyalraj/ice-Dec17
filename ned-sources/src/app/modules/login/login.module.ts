import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class LoginModule { }
