import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController, App } from 'ionic-angular';
//import { } from 'ionic-nati'

import { LoginPage } from '../login/login';
//import { DetailNovedadPage } from '../detail-novedad/detail-novedad';
//import { VisorImagenPage } from '../visor-imagen/visor-imagen';
//import { CrearNovedadPage } from '../crear-novedad/crear-novedad';
//import { EditarNovedadPage } from '../editar-novedad/editar-novedad';
import { CrearEventoPage } from '../crear-evento/crear-evento';

import { AuthService } from '../../app/services/AuthService';
import { InicioService } from '../../app/services/InicioService';
import { NovedadService } from '../../app/services/novedadService';
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';
//import { NgCalendarModule } from 'ionic2-calendar';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-CL';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";
import { Options } from 'fullcalendar';

import * as moment from 'moment';

registerLocaleData(localeFr);

@Component({
  selector: 'page-calendario-full',
  templateUrl: 'calendario-full.html',
  providers: [AuthService, InicioService, NovedadService, GlobalService,
    {provide: LOCALE_ID, useValue: 'es-CL' }]
})
export class CalendarioFullPage {

  //para pruebas
  calendarOptions: any;
  displayEvent: any;

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  //lo comentamos por mientras
  /*
  calendarOptions:any ;
  */
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
  eventos: any = [];

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
    //private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {
    moment.locale('es-CL');
  }

  //esto es para pruebas
  ngOnInit() {
    this.global.postCalendarioClient(3,1).subscribe(data => {
      if (data){
        for(var s=0; s < data.length; s++){
          var mesIniC = parseInt(data[s].mesIni); 
          if (data[s].mesIni == 0){
            mesIniC = parseInt(data[s].mesIni) + 1; 
          }
          var mesTerC = parseInt(data[s].mesTer); 
          if (data[s].mesTer == 0){
            mesTerC = parseInt(data[s].mesTer) + 1; 
          }
          
          var fechaIni = new Date(parseInt(data[s].annoIni), mesIniC, parseInt(data[s].diaIni), parseInt(data[s].horaIni), parseInt(data[s].minutosIni), 0, 0);
          var fechaTer = new Date(parseInt(data[s].annoTer), mesTerC, parseInt(data[s].diaTer), parseInt(data[s].horaTer), parseInt(data[s].minutosTer), 0, 0);
          //data[s].allDay, data[s].content, data[s].details, data[s].ubication
          var title = data[s].content + '-' + data[s].details + ', ' + data[s].ubication;
          var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
          var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');

          data[s].title= title;
          data[s].start= fechaIniF;
          data[s].end= fechaTerF;

        }
      }
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
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
        //editable: true,
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
        events: data
      };
    });
  }

  ngAfterViewInit(){
    this.global.postCalendarioClient(3,1).subscribe(data => {
      if (data){
        for(var s=0; s < data.length; s++){
          var mesIniC = parseInt(data[s].mesIni); 
          if (data[s].mesIni == 0){
            mesIniC = parseInt(data[s].mesIni) + 1; 
          }
          var mesTerC = parseInt(data[s].mesTer); 
          if (data[s].mesTer == 0){
            mesTerC = parseInt(data[s].mesTer) + 1; 
          }
          
          var fechaIni = new Date(parseInt(data[s].annoIni), mesIniC, parseInt(data[s].diaIni), parseInt(data[s].horaIni), parseInt(data[s].minutosIni), 0, 0);
          var fechaTer = new Date(parseInt(data[s].annoTer), mesTerC, parseInt(data[s].diaTer), parseInt(data[s].horaTer), parseInt(data[s].minutosTer), 0, 0);
          //data[s].allDay, data[s].content, data[s].details, data[s].ubication
          var title = data[s].content + '-' + data[s].details + ', ' + data[s].ubication;
          var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
          var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');

          data[s].title= title;
          data[s].start= fechaIniF;
          data[s].end= fechaTerF;

        }
      }
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
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
        //editable: true,
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
        events: data
      };
    });
  }

  //*************************** */

  //lo vamos a comentar por mientras
  /*
  cargarInicioCalendarNew(){
    
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
      events: this.entregaEventos(),
      resources: this.entregaEventos()
    };

  }
  entregaEventos(){
    return this.eventos;
  }
  cargarInicioCalendar(){
    
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
      events: this.addRandomEvents()
      //events: this.createEvents()
    };

  }
  ngAfterViewInit(){
    console.log('ngAfterinit');
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
      events: this.entregaEventos(),
      resources: this.entregaEventos()
    };
  }

  */
  //lo comentamos por mientras
  /*
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
  }

  crearArrEventos(){
    var instId = sessionStorage.getItem("INST_ID");
    var tipo = '1';
    this.eventos = [];
    return this.global.postCalendarioClient(instId, tipo).subscribe(
        
      data => {
        var datos: any = data;
        var datosProcesar = datos;
        
        if (datosProcesar){
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
              this.eventos.push(
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
        console.log(this.eventos);
        //console.log('get rendciones completed');
        //loader.dismiss();
      }
    );
    
  }  
  ionViewWillEnter(){
    //this.createEvents();
    console.log('ionViewWillEnter');
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    //this.eventos = this.crearArrEventos();
    //this.cargarInicioCalendar();
    //this.cargarInicioCalendarNew();
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
      events: this.entregaEventos()
    };
  }
  ngAfterContentInit(){
    console.log('ngaftercontentinit');
    //aca deberiamos buscar el arreglo y cargarlo una vez que la vista se inicialice
    this.crearArrEventos();
    
  }
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }

  //lo comentamos por mientras
  /*
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
  }
  entregaElemento(item){
    var retorno = null;
    if (this.calendarOptions.events){
      var iguales = false;
      for(var s=0; s < this.calendarOptions.events.length; s++){
        if (this.calendarOptions.events[s].id == item.id){
          //vamos a comparar un poco
          retorno = this.calendarOptions.events[s];
        }
      }
    }
    return retorno;
  }
  procesarLista(item){
    if (this.calendarOptions.events){
      var esta = false;
      for(var s=0; s < this.calendarOptions.events.length; s++){
        if (this.calendarOptions.events[s].id == item.Id){
          esta = true;
          this.calendarOptions.events[s].allDay = false;
          this.calendarOptions.events[s].detalle = item.Detalle;
          this.calendarOptions.events[s].end = item.FechaTermino;
          this.calendarOptions.events[s].endTime = moment(item.FechaTermino);
          this.calendarOptions.events[s].id= item.Id;
          this.calendarOptions.events[s].start= item.FechaInicio;
          this.calendarOptions.events[s].startTime = moment(item.FechaInicio);
          this.calendarOptions.events[s].title = item.Titulo + '-' + item.Detalle +', ' + item.Ubicacion;
          this.calendarOptions.events[s].titulo = item.Titulo;
          this.calendarOptions.events[s].ubicacion = item.Ubicacion;
          this.calendarOptions.events[s].usuIdCreador = item.UsuIdCreador;
        }
      }
      if (esta == false){
        var editado = {
          allDay: false,
          detalle: item.Detalle,
          end: item.FechaTermino,
          //endTime: moment(item.FechaTermino),
          id: item.Id,
          start: item.FechaInicio,
          //startTime: moment(item.FechaInicio),
          title: item.Titulo + '-' + item.Detalle +', ' + item.Ubicacion,
          titulo: item.Titulo,
          ubicacion: item.ubicacion,
          usuIdCreador: item.usuIdCreador
        };
        this.calendarOptions.events.push(editado);
      }
    }
  }
*/
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
    else{
      //buscamos el elemento en la lista
      //lo comentamos por mientras
      /*
      var elemento = this.entregaElemento(item);
      if (elemento != null){
        item = elemento;
      }
      */
    }

    let modal = this.modalCtrl.create(CrearEventoPage, { evento: item });
    modal.onDidDismiss(data => {
      // Data is your data from the modal
      if (data != undefined){
        //lo comentamos por mientras
        //this.createEvents();
      }
    });
    modal.present();
  }


}
