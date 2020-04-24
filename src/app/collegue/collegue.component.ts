import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from './../models/Collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
public mod : boolean;
@Input() col:Collegue;
  constructor() {
    this.mod = false;
  }

  modifier(){
    console.log('Modification du collègue');
    this.mod = true;
  }

  nouveauCollegue(){
    console.log('Création d’un nouveau collègue');
    this.mod = false;
  }

  validation(){
    this.mod = false;
  }
  ngOnInit(): void {
  }

}
