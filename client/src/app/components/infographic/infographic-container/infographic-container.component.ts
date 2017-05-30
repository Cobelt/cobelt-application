import {Component, Input, OnInit} from '@angular/core';
import {infographicContent, questions} from "../infographic.demo";

@Component({
  selector: 'infographic-container',
  templateUrl: './infographic-container.component.html',
  styleUrls: ['./infographic-container.component.styl']
})
export class InfographicContainerComponent implements OnInit {

  @Input() thisQuestionId: string;
  infographic: any;
  question: any;

  constructor () {
    this.infographic = infographicContent;
    this.question = null;

  }

  ngOnInit () {
    for (let question of questions) {
      if (question.id == this.thisQuestionId)
        this.question = question;
    }
  }

  getStatTitle () {
    for (let question of questions) {
      if (question.id == this.thisQuestionId) {
        return question.statTitle;
      }
    }
    return "";
  }

  getAnswerType () {
    for (let question of questions) {
      if(this.thisQuestionId == question.id) {
        return question.answerType;
      }
    }
    return 'string';
  }

  getAnswerToQuestion (reponse) {
    for (let question of reponse.questions) {
      if(this.thisQuestionId == question.id) {
        let type = this.getAnswerType();
        let answer = question.answer;
        if (type == 'number') {
          answer = Number(answer);
        }
        else if (type == 'boolean') {
          answer = Boolean(answer);
        }
        return answer;
      }
    }
    return "";
  }

  getMoyenneOfAnswers () {
    let sum = 0;
    for (let reponse of this.infographic.answers) {
      sum += Number(this.getAnswerToQuestion (reponse)); // cast into number
    }
    return sum / this.getQuantityAnswers();
  }

  getQuantityAnswers () {
    let cpt = 0;
    for (let answers of this.infographic.answers) {
      for (let answer of answers.questions) {
        if(this.thisQuestionId == answer.id && answer.answer)
          cpt++;
      }
    }
    return cpt;
  }

  getQuantityOfTrue () {
    let cpt = 0;
    for (let answers of this.infographic.answers) {
      for (let answer of answers.questions) {
        if(this.thisQuestionId == answer.id && Boolean(answer.answer)) {
          cpt++;
        }
      }
    }
    return cpt;
  }

  getTotalOfAnswers () {
    return this.infographic.answers.length;
  }

}
