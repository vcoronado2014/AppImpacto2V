import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App } from 'ionic-angular';
//import { } from 'ionic-nati'

import { LoginPage } from '../login/login';
import { DetailNovedadPage } from '../detail-novedad/detail-novedad';
import { VisorImagenPage } from '../visor-imagen/visor-imagen';
import { CrearNovedadPage } from '../crear-novedad/crear-novedad';
import { EditarNovedadPage } from '../editar-novedad/editar-novedad';

import { AuthService } from '../../app/services/AuthService';
import { InicioService } from '../../app/services/InicioService';
import { NovedadService } from '../../app/services/novedadService';
import {AppSettings } from '../../app/AppSettings';

/**
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html',
  providers: [AuthService, InicioService, NovedadService]
})

export class NovedadesPage {

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
  }

//archivos
fileP: File;
image: string = null;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loading: LoadingController,
              private app: App,
              public acceso: AuthService,
              public modalCtrl: ModalController,
              public ini: InicioService,
              public nov: NovedadService,
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
    this.image = AppSettings.URL_FOTOS + 'BB__4.png';

    loader.present().then(() => {
      //llamadas de negocio
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");

      this.ini.getMuro(instId, usuId).subscribe(
        data => {
          //datos
          this.solicitudes = data.json();
          if (this.solicitudes){
            for(var s in this.solicitudes){
              //hace 3 meses xxx dias
              var fechaStr = this.solicitudes[s].FechaString.split(' ');
              var mostrar = fechaStr[0] + ' ' + fechaStr[1] + ' ' + fechaStr[2];
              this.solicitudes[s].FechaString = mostrar;
              this.solicitudes[s].UrlImagen = 'trash';
              this.solicitudes[s].UrlImagenEdit = 'edit';
              this.solicitudes[s].VisibleEditar = false;
              if (usuId == this.solicitudes[s].UsuId)
                this.solicitudes[s].VisibleEditar = true;
              //esta variable determina si hay archivos adjuntos y cuantos hay
              var cantidadAdjuntos = 0;
              var muestraImagenes = false;
              var muestraImagenUno = false;
              var muestraImagenDos = false;
              var muestraImagenTres = false;
              var muestraImagenCuatro=false;

              //tratamos los archivos adjuntos
              if (this.solicitudes[s].ArchivosAdjuntos){
                //tiene archivos adjuntos
                cantidadAdjuntos = this.solicitudes[s].ArchivosAdjuntos.length;
                muestraImagenes = true;
                //recorremos los archivos adjuntos
                for (var r in this.solicitudes[s].ArchivosAdjuntos){
                  this.solicitudes[s].ArchivosAdjuntos[r].Src = AppSettings.URL_RAIZ + this.solicitudes[s].ArchivosAdjuntos[r].NombreCarpeta + '/' + this.solicitudes[s].ArchivosAdjuntos[r].NombreArchivo;

                }
              }
              //variables para controlar las imagenes adjuntas
              if (cantidadAdjuntos == 1){
                muestraImagenUno = true;
                this.solicitudes[s].ImgUno = this.solicitudes[s].ArchivosAdjuntos[0].Src;
                this.solicitudes[s].ClaseUno = 'img-100 imagenes-muro';
                this.solicitudes[s].ColUno = 'col-12';
                this.solicitudes[s].IdUno = this.solicitudes[s].ArchivosAdjuntos[0].Id;
              }
              if (cantidadAdjuntos == 2){
                muestraImagenUno = true;
                muestraImagenDos = true;
                this.solicitudes[s].ImgUno = this.solicitudes[s].ArchivosAdjuntos[0].Src;
                this.solicitudes[s].ImgDos = this.solicitudes[s].ArchivosAdjuntos[1].Src;
                this.solicitudes[s].ClaseUno = 'img-50 imagenes-muro';
                this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                this.solicitudes[s].ColUno = 'col-6';
                this.solicitudes[s].ColDos = 'col-6';
                this.solicitudes[s].IdUno = this.solicitudes[s].ArchivosAdjuntos[0].Id;
                this.solicitudes[s].IdDos = this.solicitudes[s].ArchivosAdjuntos[1].Id;

              }
              if (cantidadAdjuntos == 3){
                muestraImagenUno = true;
                muestraImagenDos = true;
                muestraImagenTres = true;
                this.solicitudes[s].ImgUno = this.solicitudes[s].ArchivosAdjuntos[0].Src;
                this.solicitudes[s].ImgDos = this.solicitudes[s].ArchivosAdjuntos[1].Src;
                this.solicitudes[s].ImgTres = this.solicitudes[s].ArchivosAdjuntos[2].Src;
                this.solicitudes[s].ClaseUno = 'img-100 imagenes-muro';
                this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                this.solicitudes[s].ClaseTres = 'img-50 imagenes-muro';
                this.solicitudes[s].ColUno = 'col-12';
                this.solicitudes[s].ColDos = 'col-6';
                this.solicitudes[s].ColTres = 'col-6';
                this.solicitudes[s].IdUno = this.solicitudes[s].ArchivosAdjuntos[0].Id;
                this.solicitudes[s].IdDos = this.solicitudes[s].ArchivosAdjuntos[1].Id;
                this.solicitudes[s].IdTres = this.solicitudes[s].ArchivosAdjuntos[2].Id;

              }
              if (cantidadAdjuntos == 4){
                muestraImagenUno = true;
                muestraImagenDos = true;
                muestraImagenTres = true;
                muestraImagenCuatro = true;
                this.solicitudes[s].ImgUno = this.solicitudes[s].ArchivosAdjuntos[0].Src;
                this.solicitudes[s].ImgDos = this.solicitudes[s].ArchivosAdjuntos[1].Src;
                this.solicitudes[s].ImgTres = this.solicitudes[s].ArchivosAdjuntos[2].Src;
                this.solicitudes[s].ImgTres = this.solicitudes[s].ArchivosAdjuntos[3].Src;
                this.solicitudes[s].ClaseUno = 'img-50 imagenes-muro';
                this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                this.solicitudes[s].ClaseTres = 'img-50 imagenes-muro';
                this.solicitudes[s].ClaseCuatro = 'img-50 imagenes-muro';
                this.solicitudes[s].ColUno = 'col-6';
                this.solicitudes[s].ColDos = 'col-6';
                this.solicitudes[s].ColTres = 'col-6';
                this.solicitudes[s].ColCuatro = 'col-6';
                this.solicitudes[s].IdUno = this.solicitudes[s].ArchivosAdjuntos[0].Id;
                this.solicitudes[s].IdDos = this.solicitudes[s].ArchivosAdjuntos[1].Id;
                this.solicitudes[s].IdTres = this.solicitudes[s].ArchivosAdjuntos[2].Id;
                this.solicitudes[s].IdCuatro = this.solicitudes[s].ArchivosAdjuntos[3].Id;
              }
              this.solicitudes[s].CantidadAdjuntos = cantidadAdjuntos;
              this.solicitudes[s].MuestraAdjuntos = muestraImagenes;
              this.solicitudes[s].MuestraImagenUno = muestraImagenUno;
              this.solicitudes[s].MuestraImagenDos = muestraImagenDos;
              this.solicitudes[s].MuestraImagenTres = muestraImagenTres;
              this.solicitudes[s].MuestraImagenCuatro = muestraImagenCuatro;
              //*********************************************************
              if (this.solicitudes[s].RespuestaMuro){
                for (var t in this.solicitudes[s].RespuestaMuro){
                  var fechaStrC = this.solicitudes[s].RespuestaMuro[t].FechaString.split(' ');
                  var mostrarC = fechaStrC[0] + ' ' + fechaStrC[1] + ' ' + fechaStrC[2];
                  this.solicitudes[s].RespuestaMuro[t].FechaString = mostrarC;
                  this.solicitudes[s].RespuestaMuro[t].UrlImagen = 'trash';
                }
              }

            }
          }
        },
        err =>{
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get completed');
          //terminamos;
          loader.dismiss();
        }
      );

    });
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
    console.log('ionViewDidLoad NovedadesPage');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  //modal para agregar un comentario
  presentModal(item) {

    let modal = this.modalCtrl.create(DetailNovedadPage, { novedad: item });
    modal.present();
  }
  presentModalImagen(item, idImagen, id) {

    let modal = this.modalCtrl.create(VisorImagenPage, { item: item, idImagen: idImagen, MroId: id  });
    modal.present();
  }
  presentModalCrearNovedad(item) {

    if (item == null){
      var entidad = {
        Id: 0,
        Eliminado: 0,
        InstId: sessionStorage.getItem("INST_ID"),
        RolId: sessionStorage.getItem("ROL_ID"),
        UsuId: sessionStorage.getItem("USU_ID"),
        PrioridadId: 1,
        ArchivosAdjuntos: [],
        RespuestaMuro: []
      }
      item = entidad;
    }


    let modal = this.modalCtrl.create(CrearNovedadPage, { item: item });
    modal.present();
  }

  presentModalEditarNovedad(item) {

    if (item == null){
      var entidad = {
        Id: 0,
        Eliminado: 0,
        InstId: sessionStorage.getItem("INST_ID"),
        RolId: sessionStorage.getItem("ROL_ID"),
        UsuId: sessionStorage.getItem("USU_ID"),
        PrioridadId: 1,
        ArchivosAdjuntos: [],
        RespuestaMuro: []
      }
      item = entidad;
    }


    let modal = this.modalCtrl.create(EditarNovedadPage, { item: item });
    modal.present();
  }

  delete(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.nov.deleteRespuesta(id).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //por mientras
            //this.closeModal('actualizar');
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
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

  deleteMuro(item){
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
            //this.closeModal('actualizar');
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
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
  presentActionSheetMuro(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.deleteMuro(item);
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

  changeListener($event, item) : void {

    this.fileP = $event.target.files[0];

    let loader = this.loading.create({
      content: 'Cargando Archivo...',
    });

    loader.present().then(() => {
      //lo comentamos por mientras
      /*
        this.putImagen(this.fileP);
        */
        this.image = this.fileP.name;

      loader.dismiss();
    });
  }
  cancel(){
    this.viewCtrl.dismiss();
  }

}
