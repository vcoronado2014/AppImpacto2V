import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import {AppSettings } from '../../app/AppSettings';

@Component({
  selector: 'page-crear-proyecto',
  templateUrl: 'crear-proyecto.html',
})
export class CrearProyectoPage {
proyecto: any;
esNuevo:any;
idProyecto: any;
frmFecha: any;
frmNombre: any;
frmObjetivo: any;
frmMonto: any;
frmBeneficios: any;
frmDescripcion: any;
frmInicio= moment().format("YYYY-MM-DD");
frmTermino = moment().format("YYYY-MM-DD");
frmQuorum: any;
//titulo
frmTitulo: any;
archivosProyecto: any;
/*
frmDetalle: any;
frmTipoMovimiento: any;
frmNumeroComprobante: any;
frmMonto: any;
frmFecha: any;
urlDescarga: any;
nombreDocumento: any;
//archivos
fileUno: File;
fileUnoName: any;
*/
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
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController) {
      moment.locale('es');
      //capturamos el elemento
      this.frmTitulo = 'Crear Proyecto';
      this.proyecto = this.navParams.get('proyecto');
      if (this.proyecto){
        if (this.proyecto.Id > 0)
        {
          this.frmTitulo = 'Editar Proyecto';
          this.esNuevo = false;
          this.idProyecto = this.proyecto.Id;
          this.frmFecha = this.proyecto.OtroUno;
          this.frmNombre = this.proyecto.NombreUsuario;
          this.frmObjetivo = this.proyecto.NombreCompleto;
          this.frmMonto = this.proyecto.OtroCuatro;
          this.frmBeneficios = this.proyecto.Rol;
          this.frmDescripcion = this.proyecto.OtroSeis;
          var inicio = this.proyecto.OtroUno;
          var termino = this.proyecto.OtroDos;
          this.frmInicio = this.invertirFecha(inicio);
          this.frmTermino = this.invertirFecha(termino);
          this.frmQuorum = this.proyecto.QuorumMinimo;
          //ahora cargamos los proyectos
          
            this.archivosProyecto = [];

            let loader = this.loading.create({
              content: 'Cargando...',
            });
            loader.present().then(() => {
              this.global.getArchivosProyectos(this.proyecto.Id).subscribe(
                data => {
                  var datos = data.json();
                  var urlPrevia = AppSettings.URL_RAIZ + 'RepositorioProyecto/';
                  //this.archivosProyecto = datos.proposals;
                  datos.proposals.forEach(file => {
                    file.UrlDescarga = urlPrevia + file.NombreCompleto;
                    this.archivosProyecto.push(file);
                  });
                },
                err =>{ 
                  console.error(err);
                  loader.dismiss();
                },
                () => {
                  console.log('get rendciones completed');
                  loader.dismiss();
                }
              );
              
            });
         

         /*
          FechaVotacion: null
          HaVotado: false
          Id: 2
          MostrarItem1: false
          NombreCompleto: "objetivo del proyecto"
          NombreUsuario: "prueba de proyecto"
          OtroCinco: "01-04-2018 - 22-05-2018"
          OtroCuatro: "254000"
          OtroDiez: "$ 254.000"
          OtroDoce: "0"
          OtroDos: "22-05-2018"
          OtroNueve: "Usted aún no ha votado este Proyecto."
          OtroOcho: "01-04-2018 - 22-05-2018"
          OtroOnce: "1"
          OtroSeis: "descripcion del proyecto"
          OtroSiete: "0"
          OtroTres: "4/1/2017"
          OtroUno: "01-04-2018"
          QuorumMinimo: "0"
          Rol: "beneficios"
          TotalUsuarios: "13"

         */

        }
        else{
          this.esNuevo = true;
          this.idProyecto = 0;
          this.frmFecha = moment().format("DD-MM-YYYY");
          var fecha = moment();
          var inic = fecha.format("YYYY-MM-DD");
          var term = fecha.add(1, 'd').format("YYYY-MM-DD");
          this.frmInicio = inic;
          this.frmTermino = term;
          this.frmQuorum = "0";
        }
  
      }
      else {
        this.esNuevo = true;
        this.idProyecto = 0;
        this.frmFecha = moment().format("DD-MM-YYYY");
        var fecha = moment();
        var inic = fecha.format("YYYY-MM-DD");
        var term = fecha.add(1, 'd').format("YYYY-MM-DD");
        this.frmInicio = inic;
        this.frmTermino = term;
        this.frmQuorum = "0";
      }
  }
  invertirFecha(fechaStr){
    //viene el formato DD-MM-YYYY y debemos devolver YYYY-MM-DD
    var retorno = fechaStr;

    var partes = fechaStr.split('-');
    retorno = partes[2] + '-' + partes[1] + '-' + partes[0];

    return retorno;
  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearProyectoPage');
  }

  closeModal(param) {
    this.viewCtrl.dismiss();
  }

  enviarProyecto(){
    /*
    //validaciones
    if (this.frmDetalle == '' || this.frmDetalle == null || this.frmDetalle == undefined) {
      let toast = this.presentToast('El detalle es obligatorio.');
      return;
    }
    if (this.frmNumeroComprobante == '' || this.frmNumeroComprobante == null || this.frmNumeroComprobante == undefined) {
      let toast = this.presentToast('El nùmero de comprobante es obligatorio.');
      return;
    }
    if (this.frmMonto == '' || this.frmMonto == null || this.frmMonto == undefined) {
      let toast = this.presentToast('El monto es obligatorio.');
      return;
    }
    if (this.frmTipoMovimiento == '' || this.frmTipoMovimiento == null || this.frmTipoMovimiento == undefined) {
      let toast = this.presentToast('El tipo de movimiento es obligatorio.');
      return;
    }
    let loader = this.loading.create({
      content: 'Guardando...',
    });

    loader.present().then(() => {

      if (!this.fileUno){
        this.fileUnoName = '';
      }
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      this.rendicion = {
        Id: this.idRendicion,
        Detalle: this.frmDetalle,
        NumeroComprobante: this.frmNumeroComprobante,
        Monto: this.frmMonto,
        IdTipoMovimiento: this.frmTipoMovimiento,
        IdUsuario: usuId,
        InstId: instId,
        NombreArchivo: this.fileUnoName
      };

      this.global.sendRendicion(this.fileUno, this.rendicion).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          //loader.dismiss();
          let sms = this.presentToast('La Rendicion ha sido creada con éxito.');
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
    */

  }
  openUrl(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
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
