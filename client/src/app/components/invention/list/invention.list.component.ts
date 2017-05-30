import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'invention-list',
  templateUrl: './invention.list.component.html',
  styleUrls: ['./invention.list.component.styl']
})
export class InventionListComponent implements OnInit {

  constructor(
    private _titleService: Title,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._titleService.setTitle("United Motion Ideas - Liste des inventions");
  }
}
