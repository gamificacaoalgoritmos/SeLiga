import { Component, OnInit } from '@angular/core';
import { Medalha } from '../model/medalha';
import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';

@Component({
  selector: 'app-conquistas',
  templateUrl: './conquistas.page.html',
  styleUrls: ['./conquistas.page.scss'],
})
export class ConquistasPage implements OnInit {

  medalhas = [];

  constructor() { 
    this.carregarMedalhas();
  }

  ngOnInit() {
    
  }

  carregarMedalhas() {
    let usuario = new Usuario();
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        usuario.getUsuario(user.uid).then(usuario => {
          let medalhas = usuario.medalhas.split(", ");
          medalhas.forEach(medalhas_usuario => {
            let medalha = new Medalha();
            medalha.getMedalha(medalhas_usuario).then(medalha => {
              if(medalha.codigo != undefined) {
                this.medalhas.push(medalha);
              }
            });
          });
        });
      }
    });
  }

}
