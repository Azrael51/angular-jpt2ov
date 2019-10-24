import { Component, OnInit } from '@angular/core';
import {Vehiculoo}  from  './vehiculoo';
import {Estacionn}  from './estacionn ';


@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.css']
})
export class GasolinaComponent implements OnInit {
    Vehiculos:Vehiculoo[];
    Estaciones:Estacionn[];
  constructor() { }

  ngOnInit() {
  }

}