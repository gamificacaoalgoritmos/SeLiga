import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Competencia  } from '../model/competencia';
import { CompetenciaInterface  } from '../interfaces/competencia';
import { Problema } from '../model/problema';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-lista-problemas',
  templateUrl: './lista-problemas.page.html',
  styleUrls: ['./lista-problemas.page.scss'],
})
export class ListaProblemasPage implements OnInit {
  public id
  public modalidade_id
  public competencia
  public problemas = []
  public teorias = ""
  public link_exemplo = ""
  public retorno

  constructor(private route: ActivatedRoute) { 
    this.modalidade_id = this.route.snapshot.params['mod']
    this.id = this.route.snapshot.params['comp'] 
    let isso = this
    
    var competencia = new Competencia();
    competencia.getCompetencia(this.id).then(function(snapshot) {
      isso.listarProblemas(snapshot)
    })
    isso.problemas.reverse()
  }

  ngOnInit() {
    
  }

  listarProblemas(competencia: CompetenciaInterface) {
    var problemas = competencia['problemas'].split(", ")
    document.getElementById('titulo').innerHTML = competencia['nome']
    var isso = this

    problemas.forEach(codigo_problema => {
      var problema = new Problema();
      problema.getProblema(codigo_problema).then(function(snapshot) {
        
        isso.teste(competencia, codigo_problema, snapshot)
      })
    })
    
  }

  teste(competencia: CompetenciaInterface, codigo, snapshot) {
    
    let problemas = competencia['problemas'].split(", ")
    let isso = this
    snapshot.disabled = false

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let usuario = new Usuario()
        usuario.getUsuario(user.uid).then(value => {
          let usuario = value
          let array_problemas = usuario.problemas_respondidos.split(", ")
          let problemas_nao_respondidos = []
          let problemas_respondidos = []
          
          let problema_nao_respondido = true
          problemas.forEach(codigo_problema => {
            array_problemas.forEach(codigo_problema_respondido => {
              if(codigo_problema == codigo_problema_respondido) {
                problema_nao_respondido = false
              }
            });

            if(problema_nao_respondido) {
              problemas_nao_respondidos.push(codigo_problema)
            } else {
              problemas_respondidos.push(codigo_problema)
            }

            problema_nao_respondido = true
          });
          
          problemas_nao_respondidos.reverse()
          for(let j = problemas_nao_respondidos.length - 2; j >= 0; j--) {
            if(problemas_nao_respondidos[j] == codigo) {
              snapshot.disabled = true
            }
          }

          isso.problemas.push(snapshot)
          if(problemas.length == isso.problemas.length) {
            isso.problemas.reverse()
          }
          
        })
        
      }
      
    });
  }

  renderizarProblemas(snapshot) {
    let isso = this
    let lista = document.getElementById('lista_problemas')
    let ion_item = document.createElement("ion-item")
    ion_item.innerHTML = `<ion-fab-button size="small" [routerLink] ="['/problema', ${isso.modalidade_id}, ${isso.id}, ${snapshot.codigo}]" color="dark">
    <ion-icon name="play"></ion-icon>
  </ion-fab-button>
  <ion-label>
    ${snapshot.titulo}
  </ion-label>`
  //ista.appendChild(ion_item)
  lista.append(ion_item)
  }
}
