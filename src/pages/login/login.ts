import { Component } from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../app/services/AuthService';
import {HomePage} from "../home/home";
import {InicioPage} from "../inicio/inicio";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  usuario: string;
  password: string;
  isLogged: boolean;

  constructor (
    private nav: NavController,
    private auth: AuthService,
    public toastCtrl: ToastController
    ) {
  }
  
  
  presentToast = function(mensaje, posicion, duracion) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: duracion,
      position: posicion
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  Signup(){
    //validaciones
    if (!this.usuario){
      let mi = this.presentToast('Nombre de usuario requerido', 'bottom', 4000);
      return;
    }
    if (!this.password){
      let mi = this.presentToast('Password requerida', 'bottom', 4000);
      return;
    }
    let f = { usuario: this.usuario, password: this.password };
    this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        er => {
          //console.log(error)
          let mi = this.presentToast('Usuario no exite', 'bottom', 4000);

        },
        () => {
          if (this.isLogged){
            this.nav.setRoot(InicioPage)
              .then(data => console.log(data),
              error => {
                //console.log(error)
                let mi = this.presentToast(error, 'bottom', 4000);
              }
              );
          } else {
            //incorrecto
            console.log('Acceso denegado');
            let mi = this.presentToast('Usuario no exite', 'bottom', 4000);
          }

        }
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
