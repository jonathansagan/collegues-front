import { Injectable } from '@angular/core';
import { matriculeMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegues';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) {}

  rechercherParNom(nom: string): Observable<string[]> {
    /*  return matriculeMock; */
    return this.http.get<string[]>(
      `https://digicapi.herokuapp.com/collegues?nom=${nom}`
    );
  }

  recupererCollegueCourant(): Observable<Collegue> {
    /* return collegueMock; */
    return this.subCollegueSelectionne.asObservable();
  }

  selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    const obsCollegue = this.http.get<Collegue>(
      `https://digicapi.herokuapp.com/collegues/${matricule}`
    );
    obsCollegue.subscribe((collegue) =>
      this.subCollegueSelectionne.next(collegue)
    );
    return obsCollegue;
  }

  creerCollegue(nom: string, prenoms: string, email: string, dateDeNaissance: Date, photoUrl: string): Observable<Collegue> {
    return this.http.post<Collegue>(`https://digicapi.herokuapp.com/collegues/`,
    {
      nom: `${nom}`,
      prenoms: `${prenoms}`,
      email: `${email}`,
      dateDeNaissance: `${dateDeNaissance}`,
      photoUrl: `${photoUrl}`
    });
}
}
