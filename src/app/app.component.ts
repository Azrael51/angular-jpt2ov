import { Component } from '@angular/core';
import { ServicioService } from './Servicios/servicio.service';



@Component({
  selector: 'my-app', //nombre de la nueva etiqueta html 
  templateUrl: './app.component.html', //especifica el codigo html del componente
  // ./es para referirse a un atributo(archivo) del componente de la misma carpeta
  // y .. para salir de una carpeta, ../componente2/yy.ts
  styleUrls: [ './app.component.css' ] //especifica ruta de la hoja de estilo
})
//usar export es para usar este componente desde otra clase
export class AppComponent  {
  /*
  nombre : String ;
  apellido: String;
  edad: Number;
  estadocivil: String;

  constructor(){
    this.nombre="Carlitos";
    this.apellido="Torres";
    this.edad=18;
    this.estadocivil="soltero";

  }
  */
}
