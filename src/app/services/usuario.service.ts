import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { map, switchMap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import * as firebase from 'firebase';
import { promise } from 'protractor';
import { Competencia } from '../model/competencia';
import { Modalidade } from '../model/modalidade';
import { Usuario } from '../model/usuario';
import { Medalha } from '../model/medalha';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor() {}

  addUsuario(usuario: UsuarioInterface) {
    firebase.database().ref('usuarios/' + usuario.codigo).set(usuario);
  }

  getUsuario(codigo: string) {
    return firebase.database().ref('/usuarios/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }

  getUsuarios() {
    return firebase.database().ref('/usuarios').once('value').then(function(snapshot) {
      var usuariosArray = Object.keys(snapshot.val()).map(function(index){
        let usuarios = snapshot.val()[index];
        return usuarios;
      });
      return usuariosArray;
    });
  }

  problemaRespondido(codigo_usuario: string, codigo_problema: string) {
    let problemas_respondidos 

    this.getUsuario(codigo_usuario).then(value => {
        problemas_respondidos = value.problemas_respondidos
        problemas_respondidos += codigo_problema + ", "

        let quantidade_problemas_respondidos = value.quantidade_problemas_respondidos
        quantidade_problemas_respondidos++
    
        firebase.database().ref('/usuarios/' + codigo_usuario).update({
          'problemas_respondidos': problemas_respondidos,
          'quantidade_problemas_respondidos': quantidade_problemas_respondidos
        })
    })

    
    
    
  }

  getProblemasRespondido() {
    return this.getUsuario(firebase.auth().currentUser.uid).then(snapshot => {
      let problemas = snapshot.problemas_respondidos.split(', ');
      const index = problemas.indexOf((problemas.length -1));
      problemas.splice(index, 1);
      return problemas;
    })
    
  }

  getQuantidadeProblemasRespondidos() {
    return this.getProblemasRespondido().then(problemas => {
      return problemas.length;
    })
    
  }

  somarPontuacao(pontuacao: number) {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        let usuario = new Usuario();
        usuario.getUsuario(user.uid).then(usuario => {
          let pontuacao_atual = usuario.pontuacao;
          pontuacao_atual += pontuacao;

          firebase.database().ref('/usuarios/' + user.uid).update({
            'pontuacao': pontuacao_atual
          })
        })
      }
    })
  }
  
}

