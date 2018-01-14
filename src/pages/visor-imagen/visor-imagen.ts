import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController   } from 'ionic-angular';

/**
 * Generated class for the VisorImagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-visor-imagen',
  templateUrl: 'visor-imagen.html',
})
export class VisorImagenPage {

  item: any;
  rutaImagen: any;
  constructor(    public navCtrl: NavController,
                  public navParams: NavParams,
                  public loading: LoadingController,
                  public toastCtrl: ToastController,
                  public actionSheetCtrl: ActionSheetController) {

    this.rutaImagen = this.navParams.get('item');

  }
  closeModal(param) {
      this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VisorImagenPage');
  }

}
