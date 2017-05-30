import { Component } from '@angular/core';
import {infographicContent, questions} from "../infographic.demo";

@Component({
  selector: 'infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.styl']
})
export class InfographicComponent {

  public infographic: any;
  public questions: any;

  constructor() {
    this.infographic = infographicContent;
    this.questions = questions;
  }

  getStatTitle (id) {
    for (let question of this.questions) {
      if (question.id == id) {
        return question.statTitle;
      }
    }
    return "";
  }
  isOn (id) {
    for (let question of this.questions) {
      if (question.id == id) {
        return question.isOn;
      }
    }
    return "";
  }
}
