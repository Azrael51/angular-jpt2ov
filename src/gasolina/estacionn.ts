export class Estacionn {
  direccion: string;
  nombre:string;
  precios:string[];
  tiposDeGasolina:string[];
constructor(nombre :string, dir:string) { 
  this.nombre=nombre;
  this.direccion=dir;
 }
 registrarTipoDeGasolin(id:number,precio :string){
   this.precios[id]=precio;
 }
 registrarPrecio(id:number,precio :string,nombre:string){
   this.precios[id]=precio;
   this. tiposDeGasolina[id]=nombre;
 }
}