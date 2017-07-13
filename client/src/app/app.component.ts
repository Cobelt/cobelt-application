import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from './services/auth/auth.service';
import { TranslateService, initTranslation } from './i18n/i18n';
import { LoadingService } from './services/loading/loading.service';

import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.styl'],
  template: // '<simple-notifications [options]="notificationsOptions"></simple-notifications>' +
  '<div class="progress"><div class="indeterminate" *ngIf="isLoading"></div></div>' +
  '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  public isLoading = false;

  public notificationsOptions = {
    position: ['top', 'right'],
    timeOut: 5000,
    lastOnBottom: false,
    maxStack: 4,
    theClass: 'notification'
  };

  constructor(private _translateService: TranslateService,
              private _authService: AuthService,
              private _loadingService: LoadingService,
              private _notificationsService: NotificationsService) {}

  ngOnInit(): void {
    initTranslation(this._translateService);

    if (this._authService.acceptCookies) { // CNIL
      this._authService.initializeSession().subscribe(
          res => null,
          error => this._notificationsService.error('Erreur', 'Serveur inaccessible', { // TODO translate
            clickToClose: false,
            timeOut: 0
          })
      );
    }

    this._loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

}
