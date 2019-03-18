import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
//prueba
//import { Chart } from '../../node_modules/chart.js';
import { Chart } from 'chart.js';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {AppSettings } from '../../app/AppSettings';


/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class DocumentosPage {
  documentosArr = [];

  constructor(    
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public acceso: AuthService) {
  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    this.cargar();
    //this.openUrl();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentosPage');
  }
  cargar() {
    this.documentosArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var usuId = sessionStorage.getItem("USU_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postDocumentosUsuario(instId, usuId).subscribe(
        data => {
          var datos = data.json();
          var datosProcesar = datos.proposals;
          var urlPrevia = AppSettings.URL_RAIZ + 'Repositorio/';
          if (datosProcesar && datosProcesar.length > 0){
            //ahora procesamos las rutas para mostrar los archivos
            datosProcesar.forEach(element => {
              element.UrlMostrar = urlPrevia + element.NombreCompleto;
              this.documentosArr.push(element);
            });

          }
          //this.documentosArr = datos.proposals;
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
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  openUrl(url){
    let browser = new InAppBrowser();
    browser.create(url, '_blank');
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }

}
