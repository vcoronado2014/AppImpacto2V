import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform, MenuController } from 'ionic-angular';

import { NovedadesPage } from '../novedades/novedades';
import { TabTricelPage } from '../tab-tricel/tab-tricel';
import { UsuariosPage } from '../usuarios/usuarios';
import { RendicionPage } from '../rendicion/rendicion';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
//import { CalendarioFullPage } from '../calendario-full/calendario-full';
import { ProyectosPage } from '../proyectos/proyectos';
import { InicioService } from '../../app/services/InicioService';
import { MisSolicitudesPage } from '../mis-solicitudes/mis-solicitudes';
//notificaciones cuando estoy en la pagina de inicio
import { FCM, NotificationData } from '@ionic-native/fcm';



@Component({
    selector: 'page-cliente',
    templateUrl: 'cliente.html',
  })
  export class ClientePage {
    permisos: any;
    tab1Root: any;
    //tab1Root1: any;
    tab2Root: any;
    tab3Root: any;
    tab4Root: any;
    tab5Root: any;
    //tab5Root = CalendarioFullPage;
    tab6Root: any;
    tab7Root: any;
    //notificaciones, para pruebas
    tabBadgeNovedades = "";
    tabStyleNovedades = "";
    tabBadgeUsuarios = "";
    tabStyleUsuarios = "";
    tabBadgeRendiciones = "";
    tabStyleRendiciones = "";
    tabBadgeDocumentos = "";
    tabStyleDocumentos = "";
    tabBadgeEventos = "";
    tabStyleEventos = "";
    tabBadgeVotaciones = "";
    tabStyleVotaciones = "";
    tabBadgeSolicitudes = "";
    tabStyleSolicitudes = "";

    myIndex: number;



    constructor(public navCtrl: NavController, public navParams: NavParams, private fcm: FCM, platform: Platform, public menuCtrl: MenuController) {
      platform.ready().then(() => {
        this.myIndex = navParams.data.tabIndex || 0;
        this.clearSession();
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.tab1Root = NovedadesPage;
        //this.tab1Root1 = NovedadesPage;
        this.tab2Root = UsuariosPage;
        this.tab3Root = RendicionPage;
        this.tab4Root = DocumentosPage;
        this.tab5Root = CalendarioPage;
        //tab5Root = CalendarioFullPage;
        this.tab6Root = ProyectosPage;
        this.tab7Root = MisSolicitudesPage;

        //manejo de las notificaciones cuando esta abierta la pagina principal
        this.fcm.onNotification().subscribe(
          data => {
            //solo debe aplicar para primer plano
            //da lo mismo si es primer o segundo plano

              //volvemos a cero las variables de session
              this.clearSession();
              this.setearVariables(data.title);


          }
        );

      });


    }
    ionViewDidLoad() {
      
      console.log('ionViewDidLoad ClientePage');
    }
    ionViewWillEnter() {
      //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));

    }
    clearSession(){
      sessionStorage.setItem('TIENE_NOVEDADES', '0');
      sessionStorage.setItem('TIENE_USUARIOS', '0');
      sessionStorage.setItem('TIENE_RENDICIONES', '0');
      sessionStorage.setItem('TIENE_DOCUMENTOS', '0');
      sessionStorage.setItem('TIENE_EVENTOS', '0');
      sessionStorage.setItem('TIENE_VOTACIONES', '0');
      sessionStorage.setItem('TIENE_SOLICITUDES', '0');
    }
      //vamos a evaluar los titulos
  setearVariables(titulo) {
    switch (titulo) {
      case 'Calendario':
        sessionStorage.setItem('TIENE_EVENTOS', '1');
        this.tabBadgeEventos = "N";
        this.tabStyleEventos = "danger";
        break;
      case 'Documento':
        sessionStorage.setItem('TIENE_DOCUMENTOS', '1');
        this.tabBadgeDocumentos = "N";
        this.tabStyleDocumentos = "danger";
        break;
      case 'Rendición':
        sessionStorage.setItem('TIENE_RENDICIONES', '1');
        this.tabBadgeRendiciones = "N";
        this.tabStyleRendiciones = "danger";
        break;
      case 'Muro':
        sessionStorage.setItem('TIENE_NOVEDADES', '1');
        this.tabBadgeNovedades = "N";
        this.tabStyleNovedades = "danger";
        break;
      case 'Proyecto':
        sessionStorage.setItem('TIENE_VOTACIONES', '1');
        this.tabBadgeVotaciones = "N";
        this.tabStyleVotaciones = "danger";
        break;
      case 'Tricel':
        sessionStorage.setItem('TIENE_VOTACIONES', '1');
        this.tabBadgeVotaciones = "N";
        this.tabStyleVotaciones = "danger";
        break;
    }

  }
  comprobarVariables(){
    if (sessionStorage.getItem('TIENE_EVENTOS') == '1'){
      this.tabBadgeEventos = "N";
      this.tabStyleEventos = "danger";
    }
    else{
      this.tabBadgeEventos = "";
      this.tabStyleEventos = "";
    }

    if (sessionStorage.getItem('TIENE_DOCUMENTOS') == '1'){
      this.tabBadgeDocumentos = "N";
      this.tabStyleDocumentos = "danger";
    }
    else{
      this.tabBadgeDocumentos = "";
      this.tabStyleDocumentos = "";
    }

    if (sessionStorage.getItem('TIENE_RENDICIONES') == '1'){
      this.tabBadgeRendiciones = "N";
      this.tabStyleRendiciones = "danger";
    }
    else{
      this.tabBadgeRendiciones = "";
      this.tabStyleRendiciones = "";
    }

    if (sessionStorage.getItem('TIENE_VOTACIONES') == '1'){
      this.tabBadgeVotaciones = "N";
      this.tabStyleVotaciones = "danger";
    }
    else{
      this.tabBadgeVotaciones = "";
      this.tabStyleVotaciones = "";
    }

    if (sessionStorage.getItem('TIENE_NOVEDADES') == '1'){
      this.tabBadgeNovedades = "N";
      this.tabStyleNovedades = "danger";
    }
    else{
      this.tabBadgeNovedades = "";
      this.tabStyleNovedades = "";
    }
  }

  ngAfterViewInit() {
    
    setInterval(() => {
      console.log('comprobar'); // Now the "this" still references the component
      this.comprobarVariables();
    }, 30000);
    
  } 
    
  
  }