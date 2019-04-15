import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';

/**
 * Generated class for the CrearRendicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-rendicion',
  templateUrl: 'crear-rendicion.html',
})
export class CrearRendicionPage {
rendicion: any;
esNuevo:any;
idRendicion: any;
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
      this.rendicion = this.navParams.get('rendicion');
      if (this.rendicion){
        if (this.rendicion.Id > 0)
        {
          this.esNuevo = false;
          this.idRendicion = this.rendicion.Id;
          this.frmDetalle = this.rendicion.NombreCompleto;
          this.frmFecha = this.rendicion.NombreUsuario;
          this.frmTipoMovimiento = this.rendicion.OtroCinco;
          this.frmMonto = this.rendicion.OtroTres;
          this.frmNumeroComprobante = this.rendicion.OtroDos;
          this.urlDescarga = this.rendicion.Rol;
          this.nombreDocumento = this.rendicion.UrlDocumento;

        }
        else{
          this.esNuevo = true;
          this.idRendicion = 0;
          this.frmFecha = moment().format("DD-MM-YYYY");
        }
  
      }
      else {
        this.esNuevo = true;
        this.idRendicion = 0;
        this.frmFecha = moment().format("DD-MM-YYYY");
      }
  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearRendicionPage');
  }
  closeModal(param) {
    this.viewCtrl.dismiss();
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
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }

  enviarRendicion(){
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
