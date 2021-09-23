import { Component } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public email: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  public login(): void {
     const loggedIn = this.authService.tryLogin(this.email, this.password);

     if (loggedIn) {
       this.router.navigate(['/dashboard']).then();
     }
     else {
       alert('Invalid email or password');
     }
  }
}
