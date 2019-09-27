import { Injectable } from '@angular/core';
import { Modalidade } from '../interfaces/modalidade';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {
  private afs = firebase.firestore()
  private modalidadesCollection: AngularFirestoreCollection<Modalidade>
  modalidades: Observable<Modalidade[]>
  
  constructor(private db: AngularFirestore) { 
    this.modalidadesCollection = db.collection<Modalidade>('modalidades')
    this.modalidades = this.modalidadesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return {id, ...data}
        })
      }
    ))
  }

  addModalidade(modalidade: Modalidade) {
    firebase.database().ref('modalidades/' + modalidade.codigo).set(modalidade);
  }

  getModalidade(codigo: string) {
    return firebase.database().ref('/modalidades/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}
