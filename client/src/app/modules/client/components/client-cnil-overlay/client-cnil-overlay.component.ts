import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-client-cnil-overlay',
  templateUrl: './client-cnil-overlay.component.html',
  styleUrls: ['./client-cnil-overlay.component.styl'],
})
export class ClientCnilOverlayComponent {

  show: boolean = true;
  constructor(private _authService: AuthService) { // TODO
    this.show = !_authService.acceptCookies;
  }

  acceptCookies () {
    this._authService.acceptCookies = true;
    this.show = false;
  }
}
