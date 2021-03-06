// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
// import './commands';
import { register } from "./registration.commands";
import {
  routeToSuperHeroView,
  routeToSuperPowersView,
  returnToSignInView,
} from "./routing.commands";
import {
  signOut,
  confirmDeletion,
  createContent,
  selectContentType,
} from "./shared.commands";
import { signIn } from "./sign-in.commands";
import { createSuperHero, deleteSuperHero } from "./super-heroes.commands";
import { createSuperPower, deleteSuperPower } from "./super-powers.commands";
