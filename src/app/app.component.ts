import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
//globales
import { GlobalService } from '../app/services/GlobalService';
import { AuthService } from '../app/services/AuthService';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from "../pages/menu/menu";
import { rootRenderNodes } from '@angular/core/src/view';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  ret: any = {
    wasTapped: false,
    Datos: {},
    title: '',
    body: ''
  };
  segundoPlano = false;
  isLogged: boolean;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private fcm: FCM, 
    public localNotifications: LocalNotifications, 
    public global: GlobalService,
    private auth: AuthService
    ) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.fcm.getToken().then(
        (token: string) => {
          console.log('token dispositivo: ' + token);
        }
      ).catch(
        error => {
          console.log(error);
        }
      );

      this.fcm.onTokenRefresh().subscribe(
        (token: string) => {
          console.log('token dispositivo refresh: ' + token);
        }
      );

      this.fcm.onNotification().subscribe(
        data => {
          sessionStorage.setItem('TIENE_NOVEVADES', '0');
          sessionStorage.setItem('TIENE_USUARIOS', '0');
          sessionStorage.setItem('TIENE_RENDICIONES', '0');
          sessionStorage.setItem('TIENE_DOCUMENTOS', '0');
          sessionStorage.setItem('TIENE_EVENTOS', '0');
          sessionStorage.setItem('TIENE_VOTACIONES', '0');
          sessionStorage.setItem('TIENE_SOLICITUDES', '0');
          var titulo = data.title;
          var texto = data.body;
          var datosJson = JSON.parse(data.Datos);
          this.setearVariables(titulo);
          console.log('title ' + data.title);
          console.log('body ' + data.body);
          console.log('datos ' + JSON.parse(data.Datos));

          if(data.wasTapped){
            console.log('Estamos en segundo plano ' + data);
            this.segundoPlano = true;
          }
          else{
            //cuando la aplicacion se encuentra en primer plano
            console.log('Estamos en primer plano ' + data);
            //SETEAR LAS VARIABLES DE NOTIFICACIONES

            this.localNotifications.schedule({
              id: Math.floor((Math.random() * 100)+1),
              title: titulo,
              text: texto,
              data: {
                nombre: "Victor",
                apellido: "Coronado"
              }
            });

          }
        },
        error => {
          console.log(error);
        }
      );

      this.localNotifications.on("click").subscribe(resultado => {
        console.log(JSON.stringify(resultado));
        if (this.segundoPlano) {
          //aca habría que autentificar y enviar directamente a la pantalla de inicio
          var userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
          if (userInfo && userInfo.usuario != '' && userInfo.password != '') {
            //generar la autentificacion y enviarlo directo a la pagina de inicio
            //ahi deberían estar ls notificaciones
            let f = { usuario: userInfo.usuario, password: userInfo.password };
            this.auth.login(f)
              .subscribe(
                rs => this.isLogged = rs,
                er => {
                  console.log(er)
        
                },
                () => {
                  if (this.isLogged){
                    //this.nav.push(InicioPage)
                    //this.nav.push(ClientePage)
                    this.rootPage = MenuPage;
                   
                  } else {
                    //incorrecto
                    console.log('Acceso denegado');
                  
                  }
        
                }
              )

          }
        }

      });


    });
  }
  //vamos a evaluar los titulos
  setearVariables(titulo) {
    switch (titulo) {
      case 'Calendario':
        sessionStorage.setItem('TIENE_EVENTOS', '1');
        break;
      case 'Documento':
        sessionStorage.setItem('TIENE_DOCUMENTOS', '1');
        break;
      case 'Rendición':
        sessionStorage.setItem('TIENE_RENDICIONES', '1');
        break;
      case 'Muro':
        sessionStorage.setItem('TIENE_NOVEDADES', '1');
        break;
      case 'Proyecto':
        sessionStorage.setItem('TIENE_VOTACIONES', '1');
        break;
      case 'Tricel':
        sessionStorage.setItem('TIENE_VOTACIONES', '1');
        break;
    }

  }
}