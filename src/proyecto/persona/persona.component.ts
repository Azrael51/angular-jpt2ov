import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {VincularService }from './servicios/vincular.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[VincularService]
})
export class PersonaComponent implements OnInit {
iddocumento: string
idpersona: string
  
  constructor(private vincularr: VincularService) { }

  ngOnInit() {
  }

vincular():void{
 this.vincularr.vincular(this.iddocumento,this.idpersona)
  }

}