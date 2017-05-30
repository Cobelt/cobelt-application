import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientDiscoverComponent } from './client-discover/client-discover.component';
import { ClientInventionComponent } from './client-invention/client-invention.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: ClientDashboardComponent }
        ]
      },
      {
        path: 'login',
        children: [
          { path: '', component: ClientLoginComponent }
        ]
      },
      {
        path: 'signup',
        children: [
          { path: '', component: ClientSignupComponent }
        ]
      },
      {
        path: 'discover-and-evaluate',
        children: [
          { path: '', component: ClientDiscoverComponent }
        ]
      },
      {
        path: 'invention',
        children: [
          { path: '', component: ClientInventionComponent }
        ]
      },
      {
        path: '**',
        component: NotFoundComponent
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
