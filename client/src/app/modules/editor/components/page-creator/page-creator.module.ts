import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';

import { PageCreatorBaseComponent } from './components/page-creator-base/page-creator-base.component';
import { PageCreatorHtmlComponent } from './components/page-creator-html/page-creator-html.component';
import { PageCreatorTextComponent } from './components/page-creator-text/page-creator-text.component';
import { PageCreatorInputComponent } from './components/page-creator-input/page-creator-input.component';
import { PageCreatorImageComponent } from './components/page-creator-image/page-creator-image.component';
import { PageCreatorContainerComponent } from './components/page-creator-container/page-creator-container.component';
import { PageCreatorElementComponent } from './components/page-creator-element/page-creator-element.component';
import { PageCreatorDeliveryComponent } from './components/page-creator-delivery/page-creator-delivery.component';
import { PageCreatorAddZoneComponent } from './components/page-creator-add-zone/page-creator-add-zone.component';
import { PageCreatorVideoComponent } from './components/page-creator-video/page-creator-video.component';
import { PageCreatorCardComponent } from './components/page-creator-card/page-creator-card.component';


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
        PageCreatorContainerComponent,
        PageCreatorElementComponent,
        PageCreatorDeliveryComponent,
        PageCreatorAddZoneComponent,
        PageCreatorVideoComponent,
        PageCreatorCardComponent
    ],
    exports: [
        PageCreatorBaseComponent,
        PageCreatorHtmlComponent,
        PageCreatorTextComponent,
        PageCreatorImageComponent,
        PageCreatorInputComponent,
        PageCreatorContainerComponent,
        PageCreatorElementComponent,
        PageCreatorDeliveryComponent
    ],
 })
export class PageCreatorModule { }
