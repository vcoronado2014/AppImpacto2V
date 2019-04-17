import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';

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
  frmInicio: any;
  frmTermino: any;
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
    var ahora = moment().format("DD-MM-YYYY HH:mm");
    this.frmInicio = moment().toISOString();
    this.frmTermino = moment().add(2, 'h').toISOString();

  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearEventoPage');
  }
  validarFechas(){
    var retorno = true;
    var now = moment();
    var fechaIni = moment(this.frmInicio);
    var fechaTer = moment(this.frmTermino);
    //la primera validación fecha inicio mayor a fecha actual
    if (fechaIni < now){
      let sms = this.presentToast("La fecha de inicio no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha termino menor a la actual
    if (fechaTer < now){
      let sms = this.presentToast("La fecha de término no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha inicio mayor a la de termino
    if (fechaTer < fechaIni){
      let sms = this.presentToast("La fecha de inicio no puede ser mayor a la fecha término");
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
        var detalle = this.frmDetalle;
        var esCpas = false;
        var esNuevo = true;
        var etiqueta = 1;
        var fechaInicio = moment(this.frmInicio).format("YYYY-MM-DD HH:mm");
        var fechaTermino = moment(this.frmTermino).format("YYYY-MM-DD HH:mm");
        var titulo = this.frmTitulo;
        var ubicacion = this.frmUbicacion;
  
        this.global.putCalendario(detalle, esCpas, esNuevo, etiqueta, fechaInicio, fechaTermino, usuId, instId, titulo, ubicacion, usuId).subscribe(
          dataArchivo1 => {
  
            var datos = dataArchivo1.json();
            //loader.dismiss();
            let sms = this.presentToast('El evento ha sido creado con éxito.');
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
