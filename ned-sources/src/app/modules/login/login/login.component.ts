import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  user: any = {};
  togglePasswordFlag: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.checkUserSession();
  }

  ngAfterViewInit() {
    this.checkCapsLock();
  }

  login() {
    if (this.validateLoginForm()) {
      this.makeLoginApiCall();
    }
  }

  checkUserSession() {
    //User is loggd in so redirect to homepage
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(['/']);
    }
  }

  checkCapsLock() {
    var capsLockEnabled = null;
    document.msCapsLockWarningOff = true;// Set this to true to turn off default IE behavior. 
    var isCheckEnabled = document.msCapsLockWarningOff === undefined || document.msCapsLockWarningOff;

    var checkWarning = function () {
      if (capsLockEnabled) {
        document.getElementById("errorMessageContainer").innerHTML = "CapsLock is on";
      } else {
        document.getElementById("errorMessageContainer").innerHTML = "";
      }
    }

    if (isCheckEnabled) {
      document.addEventListener("keydown", function (e) {
        if (e.which == 20 && capsLockEnabled !== null) {
          capsLockEnabled = !capsLockEnabled;
        } else if (e.which == 20) {
          //"Keydown. Initial state not set."
        }
      });

      document.addEventListener("keypress", function (e) {
        var str = String.fromCharCode(e.which);
        if (!str || str.toLowerCase() === str.toUpperCase()) {
          return;
        }
        capsLockEnabled = (str.toLowerCase() === str && e.shiftKey) || (str.toUpperCase() === str && !e.shiftKey);
      });

      document.getElementById("password").addEventListener("keyup", function () {
        checkWarning();
      });

      document.getElementById("password").addEventListener("focus", function () {
        checkWarning();
      });

      document.getElementById("username").addEventListener("focus", function () {
        document.getElementById("errorMessageContainer").innerHTML = "";
      });

    }
  }

  validateLoginForm() {
    if (this.isUsernamePasswordPresent()) {
      document.getElementById("errorMessageContainer").innerHTML = "Username and Password are mandatory fields";
      return false;
    }
    return true;
  }

  makeLoginApiCall() {
    this.authenticationService.login(this.user.username, this.user.password).
      subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        }
        else {
          document.getElementById("errorMessageContainer").innerHTML = "Incorrect Username or Password";
          return false;
        }
      });
  }

  displayPasswordFunction() {
    if (this.isPasswordPresent()) {
      this.togglePasswordFlag = true;
      Observable.interval(3000)
        .takeWhile(() => this.togglePasswordFlag)
        .filter(i => i == 0)
        .subscribe(i => {
          this.togglePasswordFlag = false;
        })
    }
  }

  isPasswordPresent() {
    return !this.togglePasswordFlag && this.user.password != undefined && this.user.password != '';
  }

  isUsernamePasswordPresent() {
    return this.user.username === undefined || this.user.password === undefined
      || this.user.username === "" || this.user.password === "";
  }

}