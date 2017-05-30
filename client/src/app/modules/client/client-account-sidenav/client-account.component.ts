import { Component } from '@angular/core';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
  selector: 'app-client-account-sidenav',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.styl']
})
export class ClientAccountComponent {

  constructor (translateService: TranslateService) {
    initTranslation(translateService);
  }

}
