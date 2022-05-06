import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  signIn({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getUserToken() {
    return this.auth.currentUser?.getIdToken();
  }

  getSignedInUser() {
    return this.auth.currentUser;
  }
}
