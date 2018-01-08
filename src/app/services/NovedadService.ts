import { Injectable, Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {AppSettings } from '../AppSettings';

import 'rxjs/add/operator/map';

@Injectable()
export class NovedadService{
  constructor(
    private http: Http
  ){

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


}
