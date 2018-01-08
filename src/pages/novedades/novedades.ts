import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { DetailNovedadPage } from '../detail-novedad/detail-novedad';

import { AuthService } from '../../app/services/AuthService';
import { InicioService } from '../../app/services/InicioService';

/**
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html',
  providers: [AuthService, InicioService]
})

export class NovedadesPage {

  solicitudes: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loading: LoadingController,
              public acceso: AuthService,
              public modalCtrl: ModalController,
              public ini: InicioService
  ) {
    let loader = this.loading.create({
      content: 'Cargando...',
    });

    this.solicitudes=[];

    loader.present().then(() => {
      //llamadas de negocio
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");

      this.ini.getMuro(instId, usuId).subscribe(
        data => {
          //datos
          this.solicitudes = data.json();
          if (this.solicitudes){
            for(var s in this.solicitudes){
              //hace 3 meses xxx dias
              var fechaStr = this.solicitudes[s].FechaString.split(' ');
              var mostrar = fechaStr[0] + ' ' + fechaStr[1] + ' ' + fechaStr[2];
              this.solicitudes[s].FechaString = mostrar;

              this.solicitudes[s].UrlImagen = 'trash';
              if (this.solicitudes[s].RespuestaMuro){
                for (var t in this.solicitudes[s].RespuestaMuro){
                  var fechaStrC = this.solicitudes[s].RespuestaMuro[t].FechaString.split(' ');
                  var mostrarC = fechaStrC[0] + ' ' + fechaStrC[1] + ' ' + fechaStrC[2];
                  this.solicitudes[s].RespuestaMuro[t].FechaString = mostrarC;
                  this.solicitudes[s].RespuestaMuro[t].UrlImagen = 'trash';
                }
              }

            }
          }
        },
        err =>{
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get completed');
          //terminamos;
          loader.dismiss();
        }
      );

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovedadesPage');
  }
  logout(){
    this.acceso.logout();
    this.navCtrl.setRoot(LoginPage);
  }
  //modal para agregar un comentario
  presentModal(item) {
    
    let modal = this.modalCtrl.create(DetailNovedadPage, { novedad: item });
    modal.present();
  }

}
