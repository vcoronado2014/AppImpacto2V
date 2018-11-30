import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//directivas
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';

import { MyApp } from './app.component';
import { ClientePage } from '../pages/cliente/cliente';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { NovedadesPage } from '../pages/novedades/novedades';
import {InicioPage} from "../pages/inicio/inicio";
import { DetailNovedadPage } from '../pages/detail-novedad/detail-novedad';
import { VisorImagenPage } from '../pages/visor-imagen/visor-imagen';
import { CrearNovedadPage } from '../pages/crear-novedad/crear-novedad';
import { EditarNovedadPage } from '../pages/editar-novedad/editar-novedad';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { RendicionPage } from '../pages/rendicion/rendicion';

import { AuthService } from '../app/services/AuthService';
import { GlobalService } from '../app/services/GlobalService';


@NgModule({
  declarations: [
    MyApp,
    ClientePage,
    HomePage,
    LoginPage,
    SolicitudesPage,
    NovedadesPage,
    DetailNovedadPage,
    VisorImagenPage,
    CrearNovedadPage,
    EditarNovedadPage,
    UsuariosPage,
    InicioPage,
    RendicionPage,
    TextAvatarDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClientePage,
    HomePage,
    LoginPage,
    SolicitudesPage,
    NovedadesPage,
    DetailNovedadPage,
    VisorImagenPage,
    CrearNovedadPage,
    EditarNovedadPage,
    UsuariosPage,
    RendicionPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
