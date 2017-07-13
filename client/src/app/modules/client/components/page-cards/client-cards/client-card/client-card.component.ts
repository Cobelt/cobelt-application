import { Component, OnInit, Input } from '@angular/core';
import {EditionService} from '../../../../../../services/edition/edition.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.styl']
})
export class ClientCardComponent {

  @Input() public card: any;

  constructor(private _edService: EditionService) { }

}
