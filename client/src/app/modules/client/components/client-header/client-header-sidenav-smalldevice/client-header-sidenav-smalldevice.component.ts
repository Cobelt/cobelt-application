import { Component, OnInit } from '@angular/core';
import {EditionService} from "../../../../../services/edition/edition.service";

@Component({
  selector: 'app-client-header-sidenav-smalldevice',
  templateUrl: './client-header-sidenav-smalldevice.component.html',
  styleUrls: ['./client-header-sidenav-smalldevice.component.styl']
})
export class ClientHeaderSidenavSmalldeviceComponent implements OnInit {

  constructor(private _edService: EditionService) { }

  ngOnInit() {
  }

  get edService(): EditionService {
    return this._edService;
  }
}
