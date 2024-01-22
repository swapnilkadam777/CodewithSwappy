import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; 
import { AuthService } from './auth.services';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
 export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isAuthenticatedUser()) {
        return true;
      } else { 
        return this.router.parseUrl('/login');
      }
    }
 }