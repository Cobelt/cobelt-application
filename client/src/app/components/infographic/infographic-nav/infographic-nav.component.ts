import {Component, Input} from '@angular/core';
import {infographicContent, questions} from "../infographic.demo";

@Component({
  selector: 'infographic-nav',
  templateUrl: './infographic-nav.component.html',
  styleUrls: ['./infographic-nav.component.styl']
})
export class InfographicNavComponent {

  infographic: any;
  questions: any;
  show: boolean;

  constructor() {
    this.infographic = infographicContent;
    this.questions = questions;
    this.show = true;
  }

  invertShow () {
    this.show = !this.show;
  }

  getStatTitle (id) {
    for (let question of this.questions) {
      if (question.id == id) {
        return question.statTitle;
      }
    }
    return "";
  }
}
