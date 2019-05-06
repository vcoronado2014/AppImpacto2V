import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { CalendarOriginal } from '@ionic-native/calendar';
//import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";
//directivas
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';

import { MyApp } from './app.component';
import { ClientePage } from '../pages/cliente/cliente';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
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
import { CrearDocumentoPage } from '../pages/crear-documento/crear-documento';
import { CrearProyectoPage } from '../pages/crear-proyecto/crear-proyecto';
//nueva
import { TabTricelPage } from '../pages/tab-tricel/tab-tricel';
import { TircelPage } from '../pages/tircel/tircel';
import { CrearEventoPage } from '../pages/crear-evento/crear-evento';
import { VotarProyectoPage } from '../pages/votar-proyecto/votar-proyecto';
import { MisSolicitudesPage } from '../pages/mis-solicitudes/mis-solicitudes';
import { ComentariosSolicitudesPage } from '../pages/comentarios-solicitudes/comentarios-solicitudes';
//import { CalendarioFullPage } from '../pages/calendario-full/calendario-full';
import { Camera } from '@ionic-native/camera';

//servicios
import { AuthService } from '../app/services/AuthService';
import { GlobalService } from '../app/services/GlobalService';
//import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { NgCalendarModule } from 'ionic2-calendar';
//pipes
import { MomentPipe } from '../pipes/MomentPipe';
import { LOCALE_ID } from '@angular/core';
//componentes
import { Autosize } from '../component/autosize';

@NgModule({
  declarations: [
    MyApp,
    ClientePage,
    HomePage,
    LoginPage,
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
    TabTricelPage,
    TircelPage,
    CrearDocumentoPage,
    CrearEventoPage,
    CrearProyectoPage,
    VotarProyectoPage,
    MisSolicitudesPage,
    ComentariosSolicitudesPage,
    MomentPipe,
    Autosize,
    TextAvatarDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClientePage,
    HomePage,
    LoginPage,
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
    TabTricelPage,
    CrearDocumentoPage,
    CrearEventoPage,
    CrearProyectoPage,
    VotarProyectoPage,
    MisSolicitudesPage,
    ComentariosSolicitudesPage,
    TircelPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GlobalService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //CalendarOriginal,
    {provide: LOCALE_ID, useValue: 'es-CL' },
  ]
})
export class AppModule {}
