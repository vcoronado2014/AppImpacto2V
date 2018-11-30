import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {
solicitudesArr = [];
  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public acceso: AuthService
  ) {


  }
  ionViewWillEnter() {
    this.cargarSolicitudes();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  cargarSolicitudes() {
    var instId = sessionStorage.getItem("INST_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postSolicitudes(instId).subscribe(
        data => {
          this.solicitudesArr = data.json();
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
}
