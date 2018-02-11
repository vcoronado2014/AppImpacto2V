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
  idImagen: any;
  mroId: any;
  rutaImagen: any;
  constructor(    public navCtrl: NavController,
                  public navParams: NavParams,
                  public loading: LoadingController,
                  public toastCtrl: ToastController,
                  public actionSheetCtrl: ActionSheetController) {

    this.rutaImagen = this.navParams.get('item');
    this.idImagen = this.navParams.get('idImagen');
    this.mroId = this.navParams.get('MroId');

  }
  closeModal(param) {
      this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VisorImagenPage');
  }
  presentActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar esta imágen?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            //rutina para eliminar esta imagen
            //this.delete(item);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');

          }
        }
      ]
    });
    actionSheet.present();
  }

}
