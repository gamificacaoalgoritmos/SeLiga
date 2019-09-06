import { Component, OnInit } from '@angular/core';
import { Competencia } from 'src/app/interfaces/competencia';
import { FormGroup } from '@angular/forms';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.page.html',
  styleUrls: ['./competencia.page.scss'],
})
export class CompetenciaPage implements OnInit {
  dados = {}

  constructor(private competenciaService: CompetenciaService) { }

  ngOnInit() {
  }

  submitForm(dados: Competencia) {
    this.competenciaService.addCompetencia(dados)
    alert('Adicionado com sucesso')
  }

}
