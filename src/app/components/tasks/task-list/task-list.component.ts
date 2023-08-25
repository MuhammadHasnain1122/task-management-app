// src/app/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from 'src/app/repositories/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showCompleted: boolean = true;
  filterType: string = 'all';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  markCompleted(task: Task) {
    this.taskService.markCompleted(task);
  }

  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  get filteredTasks() {
    if (this.filterType === 'all') {
      return this.showCompleted ? this.tasks : this.tasks.filter(task => !task.completed);
    } else if (this.filterType === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks;
  }
}
