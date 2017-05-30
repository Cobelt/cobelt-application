import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { inForm } from '../../../tools/form.validator';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.styl']
})
export class ClientLoginComponent implements OnInit {
  passwordMinLength: number = 4;

  userForm: FormGroup;
  errorsMessages: any = {};

  constructor(private formBuilder: FormBuilder,
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

  login({value, valid}: { value: User, valid: boolean }) {
    if (valid) {
      this.authService.login(value).subscribe(() => {
        if (this.authService.isAuthenticated) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      });
    }
    else {
      alert("Not valid");
    }
  }
}
