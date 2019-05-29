import { Component } from '@angular/core';
import {NavController, Toast, ModalController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../app/services/AuthService';
import {HomePage} from "../home/home";
import {InicioPage} from "../inicio/inicio";
import {ClientePage} from "../cliente/cliente";
import {MenuPage} from "../menu/menu";
import {RecuperarClavePage} from "../recuperar-clave/recuperar-clave";


//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { UsuariosPage } from '../usuarios/usuarios';
//import {MatIconModule} from '@angular/material/icon';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  usuario: string;
  password: string;
  isLogged: boolean;
  checkRecordar: boolean = false;

  constructor(
    private nav: NavController,
    private auth: AuthService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {

    var userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
    if (userInfo && userInfo.usuario != '' && userInfo.password != '') {
      if (localStorage.getItem("AUTOLOGIN") && localStorage.getItem("AUTOLOGIN") != 'undefined'){
        var auto = JSON.parse(localStorage.getItem("AUTOLOGIN"));
        this.checkRecordar = auto;
        
        if (auto){
          //this.autologin(userInfo.usuario, userInfo.password);
          this.usuario = userInfo.usuario;
          this.password = userInfo.password;
        }
        else{
          this.usuario = '';
          this.password = '';
        }
      }
    }


  }
  guardarPreferencia(check){
    localStorage.setItem('AUTOLOGIN', check);
    if (check == false){
      this.usuario = '';
      this.password = '';
    }
  }
  
  
  presentToast = function(mensaje, posicion, duracion) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: duracion,
      position: posicion
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  Signup(){
    //validaciones
    if (!this.usuario){
      let mi = this.presentToast('Nombre de usuario requerido', 'bottom', 4000);
      return;
    }
    if (!this.password){
      let mi = this.presentToast('Password requerida', 'bottom', 4000);
      return;
    }
    let f = { usuario: this.usuario, password: this.password };
    this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        er => {
          //console.log(error)
          let mi = this.presentToast('Usuario no exite', 'bottom', 4000);

        },
        () => {
          if (this.isLogged){
            //this.nav.push(InicioPage)
            //this.nav.push(ClientePage)
            this.nav.setRoot(MenuPage)
              .then(data => console.log(data),
              error => {
                //console.log(error)
                let mi = this.presentToast(error, 'bottom', 4000);
              }
              );
          } else {
            //incorrecto
            console.log('Acceso denegado');
            let mi = this.presentToast('Usuario no exite', 'bottom', 4000);
          }

        }
      )

  }
  autologin(usuario, password){
    let f = { usuario: usuario, password: password };
    this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        er => {
          //console.log(error)
          let mi = this.presentToast('Usuario no exite', 'bottom', 4000);

        },
        () => {
          if (this.isLogged){
            //this.nav.push(InicioPage)
            //this.nav.push(ClientePage)
            this.nav.setRoot(MenuPage)
              .then(data => console.log(data),
              error => {
                //console.log(error)
                let mi = this.presentToast(error, 'bottom', 4000);
              }
              );
          } else {
            //incorrecto
            console.log('Acceso denegado');
            let mi = this.presentToast('Usuario no exite', 'bottom', 4000);
          }

        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  abrirRecuperar(){
    let modal = this.modalCtrl.create(RecuperarClavePage, { item: null });
    modal.present();
  }

}
