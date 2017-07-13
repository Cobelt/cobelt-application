import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientLogoutComponent } from './components/client-logout/client-logout.component';

/* Content routes */
import { ClientHomeComponent } from './components/page-home/client-home/client-home.component';
import { ClientCardsComponent } from './components/page-cards/client-cards/client-cards.component';
import { ClientGamesComponent } from './components/page-games/client-games/client-games.component';
import { ClientGenealogyComponent } from './components/page-genealogy/client-genealogy/client-genealogy.component';
import { ClientStoriesComponent } from './components/page-stories/client-stories/client-stories.component';

/* Shared */
import { SharedNotFoundComponent } from '../shared/components/shared-not-found/shared-not-found.component';

/* Guards */
import { NonAuthGuard } from '../../non-auth-guard.service';
import { AuthGuard } from '../../auth-guard.service';
import {ClientShopComponent} from "./components/page-shop/client-shop/client-shop.component";
import {ClientDrawingsComponent} from "./components/page-drawings/client-drawings/client-drawings.component";

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: ClientHomeComponent }
        ]
      },
      {
        path: 'cards',
        children: [
          { path: '', component: ClientCardsComponent }
        ]
      },
      {
        path: 'drawings',
        children: [
          { path: '', component: ClientDrawingsComponent }
        ]
      },
      {
        path: 'games',
        children: [
          { path: '', component: ClientGamesComponent }
        ]
      },
      {
        path: 'genealogy',
        children: [
          { path: '', component: ClientGenealogyComponent }
        ]
      },
      {
        path: 'shop',
        children: [
          { path: '', component: ClientShopComponent }
        ]
      },
      {
        path: 'stories',
        children: [
          { path: '', component: ClientStoriesComponent }
        ]
      },
      {
        path: '**',
        component: SharedNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {}
