import { Injectable } from '@angular/core';
import { Http, Response } from './_http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { CookieService } from 'angular2-cookie/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  redirectUrl: string;

  constructor(private http: Http,
              private cookieService: CookieService) {
  }

  login(user: User): Observable<User> {
    return this.http.post('/auth/login', user)
      .map((res: Response) => {
        const response = res.json();
        this.isAuthenticated = response.isAuthenticated;
        this.isAdmin = response.isAdmin;
        return response;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout(): Observable<any> {
    return this.http.get('/auth/logout')
      .map((res: Response) => {
        const response = res.json();
        this.isAuthenticated = response.isAuthenticated;
        this.isAdmin = response.isAdmin;
        return response;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  isAcceptingCookies (): Boolean { // CNIL
    //return (this.cookieService.get('cookiesAccepted') && this.cookieService.get('cookiesAccepted') === 'true'); // TODO
    return true;
  }

  /**
   * Appelé à l'initialisation de l'application pour ouvrir une session auprès du serveur si besoin
   */
  initializeSession(): Observable<any> {
    return this.http.get('/session')
      .map((res) => {
        const response = res.json();
        this.isAuthenticated = response.isAuthenticated;
        this.isAdmin = response.isAdmin;
        console.log(response);
        return response;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
