import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { TranslateService, initTranslation } from './i18n/i18n';
import { EditionService } from '../../../../services/edition/edition.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.styl']
})
export class ClientHeaderComponent {

  private _actualRoute: string;
  private _open: boolean = false;
  private _edMode: boolean = false;
  private _translate: any;

  constructor(private _translateService: TranslateService,
              private _authService: AuthService,
              private _edService: EditionService) {
    this._translate = initTranslation(_translateService);
  }

  // GET ACTUAL ROUTE

  logout() {
    this._authService.logout()
      .subscribe(
        res => {
          alert('Déconnecté');
        },
        error => {
          alert('Déconnexion impossible');
        });
  }


  get edService(): EditionService {
    return this._edService;
  }
  get actualRoute(): string {
    return this._actualRoute;
  }
  get translate(): any {
    return this._translate;
  }
}
