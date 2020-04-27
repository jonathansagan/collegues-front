import { Injectable } from '@angular/core';
import { matriculeMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import {Collegue} from '../models/Collegues';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  rechercherParNom(nom: string): Observable <string[]> {
   /*  return matriculeMock; */
    return this.http.get<string[]>(`https://digicappi.herokuapp.com/collegues?nom=${nom}`);
  }

    recupererCollegueCourant(): Collegue {
    return collegueMock;
    }
}
