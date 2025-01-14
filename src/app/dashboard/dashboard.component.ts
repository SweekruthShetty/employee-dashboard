import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
  estimatedHours?: number;
  status: 'pending' | 'completed';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DashboardComponent {
  pendingTasks: Task[] = [
    {
      id: 1,
      title: 'Implement User Authentication',
      description: 'Create login and registration system',
      priority: 'high',
      estimatedHours: 8,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Design Dashboard UI',
      description: 'Create responsive layout for dashboard',
      priority: 'medium',
      estimatedHours: 5,
      status: 'pending'
    }
  ];

  completedTasks: Task[] = [];

  showAddTaskModal: boolean = false;
  newTask: Partial<Task> = {};

  constructor(private router: Router) {}

  logout() {
    // Navigate back to login page
    this.router.navigate(['/login']);
  }

  openAddTaskModal() {
    this.showAddTaskModal = true;
  }

  closeAddTaskModal() {
    this.showAddTaskModal = false;
    this.newTask = {};
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      const task: Task = {
        id: this.pendingTasks.length + this.completedTasks.length + 1,
        title: this.newTask.title,
        description: this.newTask.description,
        priority: this.newTask.priority || 'medium',
        estimatedHours: this.newTask.estimatedHours || 0,
        status: 'pending'
      };

      this.pendingTasks.push(task);
      this.closeAddTaskModal();
    }
  }

  completeTask(task: Task) {
    // Remove from pending tasks
    this.pendingTasks = this.pendingTasks.filter(t => t.id !== task.id);
    
    // Mark as completed and add to completed tasks
    task.status = 'completed';
    this.completedTasks.push(task);
  }
}
