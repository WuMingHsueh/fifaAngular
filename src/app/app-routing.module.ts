import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './fifa-team/team-list/team-list.component';
import { TeamDetailComponent } from './fifa-team/team-detail/team-detail.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'teamList', pathMatch: 'full'},
  {path: 'teamList',        component: TeamListComponent},
  {path: 'teamDetails/:id', component: TeamDetailComponent},
  {path: 'register',        component: RegisterComponent},
  {path: 'login',           component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
