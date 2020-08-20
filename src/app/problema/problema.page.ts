import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemaService } from '../services/problemas.service';
import { CompetenciaService } from '../services/competencia.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Competencia } from '../model/competencia';
import { isoStringToDate } from '@angular/common/src/i18n/format_date';
import { Modalidade } from '../model/modalidade';
import { UsuarioService } from '../services/usuario.service';
import { COPYFILE_FICLONE } from 'constants';


@Component({
  selector: 'app-problema',
  templateUrl: './problema.page.html',
  styleUrls: ['./problema.page.scss'],
})
export class ProblemaPage implements OnInit {
  private problema_respondido = false
  private id;
  private competencia_id;
  private competencia;
  private problema;
  private problemas_da_competencia = [];
  private modalidade_id;
  private modalidade;
  private competencias_da_modalidade;
  private dica;
  private respostaCorreta;
  private afs = firebase.firestore();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private problemaService: ProblemaService,
    private alertController: AlertController,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    let isso = this
    this.id = this.route.snapshot.params['id']
    this.competencia_id = this.route.snapshot.params['comp']

    let competencia = new Competencia()
    competencia.getCompetencia(this.competencia_id).then(competencia => {
      isso.competencia = competencia
      this.problemas_da_competencia = competencia['problemas'].split(", ")
    })

    this.getProblema(this.id)

    //verificar se o problema foi respondido
    let problemas_respondidos
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isso.usuarioService.getUsuario(user.uid).then(snapshot => {
          problemas_respondidos = snapshot.problemas_respondidos.split(', ')
          problemas_respondidos.forEach(item => {
            if(item == isso.id) {
              //desativar botoes e colorir de verde
              isso.problema_respondido = true
              let botoes = document.getElementsByClassName("buttonBorda")
              for(let item in botoes) {
                if(botoes[item].id != isso.respostaCorreta && typeof(botoes[item].id) == "string") {
                  botoes[item].setAttribute('disabled', 'true')
                  //colorir de verde aqui
                }
              }
            }
          })
        })
      }
    });
    //

    this.modalidade_id = this.route.snapshot.params['mod']
    let modalidade = new Modalidade()
    modalidade.getModalidade(this.modalidade_id).then(modalidade => {
      isso.modalidade = modalidade
      isso.competencias_da_modalidade = modalidade['competencias'].split(", ")
    })
  }

  //Exibe dica em um botão alert
  async exibeDica() {
    const alert = await this.alertController.create({
      header: 'Dica',
      message: this.dica,
      buttons: ['OK']
    });
    await alert.present();
  }

  //Corrige resposta, recebendo como parâmetro uma string correspondente à alternativa selecionada no HTML
  corrigeResposta(identificador) {
    let this1 = this

    if (identificador == this.respostaCorreta) {
      //salva problema respondido no usuario
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this1.usuarioService.problemaRespondido(user.uid, this1.id)
        }
      });

      let ultimo = false
      let ultimaCompetencia = false

      for (let i = 0; i < this.problemas_da_competencia.length; i++) {
        if (i == (this.problemas_da_competencia.length - 1) && this.problemas_da_competencia[i] == this.id) {
          for(let j = 0; j < this.competencias_da_modalidade.length; j++) {
            if(j == this.competencias_da_modalidade.length - 1 && this.competencia_id == this.competencias_da_modalidade[j]) {
              ultimaCompetencia = true
              this.alertUltimaCompetencia();
            }
          }
          ultimo = true
          if(ultimaCompetencia == false) this.alertUltimoProblema()
        }
      }
      if (ultimo == false) this.alertAcerto()
    } else {
      this.alertErro();
    }
  }
  //Alert de RESPOSTA CORRETA
  async alertAcerto() {
    const alert = await this.alertController.create({
      header: 'VOCÊ ACERTOU!',
      message: 'Parabéns, você acertou!',
      buttons: [
        {
          text: 'Próximo problema',
          role: 'next',
          handler: () => {
            let isso = this

            for (let i = 0; i < this.problemas_da_competencia.length; i++) {
              if (isso.id == this.problemas_da_competencia[i]) {
                this.router.navigate(['/problema', isso.modalidade_id, isso.competencia_id, this.problemas_da_competencia[i + 1]]).then(nav => {
                  window.location.reload();
                });
              }
            }

          }
        }
      ]
    });
    await alert.present();
  }

  async alertUltimoProblema() {
    const alert = await this.alertController.create({
      header: 'Parabéns!',
      message: 'Você concluiu a Competência ' + this.competencia.nome,
      buttons: [
        {
          text: 'Próxima Competência',
          role: 'next',
          handler: () => {
            console.log('Proxima competencia')
            for (let i = 0; i < this.competencias_da_modalidade.length; i++) {

              if (this.competencias_da_modalidade[i] == this.competencia_id) {
                this.router.navigate(['/lista-problemas', this.modalidade_id, this.competencias_da_modalidade[i + 1]]).then(nav => {
                  window.location.reload();
                });
              }

            }
          }
        }
      ]
    });
    await alert.present();
  }

  //Alert de RESPOSTA INCORRETA
  async alertErro() {
    const alert = await this.alertController.create({
      header: 'RESPOSTA ERRADA!',
      message: 'Você errou a resposta! :( <br>Mas não desanime! Você tem outra chance! <br>Lembre-se que você pode usar a dica disponível para este problema, basta clicar no ícone da lâmpada na barra superior!',
      buttons: ['Responder novamente']
    });
    await alert.present();
  }

  async alertUltimaCompetencia() {
    const alert = await this.alertController.create({
      header: 'Parabéns!',
      message: 'Você concluiu a ' + this.modalidade.nome,
      buttons: [{
        text: 'Voltar para Modalidades',
        role: 'next',
        handler: () => {
          this.router.navigate(['/modalidades'])
        }
      }]
    });
    await alert.present();
  }


  //Elimina uma das respostas incorretas
  eliminaIncorreta() {
    let alternativas = ['a', 'b', 'c', 'd'];
    let correta: number = alternativas.indexOf(this.respostaCorreta);

    alternativas.splice(correta, 1);//Remove resposta correta do array

    let eliminada = Math.floor(Math.random() * 3);//Gera número aleatório entre 0 e 2 (índice entre as 3 alternativas erradas)
    console.log("A alternativa eliminada foi a letra " + alternativas[eliminada]);

    var botao = <HTMLInputElement>document.getElementById("buttonEliminaIncorreta");
    botao.disabled = true;

    var botaoEliminada = <HTMLInputElement>document.getElementById(alternativas[eliminada]);
    botaoEliminada.disabled = true;
    this.alertAltRemovida(alternativas[eliminada]);
  }

  //Alert que mostra qual das alternativas foi eliminada
  async alertAltRemovida(alt) {
    const alert = await this.alertController.create({
      header: 'Wally mandou dizer que...',
      message: 'A alternativa (' + alt + ') está incorreta! <br> Ainda restam três alternativas para você escolher.',
      buttons: ['OK']
    });
    await alert.present();
  }



  getProblema(codigo: string) {
    let agora = this
    firebase.database().ref('/problemas/' + codigo).once('value').then(function (snapshot) {
      agora.mudarHtml(snapshot.val())
    });
  }

  mudarHtml(data) {
    // document.getElementById('titulo').innerHTML = data['titulo']
    document.getElementById('teste').innerHTML = data['titulo']
    document.getElementById('enunciado').innerHTML = data['enunciado']

    document.getElementById('a').innerHTML = data['alternativaA']
    document.getElementById('b').innerHTML = data['alternativaB']
    document.getElementById('c').innerHTML = data['alternativaC']
    document.getElementById('d').innerHTML = data['alternativaD']

    this.dica = data['dica'];
    this.respostaCorreta = data['alternativaCorreta'];

    let imgCodigo = document.getElementById('programador')
    imgCodigo['src'] = data['imagemCodigo']
    let imgContexto = document.getElementById('contexto')
    imgContexto['src'] = data['imagem']

  }


  //Configurações do slide de imagens (contexto e código do programador)
  slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };


}
