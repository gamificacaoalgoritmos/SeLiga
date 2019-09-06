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
    this.db.collection('modalidades').doc(modalidade.codigo).set(modalidade);
  }

  async getModalidade(codigo: string) {
    let modalidadeRef = this.afs.collection('modalidades').doc(codigo);
    let modalidade = await modalidadeRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('Nenhum documento encontrado');
        } else {
          return doc.data()
        }
      })
      .catch(err => {
        console.log('Erro desconhecido', err);
      });
    
    let retorno = await modalidade
    return retorno
  }
}
