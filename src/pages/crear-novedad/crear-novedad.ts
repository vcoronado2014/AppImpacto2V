import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';

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
  permisos = {
    CreaCalendario: 0,
    CreaDocumento: 0,
    CreaInstitucion: 0,
    CreaMailing: 0,
    CreaMroSolicitud: 0,
    CreaMuro: 0,
    CreaProyecto: 0,
    CreaRendicion: 0,
    CreaRol: 0,
    CreaSolicitud: 0,
    CreaTricel: 0,
    CreaUsuario: 0,
    EliminaCalendario: 0,
    EliminaDocumento: 0,
    EliminaInstitucion: 0,
    EliminaMroSolicitud: 0,
    EliminaMuro: 0,
    EliminaProyecto: 0,
    EliminaRendicion: 0,
    EliminaRol: 0,
    EliminaTricel: 0,
    EliminaUsuario: 0,
    ModificaCalendario: 0,
    ModificaInstitucion: 0,
    ModificaMroSolicitud: 0,
    ModificaMuro: 0,
    ModificaProyecto: 0,
    ModificaRendicion: 0,
    ModificaRol: 0,
    ModificaTricel: 0,
    ModificaUsuario: 0,
    PuedeVotarProyecto: 0,
    PuedeVotarTricel: 0,
    VerCalendario: 0,
    VerDocumento: 0,
    VerInstitucion: 0,
    VerMailing: 0,
    VerMroSolicitud: 0,
    VerMuro: 0,
    VerProyecto: 0,
    VerRendicion: 0,
    VerReporteAsistencia: 0,
    VerReportes: 0,
    VerRol: 0,
    VerTricel: 0,
    VerUsuario: 0
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loading: LoadingController,
              public acceso: AuthService,
              public modalCtrl: ModalController,
              public ini: InicioService,
              public nov: NovedadService,
              public toastCtrl: ToastController,
              private viewCtrl: ViewController,
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
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearNovedadPage');
  }
  closeModal(param) {
    this.viewCtrl.dismiss();
    /*
    if (param != null){
      this.navCtrl.setRoot(NovedadesPage);
    }
    else
    {
      this.navCtrl.setRoot(NovedadesPage);
    }
    */

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
      //setear los elementos del muro para guardar
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      //para este elemento el tipoPadre = 1//novedades
      //para este elemento el nombre carpeta = 'Novedades'
      var tipoPadre = '1';
      var nombreCarpeta = 'Novedades';
      //el id es 0 porque es un elemento nuevo
      var id='0';

      this.nov.putMuro(1, this.textoEnviar, instId, usuId, rolId, '0').subscribe(
        data => {
          var muro = data.json();
          if (muro){

            var idElemento = muro.Id.toString();
            //esta todo correcto, ahora llamadas anidadas

            let loaderArchivo = this.loading.create({
              content: 'Cargando Archivos...',
            });

            loaderArchivo.present().then(() => {


              if (this.fileUno) {
                //guardar archivo 1

                  this.nov.sendFile(this.fileUno, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
                    dataArchivo1 => {

                      var datos = dataArchivo1.json();

                    },
                    err => {
                      console.error(err);

                    },
                    () => {
                      console.log('Archivo 1 cargado');

                    }
                  );


              }
              if (this.fileDos) {
                //guardar archivo 2

                  this.nov.sendFile(this.fileDos, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
                    dataArchivo2 => {

                      var datosDos = dataArchivo2.json();

                    },
                    err => {
                      console.error(err);

                    },
                    () => {
                      console.log('Archivo 2 cargado');
                      //terminamos;

                    }
                  );

              }
              if (this.fileTres) {
                //guardar archivo 3

                  this.nov.sendFile(this.fileTres, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
                    dataArchivo3 => {

                      var datosTres = dataArchivo3.json();

                    },
                    err => {
                      console.error(err);
                    },
                    () => {
                      console.log('Archivo 3 cargado');
                    }
                  );

              }
              if (this.fileCuatro) {
                //guardar archivo 4

                  this.nov.sendFile(this.fileCuatro, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
                    dataArchivo4 => {

                      var datosCuatro = dataArchivo4.json();

                    },
                    err => {
                      console.error(err);

                    },
                    () => {
                      console.log('Archivo 4 cargado');

                    }
                  );


              }

              loaderArchivo.dismiss();
              //aca esta todo ok, hay que direccionar a la pagina anterior
              let sms = this.presentToast('La novedad ha sido creada con éxito.');
              //this.navCtrl.setRoot(NovedadesPage);
              this.viewCtrl.dismiss();

            });

          }

        },
        err =>{
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get inicio completed');
          //terminamos;
          loader.dismiss();
        }
      );

      //loader.dismiss();
    });

  }

  delete(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.nov.deleteMuro(id).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //por mientras
            this.closeModal('actualizar');
          },
          err => {
            console.error(err);
            loader.dismiss();
          },
          () => {
            console.log('put completed');
            //terminamos;
            loader.dismiss();
          }
        );

      });

    }
  }

  presentActionSheet(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.delete(item);
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

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
