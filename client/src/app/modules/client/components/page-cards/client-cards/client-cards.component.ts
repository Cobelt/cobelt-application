import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
  selector: 'app-client-cards',
  templateUrl: './client-cards.component.html',
  styleUrls: ['./client-cards.component.styl']
})
export class ClientCardsComponent implements OnInit {

  private translate: TranslateService;
  private _cards: any = [];

  constructor(private _titleService: Title, private translateService: TranslateService) {
    this.translate = initTranslation(translateService);

    for (let i = 1; i <= 37; i++) {
      this._cards.push({
        id: i,
        title: 'Chien numero ' + i,
        content : i + ' : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dictum sem, quis rhoncus ex. Cras turpis urna, vestibulum sit amet interdum nec, pretium nec ante. Nullam eget feugiat est. In tincidunt vulputate diam, vel commodo lectus. Ut dignissim, elit cursus dignissim lacinia, justo eros rutrum sem, a dapibus diam lectus non massa. Nulla facilisi. Pellentesque ac faucibus eros, in rutrum dui.',
        miniature: '../../../../assets/cards/' + i + '.jpg',
        power: Math.floor((Math.random() * 10 * i + 2) % 8) + 2,
        toughness: Math.floor((Math.random() * 10 * i + 2) % 8) + 2,
      })
    }
  }

  ngOnInit() {
    this._titleService.setTitle('');
  }

  get cards(): any {
    return this._cards;
  }

}
