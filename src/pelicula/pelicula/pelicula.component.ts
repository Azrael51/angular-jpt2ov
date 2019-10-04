import { Component } from '@angular/core';
import {Peliculaa}  from './peliculaa' ;

@Component({
  selector: 'app-pelicula', //nombre de la nueva etiqueta html 
  templateUrl: './pelicula.component.html', //especifica el codigo html del componente
  // ./es para referirse a un atributo(archivo) del componente de la misma carpeta
  // y .. para salir de una carpeta, ../componente2/yy.ts
  styleUrls: [ './pelicula.component.css' ] //especifica ruta de la hoja de estilo
})
//usar export es para usar este componente desde otra clase
export class pelicula {
  pelicula: Peliculaa;
  pelicula2: Peliculaa;
  pelicula3 : Peliculaa;

  constructor(){
   this.pelicula =new Peliculaa("Harry","descpripcion", "xx");
   this.pelicula2 =new Peliculaa("Harry", "descpriocin", "xx");
   this.pelicula3 = new Peliculaa("Harry3","descripcion", "xx");

  }
}