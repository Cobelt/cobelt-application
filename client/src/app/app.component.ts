import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  constructor(private _authService: AuthService,
              private _router: Router) {

    if (_authService.isAcceptingCookies()) {
      _authService.initializeSession().subscribe(
        res => console.log(res.message),
        error => console.log("Can't reach server")
      );
    }


    /*_router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("Page " + event.url); // TODO Envoyer les pages visités au serveur pour les stats (enregistrement dans la session...)
      }
    });*/
  }
}
