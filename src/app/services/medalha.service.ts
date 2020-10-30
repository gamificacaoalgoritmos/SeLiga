import { Injectable } from '@angular/core';
import { MedalhaInterface } from '../interfaces/medalha';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MedalhaService {

  constructor() { }

  addMedalha(medalha: MedalhaInterface) {
    firebase.database().ref('medalhas/' + medalha.codigo).set(medalha);
  }

  getMedalha(codigo: string) {
    return firebase.database().ref('/medalhas/' + codigo).once('value').then(function(snapshot) {
      return snapshot.val()
    });
  }

  getMedalhas() {
    return firebase.database().ref('/medalhas/').once('value').then(function(snapshot) {
      return snapshot.val()
    });
  }
}
