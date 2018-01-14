import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController } from 'ionic-angular';

import { AuthService } from '../../app/services/AuthService';
import { InicioService } from '../../app/services/InicioService';
import { NovedadService } from '../../app/services/novedadService';
import {AppSettings } from '../../app/AppSettings';

import { NovedadesPage } from '../novedades/novedades';

/**
 * Generated class for the CrearNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-novedad',
  templateUrl: 'crear-novedad.html',
  providers: [AuthService, InicioService, NovedadService]
})
export class CrearNovedadPage {

  novedad: any;
  esNuevo: any;
  textoEnviar: any;
  fileUno: File;
  fileDos: File;
  fileTres: File;
  fileCuatro: File;
  fileUnoName: any;
  fileDosName: any;
  fileTresName: any;
  fileCuatroName: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loading: LoadingController,
              public acceso: AuthService,
              public modalCtrl: ModalController,
              public ini: InicioService,
              public nov: NovedadService,
              public toastCtrl: ToastController,
              public actionSheetCtrl: ActionSheetController) {

    this.novedad = this.navParams.get('item');
    if (this.novedad){
      if (this.novedad.Id > 0)
      {
        this.esNuevo = false;
      }
      else{
        this.esNuevo = true;
      }

    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearNovedadPage');
  }
  closeModal(param) {
    if (param != null){
      this.navCtrl.push(NovedadesPage);
    }
    else
    {
      this.navCtrl.push(NovedadesPage);
    }

  }
  changeListener($event) : void {

    this.fileUno  = $event.target.files[0];
    this.fileUnoName = this.fileUno.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileDosName){
        if (this.fileDosName == this.fileUnoName){
          //error
          this.fileUno = null;
          this.fileUnoName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileTresName){
        if (this.fileTresName == this.fileUnoName){
          //error
          this.fileUno = null;
          this.fileUnoName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileCuatroName){
        if (this.fileCuatroName == this.fileUnoName){
          //error
          this.fileUno = null;
          this.fileUnoName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  changeListenerDos($event) : void {

    this.fileDos  = $event.target.files[0];
    this.fileDosName = this.fileDos.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileUnoName){
        if (this.fileUnoName == this.fileDosName){
          //error
          this.fileDos = null;
          this.fileDosName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();
          return;
        }
      }
      if (this.fileTresName){
        if (this.fileTresName == this.fileDosName){
          //error
          this.fileDos = null;
          this.fileDosName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileCuatroName){
        if (this.fileCuatroName == this.fileDosName){
          //error
          this.fileDos = null;
          this.fileDosName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  changeListenerTres($event) : void {

    this.fileTres  = $event.target.files[0];
    this.fileTresName = this.fileTres.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileUnoName){
        if (this.fileUnoName == this.fileTresName){
          //error
          this.fileTres = null;
          this.fileTresName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();
          return;
        }
      }
      if (this.fileDosName){
        if (this.fileDosName == this.fileTresName){
          //error
          this.fileTres = null;
          this.fileTresName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileCuatroName){
        if (this.fileCuatroName == this.fileTresName){
          //error
          this.fileTres = null;
          this.fileTresName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  changeListenerCuatro($event) : void {

    this.fileCuatro  = $event.target.files[0];
    this.fileCuatroName = this.fileTres.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileUnoName){
        if (this.fileUnoName == this.fileCuatroName){
          //error
          this.fileCuatro = null;
          this.fileCuatroName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();
          return;
        }
      }
      if (this.fileDosName){
        if (this.fileDosName == this.fileCuatroName){
          //error
          this.fileCuatro = null;
          this.fileCuatroName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileTresName){
        if (this.fileTresName == this.fileCuatroName){
          //error
          this.fileCuatro = null;
          this.fileCuatroName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  enviarComentario(){
    let loader = this.loading.create({
      content: 'Verificando...',
    });
    loader.present().then(() => {
      //recoger las variables para enviar
      if (this.textoEnviar == ''){
        let toast = this.presentToast('El texto de la novedad es obligatorio.');
        return;
      }
      //aca guardar la novedad, si todo sale bien ir guardando los demas elementos

      if (this.fileUno){
        //guardar archivo 1
      }
      if (this.fileDos){
        //guardar archivo 2
      }
      if (this.fileTres){
        //guardar archivo 3
      }
      if (this.fileCuatro){
        //guardar archivo 4
      }



      loader.dismiss();
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
}
