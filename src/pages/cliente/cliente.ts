import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { NovedadesPage } from '../novedades/novedades';
import { UsuariosPage } from '../usuarios/usuarios';
import { RendicionPage } from '../rendicion/rendicion';
import { SolicitudesPage } from '../solicitudes/solicitudes';
import { DocumentosPage } from '../documentos/documentos';
import { CalendarioPage } from '../calendario/calendario';
import { ProyectosPage } from '../proyectos/proyectos';
import { InicioService } from '../../app/services/InicioService';


@Component({
    selector: 'page-cliente',
    templateUrl: 'cliente.html',
  })
  export class ClientePage {
    tab1Root = NovedadesPage;
    tab2Root = UsuariosPage;
    tab3Root = RendicionPage;
    tab4Root = DocumentosPage;
    tab5Root = CalendarioPage;
    tab6Root = ProyectosPage;
      /*
    
    tab2Root = PacksPage;
    tab3Root = ProfesoresPage;
    tab4Root = PlanillaProfesoresPage;
  */
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad ClientePage');
    }
  
  }