import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Con el Decorador @Input puedes recivir cualquier valor del Padre
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    if( !id ) return;
    console.log(id);
    this.onDelete.emit(id);
  }


  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index:number):void{
  //   // TODO: Emitir el ID del personaje
  //   // console.log({index});
  //   this.onDelete.emit(index);
  // }

}
