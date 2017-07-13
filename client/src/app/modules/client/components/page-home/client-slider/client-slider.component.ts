import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import {EditionService} from "../../../../../services/edition/edition.service";


@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.styl']
})
export class ClientSliderComponent {

  private sliderActions: EventEmitter<string | MaterializeAction>;
  private isPlaying: any = true;

  slides: any = [];

  constructor(private _edService: EditionService) {
    this.sliderActions = new EventEmitter<string | MaterializeAction>();

    for (let i = 0; i < 5; i++) {
      this.slides.push({
        imageUrl: '../../../../assets/cards/large-' + i + '.jpg',
        title: 'Slides n°' + (i + 1),
        content: 'This is the slogan of slide ' + (i + 1) + '!',
        'text-align': 'center'
      })
    }
  }

  nextSlide() {
    this.sliderActions.emit({action: "slider", params: ['next']});
  };
  prevSlide() {
    this.sliderActions.emit({action: "slider", params: ['prev']});
  };
  pauseSlider() {
    this.sliderActions.emit({action: "slider", params: ['pause']});
  };
  playSlider() {
    console.log('play');
    this.sliderActions.emit({action: "slider", params: ['start']});
  };

  playOrPause() {
    this.isPlaying ? this.pauseSlider() : this.playSlider();
    this.isPlaying = !this.isPlaying;
  }

}