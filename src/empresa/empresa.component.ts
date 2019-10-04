import { Component, OnInit } from '@angular/core';
import {Empresaa}  from './Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})

export class Empresa1{
    empresas:Empresaa[];
    constructor(){
     this.empresas = [];

      this.empresas.push(new  Empresaa("1","Youtube"));
      this.empresas.push(new  Empresaa("2","Itunes"));
      this.empresas.push(new  Empresaa("3","MICELULAR"));
      this.empresas.push(new  Empresaa("4","Local"));
      
    }

  }