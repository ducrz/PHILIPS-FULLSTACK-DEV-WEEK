import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../model/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(private http: HttpClient) { }

  //método para retornar info
  listOcorrencias(): Observable<Ocorrencia[]> {
    //const caminho = '/assets/ocorrencias.json';
    const caminho = '/api/ocorrencias'
    return this.http.get<Ocorrencia[]>(caminho);

  }

}