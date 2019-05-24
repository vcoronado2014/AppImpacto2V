import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App } from 'ionic-angular';
//import { } from 'ionic-nati'

import { LoginPage } from '../login/login';
//paginas
import { ComentariosSolicitudesPage } from '../comentarios-solicitudes/comentarios-solicitudes';
import { CrearSolicitudPage } from '../crear-solicitud/crear-solicitud';

import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import * as exif from 'exif-js';
import * as $ from 'jquery';


@Component({
  selector: 'page-mis-solicitudes',
  templateUrl: 'mis-solicitudes.html',
})
export class MisSolicitudesPage {
  //variable para cors
  //cors = "https://api.allorigins.win/raw?url=";
  solicitudes: any;
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
  };
  metaData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    private app: App,
    public acceso: AuthService,
    public global: GlobalService,
    public modalCtrl: ModalController,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }
  cargar(){
    let loader = this.loading.create({
      content: 'Cargando...',
    });

    this.solicitudes=[];


    loader.present().then(() => {
      //llamadas de negocio
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");

      this.global.postSolMuro(usuId, instId).subscribe(
        data => {
          //datos
          this.solicitudes = data.json();
          if (this.solicitudes){
            
            this.solicitudes.forEach(sol => {
              sol.PuedeEliminar = false;
              if (sol.RespuestaMuro && sol.RespuestaMuro.length > 0){
                sol.RespuestaMuro.forEach(resp => {
                  if (usuId == resp.UsuId){
                    resp.clase = 'respuesta item item-block item-md';
                    resp.PuedeEliminar = true;
                  }
                  else {
                    resp.clase = 'respuestaOtro item item-block item-md';
                    resp.PuedeEliminar = false;
                  }
                  this.global.postArchivos(resp.InstId, resp.Id, 3).subscribe(dataArc=>{
                    resp.ArchivosAdjuntos = dataArc.json();
                    resp.ArchivosAdjuntos.forEach(archivo => {
                      //var urlPrevia = AppSettings.URL_RAIZ + archivo.NombreCarpeta + '/' + archivo.NombreArchivo;
                      var urlPrevia = AppSettings.CORS + AppSettings.URL_RAIZ_NOVEDADES +  '/' + archivo.NombreArchivo;
                      archivo.Url = urlPrevia;
                      /*
                      this.global.postCors(archivo.Url).subscribe(ret=>{
                        console.log(ret);
                      })
                      */

                    });
                  });
                });
                //aca la ultima respuesta
                sol.UltimoComentario = sol.RespuestaMuro[0];
              }
              else{
                if (sol.UsuId == usuId){
                  sol.PuedeEliminar = true;
                }
              }
              //debemos buscar correctamente al usuario de la solicitud ya que viene un nombre distinto
              this.global.postObtenerUsuario(sol.UsuId).subscribe(
                dataUsu => {
                  //lo quitamos para que no sea tan grande el elemento
                  sol.UsuarioFuncional = dataUsu.json();
                  //sobrescribimos el nombre usuario
                  sol.NombreUsuario = sol.UsuarioFuncional.Persona.Nombres + ' ' + sol.UsuarioFuncional.Persona.ApellidoPaterno + ' ' + sol.UsuarioFuncional.Persona.ApellidoMaterno;
                }
              );
              //ahora los archivos
              this.global.postArchivos(instId, sol.Id, '2').subscribe(
                dataArc => {
                  //lo quitamos para que no sea tan grande el elemento
                  sol.ArchivosAdjuntos = dataArc.json();
                  sol.ArchivosAdjuntos.forEach(archivo => {
                    //var urlPrevia = AppSettings.URL_RAIZ + archivo.NombreCarpeta + '/' + archivo.NombreArchivo;
                    var urlPrevia = AppSettings.CORS + AppSettings.URL_RAIZ_NOVEDADES + '/' + archivo.NombreArchivo;
                    archivo.Url = urlPrevia;
                    /*
                    this.global.postCors(archivo.Url).subscribe(ret=>{
                      console.log(ret);
                    })
                    */
                  });
                  console.log(sol.ArchivosAdjuntos);

                }
              );
            });
            console.log(this.solicitudes);
          }
        },
        err =>{
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('post completed solicitudes');
          //terminamos;
          loader.dismiss();
        }
      );

    });
  }
    async loaded(e) {
      this.metaData = await this.getGpsData(e.target);
    }

    getGpsData(image): Promise<any> {
      return new Promise((resolve, reject) => {
        exif.getData(image, function () {
          var allMetaData = exif.getAllTags(this);
          var orientation = exif.getTag(this, "Orientation");
          if (orientation == 6){
            $(this).css('transform', 'rotate(90deg)');
          }
          resolve(allMetaData);
        });
      });
    }
  evaluarImagen(img) {
    exif.getData(img.currentTarget, function () {
      var orientation = exif.getTag(this, "Orientation");
      console.log(orientation);
      if (orientation == 6)
        //$(img).css('transform', 'rotate(90deg)')
        console.log(orientation);
    });
  }
  presentModal(item) {

    let modal = this.modalCtrl.create(ComentariosSolicitudesPage, { solicitud: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }
  openUrl(url){
    //var url = this.urlDescarga;
    let browser = new InAppBrowser();
    browser.create(url, '_blank', 'location=yes');
  }

  presentModalNuevo(item) {

    let modal = this.modalCtrl.create(CrearSolicitudPage, { solicitud: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }  

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }
  ionViewWillEnter() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MisSolicitudesPage');
  }

  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }

  deleteSol(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.global.deleteSolicitud(id).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //this.modificado = true;
            //ahora actualizamos la lista
            //this.obtenerComentarios(id);
            this.cargar();
          },
          err => {
            console.error(err);
            loader.dismiss();
          },
          () => {
            console.log('delete completed');
            //terminamos;
            loader.dismiss();
          }
        );

      });

    }
  }
  presentActionSheetSol(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.deleteSol(item);
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
