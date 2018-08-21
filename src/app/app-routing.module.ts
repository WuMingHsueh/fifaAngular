import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './fifa-team/team-list/team-list.component';
import { TeamDetailComponent } from './fifa-team/team-detail/team-detail.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './user/user.service';

const routes: Routes = [
  { path: '', redirectTo: 'teamList', pathMatch: 'full' },
  { path: 'teamList', component: TeamListComponent },
  { path: 'teamDetail/:id', component: TeamDetailComponent, canActivate: [UserService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
