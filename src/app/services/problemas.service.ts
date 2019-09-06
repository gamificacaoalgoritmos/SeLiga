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
    this.db.collection('problemas').doc(problema.codigo).set(problema);
    
  }

  async getProblema(codigo: string) {
    let problemaRef = this.afs.collection('problemas').doc(codigo);
    let problema = await problemaRef.get()
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
    
    let retorno = await problema
    return retorno
  }
}

