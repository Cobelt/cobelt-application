import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminHeaderComponent } from "./components/admin-header/admin-header.component";
import { MaterializeModule } from "angular2-materialize";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminUsersComponent
  ]
})
export class AdminModule { }
