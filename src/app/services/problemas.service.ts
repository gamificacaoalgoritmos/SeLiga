import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { ProblemaInterface } from '../interfaces/problema';
import { map, switchMap } from 'rxjs/operators'
import * as firebase from 'firebase';
import { saveConfig } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {
  
  constructor() { 
  
  }

  addProblema(problema: ProblemaInterface) {
    firebase.database().ref('problemas/' + problema.codigo).set(problema);
  }

  getProblema(codigo: string) {
    return firebase.database().ref('/problemas/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
  
  getProblemas() {
    return firebase.database().ref('/problemas/').once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}

