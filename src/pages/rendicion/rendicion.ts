import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ModalController, ActionSheetController, MenuController, Tabs, Platform  } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
import { CrearRendicionPage } from '../crear-rendicion/crear-rendicion';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//prueba
//import { Chart } from '../../node_modules/chart.js';
import { Chart } from 'chart.js';
import { AppSettings } from '../../app/AppSettings';
//paginas del menu
import { TabTricelPage } from '../tab-tricel/tab-tricel';
import { UsuariosPage } from '../usuarios/usuarios';
//import { RendicionPage } from '../rendicion/rendicion';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
import { ClientePage } from '../cliente/cliente';
import { MisSolicitudesPage } from '../mis-solicitudes/mis-solicitudes';
//************************* */

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rendicion',
  templateUrl: 'rendicion.html',
})
export class RendicionPage {
  @ViewChild('pieChart') pieChart;
  
//usuariosArr = [];
rendicionesArr = [];
esAdministrador = false;
//para filtrar
nombreFiltrar;
filtrosInstitucion = [];
filtrados = [];
rendicionesOriginal = [];
cantidadRendiciones = 0;
institucionLogueado = sessionStorage.getItem("INSTITUCION_NOMBRE");
mbreLogueado = sessionStorage.getItem("PERSONA_NOMBRE");
rolLogueado = sessionStorage.getItem("ROL_NOMBRE");

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
    public acceso: AuthService,
    public menuCtrl: MenuController,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {
    sessionStorage.setItem('TIENE_RENDICIONES', '0');

  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    if (rolId == '1'){
      this.esAdministrador = true;
      this.nombreFiltrar = 'Todos';
    }
    //this.cargarInstituciones();
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }
  cambioFiltros(e){
    //console.log(e.target.value);
    if (e.NombreCompleto && e.NombreCompleto != 'Todos'){
      this.rendicionesArr = this.cargarFiltros(this.rendicionesOriginal, e.NombreCompleto);
    }
    else {
      //mostramos todo
      this.rendicionesArr = this.rendicionesOriginal;

    }
  }
  cargarFiltros(arreglo, elemento){
    this.filtrados = [];
    arreglo.forEach(element => {
      if (element.OtroUno == elemento){
        this.filtrados.push(element);
      }
      
    });

    return this.filtrados;
  }
  transformarFecha(fechaStr){
    var retorno = fechaStr;
    var arrFecha = fechaStr.split('-');
    if (arrFecha && arrFecha.length == 3){
      var mes = parseInt(arrFecha[0]);
      var dia = parseInt(arrFecha[1]);
      var anio = parseInt(arrFecha[2]);
      var mesStr = '';
      var diaStr = '';
      if (mes < 10){
        mesStr = '0' + mes.toString();
      }
      else {
        mesStr = mes.toString();
      }
      if (dia < 10){
        diaStr = '0' + dia.toString();
      }
      else {
        diaStr = dia.toString();
      }

      retorno = diaStr + '-' + mesStr + '-' + anio.toString();
    }

    return retorno;
  }
  cargar() {
    this.rendicionesArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postRendiciones(instId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          var procesar = datos.proposals;
          procesar.forEach(rendicion => {
            //hay que transformar la fecha ya que viene en un formato inválido
            //m-dd-yyyy
            rendicion.NombreUsuario = this.transformarFecha(rendicion.NombreUsuario);
            rendicion.Rol = AppSettings.URL_FOTOS + rendicion.UrlDocumento;
            this.rendicionesArr.push(rendicion);

          });
          //this.rendicionesArr = datos.proposals;
          this.rendicionesOriginal = this.rendicionesArr;
          this.cantidadRendiciones = this.rendicionesArr.length;
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
  //abrir la pagina de creaciòn de rendicion
  presentModal(item) {

    let modal = this.modalCtrl.create(CrearRendicionPage, { rendicion: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }
  openUrl(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }

  delete(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.global.deleteRendicion(id).subscribe(
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
  closeMenu(){
    this.menuCtrl.close();
  }
  cerrarSesion(){
    this.logout();
  }
  salir(){
    this.platform.exitApp();
  }
  openUsuarios(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(1);
    this.closeMenu();
    //this.navCtrl.setRoot(UsuariosPage);
    //this.navCtrl.pop();
    //tabsNav.tab2Root = UsuariosPage;
  }
  openDocumentos(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(3);
    this.closeMenu();
    this.navCtrl.pop();
  }  
  openCalendario(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(4);
    this.closeMenu();
    this.navCtrl.pop();
  } 
  openVotaciones(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(5);
    this.closeMenu();
    this.navCtrl.pop();
  }
  openSolicitudes(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(6);
    this.closeMenu();
    this.navCtrl.pop();
  } 
  openNovedades(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(0);
    this.closeMenu();
    this.navCtrl.pop();
  }  
  menutoggle () {
    /*
    this.menuCtrl.enable(false, 'pageNovedades');
    this.menuCtrl.enable(true, 'pageRendicion');
    this.menuCtrl.toggle('pageRendicion');
    */
}   

}
