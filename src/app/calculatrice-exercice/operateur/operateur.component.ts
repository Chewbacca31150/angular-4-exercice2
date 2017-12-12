import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent implements OnInit {

  @Input() operators : any;
  @Output() sendOperator = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  send(operator){
    this.sendOperator.emit(operator);
  }

}
