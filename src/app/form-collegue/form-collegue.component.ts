import { Component, OnInit } from '@angular/core';
import { Collegue } from './../models/Collegues';
@Component({
  selector: 'app-form-collegue',
  templateUrl: './form-collegue.component.html',
  styleUrls: ['./form-collegue.component.css']
})
export class FormCollegueComponent implements OnInit {

colSaisi : Collegue = {};

constructor() { }

ngOnInit(): void {
  }
creer() {
console.log ('création du nouveau collègue', this.colSaisi);
}
}
