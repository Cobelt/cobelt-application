import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService, initTranslation } from './i18n/i18n';
import {Validators} from '@angular/forms';
import {UserService} from '../../../../services/user/user.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {Title} from '@angular/platform-browser';
import {NotificationsService} from 'angular2-notifications/dist';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-client-account-nav',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.styl']
})
export class ClientAccountComponent implements OnInit {

  constructor (private _userService: UserService,
               private _authService: AuthService,
               private _location: Location,
               private _titleService: Title,
               private _translateService: TranslateService,
               private _notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    initTranslation(this._translateService);
    this._titleService.setTitle('Sign up'); // TODO translate

  }

  public onSubmit(form) {
    if (form.valid) {
      const user = new User(form.value); // TODO vérifier que l'utilisateur est valide (s'il a un email) ...
      this._userService.create(user)
          .subscribe(
              data => {
                this._authService.login(user).subscribe(
                    res => {
                      this._location.back();
                    },
                    error => {
                      this._notificationsService.error('Erreur', error.message); // TODO translate
                    }
                );
              },
              error => {
                this._notificationsService.error('Erreur', error.message); // TODO translate
              }
          );
    }
    else {
      this._notificationsService.error('Erreur', 'Formulaire non valide'); // TODO translate
    }
  }

}
