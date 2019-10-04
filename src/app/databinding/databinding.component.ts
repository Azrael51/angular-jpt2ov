import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  
})
export class DatabindingComponent implements OnInit {
nombre:string;
apellido:string;
saludo: string ;
  constructor() { }
  
  ngOnInit() {
  }
saludar():void {
this.saludo="OK"
}
}