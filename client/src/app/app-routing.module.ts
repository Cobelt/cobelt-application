import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth/auth.service';

import { NonAuthGuard } from './non-auth-guard.service';
import { AuthGuard } from './auth-guard.service';

import {GoogleComponent} from "./google/googleindex";

const appRoutes: Routes = [
  {
    path: 'google06bf8890b809d086.html',
    component: GoogleComponent
  },
  {
    path: 'edit',
    loadChildren: './modules/editor/editor.module#EditorModule'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: '',
    loadChildren: './modules/client/client.module#ClientModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ],
  providers: [
    AuthGuard,
    NonAuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
