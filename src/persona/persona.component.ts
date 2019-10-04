import { Component } from '@angular/core';

@Component({
  selector: 'app-persona', //nombre de la nueva etiqueta html 
  templateUrl: './persona.component.html', //especifica el codigo html del componente
  // ./es para referirse a un atributo(archivo) del componente de la misma carpeta
  // y .. para salir de una carpeta, ../componente2/yy.ts
  styleUrls: [ './persona.component.css' ] //especifica ruta de la hoja de estilo
})
//usar export es para usar este componente desde otra clase
export class persona {
  nombre : string ;
  apellido: string;
  edad: Number;
  estadocivil: string;

  constructor(){
    this.nombre="Carlitos";
    this.apellido="Torres";
    this.edad=18;
    this.estadocivil="soltero";

  }
}