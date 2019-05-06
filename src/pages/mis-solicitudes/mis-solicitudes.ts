import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App } from 'ionic-angular';
//import { } from 'ionic-nati'

import { LoginPage } from '../login/login';
//paginas
import { ComentariosSolicitudesPage } from '../comentarios-solicitudes/comentarios-solicitudes';

import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';

@Component({
  selector: 'page-mis-solicitudes',
  templateUrl: 'mis-solicitudes.html',
})
export class MisSolicitudesPage {
  solicitudes: any;
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
    public acceso: AuthService,
    public global: GlobalService,
    public modalCtrl: ModalController,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }
  cargar(){
    let loader = this.loading.create({
      content: 'Cargando...',
    });

    this.solicitudes=[];


    loader.present().then(() => {
      //llamadas de negocio
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");

      this.global.postSolMuro(usuId, instId).subscribe(
        data => {
          //datos
          this.solicitudes = data.json();
          if (this.solicitudes){
            
            this.solicitudes.forEach(sol => {
              if (sol.RespuestaMuro && sol.RespuestaMuro.length > 0){
                sol.RespuestaMuro.forEach(resp => {
                  if (usuId == resp.UsuId){
                    resp.clase = 'respuesta item item-block item-md';
                  }
                  else {
                    resp.clase = 'respuestaOtro item item-block item-md';
                  }
                });
              }
              //debemos buscar correctamente al usuario de la solicitud ya que viene un nombre distinto
              this.global.postObtenerUsuario(sol.UsuId).subscribe(
                dataUsu => {
                  //lo quitamos para que no sea tan grande el elemento
                  sol.UsuarioFuncional = dataUsu.json();
                  //sobrescribimos el nombre usuario
                  sol.NombreUsuario = sol.UsuarioFuncional.Persona.Nombres + ' ' + sol.UsuarioFuncional.Persona.ApellidoPaterno + ' ' + sol.UsuarioFuncional.Persona.ApellidoMaterno;
                }
              );
            });
            console.log(this.solicitudes);
          }
        },
        err =>{
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('post completed solicitudes');
          //terminamos;
          loader.dismiss();
        }
      );

    });
  }
  presentModal(item) {

    let modal = this.modalCtrl.create(ComentariosSolicitudesPage, { solicitud: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }
  ionViewWillEnter() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MisSolicitudesPage');
  }

  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }

}
