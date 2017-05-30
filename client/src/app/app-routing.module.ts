import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';
import { AuthService } from './services/auth.service';
//import { AuthGuard } from './modules/admin/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: ClientModule
  },
  {
    path: 'admin',
    component: AdminModule
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
    //AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
