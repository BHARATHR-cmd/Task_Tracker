import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Output() onEditTask: EventEmitter<Task> =new EventEmitter();
  @Input() eid!:undefined|number;
  @Input() etext!: string;
  @Input() eday!:string;
  @Input() ereminder!:boolean;
  aftext!: string;
  afday!:string;
  afreminder!:boolean;
  constructor() { }
 
  
    onEditSubmit(){
      const edittask={
        
        text : this.etext,
        day : this.eday,
        reminder : this.ereminder
      }
      if(!this.etext){
        alert("Please add text");
        return;
      }
      if(!this.eday){
        alert("Please add Day & Time");
        return;
      }
      
    this.onEditTask.emit(edittask);
    this.etext="";
    this.eday="";
    this.ereminder=false;
  }

 

  ngOnInit(): void {
  }

}
