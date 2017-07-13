import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';

import { PageCreatorBaseComponent } from "./components/page-creator-base/page-creator-base.component";
import { PageCreatorHtmlComponent } from "./components/page-creator-html/page-creator-html.component";
import { PageCreatorTextComponent } from "./components/page-creator-text/page-creator-text.component";
import { PageCreatorInputComponent } from "./components/page-creator-input/page-creator-input.component";
import { PageCreatorImageComponent } from "./components/page-creator-image/page-creator-image.component";
import { PageCreatorContainerComponent } from "./components/page-creator-container/page-creator-container.component";


@NgModule({ 
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        NgPipesModule
    ],
    declarations: [
        PageCreatorBaseComponent,
        PageCreatorHtmlComponent,
        PageCreatorTextComponent,
        PageCreatorImageComponent,
        PageCreatorInputComponent,
        PageCreatorContainerComponent
    ],
 })
export class PageCreatorModule { }
