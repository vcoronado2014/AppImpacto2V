import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import {AppSettings } from '../../app/AppSettings';
//pruebas de chart
import { Chart } from 'chart.js';
import { ProyectosPage } from '../proyectos/proyectos';

@Component({
  selector: 'page-votar-proyecto',
  templateUrl: 'votar-proyecto.html',
})
export class VotarProyectoPage {


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
  proyecto: any;
  esNuevo: any;
  idProyecto: any;
  frmFecha: any;
  archivosProyecto: any;
  graficoProyecto: any;
  entidadVotaciones = { EtiquetaSi: 'Si', EtiquetaNo: 'No', ValorSi: 0, ValorNo: 0 };
  labels: any;
  datosLabels: any;
  cantidadVotaciones = 0;
  tituloInformativo = '';
  public chart: any = null;
  //grafico
  @ViewChild('pieChart') barChart;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController
  ) {

    moment.locale('es');
    this.proyecto = this.navParams.get('proyecto');
    //this.entidadVotaciones: { EtiquetaSi: 'Si', EtiquetaNo: 'No', ValorSi: 0, ValorNo: 0 };
    if (this.proyecto){
      if (this.proyecto.Id > 0)
      {
        this.labels = [];
        this.datosLabels = [];
        this.esNuevo = false;
        this.idProyecto = this.proyecto.Id;
        this.frmFecha = this.proyecto.OtroUno;

        var inicio = this.proyecto.OtroUno;
        var termino = this.proyecto.OtroDos;
        this.cantidadVotaciones = parseInt(this.proyecto.OtroOnce);

        var fechaHoy = moment();
        var terminoN = this.transformarFecha(this.proyecto.OtroDos);
        if (fechaHoy <= terminoN){
          if (this.proyecto.HaVotado){
            this.tituloInformativo = this.proyecto.OtroNueve;
          }
          else {
            this.tituloInformativo = "Todavía no votas por el proyecto";
          }
        }
        else {
          if (this.proyecto.HaVotado){
            this.tituloInformativo = this.proyecto.OtroNueve;
          }
          else {
            this.tituloInformativo = "Ya no puedes votar por el proyecto";
          }
        }

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
                //ahora hacemos la llamada para traer las votaciones
                this.graficoProyecto = [];
                this.global.postGraficos(this.proyecto.Id, 'PROYECTOS').subscribe(
                  dataGr => {
                    this.graficoProyecto = dataGr.json();
                    if (this.graficoProyecto && this.graficoProyecto.length == 2){
                      this.graficoProyecto.forEach(grafico => {
                        if (grafico.label == 'Sí'){
                          this.entidadVotaciones.EtiquetaSi = grafico.label;
                          this.entidadVotaciones.ValorSi = grafico.value;
                          this.labels.push(grafico.label);
                          this.datosLabels.push(grafico.value);
                        }
                        else {
                          this.entidadVotaciones.EtiquetaNo = grafico.label;
                          this.entidadVotaciones.ValorNo = grafico.label;
                          this.labels.push(grafico.label);
                          this.datosLabels.push(grafico.value);
                        }
                      });
                      this.cargarGrafico(this.graficoProyecto);
                    }
                  },
                  err => {
                    console.error(err);
                  },
                  () => {
                    console.log('graficos cargados');
                  }
                );
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
      }

    }
    else {
      this.esNuevo = true;
      this.idProyecto = 0;
      this.frmFecha = moment().format("DD-MM-YYYY");
      var fecha = moment();
      var inic = fecha.format("YYYY-MM-DD");
      var term = fecha.add(1, 'd').format("YYYY-MM-DD");
    }
  }
  presentActionSheetSi() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de Votar SI?',
      buttons: [
        {
          text: 'VOTAR SI',
          role: 'destructive',
          handler: () => {
            this.votarProyecto(1);
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

  presentActionSheetNo() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de Votar NO?',
      buttons: [
        {
          text: 'VOTAR NO',
          role: 'destructive',
          handler: () => {
            this.votarProyecto(0);
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

  votarProyecto(valor){
    //validaciones
    let loader = this.loading.create({
      content: 'Votando...',
    });

    loader.present().then(() => {

      var instId = sessionStorage.getItem("INST_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      var proId = this.idProyecto;


      this.global.votarProyecto(proId, usuId, instId, valor).subscribe(
        data => {

          var datos = data.json();
          //loader.dismiss();
          let sms = this.presentToast('Ha votado con éxito.');
          this.viewCtrl.dismiss(datos);
        },
        err => {
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('votación exitosa');
          loader.dismiss();
        }
      );


    });

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

  cargarGrafico(datos){
    var labels = [];
    var values = [];
    if (datos){
      datos.forEach(element => {
        labels.push(element.label);
        values.push(element.value);
      });
    }

    var options = {
      title: {
        display: false,
        text: 'Votaciones'
      },
      tooltips:{
        enabled: true
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };
    var densityData = {
      label: labels,
      display: false,
      backgroundColor:['#488aff', '#f53d3d'],
      //data: this.datosLabels
      data: values
    };
    this.chart = new Chart('realtime', {
      type: 'pie',
      data: {
        //labels: this.labels,
        //labels: ['Si', 'No'],
        labels: labels,
        datasets: [densityData]
      },
      options: options
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VotarProyectoPage');
    console.log(this.proyecto);

  }

  openUrl(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }

  closeModal(param) {
    this.viewCtrl.dismiss();
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
