import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-creator-container',
  templateUrl: './page-creator-container.component.html',
  styleUrls: ['./page-creator-container.component.styl']
})
export class PageCreatorContainerComponent implements OnInit {

  @Input() public elements;
  constructor() { }

  ngOnInit() {
  }

}
