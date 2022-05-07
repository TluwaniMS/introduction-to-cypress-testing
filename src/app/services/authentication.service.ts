import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth, private router: Router) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/authentication']);
    });
  }

  signIn({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => {
      this.router.navigate(['/']);
    });
  }

  getUserToken() {
    return this.auth.currentUser?.getIdToken();
  }

  getSignedInUser() {
    return this.auth.currentUser;
  }
}
