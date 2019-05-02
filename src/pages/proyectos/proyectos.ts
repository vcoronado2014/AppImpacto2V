import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ModalController, ActionSheetController } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
import { CrearProyectoPage } from '../crear-proyecto/crear-proyecto';
import { VotarProyectoPage } from '../votar-proyecto/votar-proyecto';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
import * as moment from 'moment';

/**
 * Generated class for the ProyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-proyectos',
  templateUrl: 'proyectos.html',
})
export class ProyectosPage {
  proyectosArr = [];
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
    public actionSheetCtrl: ActionSheetController
    ) {

  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectosPage');
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

  transformarFecha(fechaStr) {
    //en este formato DD-MM-YYYY
    var retorno = moment();
    var arrFecha = fechaStr.split('-');
    if (arrFecha && arrFecha.length == 3) {
      var mes = parseInt(arrFecha[1]);
      var dia = parseInt(arrFecha[0]);
      var anio = parseInt(arrFecha[2]);
      var mesStr = '';
      var diaStr = '';
      if (mes < 10) {
        mesStr = '0' + mes.toString();
      }
      else {
        mesStr = mes.toString();
      }
      if (dia < 10) {
        diaStr = '0' + dia.toString();
      }
      else {
        diaStr = dia.toString();
      }
      retorno = moment(anio +'-' + mesStr + '-' + diaStr);

      //retorno = diaStr + '-' + mesStr + '-' + anio.toString();
    }

    return retorno;
  }

  cargar() {
    this.proyectosArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postProyectos(instId).subscribe(
        data => {
          var datos = data.json();
          //verificaciones para votar el proyecto
          datos.proposals.forEach(proy => {
            proy.MostrarVotar = false;
            proy.MostrarEditar = false;
            //primero validar si voto o no
            var fechaHoy = moment();
            var termino = this.transformarFecha(proy.OtroDos);
            var inicio = this.transformarFecha(proy.OtroUno);
            if (proy.HaVotado == false){

              //la fecha de inicio
              if (fechaHoy <= termino){
                proy.MostrarVotar = true;
                proy.MostrarInfo = false;
                proy.MostrarEditar = true;
              }
              if (parseInt(proy.OtroOnce) >= 0 && fechaHoy > termino){
                proy.MostrarVotar = false;
                proy.MostrarInfo = true;
              }
            }
            else{
              if (fechaHoy <= termino){
                proy.MostrarEditar = true;
              }
              proy.MostrarVotar = false;
              proy.MostrarInfo = true;
            }
            this.proyectosArr.push(proy);
          });
          //this.proyectosArr = datos.proposals;
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get proyectos completed');
          loader.dismiss();
        }
      );
      
    });
  }

  presentModal(item) {

    let modal = this.modalCtrl.create(CrearProyectoPage, { proyecto: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }
  presentModalVotar(item) {

    let modal = this.modalCtrl.create(VotarProyectoPage, { proyecto: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        this.cargar();
      }
    });
    modal.present();
  }    

  delete(item){
    /*
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
    */
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
