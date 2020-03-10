import { Injectable } from '@angular/core';
import { ModalidadeInterface } from '../interfaces/modalidade';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor() { 
    
  }

  addModalidade(modalidade: ModalidadeInterface) {
    firebase.database().ref('modalidades/' + modalidade.codigo).set(modalidade);
  }

  getModalidade(codigo: string) {
    return firebase.database().ref('/modalidades/' + codigo).once('value').then(function(snapshot) {
      return snapshot.val()
    });
  }
  
  getModalidades() {
    return firebase.database().ref('/modalidades/').once('value').then(function(snapshot) {
      return snapshot.val()
    });
  }
}
