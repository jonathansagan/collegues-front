import { Component, OnInit } from '@angular/core';
import {matriculeMock} from '../mock/matricules.mock';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  matricules = [];
  constructor(private dataService: DataService) {
  }

  search = false;

  ngOnInit(): void {
    this.matricules = this.dataService.rechercherParNom('dark');
  }

  rechercher(){
    this.search = true;
  }
}
