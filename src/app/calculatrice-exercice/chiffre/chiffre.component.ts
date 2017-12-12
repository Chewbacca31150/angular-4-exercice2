import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chiffre',
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.css']
})
export class ChiffreComponent implements OnInit {


  @Input() numbers : any;
  @Output() sendNumber = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  send(number){
    this.sendNumber.emit(number);
  }

}
