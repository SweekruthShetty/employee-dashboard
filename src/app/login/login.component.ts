import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Hardcoded credentials as specified
    if (this.username === 'sweekruth' && this.password === '8792574818') {
      // Navigate to dashboard on successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Show login error
      this.loginError = true;
    }
  }
}
