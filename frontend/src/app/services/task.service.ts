import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from "../model/task";
import { TasksComponent } from "../components/tasks/tasks.component";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedTask: Task;
  tasks: Task[];
  readonly url = "http://localhost:3000/api/tasks";
  constructor(private http: HttpClient) {
    this.selectedTask = new Task();
   }

  getTasks()  {
    return this.http.get("http://localhost:3000/api/tasks");
   }

   postTask(Task: Task)  { 
     console.log("url", this.url)
    return this.http.post(this.url, Task);
   }

   createTask(task: Task) {
    return this.http.post(this.url, task);
   }
    
    putTask(Task: Task) { 
    return this.http.put(this.url + `/${ Task._id }`, Task);
   }

   deleteTask(_id: string) {
     return this.http.delete(this.url + `/${ _id }`);
    }
}
