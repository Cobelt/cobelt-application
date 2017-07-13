import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';

import { EditorThemeComponent } from '../editor/components/editor-theme/editor-theme.component';

/* Shared */
import { SharedNotFoundComponent } from '../shared/components/shared-not-found/shared-not-found.component';

/* Guards */
import { NonAuthGuard } from '../../non-auth-guard.service';
import { AuthGuard } from '../../auth-guard.service';

const editorRoutes: Routes = [
  {
    path: 'edit',
    component: EditorComponent,
    children: [
      {
        path: 'theme',
        component: EditorThemeComponent
      },
      {
        path: '**',
        component: SharedNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(editorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditorRoutingModule {}
