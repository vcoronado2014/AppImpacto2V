import { Component } from '@angular/core';
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

registerLocaleData(localeFr);

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
  providers: [AuthService, InicioService, NovedadService, GlobalService,
    {provide: LOCALE_ID, useValue: 'es-CL' }]
})
export class CalendarioPage {
  //registerLocaleData(localeFr);
  //nuevos arreglos para probar
  public citas;
  public calendarioData = [];

  //---------------------------------
  eventoSeleccionado;
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
  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
      mode: 'month',
      locale: 'es-CL',
      dateFormatter: {
        formatMonthViewDay: function(date:Date) {
            return date.getDate().toString();
        }            
    },
    currentDate: new Date()
  }; // these are the variable used by the calendar.

  loadEvents() {
      //this.eventSource = this.createEventsOut();
  }
  onViewTitleChanged(title) {
      this.viewTitle = title;
  }
  onEventSelected(event) {
      this.eventoSeleccionado = event;
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
  changeMode(mode) {
      this.calendar.mode = mode;
  }
  today() {
      this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
      this.timeSeleccionado = ev.selectedTime;
      console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
          (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();
  }
  createRandomEvents() {
      var events = [];
      for (var i = 0; i < 50; i += 1) {
          var date = new Date();
          var eventType = Math.floor(Math.random() * 2);
          var startDay = Math.floor(Math.random() * 90) - 45;
          var endDay = Math.floor(Math.random() * 2) + startDay;
          var startTime;
          var endTime;
          if (eventType === 0) {
              startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
              if (endDay === startDay) {
                  endDay += 1;
              }
              endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
              events.push({
                  title: 'All Day - ' + i,
                  startTime: startTime,
                  endTime: endTime,
                  allDay: true
              });
          } else {
              var startMinute = Math.floor(Math.random() * 24 * 60);
              var endMinute = Math.floor(Math.random() * 180) + startMinute;
              startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
              endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
              events.push({
                  title: 'Event - ' + i,
                  startTime: startTime,
                  endTime: endTime,
                  allDay: false
              });
          }
      }
      return events;
  }
  createEvents(){
    //registerLocaleData(localeFr);
    //var events = [];
    this.eventSource = [];
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
                
                this.eventSource.push(
                    {
                        id: element.clientId,
                        title: title,
                        startTime: fechaIni,
                        endTime: fechaTer,
                        allDay: element.allDay,
                        usuIdCreador: element.usuIdCreador,
                        titulo: element.content,
                        detalle: element.details,
                        ubicacion: element.ubication
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
          console.log('get rendciones completed');
          loader.dismiss();
        }
      );
      
    });
  }
  onRangeChanged(ev) {
      console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
      var current = new Date();
      current.setHours(0, 0, 0);
      return date < current;
  };

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
    //para probar
    //this.cargarEventos();
    //************************************************** */
  }
  //nuevos metodos para probar
  cargarEventos() {
    //para probar
    var instId = sessionStorage.getItem("INST_ID");
    var tipo = '1';
    this.global.postCalendarioArr(instId, tipo);
    this.citas = this.global.arregloGeneral;
    this.eventSource = this.createEventsCalendario();
    
  }
  createEventsCalendario(){
    this.calendarioData = this.citas;
    return this.calendarioData;
  }
  recargar(){
    let loader = this.loading.create({
      content: '<ion-content style="background-color:black;">'+
                  '<div>'+
                  '<p style="color:black; font-weight:bold; text-align: center; margin-bottom: -29px;padding-bottom: 0px;">Espera mientras se cargan </p>'+
                    '<img src="./assets/imgs/loading.gif">'+ 
                    '<p style="color:black; font-weight:bold;text-align: center;margin-top:-36px;padding-left: 30px; padding-right: 30px;">los eventos </p>'+
                  '</div>'+
               '</ion-content>',
      spinner:'hide'
    });
    this.changeMode('week');
    loader.present().then(() => {
      setTimeout(() => {
        this.createEventsCalendario();
        this.changeMode('month');
        loader.dismiss();
      }, 2000);
    });
  }
  ionViewWillEnter() {
    this.recargar();
  }
  ngAfterViewInit(){
      this.cargarEventos();
  }
  //************************************************** */

  ionViewDidEnter() {
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    //lo comentamos por mientras
    /*
    this.createEvents();
    this.today();
    this.changeMode('month');
    */
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      /*
      this.cargarEventos();
      this.today();
      this.changeMode('month');
      */
     this.cargarEventos();
     this.recargar();
      refresher.complete();
    }, 2000);
  }

  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

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
        /*
        this.createEvents();
        this.today();
        */
       this.cargarEventos();
       this.recargar();
      }
    });
    modal.present();
  }
  presentActionSheet(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.delete(item);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');

          }
        }
      ]
    });
    actionSheet.present();
  }

  delete(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.id;
        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var usuId = sessionStorage.getItem("USU_ID");

        this.global.deleteCalendario(id, instId).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //por mientras
            /*
            this.createEvents();
            this.today();
            this.changeMode('month');
            */
           this.cargarEventos();
           this.recargar();
          },
          err => {
            console.error(err);
            loader.dismiss();
          },
          () => {
            console.log('delete completed');
            //terminamos;
            loader.dismiss();
          }
        );

      });

    }
  }    

}
