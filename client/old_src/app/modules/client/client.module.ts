import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ClientRoutingModule } from './client-routing.module';
import { MaterializeModule } from 'angular2-materialize/dist';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientFooterComponent } from '../../../../src/app/modules/client/components/client-footer/client-footer.component';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientAccountComponent } from './client-account/client-account.component';
import { Observable } from 'rxjs/Observable';
import { ClientLoginComponent } from './client-login/client-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientHomeComponent} from "../../../../src/app/modules/client/components/page-home/client-home/client-home.component";
import {ClientArticleComponent} from "../../../../src/app/modules/client/components/page-home/client-articles/client-article/client-article.component";
import {ClientSliderComponent} from "../../../../src/app/modules/client/components/page-home/client-slider/client-slider.component";
import {NgPipesModule} from "ngx-pipes";

export function createTranslateLoader() {
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

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    ClientRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
      }
    }),
    NgPipesModule
  ],
  declarations: [
    ClientComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientAccountComponent,
    ClientDashboardComponent,
    ClientLoginComponent,
    ClientHomeComponent,
    ClientArticleComponent,
    ClientSliderComponent,
  ]
})
export class ClientModule { }
