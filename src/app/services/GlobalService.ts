import { Injectable, Component } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppSettings } from '../AppSettings';

import * as moment from 'moment';

import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService{
    headers: Headers;
    headersCli: HttpHeaders;
    options: RequestOptions;
    arregloGeneral = [];
    arregloEventos = [];
    arregloEventosProy = [];

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ){
        this.headers = new Headers({ 'Content-Type': 'application/json',
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
  }
  postSolicitudes(instId){
    let url = AppSettings.API_ENDPOINT + 'Solicitudes';
    let dataGet = { InstId: instId};

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }
  getUsuarios(instId, rolId){
    let url = AppSettings.API_ENDPOINT + 'ListarUsuarios?instId=' + instId + '&rolId=' + rolId;
    let dataGet = { InstId: instId};

    let data = this.http.get(url);
    return data;
  }
  postInstituciones(buscarId, idUsuario){
    let url = AppSettings.API_ENDPOINT + 'Institucion';
    let dataGet = { IdUsuario: idUsuario.toString()};

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }
  postRendiciones(instId){
    let url = AppSettings.API_ENDPOINT + 'Rendicion';
    let dataGet = { InstId: instId};

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }
  postDocumentosUsuario(instId, usuId){
    let url = AppSettings.API_ENDPOINT + 'FileDocumento';
    let dataGet = { InstId: instId.toString(), UsuId: usuId.toString() };

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }
  postCalendario(instId, tipo){
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = { InstId: instId.toString(), Tipo: tipo.toString() };

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }
  postProyectos(instId){
    let url = AppSettings.API_ENDPOINT + 'Proyecto';
    let dataGet = { InstId: instId.toString()};

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }

  sendRendicion(File, rendicion){
    let model = new FormData();
    model.append("UploadedImage", File);
    model.append("rendicion", JSON.stringify(rendicion));


    let url = AppSettings.API_ENDPOINT + 'File';

    let data = this.http.post(url, model, {
      headers: new Headers({})
    });
    return data;

  }

  postTricel(instId){
    let url = AppSettings.API_ENDPOINT + 'Votacion';
    let dataGet = { InstId: instId.toString()};

    let data = this.http.post(url, dataGet, {
      headers: this.headers
    });
    return data;
  }

  sendDocumento(File, usuId, instId, descripcion){
    let model = new FormData();
    model.append("UploadedImage", File);
    model.append("UsuId", usuId);
    model.append("InstId", instId);
    model.append("Descripcion", descripcion);


    let url = AppSettings.API_ENDPOINT + 'FileNuevo';

    let data = this.http.post(url, model, {
      headers: new Headers({})
    });
    return data;

  }
  deleteDocumento(id){
    let url = AppSettings.API_ENDPOINT + 'FileNuevo?id=' + id;
    let dataGet = { id: id};

    let data = this.http.get(url);
    return data;
  }

  deleteRendicion(id) {
    var entidad = {
      Id: id,
      EsCpas: false
    };

    let url = AppSettings.API_ENDPOINT + 'Rendicion';
    let dataGet = entidad;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers,
      body: dataGet
    });

    let data = this.http.delete(url, options );
    return data;
  } 
  putCalendario(entidad){
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = entidad;

    let data = this.http.put(url, dataGet, {
      headers: new Headers({'Content-Type': 'application/json'})
    });
    return data;
  } 
  deleteCalendario(id, instId) {
    var entidad = {
      Id: id,
      InstId: instId
    };
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = entidad;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers,
      body: dataGet
    });

    let data = this.http.delete(url, options );
    return data;
  }
  
  postCalendarioArr(instId, tipo){
    this.arregloGeneral = [];
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = { InstId: instId.toString(), Tipo: tipo.toString() };
    let dataGetProy = { InstId: instId.toString(), Tipo: '2' };

    let repos = this.http.post(url, dataGet, {
      headers: new Headers({'Content-Type': 'application/json'})
    });

    repos.subscribe(
      data => {
        this.arregloEventos = data.json();

        //procesar la data
        if (this.arregloEventos){
          for (var s in this.arregloEventos) {
            var mesIniC = parseInt(this.arregloEventos[s].mesIni); 
            if (this.arregloEventos[s].mesIni == 0){
              //mesIniC = parseInt(this.arregloEventos[s].mesIni) + 1; 
            }
            var mesTerC = parseInt(this.arregloEventos[s].mesTer); 
            if (this.arregloEventos[s].mesTer == 0){
              //mesTerC = parseInt(this.arregloEventos[s].mesTer) + 1; 
            }
            
            var fechaIni = new Date(parseInt(this.arregloEventos[s].annoIni), mesIniC, parseInt(this.arregloEventos[s].diaIni), parseInt(this.arregloEventos[s].horaIni), parseInt(this.arregloEventos[s].minutosIni), 0, 0);
            var fechaTer = new Date(parseInt(this.arregloEventos[s].annoTer), mesTerC, parseInt(this.arregloEventos[s].diaTer), parseInt(this.arregloEventos[s].horaTer), parseInt(this.arregloEventos[s].minutosTer), 0, 0);
            //data[s].allDay, data[s].content, data[s].details, data[s].ubication
            var title = this.arregloEventos[s].content + '-' + this.arregloEventos[s].details + ', ' + this.arregloEventos[s].ubication;
            var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
            var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');

            //ahora creamos la entidad con estos valores
            let entidadEvento = {
              id: this.arregloEventos[s].clientId,
              title: title,
              startTime: fechaIni,
              endTime: fechaTer,
              allDay: this.arregloEventos[s].allDay,
              usuIdCreador: this.arregloEventos[s].usuIdCreador,
              titulo: this.arregloEventos[s].content,
              detalle: this.arregloEventos[s].details,
              ubicacion: this.arregloEventos[s].ubication,
              tipo: 1
            };
            //ahora lo insertamos en nuestro arreglo
            this.arregloGeneral.push(entidadEvento);

          }
        }

      },
      err => console.error(err),
      () => console.log('get eventos')
    );

    let reposProy = this.http.post(url, dataGetProy, {
      headers: new Headers({'Content-Type': 'application/json'})
    });

    reposProy.subscribe(
      data => {
        this.arregloEventosProy = data.json();

        //procesar la data
        if (this.arregloEventosProy){
          for (var s in this.arregloEventosProy) {
            var mesIniC = parseInt(this.arregloEventosProy[s].mesIni); 
            if (this.arregloEventosProy[s].mesIni == 0){
              //mesIniC = parseInt(this.arregloEventosProy[s].mesIni) + 1; 
            }
            var mesTerC = parseInt(this.arregloEventosProy[s].mesTer); 
            if (this.arregloEventosProy[s].mesTer == 0){
              //mesTerC = parseInt(this.arregloEventosProy[s].mesTer) + 1; 
            }
            
            var fechaIni = new Date(parseInt(this.arregloEventosProy[s].annoIni), mesIniC, parseInt(this.arregloEventosProy[s].diaIni), parseInt(this.arregloEventosProy[s].horaIni), parseInt(this.arregloEventosProy[s].minutosIni), 0, 0);
            var fechaTer = new Date(parseInt(this.arregloEventosProy[s].annoTer), mesTerC, parseInt(this.arregloEventosProy[s].diaTer), parseInt(this.arregloEventosProy[s].horaTer), parseInt(this.arregloEventosProy[s].minutosTer), 0, 0);
            //data[s].allDay, data[s].content, data[s].details, data[s].ubication
            var title = this.arregloEventosProy[s].content + '-' + this.arregloEventosProy[s].details + ', ' + this.arregloEventosProy[s].ubication;
            var fechaIniF = moment(fechaIni).format('YYYY-MM-DD') + 'T' + moment(fechaIni).format('HH:mm:00');
            var fechaTerF = moment(fechaTer).format('YYYY-MM-DD') + 'T' + moment(fechaTer).format('HH:mm:00');

            //ahora creamos la entidad con estos valores
            let entidadEvento = {
              id: this.arregloEventosProy[s].clientId,
              title: title,
              startTime: fechaIni,
              endTime: fechaTer,
              allDay: this.arregloEventosProy[s].allDay,
              usuIdCreador: this.arregloEventosProy[s].usuIdCreador,
              titulo: this.arregloEventosProy[s].content,
              detalle: this.arregloEventosProy[s].details,
              ubicacion: this.arregloEventosProy[s].ubication,
              tipo: 2
            };
            //ahora lo insertamos en nuestro arreglo
            this.arregloGeneral.push(entidadEvento);

          }
        }

      },
      err => console.error(err),
      () => console.log('get eventos proyectos')
    );
    //return arreglo general
    return this.arregloGeneral;
  }  
  postCalendarioClient(instId, tipo){
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = { InstId: instId.toString(), Tipo: tipo.toString() };

    let data = this.httpClient.post(url, dataGet, {
      headers: this.headersCli
    });
    return data;
  }
  getArchivosProyectos(proyectoId){
    let url = AppSettings.API_ENDPOINT + 'ArchivoProyecto?ProyectoId=' + proyectoId;

    let data = this.http.get(url);
    return data;
  }
}