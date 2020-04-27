import { Injectable } from '@angular/core';
import { matriculeMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import {Collegue} from '../models/Collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  rechercherParNom(nom: string): string[] {
    return matriculeMock;
  }

    recupererCollegueCourant(): Collegue {
    return collegueMock;
    }
}
