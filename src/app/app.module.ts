import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
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
import { CrearSolicitudPage } from '../pages/crear-solicitud/crear-solicitud';
import { MenuPage } from '../pages/menu/menu';
//import { CalendarioFullPage } from '../pages/calendario-full/calendario-full';
import { Camera } from '@ionic-native/camera';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';


//servicios
import { AuthService } from '../app/services/AuthService';
import { GlobalService } from '../app/services/GlobalService';
import { UtilesService } from '../app/services/UtilesService';
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
    CrearSolicitudPage,
    MenuPage,
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
    CrearSolicitudPage,
    TircelPage,
    InicioPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    LocalNotifications,
    AuthService,
    GlobalService,
    UtilesService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    FileOpener,
    FilePath,
    File,
    FileTransfer,
    DocumentViewer,
    //CalendarOriginal,
    {provide: LOCALE_ID, useValue: 'es-CL' },
  ]
})
export class AppModule {}
