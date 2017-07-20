import { Component } from '@angular/core';
import {EditionService} from '../../../../../services/edition/edition.service';


@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.styl']
})
export class ClientSliderComponent {

  slides: any = [];

  constructor(private _edService: EditionService) {

    for (let i = 0; i < 6; i++) {
      this.slides.push({
        imageUrl: '../../../../assets/cards/large-' + i + '.jpg',
        title: 'Slides n°' + (i + 1),
        content: 'This is the slogan of slide ' + (i + 1) + '!',
        'text-align': 'center'
      })
    }
  }
}
