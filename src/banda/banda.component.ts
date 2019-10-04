import { Component, OnInit } from '@angular/core';
import {Artistaa}  from './Artista';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})

export class Artista1{
   artistas:Artistaa[];
    
    constructor(){
    this.artistas = [];
   this.artistas.push(new Artistaa("100","NoFeedBAck","10","1"));
  this.artistas.push(new Artistaa("658","Shakira","8","1"));
  this.artistas.push(new Artistaa("115","Cabas","6","2"));
  this.artistas.push(new Artistaa("205","Beyonce","6","2"));
  this.artistas.push(new Artistaa("326","ColdPlay","8","3"));
  this.artistas.push(new Artistaa("107","DrKrapula","10","4"));
  this.artistas.push(new  Artistaa("401","Juanes","2","4"));

      
    }

}

