import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController, ViewController, AlertController, Platform  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';
import * as exif from 'exif-js';
import * as $ from 'jquery';
import {AppSettings } from '../../app/AppSettings';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

import { UtilesService } from '../../app/services/UtilesService';
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
  metaData: any;
  item: any;
  idImagen: any;
  mroId: any;
  rutaImagen: any;
  permisos: any;
  extension: any;
  constructor(    public navCtrl: NavController,
                  public navParams: NavParams,
                  public loading: LoadingController,
                  public toastCtrl: ToastController,
                  private viewCtrl: ViewController,
                  public sanitizer: DomSanitizer,
                  public alertctrl: AlertController,
                  public fileShooser: FileChooser,
                  public fileOpener: FileOpener,
                  public filePath: FilePath,
                  public file:File,
                  public ft: FileTransfer,
                  public document: DocumentViewer,
                  public platform: Platform,
                  //private photoViewer: PhotoViewer,
                  public util: UtilesService,
                  public actionSheetCtrl: ActionSheetController) {

    this.rutaImagen = AppSettings.CORS + this.navParams.get('item');
    this.idImagen = this.navParams.get('idImagen');
    this.mroId = this.navParams.get('MroId');
    this.extension = this.navParams.get('Extension');
    //this.downloadAndOpenPdf(this.navParams.get('item'), '.jpg');

  }
  closeModal(param) {
    this.viewCtrl.dismiss();
      //this.navCtrl.pop();
  }
  async loaded(e) {
    this.metaData = await this.getGpsData(e.target);
    console.log(this.metaData);
  }

  getGpsData(image): Promise<any> {
    return new Promise((resolve, reject) => {
      exif.getData(image, function () {
        var allMetaData = exif.getAllTags(this);
        console.log(allMetaData);
        var orientation = exif.getTag(this, "Orientation");
        if (orientation == 6){
          $(this).css('transform', 'rotate(90deg)');
        }
          
        resolve(allMetaData);
      });
    });
  }
  
  viewImage(url){
    let browser = new InAppBrowser();
    browser.create(url, '_system', 'location=yes');
    /*
    const option: PhotoViewerOptions = {
      share: true
    }
    alert(this.rutaImagen);
    this.photoViewer.show(this.rutaImagen, "titulo");
    */
  }
  descargar(url, extension){
    this.util.downloadAndOpen(url, extension);
  }

  downloadAndOpenPdf(downloadUrl, extension) {
    //image/jpeg
    //image/png
    //let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    var mime = '';
    if (extension == '.pdf'){
      mime = 'application/pdf';
    }
    else if (extension == '.png'){
      mime = 'image/png';
    }
    else if (extension == '.jpeg'){
      mime = 'image/jpeg';
    }
    else if (extension == '.jpg'){
      mime = 'image/jpeg';
    }
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
   
    transfer.download(downloadUrl, path + 'myfile' + extension).then(entry => {
      let url = entry.toURL();
   
      if (this.platform.is('ios')) {
        this.document.viewDocument(url, mime, {});
      } else {
        this.fileOpener.open(url, mime)
          .then(() => 
          {
            let sms = this.presentToast('archivo abierto');
            console.log('File is opened');
          }
          )
          .catch(e => {
            let sms = this.presentToast('error ' + e);
            console.log('Error opening file', e);
          } );
      }
    });
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
