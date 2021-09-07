import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Output() onEditTask : EventEmitter<Task> =new EventEmitter;

  tasks:Task[]=[];
  constructor(private taskService : TaskService) { }
  eid:undefined|Number=0;
  etext:string="";
  eday="";
  ereminder=false;
  afid:undefined|Number=0;
  aftext!:string;
  afday!:string;
  afreminder!:boolean;
  testid:undefined|Number=0;

  testtext!:string;
  testday!:string;
  testreminder!:boolean;


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks =tasks);
  }
    deleteTask(task:Task){
      this.taskService.deleteTask(task).subscribe(()=> (this.tasks =this.tasks.filter((t) =>t.id!== task.id)));
    }
    toggleReminder(task:Task){
      task.reminder = !task.reminder;
      this.taskService.updateTaskReminder(task).subscribe()

    }
    addtask(task:Task){
      this.taskService.addTask(task).subscribe((task)=> (this.tasks.push(task)));
    }
    editTask(task:Task){
      this.eid = task.id
      this.etext=task.text;
      this.eday=task.day;
      this.ereminder=task.reminder;
      this.onEditTask.emit(task);
    }
    ediTtask(task:Task){
        task.id!=this.eid;
      // this.aftext=task.text;
      // this.afday=task.day;
      // this.afreminder = task.reminder;
     // task.id= this.afid
      // task.text=this.aftext;
      // this.testtext=task.text;
      // task.day=this.afday;
      // this.testday=task.day;
      // task.reminder = this.afreminder;
      // this.testreminder=task.reminder;
      //this.taskService.updateTask(task).subscribe((task)=> (this.tasks.push(task)));

     this.taskService.updateTask(task).subscribe()

    }

}
