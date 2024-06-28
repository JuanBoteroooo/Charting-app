import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Ajuste aquí
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth } from "firebase/auth"; // Ajuste aquí
import { firebaseApp } from '../../environments/firebase-config'; // Ajuste aquí

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;

  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getUser() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  }
}
