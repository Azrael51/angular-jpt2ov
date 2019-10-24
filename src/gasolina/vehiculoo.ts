export class Vehiculoo {
  direccion: string;
  saldo:number;
  saldoEnGasolina:number;
  
  constructor(address :string, saldo:number,  cantidadGasolina:number) { 
  this.direccion=address;
  this.saldo=saldo;
  this.saldoEnGasolina=cantidadGasolina;
 }
}