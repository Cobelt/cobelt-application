import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-client',
  template: '<app-client-header></app-client-header>' +
  '<router-outlet></router-outlet>' +
  '<app-client-footer></app-client-footer>' +
  '<app-client-cnil-overlay></app-client-cnil-overlay>'
})
export class ClientComponent {

  constructor (translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('fr');
  }

}
