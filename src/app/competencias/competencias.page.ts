import { Component, OnInit } from '@angular/core';
import { Competencia } from '../model/competencia';
import { CompetenciaInterface  } from '../interfaces/competencia';
import { ActivatedRoute } from '@angular/router';
import { Modalidade } from '../model/modalidade';
import { ModalidadeInterface  } from '../interfaces/modalidade';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.page.html',
  styleUrls: ['./competencias.page.scss'],
})

export class CompetenciasPage {
  public competencias = [];
  id;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private alertController: AlertController) { 
    this.id = this.route.snapshot.params['id']
    var isso = this;
    
    var modalidade = new Modalidade();
    modalidade.getModalidade(this.id).then(function(snapshot) {
      isso.listarModalidades(snapshot);
    });

    // this.verificarModalidadesConcluidas()
    
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

  // verificarModalidadesConcluidas() {
  //   let usuario =  new Usuario();
  //   usuario.getProblemasRespondidos().then(problemas => {
  //     let problemas_respondidos = problemas;
  //     //elimina espaços vazios
  //     const index = problemas_respondidos.indexOf((problemas.length-1));
  //     problemas_respondidos.splice(index, 1);

  //     let modalidade = new Modalidade();
  //     modalidade.getModalidades().then(modalidades => {
        
  //     })
  //   })
  // }

  // verificarCompetenciasConcluidas() {
  //   this.usuarioService.getProblemasRespondido().then(problemas => {
  //     let problemas_respondidos = problemas
  //     const index = problemas_respondidos.indexOf((problemas.length-1))
  //     problemas_respondidos.splice(index, 1)

  //     let modalidade = new Modalidade();
  //     modalidade.getModalidade(this.id).then(modalidade => {
  //       let competencias = modalidade['competencias'].split(', ')
  //       let comps = {}
  //       for(let comp in competencias) {
  //         comps[competencias[comp]] = false
  //       } //guardar competencias que estao desbloqueadas

  //       for(let item in competencias) {
  //         let competencia = new Competencia()
  //         let contador = 0
  //         let problemas_da_competencia
          

  //         competencia.getCompetencia(competencias[item]).then( competencia => {
  //           problemas_da_competencia = competencia.problemas.split(', ')
            
  //           for(let problema in problemas_da_competencia) {
  //             for(let problema_respondido in problemas_respondidos) {
  //               if(problemas_da_competencia[problema] == problemas_respondidos[problema_respondido]) {
  //                 contador++
  //               }
  //             }
  //           }
            
  //           if(contador == problemas_da_competencia.length) {
  //             comps[competencia.codigo] = true
  //           }

  //           //
  //           for(let i = 0; i < competencias.length - 1; i++) {
  //             if(i != 0) {

  //               if(comps[competencias[i-1]] == false) {
  //                 console.log("entrei")
  //                 let competencia_button = document.getElementById(competencias[i+1])
  //                 competencia_button.setAttribute('disabled', 'true')
  //               }
  //             }
  //           }
        
  //           contador = 0
  //         })

          
  //       }
  //     })
  //   })
  // }

}
