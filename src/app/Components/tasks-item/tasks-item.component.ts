import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  faedit = faEdit;
  @Output() onDeleteTask : EventEmitter<Task> =new EventEmitter;
  @Output() onEditTask : EventEmitter<Task> =new EventEmitter;

  @Output() onToggleReminder : EventEmitter<Task> =new EventEmitter;
  constructor() { }
  onToggle(task:Task){
  
    this.onToggleReminder.emit(task);
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }
  onEdit(task:Task){
    this.onEditTask.emit(task);
  }
 
  ngOnInit(): void {
  }

}
