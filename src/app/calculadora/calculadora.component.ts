import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ServicioService }from '../Servicios/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  providers:[ServicioService]
})
export class CalculadoraComponent implements OnInit {
resultado: number
a: number
b: number
  constructor(private calculadora: ServicioService) { 
    this.resultado=0;
  }
  
  ngOnInit() {
  }
  sumar():void{
this.resultado= this.calculadora.sumar(this.a,this.b)
  }
 restar():void{
this.resultado= this.calculadora.restar(this.a,this.b)
  }
 mul():void{
this.resultado= this.calculadora.mu(this.a,this.b)
  }
}