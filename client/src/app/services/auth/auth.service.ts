import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Http, Response } from '../http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../../models/user.model';
import { urlRegEx } from '../../utils/regex';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    private _authenticated = false;
    private _authenticatedSource = new Subject<boolean>();
    private _admin = false;
    private _redirectUrl: string;

    constructor(private _http: Http,
                private _cookieService: CookieService) {
        /**
         Les cookies <hasBeenAuthenticated> et <hasBeenAdmin> sont utiles quand l'application essaye d'accéder à une route
         sans que la session ait été récupérée du serveur via la fonction <initializeSession()>. Ceci évite que si l'on
         colle un lien de l'admin par exemple, on soit redirigé sur la page d'accueil car les variables <authenticated>
         et <admin> sont encore à <false> (la réponse du serveur (<initializeSession()>) n'a pas encore été reçue).
         */
        this._setAuthenticatedTo(this._cookieService.get('hasBeenAuthenticated') === 'true');
        this._setAdminTo(this._cookieService.get('hasBeenAdmin') === 'true');
    }

    public login(user: User): Observable<User> {
        return this._http.post('/auth/login', user.toJSON())
            .map((res: Response) => {
                const response = res.json();
                this._setAuthenticatedTo(response.isAuthenticated);
                this._setAdminTo(response.isAdmin);
                return response;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public logout(): Observable<any> {
        return this._http.get('/auth/logout')
            .map((res: Response) => {
                const response = res.json();
                this._setAuthenticatedTo(response.isAuthenticated);
                this._setAdminTo(response.isAdmin);
                return response;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    /**
     * Appelé à l'initialisation de l'application pour ouvrir une session auprès du serveur si besoin
     */
    public initializeSession(): Observable<any> {
        return this._http.get('/auth/session')
            .map((res) => {
                const response = res.json();
                this._setAuthenticatedTo(response.isAuthenticated);
                this._setAdminTo(response.isAdmin);
                return response;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    private _setAuthenticatedTo(newValue: boolean): void {
        this._authenticated = newValue;
        this._authenticatedSource.next(newValue);
        this._cookieService.put('hasBeenAuthenticated', newValue.toString());
    }

    private _setAdminTo(newValue: boolean): void {
        this._admin = newValue;
        this._cookieService.put('hasBeenAdmin', newValue.toString());
    }

    get isAuthenticated$(): Observable<boolean> {
        return this._authenticatedSource.asObservable();
    }

    get isAuthenticated(): boolean {
        return this._authenticated;
    }

    get isAdmin(): boolean {
        return this._admin;
    }

    get acceptCookies(): Boolean {
        return this._cookieService.get('acceptCookies') === 'true';
    }

    set acceptCookies(val: Boolean) {
        this._cookieService.put('acceptCookies', '' + val);
    }

    set redirectUrl (redirectUrl: string) {
        if (urlRegEx.test(redirectUrl)) {
            this._redirectUrl = redirectUrl;
        }
    }
}
