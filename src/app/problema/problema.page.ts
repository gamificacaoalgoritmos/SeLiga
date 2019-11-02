import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemaService } from '../services/problemas.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-problema',
  templateUrl: './problema.page.html',
  styleUrls: ['./problema.page.scss'],
})
export class ProblemaPage implements OnInit {
  private id;
  private problema;
  private dica;
  private respostaCorreta;
  private afs = firebase.firestore()

  constructor(private route: ActivatedRoute, private problemaService: ProblemaService, private alertController: AlertController) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getProblema(this.id)
  }

  //Exibe dica em um botão alert
  async exibeDica() {
    const alert = await this.alertController.create({
      header: 'Dica',
      message:  this.dica,
      buttons: ['OK']
    });
    await alert.present();
  }

  //Corrige resposta, recebendo como parâmetro uma string correspondente à alternativa selecionada no HTML
  corrigeResposta(identificador){
    if(identificador==this.respostaCorreta){
      this.alertAcerto();
    }else{
      this.alertErro();
    }
  }
  //Alert de RESPOSTA CORRETA
  async alertAcerto() {
    const alert = await this.alertController.create({
      header: 'VOCÊ ACERTOU!',
      message:  'Parabéns você acertou!',
      buttons: ['Próximo problema']
    });
    await alert.present();
  }
  //Alert de RESPOSTA INCORRETA
  async alertErro() {
    const alert = await this.alertController.create({
      header: 'RESPOSTA ERRADA!',
      message:  'Você errou a resposta! :( <br>Mas não desanime! Você tem outra chance! <br>Lembre-se que você pode usar a dica disponível para este problema, basta clicar no ícone da lâmpada na barra superior!',
      buttons: ['Responder novamente']
    });
    await alert.present();
  }


  //Elimina uma das respostas incorretas
  eliminaIncorreta(){
    let alternativas=['a', 'b', 'c', 'd'];
    let correta: number = alternativas.indexOf(this.respostaCorreta);

    alternativas.splice(correta, 1);//Remove resposta correta do array

    let eliminada = Math.floor(Math.random()*3);//Gera número aleatório entre 0 e 2 (índice entre as 3 alternativas erradas)
    console.log("A alternativa eliminada foi a letra " +alternativas[eliminada]);

    var botao = <HTMLInputElement> document.getElementById("buttonEliminaIncorreta");
    botao.disabled=true;

    var botaoEliminada = <HTMLInputElement> document.getElementById(alternativas[eliminada]);
    botaoEliminada.disabled=true;
    this.alertAltRemovida(alternativas[eliminada]);
  }
  
  //Alert que mostra qual das alternativas foi eliminada
  async alertAltRemovida(alt) {
    const alert = await this.alertController.create({
      header: 'Wally mandou dizer que...',
      message:'A alternativa ('+alt +') está incorreta! <br> Ainda restam três alternativas para você escolher.',
      buttons: ['OK']
    });
    await alert.present();
  }



  getProblema(codigo: string) {
    let agora = this
     firebase.database().ref('/problemas/' + codigo).once('value').then(function(snapshot) {
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

    this.dica=data['dica'];
    this.respostaCorreta=data['alternativaCorreta'];

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
