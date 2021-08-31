import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!:string;
  @Input() color!:string;
  @Input() fontfamily!:string;
  @Output() btnClick = new EventEmitter;
  constructor() { }
  onClick(){
    this.btnClick.emit();
  }

  ngOnInit(): void {
  }

}
