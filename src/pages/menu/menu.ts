import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, Platform, App, MenuController } from 'ionic-angular';
import { ClientePage } from '../cliente/cliente';
import { NovedadesPage } from '../novedades/novedades';
import { RendicionPage } from '../rendicion/rendicion';
import { TabTricelPage } from '../tab-tricel/tab-tricel';
import { UsuariosPage } from '../usuarios/usuarios';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
import { MisSolicitudesPage } from '../mis-solicitudes/mis-solicitudes';
import { AuthService } from '../../app/services/AuthService';
import { LoginPage } from '../login/login';
import { Title } from '@angular/platform-browser';
import { ProyectosPage } from '../proyectos/proyectos';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
  muestra: boolean;
}
 

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  /*
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
    */
  permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));

  rootPage = ClientePage;
  institucionLogueado = sessionStorage.getItem("INSTITUCION_NOMBRE");
  nombreLogueado = sessionStorage.getItem("PERSONA_NOMBRE");
  rolLogueado = sessionStorage.getItem("ROL_NOMBRE");

  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Novedades', pageName: 'NovedadesPage', tabComponent: 'tabNovedades', index: 0, icon: 'chatbubbles', muestra: this.evaluaItem('Novedades') },
    { title: 'Usuarios', pageName: 'UsuariosPage', tabComponent: 'tabUsuarios', index: null, icon: 'people', muestra: this.evaluaItem('Usuarios') },
    { title: 'Rendiciones', pageName: 'RendicionPage', tabComponent: 'tabRendiciones', index: null, icon: 'logo-usd', muestra: this.evaluaItem('Rendiciones') },
    { title: 'Documentos', pageName: 'DocumentosPage', tabComponent: 'tabDocumentos', index: 1, icon: 'document', muestra: this.evaluaItem('Documentos') },
    { title: 'Calendario', pageName: 'CalendarioPage', tabComponent: 'tabCalendario', index: 2, icon: 'calendar', muestra: this.evaluaItem('Calendario') },
    { title: 'Votar', pageName: 'ProyectosPage', tabComponent: 'tabProyectos', index: null, icon: 'megaphone', muestra: this.evaluaItem('Votar') },
    { title: 'Mis Solicitudes', pageName: 'MisSolicitudesPage', tabComponent: 'tabSolicitudes', index: 3, icon: 'chatbubbles', muestra: this.evaluaItem('Solicitudes') }
    //{ title: 'Solicitudes', pageName: 'MisSolicitudesPage', tabComponent: 'null', index: -1, icon: 'chatbubbles', muestra: this.evaluaItem('Solicitudes') }
  ];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public acceso: AuthService,
    public platform: Platform,
    public menuCtrl: MenuController,
    private app: App
    ) {
      //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
  }
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      if (page.pageName == 'UsuariosPage'){
        this.nav.setRoot(UsuariosPage);
      }
      else if (page.pageName == 'RendicionPage'){
        this.nav.setRoot(RendicionPage);
      }
      else if (page.pageName == 'ProyectosPage'){
        this.nav.setRoot(ProyectosPage);
      }

      else{
        this.closeMenu();
        //this.nav.setRoot(ClientePage, params);
        this.nav.push(ClientePage, params);
        this.nav.getActiveChildNav().select(page.index);

      }
      
    }
    this.closeMenu();
  }
  openUsuarios(){
    this.nav.setRoot(UsuariosPage);
  }
  evaluaItem(item){
    var retorno = false;
    if (item == 'Novedades'){
      if (this.permisos.VerMuro == 1){
        retorno = true;
      }
    }
    if (item == 'Usuarios'){
      if (this.permisos.VerUsuario == 1){
        retorno = true;
      }
    }
    if (item == 'Rendiciones'){
      if (this.permisos.VerRendicion == 1){
        retorno = true;
      }
    }
    if (item == 'Documentos'){
      if (this.permisos.VerDocumento == 1){
        retorno = true;
      }
    }
    if (item == 'Calendario'){
      if (this.permisos.VerCalendario == 1){
        retorno = true;
      }
    }
    if (item == 'Votar'){
      if (this.permisos.VerProyecto == 1){
        retorno = true;
      }
    }
    if (item == 'Solicitudes'){
      if (this.permisos.VerMroSolicitud == 1){
        retorno = true;
      }
    }
    return retorno;
  }
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  isActiveColor(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 /*
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'blue';
      }
      return;
    }
 */
    // Fallback needed when there is no active childnav (tabs not active)
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root.name === page.pageName) {
        return '#488aff';
      }
      return;
    }
    return;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  cerrarSesion(){
    this.logout();
  }
  salir(){
    this.platform.exitApp();
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  closeMenu(){
    this.menuCtrl.close();
  }

}
