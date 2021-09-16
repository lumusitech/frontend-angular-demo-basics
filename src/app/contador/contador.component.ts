import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador/contador.component.html',
  styleUrls: []
})
export class ContadorComponent {
  titulo: string;
  numero: number;
  base: number;
  constructor() {
    this.titulo = 'Contador app';
    this.numero = 10;
    this.base = 5;
  }

  acumular(value: number): void {
    this.numero += value;
  }
}
