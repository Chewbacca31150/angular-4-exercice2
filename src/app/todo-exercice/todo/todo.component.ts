import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  ngOnInit() {
  }
  @Input() task: any;
  @Output() sendAnEvent = new EventEmitter();
  
  constructor(){}

  edit(index) {
    this.task.task.edit = true;
  }

  sendEvent(message){
    this.sendAnEvent.emit(message);
    
  }

}
