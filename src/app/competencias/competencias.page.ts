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

    isso.verificarCompetenciasConcluidas()

  }

  verificarCompetenciasConcluidas() {
    window.onload = e => {
      console.log(e + "vai tomar no cu")
    }
    
    let modalidade = new Modalidade();
    modalidade.getCompetenciasModalidade(this.id).then(competencias_codigos => {
      competencias_codigos.forEach( (competencia_codigo, index_competencias) => {
        
        let competencia = new Competencia();   
        //verifica se o usuario respondeu o ultimo problema da modalidade e libera a proxima
        competencia.getProblemasCompetencia(competencia_codigo).then(codigos_problemas_competencia => {
          
          document.getElementById(competencias_codigos[0]).removeAttribute("disabled"); //desbloqueia a 1 competencia
          
          let quantidade_problemas_competencia_respondidos = 0;
          
          let quantidade_codigos_problemas_competencia = codigos_problemas_competencia.length;
          codigos_problemas_competencia.forEach((codigo_problema_competencia, index) => {

            let usuario = new Usuario();
            usuario.getProblemasRespondidos().then(codigos_problemas_respondidos => {
              
              codigos_problemas_respondidos.forEach(codigo_problema_respondido => {
                
                if(index == codigos_problemas_competencia.length - 1) {
                  if(codigo_problema_competencia == codigo_problema_respondido) {

             
                      document.getElementById(competencias_codigos[index_competencias+1]).removeAttribute('disabled')
                    
                    
                  } 
                }
                
              });
              
            });

          });

        });
      });
    });

  

  }

}
