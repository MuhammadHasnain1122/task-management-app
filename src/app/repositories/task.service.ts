import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { title: "test",
      completed: false,
      taskType: "stragety",
      assign: "ali",
      date: "13/04/2023"
    },
    { title: "test",
    completed: true,
    taskType: "stragety",
    assign: "ali",
    date: "13/04/2023"
  },
  { title: "test",
  completed: false,
  taskType: "stragety",
  assign: "ali",
  date: "13/04/2023"
}
];
  

  addTask(task: Task) {
    this.tasks.push(task);
  }

  markCompleted(task: Task) {
    task.completed = true;
  }

  getTasks() {
    return this.tasks;
  }
}

export interface Task {
  title: string;
  completed: boolean;
  taskType: string;
  assign: string;
  date: string;
}
