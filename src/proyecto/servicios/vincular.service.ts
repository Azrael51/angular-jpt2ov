import { Injectable } from '@angular/core';
import {Documentos}  from '../persona/documentos' ;
@Injectable()
export class VincularService {
documento: Documentos;
vincular(tipodocumento:string,iddocumento:string):Documentos{
    //arreglo de dos posiciones 
    this.documento=new Documentos(iddocumento,tipodocumento);
    return this.documento;
    }
  constructor() {}

}