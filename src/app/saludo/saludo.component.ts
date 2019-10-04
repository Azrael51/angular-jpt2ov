import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Servicios/servicio.service';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  providers:[ServicioService]
})

export class SaludoComponent {
  mensajeSaludo : string ;
  constructor(private miSaludo: ServicioService) {
    this.mensajeSaludo = this.miSaludo.saludar();
   }
  

}
