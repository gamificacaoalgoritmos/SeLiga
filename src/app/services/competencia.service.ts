import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Competencia } from '../interfaces/competencia';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  private afs = firebase.firestore()
  private competenciasCollection: AngularFirestoreCollection<Competencia>
  competencias: Observable<Competencia[]>
  
  constructor(private db: AngularFirestore) { 
    this.competenciasCollection = db.collection<Competencia>('competencias')
    this.competencias = this.competenciasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return {id, ...data}
        })
      }
    ))
  }

  addCompetencia(competencia: Competencia) {
    firebase.database().ref('competencias/' + competencia.codigo).set(competencia);
  }

  getCompetencia(codigo: string) {
    return firebase.database().ref('/competencias/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}