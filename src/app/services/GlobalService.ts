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

}