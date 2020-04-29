import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from './../models/Collegues';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
public mod: boolean;
public creation: boolean;



@Input() col: Collegue;
  constructor(private dataService: DataService) {
    this.mod = false;
    this.creation = false;


  }

  modifier(){
    console.log('Modification du collègue');
    this.mod = true;



  }

  nouveauCollegue(){
    console.log('Création d’un nouveau collègue');
    this.mod = false;
    this.creation = true;

  }

  validation(){
    this.mod = false;

  }

  recupererCollegueCourant (matricule : string){
    this.dataService.recupererCollegueCourant().subscribe(
      collegue => this.col = collegue,
      err => {console.log('erreur : recommencez '); });
  }

  ngOnInit(): void {
  }

}
