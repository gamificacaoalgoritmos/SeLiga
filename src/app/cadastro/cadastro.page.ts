import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public usuario = {}
  private loading: any

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit() {
  }

  async cadastrar() {
    await this.presentLoading()

    try {
      var user = await this.authService.cadastrar(this.usuario)
      user.user.sendEmailVerification()
      this.presentToast("Por favor, confirmar o e-mail")
      var usuario = {
        codigo: user.user.uid,
        nome: this.usuario['nome'],
        nick: this.usuario['nick'],
        email: this.usuario['email'],
        pontuacao: 0
      }
      this.usuarioService.addUsuario(usuario)
    } catch (error) {
      this.presentToast(error.message)
    } finally {
      this.loading.dismiss()
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...', });
    return this.loading.present();

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
