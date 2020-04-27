import { Component, OnInit } from '@angular/core';
import {matriculeMock} from '../mock/matricules.mock';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  listeMatricules = matriculeMock;
  constructor(private dataService: DataService) {
  }

  search = false;

  ngOnInit(): void {
  }

  rechercher(nomSaisi: string){
    this.dataService.rechercherParNom(nomSaisi)
      .subscribe(
        mats => this.listeMatricules = mats,
        err => {console.log('erreur : recommencez ');});
  }
}
