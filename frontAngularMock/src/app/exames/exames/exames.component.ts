import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';


@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.scss']
})

export class ExamesComponent implements OnInit {

  regioes: Regiao[] = [];
  ocorrencias: Ocorrencia[] = [];

  faixaetarias: Faixaetaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regioesService: RegiaoService,
    private faixaEtariaService: FaixaetariaService
  ) { }

  ngOnInit(): void {
    this.regioesService.listRegioes().subscribe(regioes => { this.regioes = regioes });
    this.ocorrenciaService.listOcorrencias().subscribe(ocorrencias => { this.ocorrencias = ocorrencias });
    this.faixaEtariaService.listFaixaEtaria().subscribe(faixaetaria => { this.faixaetarias = faixaetaria });

  }
}
