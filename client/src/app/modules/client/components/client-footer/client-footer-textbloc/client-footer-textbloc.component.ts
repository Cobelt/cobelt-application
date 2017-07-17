import {Component, Input, OnInit} from '@angular/core';
import {EditionService} from '../../../../../services/edition/edition.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-client-footer-textbloc',
  templateUrl: './client-footer-textbloc.component.html',
  styleUrls: ['./client-footer-textbloc.component.styl']
})
export class ClientFooterTextblocComponent implements OnInit {

  @Input() public titleTranslateKey;
  @Input() public textTranslateKey;
  @Input() public buttonTranslateKey;
  @Input() public route;

  constructor(private _translateService: TranslateService,
              private _edService: EditionService) { }

  ngOnInit() {
  }

  get edService(): EditionService {
    return this._edService;
  }
}
