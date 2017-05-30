import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'invention-edit',
  templateUrl: './invention.edit.component.html',
  styleUrls: ['./invention.edit.component.styl']
})
export class InventionEditComponent implements OnInit {

  constructor(
    private _titleService: Title,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._titleService.setTitle("United Motion Ideas - Edition de l'invention");
  }

}
