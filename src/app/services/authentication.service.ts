import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public firebaseAuth: AngularFireAuth) {}

  signIn(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.firebaseAuth.signOut();
  }

  register(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }
}
