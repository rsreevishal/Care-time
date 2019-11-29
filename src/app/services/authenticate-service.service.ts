import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {
  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private platform: Platform) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  async login() {
    const res = await this.storage.set(TOKEN_KEY, 'vish111');
    return this.authenticationState.next(true);
  }
  async logout() {
    await this.storage.remove(TOKEN_KEY);
    return this.authenticationState.next(false);
  }
  isAuthenticate() {
    return this.authenticationState.value;
  }
  async checkToken() {
    const res = await this.storage.get(TOKEN_KEY);
    if (res) {
      return this.authenticationState.next(true);
    }
    return res;
  }
}
