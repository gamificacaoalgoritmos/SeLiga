import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemaService } from '../services/problemas.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-problema',
  templateUrl: './problema.page.html',
  styleUrls: ['./problema.page.scss'],
})
export class ProblemaPage implements OnInit {
  private id;
  private problema;
  private afs = firebase.firestore()

  constructor(private route: ActivatedRoute, private problemaService: ProblemaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getProblema(this.id)
    
  }

  getProblema(codigo: string) {
    let agora = this
     firebase.database().ref('/problemas/' + codigo).once('value').then(function(snapshot) {
       agora.mudarHtml(snapshot.val())
      });
  }

  mudarHtml(data) {
    console.log(data)
    document.getElementById('titulo').innerHTML = data['titulo']
    document.getElementById('enunciado').innerHTML = data['enunciado']

    document.getElementById('a').innerHTML = data['alternativaA']
    document.getElementById('b').innerHTML = data['alternativaB']
    document.getElementById('c').innerHTML = data['alternativaC']
    document.getElementById('d').innerHTML = data['alternativaD']

    let imgCodigo = document.getElementById('programador')
    imgCodigo['src'] = data['imagemCodigo']
    let imgContexto = document.getElementById('contexto')
    imgContexto['src'] = data['imagem']

  }


}
