import { Component } from '@angular/core';
import {EditionService} from "../../services/edition/edition.service";

@Component({
  selector: 'app-editor',
  template:  `<app-client-header></app-client-header>
              <div [style.color]="_edService.visual.textColor"><router-outlet></router-outlet></div>
              <app-client-footer></app-client-footer>`
})
export class EditorComponent {
  constructor (private _edService: EditionService) {}
}
