import { Component, OnInit } from '@angular/core';
import { Collegue } from './../models/Collegues';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-form-collegue',
  templateUrl: './form-collegue.component.html',
  styleUrls: ['./form-collegue.component.css']
})
export class FormCollegueComponent implements OnInit {
colSaisie: Collegue = new Collegue('', '', '', '', new Date(), '');


constructor(private dataService: DataService) { }

ngOnInit(): void {
  }
creer() {
  const nom: string = this.colSaisie.nom;
  const prenom: string = this.colSaisie.prenoms;
  const email: string = this.colSaisie.email;
  const dateDeNaissance: Date = this.colSaisie.dateDeNaissance;
  const photoUrl: string = this.colSaisie.photoUrl;

console.log ('création du nouveau collègue réussi', this.colSaisie);
this.dataService.creerCollegue(nom, prenom, email, dateDeNaissance, photoUrl)
    .subscribe(
      collegue => this.colSaisie = collegue,
      err => {console.log('erreur : recommencez '); });
}
}
