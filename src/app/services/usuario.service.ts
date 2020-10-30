import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { map, switchMap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import * as firebase from 'firebase';
import { promise } from 'protractor';

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
      return snapshot.problemas_respondidos.split(', ')
    })
    
  }
}
