import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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



@Component({
    selector: 'page-cliente',
    templateUrl: 'cliente.html',
  })
  export class ClientePage {
    nuevoMensaje = 1;
    permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    tab1Root = NovedadesPage;
    tab2Root = UsuariosPage;
    tab3Root = RendicionPage;
    tab4Root = DocumentosPage;
    tab5Root = CalendarioPage;
    //tab5Root = CalendarioFullPage;
    tab6Root = TabTricelPage;
    tab7Root = MisSolicitudesPage;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
      //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));

    }
    ionViewDidLoad() {
      
      console.log('ionViewDidLoad ClientePage');
    }
    ionViewWillEnter() {
      //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));

    }
  
  }