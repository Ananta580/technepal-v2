import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['news-admin']);
    }
    this.loginForm = this.fb.group({
      UserName: [],
      Password: [],
    });
  }

  login() {
    this.authService.doLogin(this.loginForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('tnTOKEN', res.data);
        this.router.navigate(['news-admin']);
      },
    });
  }
}
