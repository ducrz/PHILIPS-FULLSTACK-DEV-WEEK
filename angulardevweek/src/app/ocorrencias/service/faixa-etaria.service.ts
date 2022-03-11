import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http: HttpClient) { }

  listFaixaEtaria(): Observable<Faixaetaria[]> {
    //const caminhourl = '/assets/faixaetaria.json';
    const caminhourl = '/api/faixaetaria';

    return this.http.get<Faixaetaria[]>(caminhourl);

  }
}