import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from './services/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';

// Services
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { EditionService } from './services/edition/edition.service';
import { UserService } from './services/user/user.service';
import { LoadingService } from './services/loading/loading.service';
import {GoogleComponent} from "./google/googleindex";

// TODO créer un système d'affichage des erreurs (notifications) et rechercher/remplacer tous les alert() et console.log()
// TODO pour problème import npm start : ajouter include ["../node_modules/@ngx-translate", "../node_modules/angular2-materialize"] dans le tsconfig.app.json

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cobelt-application-client'}),
    HttpModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (CreateTranslateLoader)
      }
    })
  ],
  providers: [
    Title,
    Http,
    CookieService,
    EditionService,
    UserService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(private _translateService: TranslateService) {
    _translateService.addLangs(['fr', 'en']);
    _translateService.setDefaultLang('en');

    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}

export function CreateTranslateLoader() {
  return new TranslateUniversalLoader();
}

export class TranslateUniversalLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      observer.next();
      observer.complete();
    });
  }
}
