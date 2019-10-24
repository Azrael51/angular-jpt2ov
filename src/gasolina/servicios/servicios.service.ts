import { Injectable } from '@angular/core';
import {Vehiculoo} from '../vehiculoo';
import {Estacionn} from '../estacionn';
@Injectable()


export class ServiciosService {
vehiculo: Vehiculoo;
estacion:Estacionn;
registrarVehiculo(address :string, saldo:number,  cantidadGasolina:number):Vehiculoo{
  this.vehiculo=new Vehiculoo(address,saldo,cantidadGasolina);
  return this.vehiculo;
}
registrarEstacion(nombre:string, dir:string):Estacionn{
this.estacion=new Estacionn(nombre,dir)
return this.estacion;

}
}