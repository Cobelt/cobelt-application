import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-shared-breadcrumb',
  templateUrl: './shared-breadcrumb.component.html',
  styleUrls: ['./shared-breadcrumb.component.styl']
})
export class SharedBreadcrumbComponent implements OnInit {

  @Input() public routes: [any];

  constructor(private _translateService: TranslateService) { }

  ngOnInit() {
    if (this.routes) {
      for (const route of this.routes) {
        if (!route.routerLink || !route.name) {
          console.log('ERR: BREADCRUMBS TEMPLATE IS : [{routerLink:\'\', name:\'\'}]')
          return -1;
        }
      }
    }
    else {
      console.log('ERR: EMPTY BREADCRUMBS CALLED')
    }
  }

}
