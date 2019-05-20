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

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = ClientePage;
  institucionLogueado = sessionStorage.getItem("INSTITUCION_NOMBRE");
  nombreLogueado = sessionStorage.getItem("PERSONA_NOMBRE");
  rolLogueado = sessionStorage.getItem("ROL_NOMBRE");

  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Novedades', pageName: 'NovedadesPage', tabComponent: 'tabNovedades', index: 0, icon: 'chatbubbles' },
    { title: 'Usuarios', pageName: 'UsuariosPage', tabComponent: 'tabUsuarios', index: 1, icon: 'people' },
    { title: 'Rendiciones', pageName: 'RendicionPage', tabComponent: 'tabRendiciones', index: 2, icon: 'logo-usd' },
    { title: 'Documentos', pageName: 'DocumentosPage', tabComponent: 'tabDocumentos', index: 3, icon: 'document' },
    { title: 'Calendario', pageName: 'CalendarioPage', tabComponent: 'tabCalendario', index: 4, icon: 'calendar' },
    { title: 'Votar', pageName: 'TabTricelPage', tabComponent: 'tabProyectos', index: 5, icon: 'megaphone' },
    { title: 'Solicitudes', pageName: 'MisSolicitudesPage', tabComponent: 'tabSolicitudes', index: 6, icon: 'chatbubbles' }
  ];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public acceso: AuthService,
    public platform: Platform,
    public menuCtrl: MenuController,
    private app: App
    ) {
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
      this.nav.setRoot(page.pageName, params);
    }
    this.closeMenu();
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
