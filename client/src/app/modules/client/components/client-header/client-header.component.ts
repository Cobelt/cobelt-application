import {Component, EventEmitter} from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { TranslateService, initTranslation } from './i18n/i18n';
import { EditionService } from '../../../../services/edition/edition.service';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.styl']
})
export class ClientHeaderComponent {

  private _smallDeviceNavActions = new EventEmitter<any|MaterializeAction>();
  private _accountNavActions = new EventEmitter<any|MaterializeAction>();
  private _actualRoute: string;

  constructor(private _translateService: TranslateService,
              private _authService: AuthService,
              private _edService: EditionService) {
    initTranslation(_translateService);
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

  get actualRoute(): string {
    return this._actualRoute;
  }

  get edService(): EditionService {
    return this._edService;
  }

  get smallDeviceNavActions(): EventEmitter<any | MaterializeAction> {
    return this._smallDeviceNavActions;
  }

  get accountNavActions(): EventEmitter<any | MaterializeAction> {
    return this._accountNavActions;
  }
}
