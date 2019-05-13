import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM, NotificationData } from '@ionic-native/fcm';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM) {
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
          if(data.wasTapped){
            console.log('Estamos en segundo plano ' + JSON.stringify(data));
          }
          else{
            //cuando la aplicacion se encuentra en primer plano
            console.log('Estamos en primer plano ' + JSON.stringify(data));
          }
        },
        error => {
          console.log(error);
        }
      );

    });
  }
}

