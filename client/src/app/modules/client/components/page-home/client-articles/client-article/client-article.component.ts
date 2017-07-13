import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-client-article',
  templateUrl: './client-article.component.html',
  styleUrls: ['./client-article.component.styl']
})
export class ClientArticleComponent {

    @Input() public size;

    constructor() { }
}
