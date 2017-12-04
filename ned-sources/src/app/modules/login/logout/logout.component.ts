import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {
    this.removeUserSession();
  }

  ngOnInit() {

  }

  removeUserSession() {
    //Remove session and redirect user to login page
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
