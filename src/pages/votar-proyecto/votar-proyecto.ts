import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import {AppSettings } from '../../app/AppSettings';
//pruebas de chart
import { Chart } from 'chart.js';

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

  cargarGrafico(datos){
    var options = {
      title: {
        display: true,
        text: 'Votaciones'
      },
      scales: {
        xAxes: [{
          barPercentage: 0.5,
          /*
          barThickness: 6,
          maxBarThickness: 20,
          minBarLength: 2,
          gridLines: {
            offsetGridLines: true
          }
          */
        }]
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };
    var densityData = {
      label: this.labels,
      display: false,
      backgroundColor:['#488aff', '#f53d3d'],
      data: this.datosLabels
    };
    this.chart = new Chart('realtime', {
      type: 'bar',
      data: {
        labels: this.labels,
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
