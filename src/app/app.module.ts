import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//agregado ahora para ver el album de fotos en las novedades
import { PhotoViewer } from '@ionic-native/photo-viewer';
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
import { DocumentosPage } from '../pages/documentos/documentos';
import { CalendarioPage } from '../pages/calendario/calendario';
import { ProyectosPage } from '../pages/proyectos/proyectos';
import { CrearRendicionPage } from '../pages/crear-rendicion/crear-rendicion';

import { AuthService } from '../app/services/AuthService';
import { GlobalService } from '../app/services/GlobalService';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCalendarModule } from 'ionic2-calendar';
//pipes
import { MomentPipe } from '../pipes/MomentPipe';



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
    DocumentosPage,
    CalendarioPage,
    ProyectosPage,
    CrearRendicionPage,
    MomentPipe,
    TextAvatarDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgCalendarModule,
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
    DocumentosPage,
    CalendarioPage,
    ProyectosPage,
    CrearRendicionPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GlobalService,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
