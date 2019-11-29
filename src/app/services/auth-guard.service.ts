import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticateServiceService } from './authenticate-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthenticateServiceService) { }
  canActivate(): boolean {
    return this.authService.isAuthenticate();
  }
}
