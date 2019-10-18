import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { CompetenciaService } from '../services/competencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-problemas',
  templateUrl: './lista-problemas.page.html',
  styleUrls: ['./lista-problemas.page.scss'],
})
export class ListaProblemasPage implements OnInit {
  public id
  public competencia
  public problemas: Observable<any>[] = []

  constructor(private route: ActivatedRoute, private competenciaService: CompetenciaService) { 
    this.id = this.route.snapshot.params['comp'] 
    let contexto = this

    let competencia = firebase.database().ref('/competencias/' + this.id).once('value').then(function(snapshot) {
      contexto.listarProblemas(snapshot.val())
    });
  }

  ngOnInit() {
    
  }

  listarProblemas(competencia) {
    let arrayProblemas = competencia['problemas'].split(", ")
    document.getElementById('titulo').innerHTML = competencia['nome']
    var contexto = this
    for(var i = 0; i < arrayProblemas.length; i++) {
      var fb = firebase.database().ref('/problemas/' + arrayProblemas[i]).once('value').then(function(snapshot) {
        contexto.problemas.push(snapshot.val())
      });
    }
    
  }
}
