import { Component } from '@angular/core';
import {EditionService} from "../../services/edition/edition.service";

@Component({
  selector: 'app-editor',
  template:  `<app-editor-header></app-editor-header>
              <div [style.color]="_edService.visual.textColor"><router-outlet></router-outlet></div>
              <app-client-footer></app-client-footer>
              <app-client-cnil-overlay></app-client-cnil-overlay>`
})
export class EditorComponent {
  constructor (private _edService: EditionService) {}
}
