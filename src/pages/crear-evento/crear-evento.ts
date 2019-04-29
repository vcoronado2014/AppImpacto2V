import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import {AppSettings } from '../../app/AppSettings';

/**
 * Generated class for the CrearEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-evento',
  templateUrl: 'crear-evento.html',
})
export class CrearEventoPage {
  esNuevo:any;
  idEvento: any;
  frmDetalle: any;
  frmTitulo: any;
  frmInicio= moment().format("YYYY-MM-DD");
  frmTermino = moment().format("YYYY-MM-DD");
  frmUbicacion: any;
  evento: any;

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
  
  frmHoraInicio = moment().add(2,'h').format("HH:mm");
  frmHoraTermino = moment().add(3,'h').format("HH:mm");


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController
  ) {
    moment.locale('es-CL');
    /*
    var ahora = moment().format("DD-MM-YYYY HH:mm");
    var now = moment();
    var inicio = moment().subtract(4, 'h');
    var termino = moment(inicio).add(2, 'h');
    this.frmInicio = inicio.toISOString();
    this.frmTermino = termino.toISOString();
    */
         //capturamos el elemento
         this.evento = this.navParams.get('evento');
         if (this.evento){
           if (this.evento.id > 0)
           {
              this.idEvento = this.evento.id;
              this.esNuevo = false;
              this.frmTitulo = this.evento.titulo;
              this.frmDetalle = this.evento.detalle;
              this.frmUbicacion = this.evento.ubicacion;
              //setear las fechas y horas
              var inicio = moment(this.evento.startTime).format("YYYY-MM-DD");
              var termino = moment(this.evento.endTime).format("YYYY-MM-DD");
              var hInicio = moment(this.evento.startTime).format("HH:mm");
              var hTermino = moment(this.evento.endTime).format("HH:mm");
              this.frmInicio = inicio;
              this.frmTermino = termino;
              this.frmHoraInicio = hInicio;
              this.frmHoraTermino = hTermino;

           }
           else{
             var fecha = moment(this.evento.startTime);
            var inicio = fecha.format("YYYY-MM-DD");
            var termino = fecha.add(2, 'h').format("YYYY-MM-DD");
            var hInicio = fecha.format("HH:00");
            var hTermino = fecha.add(2, 'h').format("HH:00");
            this.frmInicio = inicio;
            this.frmTermino = termino;
            this.frmHoraInicio = hInicio;
            this.frmHoraTermino = hTermino;
             this.esNuevo = true;
             this.idEvento = 0;
           }
     
         }
         else {
           this.esNuevo = true;
           this.idEvento = 0;
         }

  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearEventoPage');
  }
  validarFechas(){
    var retorno = true;
    var now = moment();
    var fechaIni = moment(this.frmInicio);
    var horaIni = moment(this.frmHoraInicio);
    var fechaTer = moment(this.frmTermino);
    var horaTer = moment(this.frmHoraTermino);
    var fechaIniC = moment(this.frmInicio + ' ' + this.frmHoraInicio);
    var fechaTerC = moment(this.frmTermino + ' ' + this.frmHoraTermino);
    //la primera validación fecha inicio mayor a fecha actual
    if (fechaIniC < now){
      let sms = this.presentToast("La fecha de inicio no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha termino menor a la actual
    if (fechaTerC < now){
      let sms = this.presentToast("La fecha de término no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha inicio mayor a la de termino
    if (fechaTerC < fechaIniC){
      let sms = this.presentToast("La fecha de inicio no puede ser mayor a la fecha término");
      retorno = false;
    }
    //ahora validamos los elementos vacios
    if (this.frmTitulo == undefined || this.frmTitulo == null || this.frmTitulo == ''){
      let sms = this.presentToast("El titulo del evento es requerido");
      retorno = false;
    }
    return retorno;

  }
  insertarEvento(){
    /*
    var entidad = {
      Detalle: "prueba de detalle del evento",
      EsCpas: "false",
      EsNuevo: true,
      Etiqueta: 1,
      FechaInicio: "2019-04-19 13:00",
      FechaTermino: "2019-04-19 14:00",
      IdUsuario: "1",
      InstId: "3",
      Titulo: "prueba de titulo",
      Ubicacion: "mi casa",
      UsuIdCreador: "1"
    };
    */
    if (this.validarFechas()){
      let loader = this.loading.create({
        content: 'Guardando...',
      });
  
      loader.present().then(() => {

        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var usuId = sessionStorage.getItem("USU_ID");
        var detalle = '';
        if (this.frmDetalle != undefined){
          detalle = this.frmDetalle;
        }
        var esCpas = false;
        var esNuevo = this.esNuevo;
        var etiqueta = 1;
        //moment(this.frmInicio + ' ' + this.frmHoraInicio);
        var fechaInicio = moment(this.frmInicio + ' ' + this.frmHoraInicio).format("YYYY-MM-DD HH:mm");
        var fechaTermino = moment(this.frmTermino + ' ' + this.frmHoraTermino).format("YYYY-MM-DD HH:mm");
        var titulo = this.frmTitulo;
        var ubicacion = '';
        if (this.frmUbicacion != undefined){
          ubicacion = this.frmUbicacion;
        }
        var entidad = {
          Id: this.idEvento,
          Detalle: detalle,
          EsCpas: "false",
          EsNuevo: esNuevo,
          Etiqueta: etiqueta,
          FechaInicio: fechaInicio,
          FechaTermino: fechaTermino,
          IdUsuario: usuId,
          InstId: instId,
          Titulo: titulo,
          Ubicacion: ubicacion,
          UsuIdCreador: usuId
        };
  
        this.global.putCalendario(entidad).subscribe(
          dataArchivo1 => {
  
            var datos = dataArchivo1.json();
            //loader.dismiss();
            if (esNuevo) {
              let sms = this.presentToast('El evento ha sido creado con éxito.');
            }
            else {
              let sms = this.presentToast('El evento ha sido modificado con éxito.');
            }

            this.viewCtrl.dismiss(datos);
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

  }

  closeModal(param) {
    this.viewCtrl.dismiss();
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
