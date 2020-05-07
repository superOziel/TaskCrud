import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { async } from '@angular/core/testing';

declare var M: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [ TaskService ]
})
export class TasksComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
    .subscribe(res => {
      console.log("test get tasks", res)
      this.taskService.tasks = res as Task[];
    })

  }

  addTask(form: NgForm){
        console.log("formulario", form.value)

    if(form.value){
      form.value.update = new Date();
    }

    if(form.value._id){
      this.taskService.putTask(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTasks();
        })
    } else {
      this.taskService.createTask(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTasks();
      })
    };   
  }

  editTask(task: Task){
    this.taskService.selectedTask = task
  }

  
  deleteTask(id: string){
    this.taskService.deleteTask(id)
    .subscribe(res => {
      this.getTasks();
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.taskService.selectedTask = new Task();
    }
  }
}
