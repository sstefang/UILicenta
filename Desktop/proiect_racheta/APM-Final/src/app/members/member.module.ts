import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MemberListComponent } from './member-list.component';
import { MemberDetailComponent } from './member-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { MemberDetailGuard } from './member-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'members', component: MemberListComponent },
      {
        path: 'members/:id',
        canActivate: [MemberDetailGuard],
        component: MemberDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class MemberModule {
  
}
