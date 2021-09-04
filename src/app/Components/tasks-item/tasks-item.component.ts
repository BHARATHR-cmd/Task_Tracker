import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask : EventEmitter<Task> =new EventEmitter;
  @Output() onToggleReminder : EventEmitter<Task> =new EventEmitter;
  constructor() { }
  onToggle(task:Task){
  
    this.onToggleReminder.emit(task);
  }
  onDelete(task:any){
    this.onDeleteTask.emit(task);
  }
 
  ngOnInit(): void {
  }

}
