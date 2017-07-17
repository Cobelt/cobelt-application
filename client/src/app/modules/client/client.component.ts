import { Component } from '@angular/core';
import {EditionService} from "../../services/edition/edition.service";

@Component({
    selector: 'app-client',
    template:  `<app-client-header></app-client-header>
              <div class="body" [style.color]="_edService.visual.textColor"><router-outlet></router-outlet></div>
              <app-client-footer></app-client-footer>
              <app-client-cnil-overlay></app-client-cnil-overlay>`,
    styleUrls: ['./client.component.styl']
})
export class ClientComponent {
  constructor (private _edService: EditionService) {}
}
