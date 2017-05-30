import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';

import { inForm } from '../../../tools/form.validator';

import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.styl'],
  providers: [UserService]
})
export class ClientSignupComponent implements OnInit {
  passwordMinLength: number = 4;

  userForm: FormGroup;
  errorsMessages: any = {};

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.initFormErrorsMessages();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

  initFormErrorsMessages() {
    this.userForm.valueChanges.subscribe(data => {
      inForm(this.userForm).placeErrorsMessagesIn(this.errorsMessages)
        .ifField('email')
          .hasError('required').thenTell("Email is required")
          .elseIfHasError('email').thenTell("I'm not sure this is an email address")
        .elseIfField('password')
          .hasError('required').thenTell("Password is required")
          .elseIfHasError('minlength').thenTell("Password should be at least 4 characters long");
    });
  }

  signup({value, valid}: { value: User, valid: boolean }) {
    if (valid) {
      this.userService.create(value)
        .subscribe(
          user => {
            // L'utilisateur est inscrit, il faut le connecte
            this.authService.login(value).subscribe(() => {
                if (this.authService.isAuthenticated) {
                  let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                  let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                  };
                  this.router.navigate([redirect], navigationExtras);
                }
              },
              error => {
                alert(error.message);
              });
          },
          error => {
            alert(error.message);
          }
        );
    }
    else {
      alert("Not valid");
    }
  }

}
