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
          this.toastMessage('Thank you', 'Your successfully registered!. Now you can login.', 'success', 'middle', 6000);
          this.logOut();
        });
      }
      this.toastMessage('Thank you', 'Your successfully registered!. Now you can login.', 'success', 'middle', 6000);
      this.logOut();
    }).catch(err => {
      if (err) {
        this.toastMessage('Error occured', 'Your already registered or Server down!.', 'danger', 'middle', 6000);
      }
    });
  }

  async signIn(email: string, pass: string) {
    await this.auth.signInWithEmailAndPassword(email, pass).then( cred => {
      if (cred) {
        this.authenticationState.next(true);
      }
      this.toastMessage('Success', 'Your now loginned!.', 'success', 'middle', 6000);
    }).catch(err => {
      if (err) {
        this.toastMessage('Failed', 'Your not registered or Server down!.', 'danger', 'middle', 6000);
      }
    });
  }

  logOut() {
    this.auth.signOut();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  async toastMessage(header: string, message: string, color: string, position , duration) {
    this.toast.create({
      header,
      message,
      color,
      position,
      duration
    }).then( t => {
      t.present();
    });
  }
}
