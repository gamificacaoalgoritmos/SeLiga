import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login (usuario) {
    return this.afa.auth.signInWithEmailAndPassword(usuario.email, usuario.senha)
  }

  cadastrar (usuario) {
    return this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
  }

  getAuth () {
    return this.afa.auth
  }

  logout () {
    return this.afa.auth.signOut()
  }

  resetPasswordEmail (email) {
    return this.afa.auth.sendPasswordResetEmail(email)
  }

  resetPassword (code, newPassword) {
    return this.afa.auth.confirmPasswordReset(code, newPassword)
  }
}
