import { Component, OnInit } from '@angular/core';
import {Registrocivil}  from './registrocivil' ;
@Component({
  selector: 'app-registrocivil',
  templateUrl: './registrocivil.component.html',
  styleUrls: ['./registrocivil.component.css']
})
export class RegistrocivilComponent implements OnInit {
  registrociviles : Registrocivil[];
  constructor() { }

  ngOnInit() {
  }

}