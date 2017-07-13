import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from '../../services/auth/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkAdmin(url);
  }

  checkAdmin(url: string): boolean {
    if (!this._authService.isAuthenticated) {
      this._authService.redirectUrl = url;
      this._router.navigate(['/login']);
    }
    else if (this._authService.isAdmin) { return true; }
    this._router.navigate(['/']);
    return false;
  }
}
