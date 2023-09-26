import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

// PASAR VALORES DE CARACTER CON DESTRUCTURACION
  // onNewCharacter({ name, power}: Character):void{
  //   const newCharacter: Character = {
  //     id: uuid(),
  //     name,
  //     power
  //   }
// PASAR VALORES DE CARACTER CON ASIGNACION DIRECTA
// onNewCharacter(character: Character):void{
//   const newCharacter: Character = {
//     id: uuid(),
//     name: character.name,
//     power: character.power
//   }
// PASAR TODOS LOS VALORES CON EL OPERADOR SPREAD( Toma todas las propiedades de caracter )
  addCharacter(character: Character):void{
    // console.log(character);
    // const newCharacter: Character = { ...character,id: uuid() } IDEAL
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
    // PUSH es para añadirlo al final del arreglo
    // UNSHIFT para añairlo al principio del arreglo
  }

  // onDeleteCharacter(index:number):void{
  //   console.log('MAIN-PAGE');
  //   console.log(index);
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id !== id );
  }

  constructor() { }

}
