import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { MaterializeModule } from 'angular2-materialize';
import { NgPipesModule } from 'ngx-pipes';

import { ClientModule } from '../client/client.module';
import { SharedModule } from '../shared/shared.module';

import { EditorRoutingModule } from './editor-routing.module';

import { EditorThemeComponent } from './components/editor-theme/editor-theme.component';
import { PageCreatorModule } from './components/page-creator/page-creator.module';
import {EditorComponent} from "./editor.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MaterializeModule,
    NgPipesModule,

    ClientModule,
    SharedModule,
    PageCreatorModule,

    EditorRoutingModule
  ],
  declarations: [
    EditorComponent,
    EditorThemeComponent
  ]
})
export class EditorModule {
  constructor() {}
}
