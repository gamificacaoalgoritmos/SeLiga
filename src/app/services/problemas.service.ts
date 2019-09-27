import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs'
import { Problema } from '../interfaces/problema';
import { map, switchMap } from 'rxjs/operators'
import * as firebase from 'firebase';
import { saveConfig } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {
  private cache
  private afs = firebase.firestore()
  private problemasCollection: AngularFirestoreCollection<Problema>
  problemas: Observable<Problema[]>
  public problema
  
  constructor(private db: AngularFirestore) { 
    this.problemasCollection = db.collection<Problema>('problemas')
    this.problemas = this.problemasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return {id, ...data}
        })
      }
    ))
  }

  addProblema(problema: Problema) {
    firebase.database().ref('problemas/' + problema.codigo).set(problema);
  }

  getProblema(codigo: string) {
    return firebase.database().ref('/problemas/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}

