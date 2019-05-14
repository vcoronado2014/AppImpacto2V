import { Injectable, Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {AppSettings } from '../AppSettings';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';

import 'rxjs/add/operator/map';

//tratamiento de fcm
import { FCM, NotificationData } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
//globales
import { GlobalService } from './GlobalService';

@Injectable()
export class AuthService{
  username: string;
  loggedIn: boolean;

  constructor(
    private http: Http,
    private sanitized: DomSanitizer,
    private global: GlobalService,
    private fcm: FCM
  ){
    //inicializamos los valores
    this.username = '';
    this.loggedIn = false;
    //this.url = config.getUrl(this.modo, 'Login');

  }

  login(userInfo){
    let url = AppSettings.API_ENDPOINT + 'Login';
    //let url = 'http://api.asambleas.cl/api/login';


    let iJson = JSON.stringify(userInfo);

    return this.http.post(url, iJson, {
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .map(res => res.text())
      .map(res => {
          if (res == "error" || res == "nofound"){
            this.loggedIn = false;
          } else {

            let retorno = JSON.parse(res);

            sessionStorage.setItem('USU_ID', retorno.AutentificacionUsuario.Id);
            sessionStorage.setItem('ROL_ID', retorno.Rol.Id);
            sessionStorage.setItem('ROL_NOMBRE', retorno.Rol.Nombre);
            sessionStorage.setItem('INST_ID', retorno.Institucion.Id);
            sessionStorage.setItem('INSTITUCION_NOMBRE', retorno.Institucion.Nombre);
            sessionStorage.setItem('PERSONA_NOMBRE', retorno.Persona.Nombres + ' ' + retorno.Persona.ApellidoPaterno + ' ' + retorno.Persona.ApellidoMaterno);
            sessionStorage.setItem('REG_ID', retorno.Region.Id);
            sessionStorage.setItem('REG_NOMBRE', retorno.Region.Nombre);
            sessionStorage.setItem('COM_ID', retorno.Comuna.Id);
            sessionStorage.setItem('COM_NOMBRE', retorno.Comuna.Nombre);
            sessionStorage.setItem('ROL_NOMBRE_INSTITUCION', retorno.RolInstitucion.Nombre);
            sessionStorage.setItem('ROL_ID_INSTITUCION', retorno.RolInstitucion.IdOriginal);
            sessionStorage.setItem('PERMISOS', JSON.stringify(retorno.PermisoRol));

            this.username = userInfo.usuario;
            this.loggedIn = true;
            //tratamiento con el registro de fcm
            this.fcm.getToken().then(
              (token: string) => {
                console.log('token dispositivo: ' + token);
                //hay que guardar o actualizar el token del dispositivo
                this.global.putToken(token, retorno.Institucion.Id, retorno.AutentificacionUsuario.Id).subscribe(data=> {
                  var ret = data.json();
                  //aca hacer algo con la data?
                },
                error => {
                  console.log(error);
                }
              )
              }
            ).catch(
              error => {
                console.log(error);
              }
            );
          }
          return this.loggedIn;
        }
      );

  }
  logout(): void  {
    sessionStorage.clear();

    this.username = '';
    this.loggedIn = false;
  }
  isLoggedId(){
    return this.loggedIn;
  }

}
