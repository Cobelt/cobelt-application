  /*** Angular ***/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  /*** Dependencies imported ***/
import { TranslateModule } from '@ngx-translate/core';
import { MaterializeModule } from 'angular2-materialize/dist';
import { NgPipesModule } from 'ngx-pipes';

  /*** Modules ***/
import { SharedModule } from '../shared/shared.module';

  /*** Router ***/
import { ClientRoutingModule } from './client-routing.module';

  /*** Components ***/
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { ClientFooterComponent } from './components/client-footer/client-footer.component';
import { ClientComponent } from './client.component';

import { ClientAccountComponent } from './components/client-account/client-account.component';
import { ClientArticleComponent } from './components/page-home/client-articles/client-article/client-article.component';
import { ClientHomeComponent } from './components/page-home/client-home/client-home.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { ClientSliderComponent } from './components/page-home/client-slider/client-slider.component';

import { ClientCnilOverlayComponent } from './components/client-cnil-overlay/client-cnil-overlay.component';
import { ClientLogoutComponent } from './components/client-logout/client-logout.component';
import { ClientCardsComponent } from './components/page-cards/client-cards/client-cards.component';
import { ClientSliderSlidesComponent } from './components/page-home/client-slider/client-slider-slides/client-slider-slides.component';
import { ClientCardComponent } from './components/page-cards/client-cards/client-card/client-card.component';
import { ClientGenealogyComponent } from './components/page-genealogy/client-genealogy/client-genealogy.component';
import { ClientGamesComponent } from './components/page-games/client-games/client-games.component';
import { ClientStoriesComponent } from './components/page-stories/client-stories/client-stories.component';
import { ClientArticlesComponent } from './components/page-home/client-articles/client-articles.component';
import { ClientShopComponent } from './components/page-shop/client-shop/client-shop.component';
import { ClientDrawingsComponent } from './components/page-drawings/client-drawings/client-drawings.component';
import { ClientFooterTextblocComponent } from './components/client-footer/client-footer-textbloc/client-footer-textbloc.component';
import { PageCreatorModule } from '../editor/components/page-creator/page-creator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MaterializeModule,
    NgPipesModule,

    SharedModule,
    PageCreatorModule,

    ClientRoutingModule
  ],
  declarations: [
    ClientComponent,

    ClientHeaderComponent,

    ClientFooterComponent,
    ClientFooterTextblocComponent,

    ClientCnilOverlayComponent,

    ClientAccountComponent,

    ClientArticleComponent,
    ClientArticlesComponent,

    ClientCardComponent,
    ClientCardsComponent,

    ClientSliderComponent,
    ClientSliderSlidesComponent,

    ClientHomeComponent,
    ClientGamesComponent,
    ClientGenealogyComponent,
    ClientShopComponent,
    ClientStoriesComponent,
    ClientDrawingsComponent,

    /* connection / inscription */
    ClientLoginComponent,
    ClientLogoutComponent,
    ClientSignupComponent,

  ],
  exports: [
    ClientHeaderComponent,
    ClientFooterComponent
  ]
})


export class ClientModule {
  constructor() {}
}
