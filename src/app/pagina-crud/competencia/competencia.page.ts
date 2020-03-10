import { Component, OnInit } from '@angular/core';
import { CompetenciaInterface } from 'src/app/interfaces/competencia';
import { FormGroup } from '@angular/forms';
import { Competencia  } from '../../model/competencia';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.page.html',
  styleUrls: ['./competencia.page.scss'],
})
export class CompetenciaPage implements OnInit {
  dados = {};
  competencia: Competencia;

  constructor() { }

  ngOnInit() {
  }

  submitForm(dados: CompetenciaInterface) {
    this.competencia = new Competencia(dados);
    
    this.competencia.addCompetencia();
    
    alert('Adicionado com sucesso');
  }
  

}
