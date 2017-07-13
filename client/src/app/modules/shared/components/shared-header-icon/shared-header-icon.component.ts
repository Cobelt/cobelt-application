import { Component, Input } from '@angular/core';
import {EditionService} from "../../../../services/edition/edition.service";

@Component({
  selector: 'app-nav-icon',
  templateUrl: './shared-header-icon.component.html',
  styleUrls: ['./shared-header-icon.component.styl']
})
export class SharedHeaderIconComponent {

  @Input() public icon: string = '';
  @Input() public route: string = '';
  @Input() public side: string = '';

  constructor(private _edService: EditionService) {}

}
