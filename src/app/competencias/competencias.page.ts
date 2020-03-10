import { Component, OnInit } from '@angular/core';
import { Competencia } from '../model/competencia';
import { CompetenciaInterface  } from '../interfaces/competencia';
import { ActivatedRoute } from '@angular/router';
import { Modalidade } from '../model/modalidade';
import { ModalidadeInterface  } from '../interfaces/modalidade';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.page.html',
  styleUrls: ['./competencias.page.scss'],
})

export class CompetenciasPage {
  public competencias = [];
  id;

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id']
    var isso = this;
    
    var modalidade = new Modalidade();
    modalidade.getModalidade(this.id).then(function(snapshot) {
      isso.listarModalidades(snapshot);
    });
    
  }
  
  listarModalidades (modalidade: ModalidadeInterface) {
    var competencias = modalidade['competencias'].split(', ');
    var competencia = new Competencia();
    var isso = this;
    
    for(var i = 0; i < competencias.length; i++) {
      competencia.getCompetencia(competencias[i]).then(function(snapshot) {
        isso.competencias.push(snapshot);
      })
    }

  }


}
