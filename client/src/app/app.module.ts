import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from './services/_http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// TODO créer un système d'affichage des erreurs (notifications) et rechercher/remplacer tous les alert() et console.log()
// TODO pour problème import npm start : ajouter include ["../node_modules/@ngx-translate", "../node_modules/angular2-materialize"] dans le tsconfig.app.json
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'umi-application-client'}),
    HttpModule,
    AdminModule,
    ClientModule,
    AppRoutingModule
  ],
  providers: [Title, Http, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
