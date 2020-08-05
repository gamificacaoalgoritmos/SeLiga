import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Competencia  } from '../model/competencia';
import { CompetenciaInterface  } from '../interfaces/competencia';
import { Problema } from '../model/problema';

@Component({
  selector: 'app-lista-problemas',
  templateUrl: './lista-problemas.page.html',
  styleUrls: ['./lista-problemas.page.scss'],
})
export class ListaProblemasPage implements OnInit {
  public id
  public modalidade_id
  public competencia
  public problemas = [];

  constructor(private route: ActivatedRoute) { 
    this.modalidade_id = this.route.snapshot.params['mod']
    this.id = this.route.snapshot.params['comp'] 
    let isso = this
    
    var competencia = new Competencia();
    competencia.getCompetencia(this.id).then(function(snapshot) {
      isso.listarProblemas(snapshot)
    })
  }

  ngOnInit() {
    
  }

  listarProblemas(competencia: CompetenciaInterface) {
    let problemas = competencia['problemas'].split(", ")
    document.getElementById('titulo').innerHTML = competencia['nome']
    var isso = this
    for(var i = 0; i < problemas.length; i++) {
      var problema = new Problema();
      problema.getProblema(problemas[i]).then(function(snapshot) {
        isso.problemas.push(snapshot);
      })
      
    }
    
  }
}
