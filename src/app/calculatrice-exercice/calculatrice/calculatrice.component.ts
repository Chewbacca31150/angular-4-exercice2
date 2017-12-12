import { Component, OnInit } from '@angular/core';
import { CalculatriceService } from '../share/calculatrice.service';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  numbers: any = [];
  operators: any = [];
  result: string = "";
  isResult: boolean = false;
  constructor(private calculatriceService: CalculatriceService) { }

  ngOnInit(): void {
    this.numbers = Array(10).fill(1).map((x, i) => i);
    this.operators = ['+', '-', '/', 'x', '%'];
  }

  doCalcul(): void {
    if (!this.result) return;
    var res = this.calculatriceService.doCalcul();
    if (res) {
      this.result = res.toString();
      this.isResult = true;
    }
  }

  reset(): void {
    this.result = this.calculatriceService.reset();
  }

  onMessageReceived($event: string | number): void {
    if (this.isResult) {
      this.reset();
      this.isResult = false;
    }

    this.result += (typeof ($event) == 'string') ? this.calculatriceService.addOperateur($event)
      : this.calculatriceService.addChiffre($event);

  }

  createPoint(): void {
    this.result += this.calculatriceService.createPoint();
  }
}
