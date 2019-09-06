import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { map, switchMap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private afs = firebase.firestore()
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  usuarios: Observable<Usuario[]>
  
  constructor(private db: AngularFirestore) { 
    this.usuariosCollection = db.collection<Usuario>('usuarios')
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return {id, ...data}
        })
      }
    ))
  }

  addUsuario(usuario: Usuario) {
    this.db.collection('usuarios').doc(usuario.codigo).set(usuario);
  }

  async getUsuario(codigo: string) {
    let usuarioRef = this.afs.collection('usuarios').doc(codigo);
    let usuario = await usuarioRef.get()
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
    
    let retorno = await usuario
    return retorno
  }
}
