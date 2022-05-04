import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayPageComponent } from './components/user-display-page/user-display-page.component';
import { UserCreationPageComponent } from './components/user-creation-page/user-creation-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
  { path: 'authentication', component: AuthPageComponent },
  { path: 'user-creation', component: UserCreationPageComponent },
  { path: 'users-display', component: UserDisplayPageComponent },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
