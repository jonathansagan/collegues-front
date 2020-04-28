import { Component, OnInit } from '@angular/core';
import {matriculeMock} from '../mock/matricules.mock';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  listeMatricules = [];
  constructor(private dataService: DataService) {
  }

  search = false;

  ngOnInit(): void {
  }

  rechercherParNom(nomSaisi: string){
    this.dataService.rechercherParNom(nomSaisi)
      .subscribe(
        liste => this.listeMatricules = liste,
        err => {console.log('erreur : recommencez '); });
        this.search=true;
  }

  selectMatricule (matricule : string){
    this.dataService.selectCollegueParMatricule (matricule)
    .subscribe (
    col=>{},
    err => {console.log('erreur : recommencez '); });
  }

}
