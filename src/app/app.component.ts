import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

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
    private authService: AuthService
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
}
