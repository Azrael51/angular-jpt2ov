export class Documentos {

iddocumento: string
tipodocumento: string 
 constructor(idtipo:string, idd:string) { 

   this.iddocumento=idd;
   this.tipodocumento=idtipo;
 }

  ngOnInit() {
  }
 getiddocumento():string{
    return this.iddocumento;
  }
   gettipodocumento():string{
    return this.tipodocumento;
  }
}