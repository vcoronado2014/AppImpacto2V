import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { NovedadesPage } from '../novedades/novedades';
import { TabTricelPage } from '../tab-tricel/tab-tricel';
import { UsuariosPage } from '../usuarios/usuarios';
import { RendicionPage } from '../rendicion/rendicion';
import { SolicitudesPage } from '../solicitudes/solicitudes';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
//import { CalendarioFullPage } from '../calendario-full/calendario-full';
import { ProyectosPage } from '../proyectos/proyectos';
import { InicioService } from '../../app/services/InicioService';



@Component({
    selector: 'page-cliente',
    templateUrl: 'cliente.html',
  })
  export class ClientePage {
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
    tab1Root = NovedadesPage;
    tab2Root = UsuariosPage;
    tab3Root = RendicionPage;
    tab4Root = DocumentosPage;
    tab5Root = CalendarioPage;
    //tab5Root = CalendarioFullPage;
    tab6Root = TabTricelPage;


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