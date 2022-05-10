import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SuperHeroesDisplayComponent } from './components/super-heroes-display/super-heroes-display.component';
import { SuperPowersDisplayComponent } from './components/super-powers-display/super-powers-display.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { PasswordConfirmationValidatorDirective } from './custom-form-validator/password-confirmation-validator.directive';
import { PasswordValidatorDirective } from './custom-form-validator/password-validator.directive';
import { ContentDeletionConfirmationComponent } from './modals/content-deletion-confirmation/content-deletion-confirmation.component';
import { SuperHeroCreatorComponent } from './modals/super-hero-creator/super-hero-creator.component';
import { SuperPowerCreatorComponent } from './modals/super-power-creator/super-power-creator.component';
import { ContentTypeSelectionComponent } from './modals/content-type-selection/content-type-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    PasswordConfirmationValidatorDirective,
    PasswordValidatorDirective,
    SuperHeroesDisplayComponent,
    SuperPowersDisplayComponent,
    ContentDeletionConfirmationComponent,
    SuperHeroCreatorComponent,
    SuperPowerCreatorComponent,
    ContentTypeSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    PasswordConfirmationValidatorDirective,
    PasswordValidatorDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
