import {Component} from '@angular/core';
import { TranslateService, initTranslation } from './i18n/i18n';
import { EditionService } from '../../../../services/edition/edition.service';

@Component({
  selector: 'app-client-footer',
  templateUrl: './client-footer.component.html',
  styleUrls: ['./client-footer.component.styl']
})
export class ClientFooterComponent {
  constructor (private _translate: TranslateService,
               private _edService: EditionService) {
    initTranslation(_translate);
  }

  get edService(): EditionService {
    return this._edService;
  }
}
