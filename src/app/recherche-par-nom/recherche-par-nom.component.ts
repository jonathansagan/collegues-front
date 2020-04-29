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

  rechercher(nom: string) {
    this.search = true;
    console.log('Recherche d\'un collègue par nom');
    this.dataService.rechercherParNom(nom)
      .subscribe(
        listMat => this.listeMatricules = listMat,
        err => console.log('Pas de résultat. Veuillez entrer un autre nom'));
  }


  selectMatricule(matricule: string) {
    this.dataService.selectCollegueParMatricule(matricule)
      .subscribe(col => {},
        err => console.log('Aucun collègue trouvé pour le matricule fourni'));
  }

}
