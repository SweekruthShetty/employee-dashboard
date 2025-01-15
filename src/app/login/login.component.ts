import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  template: `
    <div class="login-container">
      <h2>Employee Dashboard Login</h2>
      <form (ngSubmit)="onLogin()">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username"
            [(ngModel)]="username" 
            name="username" 
            required 
            [disabled]="isLoading"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password"
            [(ngModel)]="password" 
            name="password" 
            required 
            [disabled]="isLoading"
          >
        </div>
        <button 
          type="submit" 
          [disabled]="isLoading"
        >
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
        
        <div *ngIf="errorMessage">
          <div class="error-message">
            {{ errorMessage }}
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 100px auto;
      padding: 30px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 15px;
    }
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    .error-message {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  private router = inject(Router);
  private http = inject(HttpClient);

  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    // Simulated login logic
    if (this.username === 'sweekruth' && this.password === '8792574818') {
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, 1000);
    } else {
      // Simulate error handling
      setTimeout(() => {
        this.isLoading = false;
        this.errorMessage = 'Invalid username or password';
      }, 1000);
    }
  }
}
