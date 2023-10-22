import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <div>
    <button class="btn btn-xs btn-danger mx-2" (click)="decreaseBy(5)">Menos</button>
    <button class="btn btn-xs btn-warning mx-2" (click)="resetCounter()">Reset</button>
    <button class="btn btn-xs btn-success mx-2" (click)="increaseBy(5)">Mas</button>
  </div>
  `
})
export class CounterComponent {
  public counter:number = 5;

  increaseBy(val:number):void {
    this.counter += val;
  }

  decreaseBy(val:number):void {
    this.counter -= val;
  }

  resetCounter():void {
    this.counter=5;
  }
}
