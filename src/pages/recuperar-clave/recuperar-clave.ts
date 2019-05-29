import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController,ViewController, ToastController } from 'ionic-angular';
//servicios
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';

/**
 * Generated class for the RecuperarClavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recuperar-clave',
  templateUrl: 'recuperar-clave.html',
})
export class RecuperarClavePage {
nombreUsuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loading: LoadingController,
    private viewCtrl: ViewController,
    public global: GlobalService,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarClavePage');
  }
  closeModal(param) {
    this.viewCtrl.dismiss();

  }
  recuperar() {

    if (this.nombreUsuario != null && this.nombreUsuario != undefined && this.nombreUsuario != '') {

      let loader = this.loading.create({
        content: 'Recuperando...',
      });
      loader.present().then(() => {
        this.global.postRecuperarClave(this.nombreUsuario).subscribe(
          data => {
            var datos = data.json();
            this.presentToast('Clave recuperada con éxito, revise su correo electrónico');
            this.closeModal(null);
          },
          err =>{ 
            console.error(err);
            this.presentToast('Error al recuperar la clave, contacte al administrador.');
            loader.dismiss();
          },
          () => {
            console.log('post recuperar completed');
            loader.dismiss();
          }
        );
        
      });

    }
    else {
      let sms = this.presentToast('Nombre de Usuario es requerido.');
    }

  }
  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
