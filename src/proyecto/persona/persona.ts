import {Documentos}  from '../persona/documentos' ;


export class Persona {
nombre: string ;
RH: string;
sexo: string; 
estadocivil: string;
boleano: boolean;
idpublico: string;

lista= []


constructor(nombre: string, RH: string,sexo: string, estadocivil: string,boleano: boolean,idpublico: string){

this.nombre=nombre;
this.RH=RH;
this.sexo=sexo;
this.estadocivil=estadocivil;
this.boleano=boleano;
this.idpublico=idpublico;
}

//metodo de recibir y agregar documentos
vincular(documento:Documentos):void{
this.lista.push(documento);
}

 getidpublico():string{
    return this.idpublico+" "+this.RH+" "+this.sexo+" "+this.estadocivil+" "+this.boleano+" ";
  }

}