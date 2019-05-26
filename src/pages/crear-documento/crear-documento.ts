import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';

declare var window: any;

@Component({
  selector: 'page-crear-documento',
  templateUrl: 'crear-documento.html',
})
export class CrearDocumentoPage {
documento: any;
esNuevo:any;
idDocumento: any;
frmDescripcion: any;
frmFecha: any;
urlDescarga: any;
nombreDocumento: any;
//archivos
fileUno: File;
fileUnoName: any;
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
      this.documento = this.navParams.get('documento');
      if (this.documento){
        if (this.documento.Id > 0)
        {
          this.esNuevo = false;
          this.idDocumento = this.documento.Id;
          this.frmDescripcion = this.documento.OtroCinco;
          this.frmFecha = this.documento.NombreUsuario;

          this.urlDescarga = this.documento.UrlMostrar;
          this.nombreDocumento = this.documento.NombreCompleto;

        }
        else{
          this.esNuevo = true;
          this.idDocumento = 0;
          this.frmFecha = moment().format("DD-MM-YYYY");
        }
  
      }
      else {
        this.esNuevo = true;
        this.idDocumento = 0;
        this.frmFecha = moment().format("DD-MM-YYYY");
      }
  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearDocumentoPage');
  }

  closeModal(param) {
    this.viewCtrl.dismiss();
  }

  enviarDocumento(){
    //validaciones
    if (this.frmDescripcion == null || this.frmDescripcion == undefined || this.frmDescripcion == ''){
      let sms = this.presentToast('La descripción del documento es requerida.');
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
      var descripcion = '';

      if (this.frmDescripcion != undefined){
        descripcion = this.frmDescripcion;
        //la hacemos requerida

      }

      this.global.sendDocumento(this.fileUno, usuId, instId, descripcion).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          //loader.dismiss();
          let sms = this.presentToast('El documento ha sido creado con éxito.');
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

  changeListener($event) : void {

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      this.fileUno  = $event.target.files[0];
      this.fileUnoName = this.fileUno.name;


      loader.dismiss();
    });
  }
  openUrl(){
    var url = this.urlDescarga;
    //let browser = new InAppBrowser();
    //browser.create(url, '_system', 'location=yes');
    //navigator.app.location(url, { openExternal:true });
    let options ='location=no,toolbar=yes,hidden=no,fullscreen=yes';
    window.open(url, '_system', options);
  }
  //aca poner el enviar documento


  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
