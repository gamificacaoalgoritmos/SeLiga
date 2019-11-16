import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private usuario = {}
  private loading: any

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async login () {
    await this.presentLoading()
    try {
      var user = await this.authService.login(this.usuario)
      this.router.navigate(['modalidades'])
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
