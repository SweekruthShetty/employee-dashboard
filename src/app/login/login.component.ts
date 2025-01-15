import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <input type="text" [(ngModel)]="username" name="username" placeholder="Username" required>
        <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    input, button {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // Implement login logic
    console.log('Login attempt', this.username);
  }
}
