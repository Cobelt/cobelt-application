import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from '../../services/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkAdmin(url);
  }

  checkAdmin(url: string): boolean {
    if (!this.authService.isAuthenticated) {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
    }
    else if (this.authService.isAdmin) { return true; }
    this.router.navigate(['/']);
    return false;
  }
}
