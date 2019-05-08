import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as exif from 'exif-js';
import * as $ from 'jquery';

import { CrearSolicitudPage } from '../crear-solicitud/crear-solicitud';
import {AppSettings } from '../../app/AppSettings';



@Component({
  selector: 'page-comentarios-solicitudes',
  templateUrl: 'comentarios-solicitudes.html',
})
export class ComentariosSolicitudesPage {

  solicitud: any;
  comentarios = [];
  frmTexto: any;
  mroId: any;
  modificado = false;
  //probando camara
  image: string = null;
  metaData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera
  ) {
    moment.locale('es');
    this.solicitud = this.navParams.get('solicitud');
    if (this.solicitud){
      //seteamos la lista de comentarios
      this.comentarios = this.solicitud.RespuestaMuro;
      this.mroId = this.solicitud.Id;
    }

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
  openUrl(url){
    //var url = this.urlDescarga;
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: false,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
  enviarComentario(){
    //validaciones
    if (this.frmTexto == null || this.frmTexto == undefined){
      let sms = this.presentToast('Debe ingresar texto para enviar');
      return;
    }
    let loader = this.loading.create({
      content: 'Guardando...',
    });

    loader.present().then(() => {
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      var comentario = {
        InstId: instId.toString(),
        MroId: this.mroId.toString(),
        PrioridadId: 1,
        RolId: rolId.toString(),
        Texto: this.frmTexto,
        UsuId: usuId.toString()
      };

      this.global.putComentario(comentario).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          //loader.dismiss();
          let sms = this.presentToast('Comentario Guardado con éxito.');
          //hay que buscar la informacion del usuario
          this.global.postObtenerUsuario(datos.UsuId).subscribe(
            dataUsu => {
              //lo quitamos para que no sea tan grande el elemento
              datos.UsuarioFuncional = dataUsu.json();
              //sobrescribimos el nombre usuario
              datos.NombreUsuario = datos.UsuarioFuncional.Persona.Nombres + ' ' + datos.UsuarioFuncional.Persona.ApellidoPaterno + ' ' + datos.UsuarioFuncional.Persona.ApellidoMaterno;
              datos.NombreRol = datos.UsuarioFuncional.Rol.Nombre;
              datos.FechaString = 'hace un momento';
              datos.clase = 'respuesta item item-block item-md';
            }
          );
          this.global.postArchivos(instId, datos.Id, 3).subscribe(dataArc=>{
            datos.ArchivosAdjuntos = dataArc.json();
            datos.ArchivosAdjuntos.forEach(archivo => {
              var urlPrevia = AppSettings.URL_RAIZ + archivo.NombreCarpeta + '/' + archivo.NombreArchivo;
              archivo.Url = urlPrevia;
            });
          });
          this.comentarios.unshift(datos);
          //this.viewCtrl.dismiss(datos);
          this.modificado = true;
          this.frmTexto = '';
        },
        err => {
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('Archivo 1 cargado');
          loader.dismiss();
        }
      );


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
  /*

  put ResSolMuro
  InstId: "3"
MroId: 9
PrioridadId: 0
RolId: "9"
Texto: "ok, entonces quedo a la espera"
UsuId: "54"
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentariosSolicitudesPage');
  }
  closeModal(param) {
    if (this.modificado) {
      this.viewCtrl.dismiss('datos');
    }
    else {
      this.viewCtrl.dismiss();
    }
      
  }
  presentModalNuevo() {
    var item = this.solicitud;
    item.MroId = this.mroId;

    let modal = this.modalCtrl.create(CrearSolicitudPage, { solicitud: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.modificado = true;
        //this.cargar();
        //aca cerrar y enviar dismiss a la anterior
        this.closeModal(data);
      }
    });
    modal.present();
  }   

}
