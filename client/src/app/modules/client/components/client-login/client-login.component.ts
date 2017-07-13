import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../models/user.model';
import { AuthService } from '../../../../services/auth/auth.service';

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
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

  login({value, valid}: { value: User, valid: boolean }) {
    if (valid) {
      this.authService.login(value).subscribe(() => {
        if (this.authService.isAuthenticated) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
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
