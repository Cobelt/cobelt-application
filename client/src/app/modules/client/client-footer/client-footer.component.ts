import {Component} from '@angular/core';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
  selector: 'app-client-footer',
  templateUrl: './client-footer.component.html',
  styleUrls: ['./client-footer.component.styl']
})
export class ClientFooterComponent {
  constructor (translate: TranslateService) {
    initTranslation(translate);
  }
}
