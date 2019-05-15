import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
//globales
import { GlobalService } from '../app/services/GlobalService';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM, public localNotifications: LocalNotifications, public global: GlobalService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.fcm.getToken().then(
        (token: string) => {
          console.log('token dispositivo: ' + token);
          //hay que guardar o actualizar el token del dispositivo
          //borramos el guardado desde aca
          /*
          this.global.putToken(token).subscribe(data=> {
            var ret = data.json();
            //aca hacer algo con la data?
            console.log(token);
          },
          error => {
            console.log(error);
          }
        )
        */
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
          if(data.wasTapped){
            console.log('Estamos en segundo plano ' + JSON.stringify(data));
          }
          else{
            //cuando la aplicacion se encuentra en primer plano
            console.log('Estamos en primer plano ' + data);
            //aca crear una notificacion
            var titulo = "";
            var texto = "";
            if (data){
              titulo = data.titulo;
              texto = data.body;
            }

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

      this.localNotifications.on("click").subscribe(resultado=>{
        console.log(JSON.stringify(resultado));
      });

    });
  }
}

