import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Usuario } from './model/usuario';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Minhas conquistas',
      url: '/conquistas',
      icon: 'trophy'
    },
    {
      title: 'Jogar',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Como jogar?',
      url: '/tutorial',
      icon: 'help-circle'
    },
    {
      title: 'Sobre nós',
      url: '/sobre',
      icon: 'information-circle-outline'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout () {
    this.authService.logout()
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  redefinirSenha () {
    firebase.auth().onAuthStateChanged(user => {
      let usuario = new Usuario();
      usuario.getUsuario(user.uid).then(usuario => {
        this.authService.resetPasswordEmail(usuario.email);
        this.presentToast("Um link foi enviado para seu email cadastrado");
      })
    });

  }
}
