import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  // Declare properties first
  tasks$: Observable<Task[]>;
  totalTasks$: Observable<number>;
  completedTasks$: Observable<number>;
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    // Initialize observables in constructor
    this.tasks$ = this.taskService.tasks$;
    this.totalTasks$ = this.taskService.totalTasks$;
    this.completedTasks$ = this.taskService.completedTasks$;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Methods
  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }

  onTaskCompleted(taskId: number): void {
    this.taskService.toggleTaskCompletion(taskId);
  }

  onTaskDeleted(taskId: number): void {
    this.taskService.removeTask(taskId);
  }
}