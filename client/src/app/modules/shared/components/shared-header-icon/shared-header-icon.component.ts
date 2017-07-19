import { Component, Input } from '@angular/core';
import {EditionService} from '../../../../services/edition/edition.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-icon',
  templateUrl: './shared-header-icon.component.html',
  styleUrls: ['./shared-header-icon.component.styl']
})
export class SharedHeaderIconComponent {

  @Input() public icon = '';
  @Input() public route = '';
  @Input() public side = '';
  @Input() public span = '';
  @Input() public inline = true;

  constructor(private _edService: EditionService,
              private _router: Router) {}

  get edService(): EditionService {
    return this._edService;
  }

  get router(): Router {
    return this._router;
  }
}
