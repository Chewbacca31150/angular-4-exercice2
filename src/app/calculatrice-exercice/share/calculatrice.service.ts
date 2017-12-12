import { Injectable } from '@angular/core';
import { MathsService } from './maths.service';

@Injectable()
export class CalculatriceService {

  number1: number;
  number2: number;
  operator: string;
  isFloatNumber1: boolean = false;
  isFloatNumber2: boolean = false;
  constructor(private mathsService: MathsService) { }

  addChiffre(number): number {
    if (!this.operator) {
      if (this.number1) {
        if (this.isFloatNumber1 && !this.number1.toString().includes('.')) {
          this.number1 = parseFloat(this.number1.toString() + '.' + number.toString());
        }
        else {
          this.number1 = parseFloat(this.number1.toString() + number.toString());
        }
      }
      else {
        this.number1 = number;
      }
    }
    else {
      if (this.number2) {
        if (this.isFloatNumber2 && !this.number2.toString().includes('.')) {
          this.number2 = parseFloat(this.number2.toString() + '.' + number.toString());
        }
        else {
          this.number2 = parseFloat(this.number2.toString() + number.toString());
        }
      }
      else {
        this.number2 = number;
      }
    }
    return number;

  }

  addOperateur(operator): string {
    if (this.operator || !this.number1) return '';
    this.operator = operator;
    return operator;
  }

  createPoint(): string {
    if (!this.operator) {
      this.isFloatNumber1 = true;
      return '.';
    }
    else {
      this.isFloatNumber2 = true;
      return '.';
    }
  }

  doCalcul(): number | string {
    switch (this.operator) {
      case '+':
        return this.mathsService.add(this.number1, this.number2);
      case '-':
        return this.mathsService.remove(this.number1, this.number2);
      case '/':
        if (this.number2 == 0) return 'ERROR IMPOSSIBLE';
        return this.mathsService.divide(this.number1, this.number2);
      case 'x':
        return this.mathsService.multiply(this.number1, this.number2);
      case '%':
        return this.mathsService.modulo(this.number1, this.number2);
    }

  }

  reset(): string {
    this.number1 = null;
    this.number2 = null;
    this.operator = null;
    this.isFloatNumber1 = false;
    this.isFloatNumber2 = false;
    return '';

  }
  returnCalcul(): string | number {
    if (!this.number1 || !this.number2 || !this.operator) return '';
    return this.doCalcul();
  }

}
