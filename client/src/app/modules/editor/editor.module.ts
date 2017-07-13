import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import { MaterializeModule } from "angular2-materialize";
import { NgPipesModule } from "ngx-pipes";
import { SharedModule } from "../shared/shared.module";
import { EditorRoutingModule } from "./editor-routing.module";

import { EditorThemeComponent } from './components/editor-theme/editor-theme.component';
import { PageCreatorModule } from "./components/page-creator/page-creator.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorRoutingModule,
    TranslateModule.forChild(),
    MaterializeModule,
    NgPipesModule,

    SharedModule,
    PageCreatorModule
  ],
  declarations: [
    EditorThemeComponent
  ]
})
export class EditorModule { }