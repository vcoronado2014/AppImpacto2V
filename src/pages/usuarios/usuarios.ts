import { Component } from '@angular/core';
import { NavController, Platform, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App, MenuController, Tabs } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
//paginas del menu
import { TabTricelPage } from '../tab-tricel/tab-tricel';
import { NovedadesPage } from '../novedades/novedades';
import { RendicionPage } from '../rendicion/rendicion';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
import { ClientePage } from '../cliente/cliente';
import { MisSolicitudesPage } from '../mis-solicitudes/mis-solicitudes';
//************************* */
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html'
})
export class UsuariosPage {
usuariosArr = [];
institucionesArr = [];
esAdministrador = false;
//para filtrar
nombreFiltrar;
filtrosInstitucion = [];
filtrados = [];
usuariosOriginal = [];
cantidadUsuarios = 0;
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
    private app: App,
    public modalCtrl: ModalController,
    public acceso: AuthService,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public menuCtrl: MenuController,
    public global:GlobalService,
    public actionSheetCtrl: ActionSheetController
  ) {
    //this.initializeApp();

  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    if (rolId == '1'){
      this.esAdministrador = true;
      this.nombreFiltrar = 'Todos';
    }
    this.cargarInstituciones();
    this.cargar();
  }
  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
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
      this.usuariosArr = this.cargarFiltros(this.usuariosOriginal, e.NombreCompleto);
    }
    else {
      //mostramos todo
      this.usuariosArr = this.usuariosOriginal;

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
  cargar() {
    this.usuariosArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.getUsuarios(instId, rolId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.usuariosArr = datos.proposals;
          this.usuariosOriginal = this.usuariosArr;
          this.cantidadUsuarios = this.usuariosArr.length;
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get solicitudes completed');
          loader.dismiss();
        }
      );
      
    });
  }
  cargarInstituciones() {
    this.filtrosInstitucion = [];

    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postInstituciones(rolId, instId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.institucionesArr = datos.proposals;
          
          var filtroTodos = {
            NombreCompleto: 'Todos'
          };
          /*
          this.filtrosInstitucion.push(filtroTodos);
          */
          this.filtrosInstitucion = this.institucionesArr;
          this.filtrosInstitucion.splice(0, 0, filtroTodos);
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get solicitudes completed');
          loader.dismiss();
        }
      );
      
    });
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
    this.navCtrl.pop();
    //tabsNav.tab2Root = NovedadesPage;
  }
  openRendiciones(){
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(2);
    this.closeMenu();
    this.navCtrl.pop();
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
    //this.navCtrl.pop();
    this.navCtrl.setRoot(NovedadesPage);
  }    
  toggleMenu() {
    //this.menuCtrl.open(); //Add this method to your button click function
    //this.menuCtrl._menus[0].toggle();
    //this.menuCtrl._menus[0].open();
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    //this.closeMenu();
    //tabsNav.closeMenu();
    //tabsNav.select(0);
    //tabsNav._tabs[0].isSelected = true;

  }  
  menutoggle () {
    /*
    this.menuCtrl.enable(false, 'pageNovedades');
    this.menuCtrl.enable(true, 'pageUsuarios');
    this.menuCtrl.toggle('pageUsuarios');
    */
}    
}
