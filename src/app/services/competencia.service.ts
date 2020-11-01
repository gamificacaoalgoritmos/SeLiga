import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { CompetenciaInterface } from '../interfaces/competencia';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  
  constructor() { 
  
  }

  addCompetencia(competencia: CompetenciaInterface) {
    firebase.database().ref('competencias/' + competencia.codigo).set(competencia);
  }

  getCompetencia(codigo: string) {
    return firebase.database().ref('/competencias/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
  
 getCompetencias() {
   return firebase.database().ref('/competencias/').once('value').then(function(snapshot) {
       return snapshot.val();
    });
}
  
getProblemasCompetencia(codigo: string) {
  return this.getCompetencia(codigo).then(competencia => {
    let problemas = competencia.problemas.split(", ");
    return problemas;
  })
}
  
}