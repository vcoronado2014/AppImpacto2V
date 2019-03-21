import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';
//prueba
//import { Chart } from '../../node_modules/chart.js';
import { Chart } from 'chart.js';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {AppSettings } from '../../app/AppSettings';
import { NgCalendarModule  } from 'ionic2-calendar';
//moment
import moment from 'moment';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
      mode: 'month',
      locale: 'es-ES',
      currentDate: new Date()
  }; // these are the variable used by the calendar.
  loadEvents() {
      this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
      this.viewTitle = title;
  }
  onEventSelected(event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
  changeMode(mode) {
      this.calendar.mode = mode;
  }
  today() {
      this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
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
                var mesIniC = parseInt(element.mesIni) + 1; 
                var mesTerC = parseInt(element.mesTer) + 1; 
                var fechaIni = new Date(parseInt(element.annoIni), mesIniC, parseInt(element.diaIni), parseInt(element.horaIni), parseInt(element.minutosIni), 0, 0);
                var fechaTer = new Date(parseInt(element.annoTer), mesTerC, parseInt(element.diaTer), parseInt(element.horaTer), parseInt(element.minutosTer), 0, 0);
                //element.allDay, element.content, element.details, element.ubication
                var title = element.content + '-' + element.details + ', ' + element.ubication;
                this.eventSource.push(
                    {
                        title: title,
                        startTime: fechaIni,
                        endTime: fechaTer,
                        allDay: element.allDay
                    }
                );

            });

          }
          //this.documentosArr = datos.proposals;
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
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public acceso: AuthService,
    public cal: NgCalendarModule
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  ionViewWillEnter() {
    this.createEvents();
    //this.openUrl();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.createEvents();
      this.today();
      refresher.complete();
    }, 2000);
  }

}
