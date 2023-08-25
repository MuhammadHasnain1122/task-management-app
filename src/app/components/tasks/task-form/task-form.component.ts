// src/app/task-form/task-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from 'src/app/repositories/task.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class TaskFormComponent {
  newTask: any = '';
  taskForm: FormGroup;

  constructor(private taskService: TaskService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private fb: FormBuilder,) {
      this.taskForm = this.fb.group({
        taskType: [''],
        title: [''],
        assign: [''],
        date: [''],
        completed: [false]
      });
    }

  addTask() {
    const task = this.taskForm.value;
    this.taskService.addTask(task);
    this.taskForm.reset();
  }


  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.addTask();
            this.messageService.add({  severity: 'success',detail: 'Task Submitted' });
        },
        reject: () => {
       
                    this.messageService.add({ severity: 'error',  detail: 'Rejected' });
            }
        })
    };
  }