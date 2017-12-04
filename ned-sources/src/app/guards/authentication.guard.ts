import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if (localStorage.getItem('currentUser'))
    {
      return true; // logged in so return true
    }

      this.router.navigate(['/login']); // not logged in so redirect to login page
      return false;
  }
}
