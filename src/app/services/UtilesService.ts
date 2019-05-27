import { Injectable, Component } from '@angular/core';
import {Platform, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {AppSettings } from '../AppSettings';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
//visor
import { VisorImagenPage } from '../../pages/visor-imagen/visor-imagen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import 'rxjs/add/operator/map';

@Injectable()
export class UtilesService{
  constructor(
    private http: Http,
    public toastCtrl: ToastController,
    public platform: Platform,
    public fileShooser: FileChooser,
    public fileOpener: FileOpener,
    public filePath: FilePath,
    public file:File,
    public ft: FileTransfer,
    public document: DocumentViewer,
  ){

  }
  downloadAndOpen(downloadUrl, extension) {
    //image/jpeg
    //image/png
    //let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    var extensionConocida = true;
    var mime = '';
    if (extension == '.pdf' || extension == '.PDF'){
      mime = 'application/pdf';
    }
    else if (extension == '.png' || extension == '.PNG'){
      mime = 'image/png';
    }
    else if (extension == '.jpeg' || extension == '.JPEG'){
      mime = 'image/jpeg';
    }
    else if (extension == '.jpg' || extension == '.JPG'){
      mime = 'image/jpeg';
    }
    else if (extension == '.doc' || extension == '.DOC' || extension == '.docx' || extension == '.DOCX'){
        mime = 'application/msword';
    }
    else if (extension == '.xls' || extension == '.XLS' || extension == '.xlsx' || extension == '.XLSX'){
        mime = 'application/vnd.ms-excel';
    }
    else if (extension == '.ppt' || extension == '.PPT' || extension == '.pptx' || extension == '.PPTX'){
        mime = 'application/vnd.ms-powerpoint';
    }  
    else if (extension == '.GIF' || extension == '.gif'){
        extensionConocida = false;
    }      
    else {
        mime = 'application/octet-stream';
    }

    if (extensionConocida){
        let path = this.file.dataDirectory;
        if (path){
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
                    let sms = this.presentToast('error ' + JSON.stringify(e));
                    console.log('Error opening file', e);
                  } );
              }
            });
        }
        else {
            let browser = new InAppBrowser();
            browser.create(downloadUrl, '_system', 'location=yes');
        }

    }
    else{
        let sms = this.presentToast('Este tipo de imagen no se puede visualizar.');
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