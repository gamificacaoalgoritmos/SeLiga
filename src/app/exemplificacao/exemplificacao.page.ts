import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competencia } from '../model/competencia';
import { isoStringToDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-exemplificacao',
  templateUrl: './exemplificacao.page.html',
  styleUrls: ['./exemplificacao.page.scss'],
})
export class ExemplificacaoPage implements OnInit {
  competencia_id
  exemplo = ""

  constructor(private route: ActivatedRoute) { 
    this.competencia_id = this.route.snapshot.params['comp'] 
    let isso = this
    
    var competencia = new Competencia();
    competencia.getCompetencia(this.competencia_id).then(function(snapshot) {
      isso.exemplo = snapshot.exemplo
    })
  }

  ngOnInit() {
  }
  

}
