import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<number>();
  @Output() taskDeleted = new EventEmitter<number>();

  onToggleComplete(): void {
    this.taskCompleted.emit(this.task.id);
  }

  onDelete(): void {
    this.taskDeleted.emit(this.task.id);
  }
}