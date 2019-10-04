export class Registrocivil {
     idpublico: string;
     idprivado: string;
     FechaDeNacimiento: string;
     Nacionalidad: string;
     Clinica: string;
     idDoctor: string;
     idRegistrante: string;

constructor(idpublico: string,idprivado: string, 
FechaDeNacimiento: string,Nacionalidad: string,Clinica: string,
idDoctor: string,idRegistrante: string,){
   
    this.idpublico=idpublico;
    this.idprivado=idprivado;
    this.FechaDeNacimiento=FechaDeNacimiento;
    this.Nacionalidad=Nacionalidad;
    this.Clinica=Clinica;
    this.idDoctor=idDoctor;
    this.idRegistrante=idRegistrante;
  }
ValidarGets(id:string):string{
  if(id==this.idpublico)
  {
    return this.getidpublico();
  }
  if(id==this.idprivado)
  {
    return this.getidpublico()+" "+this.getidprivado();
  }
  else{
  return "Id no es valido "
  }
  return ""
  
}
  getidpublico():string{
    return this.idpublico+" "+this.FechaDeNacimiento+" "+this.Nacionalidad+" ";
   
  }
  getidprivado():string{
    return this.idprivado+" "+this.Clinica+" "+this.idDoctor+" "+this.idRegistrante;
  }
//Los gets deben validar los ids


}

