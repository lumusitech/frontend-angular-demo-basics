import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable()
export class DbzService {
  // tslint:disable-next-line: variable-name
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  addPersonaje(pj: Personaje): void {
    this._personajes.push(pj);
  }
}
