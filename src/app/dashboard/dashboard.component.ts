import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <h1>Employee Dashboard</h1>
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>Total Employees</h3>
          <p>{{ totalEmployees }}</p>
        </div>
        <div class="dashboard-card">
          <h3>Active Projects</h3>
          <p>{{ activeProjects }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .dashboard-card {
      background-color: #f4f4f4;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class DashboardComponent {
  totalEmployees: number = 150;
  activeProjects: number = 25;
}
