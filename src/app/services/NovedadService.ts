import { Injectable, Component } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {AppSettings } from '../AppSettings';

import 'rxjs/add/operator/map';

@Injectable()
export class NovedadService{
    headers: Headers;
    options: RequestOptions;

  constructor(
    private http: Http
  ){
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
  }
  putRespuesta(prioridadId, mroId, texto, instId, usuId, rolId){
    
    var entidad = {
        InstId: instId,
        UsuId: usuId,
        PrioridadId: prioridadId,
        MroId: mroId,
        RolId: rolId,
        Texto: texto
        };
    

    let url = AppSettings.API_ENDPOINT + 'RespuestaMuro';
    let dataGet = entidad;

    let data = this.http.put(url, dataGet, {
      headers: new Headers({'Content-Type': 'application/json'})
    });
    return data;
  }

  deleteRespuesta(id){
  
    var entidad = {
          Id: id,
          EsCpas: false   
    };

    let url = AppSettings.API_ENDPOINT + 'RespuestaMuro';
    let dataGet = entidad;

    let data = this.http.delete(url, { params: {Id: id.toString(), EsCpas: false }});
    return data;
  

  }

}
