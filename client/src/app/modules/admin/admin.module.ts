import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminUsersComponent
  ]
})
export class AdminModule { }
