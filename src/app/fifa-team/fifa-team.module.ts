import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [TeamListComponent, TeamDetailComponent]
})
export class FifaTeamModule { }
