import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CrearRendicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-rendicion',
  templateUrl: 'crear-rendicion.html',
})
export class CrearRendicionPage {
rendicion: any;
esNuevo:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController) {
      //capturamos el elemento
      this.rendicion = this.navParams.get('item');
      if (this.rendicion){
        if (this.rendicion.Id > 0)
        {
          this.esNuevo = false;
        }
        else{
          this.esNuevo = true;
        }
  
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearRendicionPage');
  }
  closeModal(param) {
    this.viewCtrl.dismiss();
  }

}
