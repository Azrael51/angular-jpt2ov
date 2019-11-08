import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {persona} from '../persona/persona.component';
import {pelicula} from '../pelicula/pelicula/pelicula.component';
import {paciente1} from '../paciente/paciente/paciente.component';
import {Artista1} from '../banda/banda.component';
import {Empresa1} from '../empresa/empresa.component';
import { ServicioService } from './Servicios/servicio.service';
import { SaludoComponent } from './saludo/saludo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {VincularService }from '../proyecto/servicios/vincular.service';
import{PersonaComponent} from '../proyecto/persona/persona.component';
import {GasolinaComponent} from '../gasolina/gasolina.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes:Routes=[
  {path:'',component:Componente1Component},
  {path:"componente1", component:Componente1Component},  
  {path:"componente2", component:Componente2Component}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, persona, pelicula, paciente1,Artista1,Empresa1, SaludoComponent, DatabindingComponent, CalculadoraComponent, GasolinaComponent, Componente1Component, Componente2Component],
  bootstrap:    [ AppComponent ],
  providers: [ServicioService],
  
})
export class AppModule { }
