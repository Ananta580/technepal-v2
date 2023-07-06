import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  get isLoggedIn() {
    return localStorage.getItem('tnTOKEN');
  }

  doLogin(login: any) {
    return this.api.post('/auth/login', login);
  }
}
