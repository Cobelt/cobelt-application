import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.styl']
})
export class ClientHeaderComponent {
  private translate: TranslateService;

  constructor(private translateService: TranslateService,
              private authService: AuthService) {
    this.translate = initTranslation(translateService);
  }

  logout() {
    this.authService.logout()
      .subscribe(
        res => {
          alert('déconnecté');
        },
        error => {
          alert("Déconnexion impossible");
        });
  }
}
