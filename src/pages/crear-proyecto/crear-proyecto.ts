import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import {AppSettings } from '../../app/AppSettings';

@Component({
  selector: 'page-crear-proyecto',
  templateUrl: 'crear-proyecto.html',
})
export class CrearProyectoPage {
proyecto: any;
esNuevo:any;
idProyecto: any;
frmFecha: any;
frmNombre: any;
frmObjetivo: any;
frmMonto: any;
frmBeneficios: any;
frmDescripcion: any;
frmInicio= moment().format("YYYY-MM-DD");
frmTermino = moment().format("YYYY-MM-DD");
frmQuorum: any;
//titulo
frmTitulo: any;
archivosProyecto: any;

//archivos
fileUno: File;
fileUnoName: any;
fileDos: File;
fileDosName: any;
fileTres: File;
fileTresName: any;

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


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController) {
      moment.locale('es');
      //capturamos el elemento
      this.frmTitulo = 'Crear Proyecto';
      this.proyecto = this.navParams.get('proyecto');
      if (this.proyecto){
        if (this.proyecto.Id > 0)
        {
          this.frmTitulo = 'Editar Proyecto';
          this.esNuevo = false;
          this.idProyecto = this.proyecto.Id;
          this.frmFecha = this.proyecto.OtroUno;
          this.frmNombre = this.proyecto.NombreUsuario;
          this.frmObjetivo = this.proyecto.NombreCompleto;
          this.frmMonto = this.proyecto.OtroCuatro;
          this.frmBeneficios = this.proyecto.Rol;
          this.frmDescripcion = this.proyecto.OtroSeis;
          var inicio = this.proyecto.OtroUno;
          var termino = this.proyecto.OtroDos;
          this.frmInicio = this.invertirFecha(inicio);
          this.frmTermino = this.invertirFecha(termino);
          this.frmQuorum = this.proyecto.QuorumMinimo;
          //ahora cargamos los proyectos
          
            this.archivosProyecto = [];

            let loader = this.loading.create({
              content: 'Cargando...',
            });
            loader.present().then(() => {
              this.global.getArchivosProyectos(this.proyecto.Id).subscribe(
                data => {
                  var datos = data.json();
                  var urlPrevia = AppSettings.URL_RAIZ + 'RepositorioProyecto/';
                  //this.archivosProyecto = datos.proposals;
                  datos.proposals.forEach(file => {
                    file.UrlDescarga = urlPrevia + file.NombreCompleto;
                    this.archivosProyecto.push(file);
                  });
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
        else{
          this.esNuevo = true;
          this.idProyecto = 0;
          this.frmFecha = moment().format("DD-MM-YYYY");
          var fecha = moment();
          var inic = fecha.format("YYYY-MM-DD");
          var term = fecha.add(1, 'd').format("YYYY-MM-DD");
          this.frmInicio = inic;
          this.frmTermino = term;
          this.frmQuorum = "0";
        }
  
      }
      else {
        this.esNuevo = true;
        this.idProyecto = 0;
        this.frmFecha = moment().format("DD-MM-YYYY");
        var fecha = moment();
        var inic = fecha.format("YYYY-MM-DD");
        var term = fecha.add(1, 'd').format("YYYY-MM-DD");
        this.frmInicio = inic;
        this.frmTermino = term;
        this.frmQuorum = "0";
      }
  }
  invertirFecha(fechaStr){
    //viene el formato DD-MM-YYYY y debemos devolver YYYY-MM-DD
    var retorno = fechaStr;

    var partes = fechaStr.split('-');
    retorno = partes[2] + '-' + partes[1] + '-' + partes[0];

    return retorno;
  }

  ionViewDidLoad() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    console.log('ionViewDidLoad CrearProyectoPage');
  }

  closeModal(param) {
    this.viewCtrl.dismiss();
  }
  validarFechas(){
    var retorno = true;
    var now = moment();
    var fechaIni = moment(this.frmInicio);
    var fechaTer = moment(this.frmTermino);

    //la primera validación fecha inicio mayor a fecha actual
    if (fechaIni < now){
      let sms = this.presentToast("La fecha de inicio no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha termino menor a la actual
    if (fechaTer < now){
      let sms = this.presentToast("La fecha de término no puede ser menor a la fecha actual");
      retorno = false;
    }
    //fecha inicio mayor a la de termino
    if (fechaTer < fechaIni){
      let sms = this.presentToast("La fecha de inicio no puede ser mayor a la fecha término");
      retorno = false;
    }

    return retorno;

  }

  enviarProyecto(){
    //validar fechas antes


    if (this.frmNombre == '' || this.frmNombre == null || this.frmNombre == undefined) {
      let toast = this.presentToast('El nombre es obligatorio.');
      return;
    }
    if (this.frmObjetivo == '' || this.frmObjetivo == null || this.frmObjetivo == undefined) {
      let toast = this.presentToast('El objetivo es obligatorio.');
      return;
    }
    if (this.frmMonto == '' || this.frmMonto == null || this.frmMonto == undefined || this.frmMonto == 0)  {
      let toast = this.presentToast('El monto es obligatorio.');
      return;
    }
    if (this.frmDescripcion == null || this.frmDescripcion == undefined){
      this.frmDescripcion = '';
    }
    if (this.frmBeneficios == null || this.frmBeneficios == undefined){
      this.frmBeneficios = '';
    }

    if (this.validarFechas()) {
      let loader = this.loading.create({
        content: 'Guardando...',
      });

      loader.present().then(() => {


        if (!this.fileUno) {
          this.fileUnoName = '';
        }
        if (!this.fileDos) {
          this.fileDosName = '';
        }
        if (!this.fileTres) {
          this.fileTresName = '';
        }

        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var usuId = sessionStorage.getItem("USU_ID");
        var inicio = moment(this.frmInicio).format("DD-MM-YYYY");
        var termino = moment(this.frmTermino).format("DD-MM-YYYY");

        var proyecto = {
          Id: this.idProyecto.toString(),
          Beneficios: this.frmBeneficios,
          Costo: this.frmMonto.toString(),
          Descripcion: this.frmDescripcion,
          EsCpas: "false",
          FechaInicio: inicio,
          FechaTermino: termino,
          IdUsuario: usuId.toString(),
          InstId: instId.toString(),
          Nombre: this.frmNombre,
          Objetivo: this.frmObjetivo
        };
        var cantidadArchivos = 0;
        this.global.putProyecto(proyecto).subscribe(
          dataArchivo1 => {

            var datos = dataArchivo1.json();
            //recuperamos el nuevo ID
            var nuevoId = datos.Id;
            if (nuevoId) {
              //ahora procedemos a cargar los archivos
              var files = [];
              //aca hay que mandar a guardar los archivos del proyecto y envolver esto en esos archivos
              if (this.fileUno) {
                files.push(this.fileUno);
              }
              if (this.fileDos) {
                files.push(this.fileDos);
              }
              if (this.fileTres) {
                files.push(this.fileTres);
              }
              if (files.length > 0) {
                files.forEach(arch => {
                  this.global.sendArchivoProyecto(arch, nuevoId.toString()).subscribe(
                    retorno => {
                      cantidadArchivos++;

                    }
                  );
              });
              }
              let sms = this.presentToast('La Rendicion se ha guardado con éxito.');
              this.viewCtrl.dismiss(datos);
            }
          },
          err => {
            console.error(err);
            loader.dismiss();
          },
          () => {
            console.log('Archivo 1 cargado');
            loader.dismiss();
          }
        );


      });
    }

  }

  changeListener($event) : void {

    this.fileUno  = $event.target.files[0];
    this.fileUnoName = this.fileUno.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileDosName){
        if (this.fileDosName == this.fileUnoName){
          //error
          this.fileUno = null;
          this.fileUnoName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      if (this.fileTresName){
        if (this.fileTresName == this.fileUnoName){
          //error
          this.fileUno = null;
          this.fileUnoName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }
      loader.dismiss();
    });
  }

  changeListenerDos($event) : void {

    this.fileDos  = $event.target.files[0];
    this.fileDosName = this.fileDos.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileUnoName){
        if (this.fileUnoName == this.fileDosName){
          //error
          this.fileDos = null;
          this.fileDosName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();
          return;
        }
      }
      if (this.fileTresName){
        if (this.fileTresName == this.fileDosName){
          //error
          this.fileDos = null;
          this.fileDosName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  changeListenerTres($event) : void {

    this.fileTres  = $event.target.files[0];
    this.fileTresName = this.fileTres.name;

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      if (this.fileUnoName){
        if (this.fileUnoName == this.fileTresName){
          //error
          this.fileTres = null;
          this.fileTresName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();
          return;
        }
      }
      if (this.fileDosName){
        if (this.fileDosName == this.fileTresName){
          //error
          this.fileTres = null;
          this.fileTresName = '';
          $event.target.value = null;
          let toast = this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
          loader.dismiss();

          return;
        }
      }

      loader.dismiss();
    });
  }

  openUrl(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
