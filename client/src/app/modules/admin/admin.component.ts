import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: '<app-admin-header></app-admin-header><router-outlet></router-outlet>'
})
export class AdminComponent implements OnInit {

  constructor() {}

  ngOnInit():void {
  }

}
