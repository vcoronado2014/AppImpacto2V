import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ModalController, ActionSheetController } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
import { CrearDocumentoPage } from '../crear-documento/crear-documento';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
import { UtilesService } from '../../app/services/UtilesService';
//prueba
//import { Chart } from '../../node_modules/chart.js';
import { Chart } from 'chart.js';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {AppSettings } from '../../app/AppSettings';
declare var window: any;

/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class DocumentosPage {
  documentosArr = [];
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
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public modalCtrl: ModalController,
    public util: UtilesService,
    public actionSheetCtrl: ActionSheetController,
    public acceso: AuthService) {
      sessionStorage.setItem('TIENE_DOCUMENTOS', '0');
  }
  ionViewWillEnter() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    var rolId = sessionStorage.getItem("ROL_ID");
    this.cargar();
    //this.openUrl();
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DocumentosPage');
  }
  retornaImgExtension(extension){
    var pre = "./assets/imgs/";
    var retorno = "";
    switch(extension){
      case '.jpg':
      case '.jpeg':
      case '.JPG':
      case '.JPEG':
        retorno = 'JPG_1.png';
        break;
      case '.gif':
      case '.GIF':
        retorno = 'GIF_1.png';
        break; 
      case '.PNG':
      case '.png':
        retorno = 'PNG_1.png';
        break;
      case '.DOC':
      case '.DOCX':
      case '.doc':
      case '.docx':      
        retorno = 'DOC_1.png';
        break;  
      case '.PPT':
      case '.PPTX':
      case '.ppt':
      case '.pptx':      
        retorno = 'PPT_1.png';
        break; 
      case '.PDF':
      case '.pdf':     
        retorno = 'PDF_1.png';
        break;  
      default:
        retorno= 'FILE_1.png';
        break;                                     
    }

    return pre + retorno;
  }
  cargar() {
    this.documentosArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var usuId = sessionStorage.getItem("USU_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postDocumentosUsuario(instId, usuId).subscribe(
        data => {
          var datos = data.json();
          var datosProcesar = datos.proposals;
          var urlPrevia = AppSettings.URL_RAIZ + 'Repositorio/';
          if (datosProcesar && datosProcesar.length > 0){
            //ahora procesamos las rutas para mostrar los archivos
            datosProcesar.forEach(element => {
              element.UrlMostrar = urlPrevia + element.NombreCompleto;
              element.Icono = this.retornaImgExtension(element.OtroTres);
              console.log(element.Icono);
              this.documentosArr.push(element);
            });

          }
          //this.documentosArr = datos.proposals;
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
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  openUrl(url){
    //let browser = new InAppBrowser();
    //browser.create(url, '_system', 'location=yes');
    let options ='location=no,toolbar=yes,hidden=no,fullscreen=yes';
    window.open(url, '_system', options);
  }
  descargar(url, extension){
    this.util.downloadAndOpen(url, extension);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }

    //abrir la pagina de creaciòn de rendicion
    presentModal(item) {

      let modal = this.modalCtrl.create(CrearDocumentoPage, { documento: item });
      modal.onDidDismiss(data => {
        // Data is your data from the modal
        if (data != undefined){
          this.cargar();
        }
      });
      modal.present();
    }

    delete(item){
      if (item){
  
        let loader = this.loading.create({
          content: 'eliminando...',
        });
  
        loader.present().then(() => {
          var id = item.Id;
          this.global.deleteDocumento(id).subscribe(
            data => {
              //actualizar el contenido
              var ret = data.json();
              //por mientras
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

}
