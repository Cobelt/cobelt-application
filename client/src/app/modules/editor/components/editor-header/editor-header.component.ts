import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { TranslateService, initTranslation } from './i18n/i18n';
import { EditionService } from '../../../../services/edition/edition.service';

@Component({
  selector: 'app-editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.styl']
})
export class ClientHeaderComponent {

  private _notEditingRoute: string;
  private _open: boolean = false;
  private _edMode: boolean = false;
  private _translate: any;

  constructor(private _translateService: TranslateService,
              private _authService: AuthService,
              private _edService: EditionService) {
    this._translate = initTranslation(_translateService);
  }

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
  get notEditingRoute(): string {
    return this._notEditingRoute;
  }
  get translate(): any {
    return this._translate;
  }
}
