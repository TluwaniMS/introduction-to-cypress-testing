import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayPageComponent } from './components/user-display-page/user-display-page.component';
import { UserCreationPageComponent } from './components/user-creation-page/user-creation-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorisedToAuthPage = () =>
  redirectUnauthorizedTo(['/authentication']);
const redirectAuthorisedToUsersPage = () =>
  redirectUnauthorizedTo(['/authentication']);

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthPageComponent,
    data: { authGuardPipe: redirectAuthorisedToUsersPage },
  },
  {
    path: 'user-creation',
    component: UserCreationPageComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe:redirectUnauthorisedToAuthPage },
  },
  {
    path: 'users-display',
    component: UserDisplayPageComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorisedToAuthPage },
  },
  { path: '', redirectTo: '/users-display', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
