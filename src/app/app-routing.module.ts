import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroesDisplayComponent } from './components/super-heroes-display/super-heroes-display.component';
import { SuperPowersDisplayComponent } from './components/super-powers-display/super-powers-display.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorisedToAuthPage = () =>
  redirectUnauthorizedTo(['/authentication']);

const redirectAuthorisedToSuperHeroesPage = () =>
  redirectLoggedInTo(['/super-heroes-display']);

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthPageComponent,
    data: { authGuardPipe: redirectAuthorisedToSuperHeroesPage },
  },
  {
    path: 'super-heroes-display',
    component: SuperHeroesDisplayComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorisedToAuthPage },
  },
  {
    path: 'super-powers-display',
    component: SuperPowersDisplayComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorisedToAuthPage },
  },
  { path: '', redirectTo: '/super-heroes-display', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
