import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { NovedadesPage } from '../pages/novedades/novedades';
import {InicioPage} from "../pages/inicio/inicio";
import { DetailNovedadPage } from '../pages/detail-novedad/detail-novedad';
import { VisorImagenPage } from '../pages/visor-imagen/visor-imagen';
import { CrearNovedadPage } from '../pages/crear-novedad/crear-novedad';
import { EditarNovedadPage } from '../pages/editar-novedad/editar-novedad';

import { AuthService } from '../app/services/AuthService';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SolicitudesPage,
    NovedadesPage,
    DetailNovedadPage,
    VisorImagenPage,
    CrearNovedadPage,
    EditarNovedadPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SolicitudesPage,
    NovedadesPage,
    DetailNovedadPage,
    VisorImagenPage,
    CrearNovedadPage,
    EditarNovedadPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {
      provide: HttpBackend, 
      useClass: NativeHttpFallback, 
      deps: [Platform, NativeHttpBackend, HttpXhrBackend]
    }
  ]
})
export class AppModule {}
