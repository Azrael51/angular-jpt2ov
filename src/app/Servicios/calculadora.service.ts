import { Injectable } from '@angular/core';


@Injectable()
export class ServicioService {
  sumar(a:number,b:number):number{
    
    return Number(a+b) 
    }
  restar(a:number,b:number):number{
    return Number(a-b)
  }
  mul(a:number,b:number):number{
    return Number(a*b);
  }  
  constructor() { 
  
  }

}