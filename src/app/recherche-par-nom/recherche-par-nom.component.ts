import { Component, OnInit, Input } from '@angular/core';
import { Recherche } from './../models/Recherches';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  search = false;

  @Input() rech: Recherche;

  constructor() { }

  ngOnInit(): void {
  }

  rechercher(){
    this.search = true;
  }

}
