import { Injectable } from '@angular/core';

@Injectable()
export class MathsService {

  constructor() { }

  add(number1:number, number2:number):number{
    return number1 + number2;
  }

  remove(number1:number, number2:number):number{
    return number1 - number2;
  }

  multiply(number1:number, number2:number):number{
    return number1 * number2;
  }

  divide(number1:number, number2:number):number{
    return number1/number2;
  }

  modulo(number1:number, number2:number):number{
    return number1 % number2;
  }
}
