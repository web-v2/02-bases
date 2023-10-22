import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Brawler', 'Backman', 'Iroman'];
  public heroDelete?:string;

  deleteLastHeroe():void{
    this.heroDelete = this.heroNames.pop();
  }
}
