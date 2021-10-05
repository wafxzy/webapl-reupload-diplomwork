import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../Helper/constants';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(localStorage.getItem(Constants.USER_KEY))
    const user = JSON.parse(Constants.USER_KEY) as User;
    if (user && user.email) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}