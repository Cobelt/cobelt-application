import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { MaterializeModule } from 'angular2-materialize/dist';
import { Observable } from 'rxjs/Observable';

import {InventionService} from "../../services/invention.service";
import {UserService} from "../../services/user.service";

import { ClientRoutingModule } from './client-routing.module';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientFooterComponent } from './client-footer/client-footer.component';
import { ClientComponent } from './client.component';

import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientInventionComponent } from "./client-invention/client-invention.component";
import { ClientAccountComponent } from './client-account-sidenav/client-account.component';
import { ClientDiscoverComponent } from './client-discover/client-discover.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';

import { CnilOverlayComponent } from './client-cnil-overlay/client-cnil-overlay.component';

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
    })
  ],
  declarations: [
    ClientComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientAccountComponent,
    ClientDashboardComponent,
    ClientInventionComponent,
    ClientLoginComponent,
    ClientDiscoverComponent,
    CnilOverlayComponent,
    ClientSignupComponent
  ],
  providers: [UserService, InventionService]
})
export class ClientModule { }
