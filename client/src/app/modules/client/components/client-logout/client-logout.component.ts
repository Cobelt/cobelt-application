import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-client-logout',
  templateUrl: './client-logout.component.html'
})
export class ClientLogoutComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _location: Location) {
    this._authService.logout()
      .subscribe(
        res => {
          this._location.back();
        },
        error => {
          this._location.back();
          alert("Déconnexion impossible");
        });
  }

  ngOnInit() {
  }

}
