import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from './../models/Collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col:Collegue;
  constructor() { }
  modifier(){
    console.log('Modification du collègue');
  }

  nouveauCollegue(){
    console.log('Création d’un nouveau collègue');
  }

  ngOnInit(): void {
  }

}
