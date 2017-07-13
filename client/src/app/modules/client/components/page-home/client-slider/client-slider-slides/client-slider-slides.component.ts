import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-slider-slides',
  templateUrl: './client-slider-slides.component.html',
  styleUrls: ['./client-slider-slides.component.styl']
})
export class ClientSliderSlidesComponent implements OnInit {

  @Input() public image: string;
  @Input() public title: string;
  @Input() public content: string;
  @Input() public textSide: string;

  constructor() { }

  ngOnInit() {
  }

}
