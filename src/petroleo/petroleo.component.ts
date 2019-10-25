import { Component, OnInit } from '@angular/core';
import {ServicioService }from './Servicios/petroleo.service';
@Component({
  selector: 'app-petroleo',
  templateUrl: './petroleo.component.html',
  styleUrls: ['./petroleo.component.css']
})
export class PEtroleoComponent implements OnInit {
            id:number;
            ubicacionGeografica:string ;
            nombreRefineria:string ;
            cantidadMetano:number;
            fechaMedida:Date;
  constructor() { }



  ngOnInit() {
  }


}