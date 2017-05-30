import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { inForm } from '../../tools/form.validator';

@Component({
  selector: 'app-signup-activation',
  templateUrl: './signup-activation.component.html',
  styleUrls: ['./signup-activation.component.styl'],

})
export class SignupActivationComponent implements OnInit {
  activationForm: FormGroup;
  errorsMessages: any = {};

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.initFormErrorsMessages();
  }

  initForm() {
    this.activationForm = this.formBuilder.group({
      activationCode: ['', [Validators.required]]
    });
  }

  initFormErrorsMessages() {
    /*this.activationForm.valueChanges.subscribe(data => {
      inForm(this.activationForm).placeErrorsMessagesIn(this.errorsMessages)
        .ifField('activationCode')
        .hasError('required').thenTell("Activation code required");
    });*/
  }

  activateAccount() {
    alert("TODO");
  }
}
