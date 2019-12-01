import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  authenticationState = new BehaviorSubject(false);
  firebaseConfig = {
    apiKey: 'AIzaSyAaPCJ57asWlJAkp096QX_C7ZmjRbnegpg',
    authDomain: 'caretime-c6c2a.firebaseapp.com',
    databaseURL: 'https://caretime-c6c2a.firebaseio.com',
    projectId: 'caretime-c6c2a',
    storageBucket: 'caretime-c6c2a.appspot.com',
    messagingSenderId: '63726528966',
    appId: '1:63726528966:web:2020f56e8b68a263446ac7',
    measurementId: 'G-820MWPG1RK'
  };
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  constructor(private toast: ToastController) {
    this.app = firebase.initializeApp(this.firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.auth.onAuthStateChanged( user => {
      if (user) {
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
    });
  }

  async signUp(email: string, pass: string, data: JSON = null) {
    await this.auth.createUserWithEmailAndPassword(email, pass).then(cred => {
      if (data) {
        return this.db.collection('users').doc(cred.user.uid).set(data).then(() => {
          this.authenticationState.next(true);
        });
      }
      this.toast.create({
        header: 'Thank you',
        message: 'Your successfully registered!',
        color: 'success',
        duration: 6000,
        position: 'middle'
      }).then((t) => { t.present(); });

    }).catch(err => {
      if (err) {
        this.toast.create({
          header: 'Error occured',
          message: 'Your email is already registered or server down. Sorry!',
          color: 'danger',
          duration: 6000,
          position: 'middle'
        }).then((t) => { t.present(); });
      }

    });
  }

  async signIn(email: string, pass: string) {
    await this.auth.signInWithEmailAndPassword(email, pass).then( cred => {
      if (cred) {
        this.authenticationState.next(true);
      }
      this.toast.create({
        header: 'Success',
        message: 'Your now logged in.',
        color: 'success',
        duration: 5000
      }).then( t => { t.present(); });
    }).catch(err => {
      if (err) {
        this.toast.create({
          header: 'Failed',
          message: 'Your account is not registered or server down!.',
          color: 'danger',
          duration: 5000
        }).then( t => { t.present(); });
      }
    });
  }

  logOut() {
    this.auth.signOut();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
