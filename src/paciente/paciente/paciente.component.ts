import { Component } from '@angular/core';
import {Pacientee}  from './pacientee' ;

@Component({
  selector: 'app-paciente', //nombre de la nueva etiqueta html 
  templateUrl: './paciente.component.html', //especifica el codigo html del componente
  // ./es para referirse a un atributo(archivo) del componente de la misma carpeta
  // y .. para salir de una carpeta, ../componente2/yy.ts
  styleUrls: [ './paciente.component.css' ] //especifica ruta de la hoja de estilo
})
//usar export es para usar este componente desde otra clase
export class paciente1 {
  personas : Pacientee[];
  constructor(){
    
  }
}