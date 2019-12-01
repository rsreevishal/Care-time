import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FirebaseService } from './firebase-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: FirebaseService) { }
  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
