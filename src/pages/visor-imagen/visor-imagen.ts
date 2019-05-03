import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController, ViewController  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//agregado ahora para las fotos
//import { PhotoViewer, PhotoViewerOptions } from '@ionic-native/photo-viewer';

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
  permisos: any;
  constructor(    public navCtrl: NavController,
                  public navParams: NavParams,
                  public loading: LoadingController,
                  public toastCtrl: ToastController,
                  private viewCtrl: ViewController,
                  //private photoViewer: PhotoViewer,
                  public actionSheetCtrl: ActionSheetController) {

    this.rutaImagen = this.navParams.get('item');
    this.idImagen = this.navParams.get('idImagen');
    this.mroId = this.navParams.get('MroId');

  }
  closeModal(param) {
    this.viewCtrl.dismiss();
      //this.navCtrl.pop();
  }
  
  viewImage(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
    /*
    const option: PhotoViewerOptions = {
      share: true
    }
    alert(this.rutaImagen);
    this.photoViewer.show(this.rutaImagen, "titulo");
    */
  }
  
  
  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
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
