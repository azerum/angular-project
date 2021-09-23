import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public tryLogin(email: string, password: string): boolean {
    if (email === 'bob@gmail.com'  && password === 'password') {
      localStorage.setItem('token', 'todo-generate-token');
      return true;
    }

    return false;
  }

  public isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
