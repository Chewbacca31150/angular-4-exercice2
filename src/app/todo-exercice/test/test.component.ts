import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    
  constructor() { }
  tasks:any = [{name:'make an app', edit:false},
  {name:'show an app', edit:false},
  ];
  taskToAdd:string= "";

  ngOnInit() {
  }
  
  onChildChange(event){
    this.tasks.push({name:event.target.value, edit:false});
  }
  addTask(){
    if(this.taskToAdd)
      this.tasks.push({name:this.taskToAdd, edit:false});
    this.taskToAdd = "";
  }
  update(index, task) {
    this.tasks[index].name = task.name;
    this.tasks[index].edit = false;
  }

  onTodoChange(event, index, task){
    switch(event){
      case 'remove':
        this.remove(index);
        break;
      case 'update':
        this.update(index, task);
        break;
    }
  }
  remove(index): any {
    this.tasks.splice(index, 1);
}

}