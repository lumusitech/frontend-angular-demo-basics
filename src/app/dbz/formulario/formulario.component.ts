import { Component, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService) {
  }

  enviarNuevo(): void {
    if (this.nuevo.nombre?.trim().length === 0) { return; }
    this.dbzService.addPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}
