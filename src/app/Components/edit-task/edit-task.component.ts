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
   eid:undefined|number;
  @Input() task:Task[]=[];
   etext: string="";
  eday:string="";
  ereminder:boolean=false;
  aftext!: string;
  afday!:string;
  afreminder!:boolean;
  constructor() { }
 
  
    onEditSubmit(){
      console.log("after edit",this.eid);
      const edittask={
        id:this.eid,
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
      
    //this.onEditTask.emit(edittask);
    this.etext="";
    this.eday="";
    this.ereminder=false;
  }

 

  ngOnInit(): void {
  }

}
