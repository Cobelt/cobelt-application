import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-creator-base',
  templateUrl: './page-creator-base.component.html',
  styleUrls: ['./page-creator-base.component.styl']
})
export class PageCreatorBaseComponent implements OnInit {

  private _pageElements: [any];

  constructor() { }

  ngOnInit() {
  }

}
