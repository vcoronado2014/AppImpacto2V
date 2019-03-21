import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ModalController } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
import { CrearRendicionPage } from '../crear-rendicion/crear-rendicion';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
//prueba
//import { Chart } from '../../node_modules/chart.js';
import { Chart } from 'chart.js';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rendicion',
  templateUrl: 'rendicion.html',
})
export class RendicionPage {
  @ViewChild('pieChart') pieChart;
  
//usuariosArr = [];
rendicionesArr = [];
esAdministrador = false;
//para filtrar
nombreFiltrar;
filtrosInstitucion = [];
filtrados = [];
rendicionesOriginal = [];
cantidadRendiciones = 0;

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public modalCtrl: ModalController,
    public acceso: AuthService
  ) {


  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    if (rolId == '1'){
      this.esAdministrador = true;
      this.nombreFiltrar = 'Todos';
    }
    //this.cargarInstituciones();
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
    /*
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

  });
  */
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
  cambioFiltros(e){
    //console.log(e.target.value);
    if (e.NombreCompleto && e.NombreCompleto != 'Todos'){
      this.rendicionesArr = this.cargarFiltros(this.rendicionesOriginal, e.NombreCompleto);
    }
    else {
      //mostramos todo
      this.rendicionesArr = this.rendicionesOriginal;

    }
  }
  cargarFiltros(arreglo, elemento){
    this.filtrados = [];
    arreglo.forEach(element => {
      if (element.OtroUno == elemento){
        this.filtrados.push(element);
      }
      
    });

    return this.filtrados;
  }
  cargar() {
    this.rendicionesArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postRendiciones(instId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.rendicionesArr = datos.proposals;
          this.rendicionesOriginal = this.rendicionesArr;
          this.cantidadRendiciones = this.rendicionesArr.length;
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
  //abrir la pagina de creaciòn de rendicion
  presentModal(item) {

    let modal = this.modalCtrl.create(CrearRendicionPage, { rendicion: item });
    modal.present();
  }

  /*
  cargarInstituciones() {
    this.filtrosInstitucion = [];

    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postInstituciones(rolId, instId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.institucionesArr = datos.proposals;
          
          var filtroTodos = {
            NombreCompleto: 'Todos'
          };

          this.filtrosInstitucion = this.institucionesArr;
          this.filtrosInstitucion.splice(0, 0, filtroTodos);
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get solicitudes completed');
          loader.dismiss();
        }
      );
      
    });
  }
  */
}
