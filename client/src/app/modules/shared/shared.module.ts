import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';

import { SharedBreadcrumbComponent } from './components/shared-breadcrumb/shared-breadcrumb.component';
import { SharedHeaderIconComponent } from "./components/shared-header-icon/shared-header-icon.component";
import { SharedNotFoundComponent } from './components/shared-not-found/shared-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    RouterModule.forChild([]), // giving no routes but needed for all <a [routerLink]=""> uses
    TranslateModule.forChild()
  ],
  declarations: [
    SharedBreadcrumbComponent,
    SharedHeaderIconComponent,
    SharedNotFoundComponent,
  ],
  exports: [
    SharedBreadcrumbComponent,
    SharedHeaderIconComponent,
    SharedNotFoundComponent,
  ]
})
export class SharedModule { }
