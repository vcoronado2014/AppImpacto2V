import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App } from 'ionic-angular';
//import { } from 'ionic-nati'

import { LoginPage } from '../login/login';
import { DetailNovedadPage } from '../detail-novedad/detail-novedad';
import { VisorImagenPage } from '../visor-imagen/visor-imagen';
import { CrearNovedadPage } from '../crear-novedad/crear-novedad';
import { EditarNovedadPage } from '../editar-novedad/editar-novedad';
import { CrearEventoPage } from '../crear-evento/crear-evento';

import { AuthService } from '../../app/services/AuthService';
import { InicioService } from '../../app/services/InicioService';
import { NovedadService } from '../../app/services/novedadService';
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';
import { NgCalendarModule } from 'ionic2-calendar';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-CL';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";
import { Calendar } from 'fullcalendar';

import * as moment from 'moment';

registerLocaleData(localeFr);

@Component({
  selector: 'page-calendario-full',
  templateUrl: 'calendario-full.html',
  providers: [AuthService, InicioService, NovedadService, GlobalService,
    {provide: LOCALE_ID, useValue: 'es-CL' }]
})
export class CalendarioFullPage {
  //@ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  calendarOptions:any ;
  timeSeleccionado;
  permisos = {
    CreaCalendario: 0,
    CreaDocumento: 0,
    CreaInstitucion: 0,
    CreaMailing: 0,
    CreaMroSolicitud: 0,
    CreaMuro: 0,
    CreaProyecto: 0,
    CreaRendicion: 0,
    CreaRol: 0,
    CreaSolicitud: 0,
    CreaTricel: 0,
    CreaUsuario: 0,
    EliminaCalendario: 0,
    EliminaDocumento: 0,
    EliminaInstitucion: 0,
    EliminaMroSolicitud: 0,
    EliminaMuro: 0,
    EliminaProyecto: 0,
    EliminaRendicion: 0,
    EliminaRol: 0,
    EliminaTricel: 0,
    EliminaUsuario: 0,
    ModificaCalendario: 0,
    ModificaInstitucion: 0,
    ModificaMroSolicitud: 0,
    ModificaMuro: 0,
    ModificaProyecto: 0,
    ModificaRendicion: 0,
    ModificaRol: 0,
    ModificaTricel: 0,
    ModificaUsuario: 0,
    PuedeVotarProyecto: 0,
    PuedeVotarTricel: 0,
    VerCalendario: 0,
    VerDocumento: 0,
    VerInstitucion: 0,
    VerMailing: 0,
    VerMroSolicitud: 0,
    VerMuro: 0,
    VerProyecto: 0,
    VerRendicion: 0,
    VerReporteAsistencia: 0,
    VerReportes: 0,
    VerRol: 0,
    VerTricel: 0,
    VerUsuario: 0
  };
  idUsuarioLogueado = sessionStorage.getItem("USU_ID");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    private app: App,
    public acceso: AuthService,
    public modalCtrl: ModalController,
    public ini: InicioService,
    public nov: NovedadService,
    public global: GlobalService,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {
    moment.locale('es-CL');
  }

  ngAfterViewInit(){
    var instId = sessionStorage.getItem("INST_ID");
    var tipo = '1';

    this.calendarOptions = {
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'All'
        }
      },
     // theme:'jquery-ui',
      //lang: 'es',
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
      buttonText: {
        prev: 'ant',
        next: 'sig',
        prevYear: 'año ant',
        nextYear: 'año sig',
        year: 'año',
        today: 'hoy',
        month: 'mes',
        week: 'semana',
        day: 'dia'
    },
    // buttonIcons: null,
    allDayText: 'all-day',
      eventClick: (event) => {
        console.log(event);
        //alert('Event Clicked \n'+ 'Event Name : '+ event.title);
        this.presentModal(event);
      },
      dayClick: (date, jsEvent, view, resourceObj) => {
       console.log('Date: ' + date.format());
       this.timeSeleccionado = date;
      },
      eventLimit: true, // allow "more" link when too many events
      //events: this.addRandomEvents()
      events: []
    };
  }


  addRandomEvents() {
    //this.myCalendar.fullCalendar('removeEvents');

    var now = new Date();
        now.setDate(1);

   return [
    {
      title: 'All Day Event',
      start: '2018-09-04',
      color : 'red',
      editable: true,
    },
    {
      title: 'Long Event',
      start: '2018-10-09',
      end: '2017-11-12',
      color: 'blue'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2018-10-09T16:00:00'
    },
  {
    id: 999,
    title: 'Repeating Event',
    start: '2018-09-16T16:00:00'
  },
  {
    title: 'Conference',
    start: '2016-09-11',
    end: '2018-11-13'
  },
  {
    title: 'Meeting',
    start: '2018-09-12T10:30:00',
    end: '2018-09-16T12:30:00'
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: '2018-09-28'
  }
  
];
    //return data;
    //this.myCalendar.fullCalendar('addEventSource', data);
  }  
  ionViewWillEnter(){
    //this.createEvents();
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
  }
  ionViewDidLoad() {
    //this.addRandomEvents();
    console.log('ionViewDidLoad CalendarioFullPage');
    //this.calendarOptions.events = this.addRandomEvents();
    this.createEvents();
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }

  createEvents(){
    var instId = sessionStorage.getItem("INST_ID");
    var tipo = '1';
    this.calendarOptions = {
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'All'
        }
      },
     // theme:'jquery-ui',
      //lang: 'es',
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
      buttonText: {
        prev: 'ant',
        next: 'sig',
        prevYear: 'año ant',
        nextYear: 'año sig',
        year: 'año',
        today: 'hoy',
        month: 'mes',
        week: 'semana',
        day: 'dia'
    },
      eventClick: (event) => {
        console.log(event);
        //alert('Event Clicked \n'+ 'Event Name : '+ event.title);
        this.presentModal(event);
      },
      dayClick: (date, jsEvent, view, resourceObj) => {
        this.timeSeleccionado = date;
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
      //events: this.addRandomEvents()
      
      events: this.global.postCalendario(instId, tipo).subscribe(
        
        data => {
          this.calendarOptions.events = [];
          var datos = data.json();
          var datosProcesar = datos;
          
          if (datosProcesar && datosProcesar.length > 0){
            //ahora procesamos las rutas para mostrar los archivos
            datosProcesar.forEach(element => {
                var mesIniC = parseInt(element.mesIni); 
                if (element.mesIni == 0){
                  mesIniC = parseInt(element.mesIni) + 1; 
                }
                var mesTerC = parseInt(element.mesTer); 
                if (element.mesTer == 0){
                  mesTerC = parseInt(element.mesTer) + 1; 
                }
                
                var fechaIni = new Date(parseInt(element.annoIni), mesIniC, parseInt(element.diaIni), parseInt(element.horaIni), parseInt(element.minutosIni), 0, 0);
                var fechaTer = new Date(parseInt(element.annoTer), mesTerC, parseInt(element.diaTer), parseInt(element.horaTer), parseInt(element.minutosTer), 0, 0);
                //element.allDay, element.content, element.details, element.ubication
                var title = element.content + '-' + element.details + ', ' + element.ubication;
                var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
                var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');
                //console.log(fechaIniF);
                //'2018-09-16T16:00:00'
                this.calendarOptions.events.push(
                    {
                        id: element.clientId,
                        title: title,
                        start: fechaIniF,
                        end: fechaTerF,
                        allDay: element.allDay,
                        usuIdCreador: element.usuIdCreador,
                        titulo: element.content,
                        detalle: element.details,
                        ubicacion: element.ubication,
                        startTime: fechaIni,
                        endTime: fechaTer
                        
                    }
                );


            });

          }
        },
        err =>{ 
          console.error(err);
          //loader.dismiss();
        },
        () => {
          console.log(this.calendarOptions.events);
          console.log('get rendciones completed');
          //loader.dismiss();
        }
      )

    };
/*
    this.calendarOptions.events = [];
    var instId = sessionStorage.getItem("INST_ID");
    var tipo = '1';
    //var events = [];
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postCalendario(instId, tipo).subscribe(
        data => {
          var datos = data.json();
          var datosProcesar = datos;
          
          if (datosProcesar && datosProcesar.length > 0){
            //ahora procesamos las rutas para mostrar los archivos
            datosProcesar.forEach(element => {
                var mesIniC = parseInt(element.mesIni); 
                if (element.mesIni == 0){
                  mesIniC = parseInt(element.mesIni) + 1; 
                }
                var mesTerC = parseInt(element.mesTer); 
                if (element.mesTer == 0){
                  mesTerC = parseInt(element.mesTer) + 1; 
                }
                
                var fechaIni = new Date(parseInt(element.annoIni), mesIniC, parseInt(element.diaIni), parseInt(element.horaIni), parseInt(element.minutosIni), 0, 0);
                var fechaTer = new Date(parseInt(element.annoTer), mesTerC, parseInt(element.diaTer), parseInt(element.horaTer), parseInt(element.minutosTer), 0, 0);
                //element.allDay, element.content, element.details, element.ubication
                var title = element.content + '-' + element.details + ', ' + element.ubication;
                var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
                var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');
                this.calendarOptions.events.push(
                    {
                        id: element.clientId,
                        title: title,
                        start: fechaIniF,
                        end: fechaTerF,
                        allDay: element.allDay,
                        usuIdCreador: element.usuIdCreador,
                        titulo: element.content,
                        detalle: element.details,
                        ubicacion: element.ubication,
                        startTime: fechaIni,
                        endTime: fechaTer
                    }
                );


            });

          }
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log(this.calendarOptions.events);
          console.log('get rendciones completed');
          loader.dismiss();
        }
      );
      
    });
*/
  }
  procesarLista(item){
    if (this.calendarOptions.events){
      var esta = false;
      this.calendarOptions.events.forEach(element => {
        if (element.id == item.id){
          esta = true;
          var editado = {
            allDay: false,
            annoIni: item.annoIni,
            annoTer: item.annoTer,
            className: item.className,
            clientId: item.clientId,
            content: item.content,
            details: item.details,
            diaIni: item.diaIni,
            diaTer: item.diaTer,
            horaIni: item.horaIni,
            horaTer: item.horaTer,
            id: item.id,
            mesIni: item.mesIni,
            mesTer: item.mesTer,
            minutosIni: item.minutosIni,
            minutosTer: item.minutosTer,
            ubication: item.ubication,
            usuIdCreador: item.usuIdCreador
          };
          element = editado;
        }
      });
      if (esta == false){
        this.calendarOptions.events.push(item);
      }
    }
  }

  presentModal(item) {
    if (item == null){
      //esta creando uno nuevo, seteamos el evento seleccionado
      if (this.timeSeleccionado){
        //si hay un evento seleccionado seteamos los valores del evento
        
        item = {
          startTime: this.timeSeleccionado
        }
      }

    }

    let modal = this.modalCtrl.create(CrearEventoPage, { evento: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        //aqui hay que actualizar el elemento directo a la lista con la data
        //this.createEvents();
        //this.today();
        this.procesarLista(data);
      }
    });
    modal.present();
  }


}
