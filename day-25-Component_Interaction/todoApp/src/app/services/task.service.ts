import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasksSubject.asObservable();

  totalTasks$ = this.tasks$.pipe(
    map(tasks => tasks.length)
  );

  completedTasks$ = this.tasks$.pipe(
    map(tasks => tasks.filter(task => task.completed).length)
  );

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date()
    };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }

  toggleTaskCompletion(id: number): void {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(this.tasks);
  }
}
