import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  @Output() add = new EventEmitter();
  value:string = "";
  constructor() { }

  ngOnInit() {
  }
  addToList(){
    this.add.emit(this.value);
  }

}
