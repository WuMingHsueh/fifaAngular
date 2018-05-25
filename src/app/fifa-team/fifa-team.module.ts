import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { ConfigService } from '../config.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  declarations: [TeamListComponent, TeamDetailComponent]
})
export class FifaTeamModule { }
