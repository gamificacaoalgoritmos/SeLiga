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
    firebase.database().ref('usuarios/' + usuario.codigo).set(usuario);
  }

  getUsuario(codigo: string) {
    return firebase.database().ref('/usuarios/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}
