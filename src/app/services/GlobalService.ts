import { Injectable, Component } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {AppSettings } from '../AppSettings';

import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService{
    headers: Headers;
    options: RequestOptions;

  constructor(
    private http: Http
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
    var arrCalendar = [];
    let url = AppSettings.API_ENDPOINT + 'Calendario';
    let dataGet = { InstId: instId.toString(), Tipo: tipo.toString() };

    return this.http.post(url, dataGet, {
      headers: this.headers
    }).map((res)=>{
      if (res){
        var datos = res.json();
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
              
              arrCalendar.push(
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
      }
    });
    //return arrCalendar;
  }  

}