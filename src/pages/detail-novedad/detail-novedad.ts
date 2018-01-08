import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { NovedadesPage } from '../novedades/novedades';
import { NovedadService } from '../../app/services/novedadService';

/**
 * Generated class for the DetailNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-novedad',
  templateUrl: 'detail-novedad.html',
  providers: [NovedadService]
})
export class DetailNovedadPage {
  novedad: any;
  solicitudes: any;
  textoEnviar: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nov: NovedadService,
    public loading: LoadingController,
    ) {
    this.solicitudes = [];
    this.novedad = this.navParams.get('novedad');
    if (this.novedad){
      //esta todo ok, procesar
      this.solicitudes.push(this.novedad);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailNovedadPage');
  }
  closeModal(param) {
    if (param != null){
      this.navCtrl.push(NovedadesPage);
    }
    else
    {
      this.navCtrl.push(NovedadesPage);
    }
    
  }
  enviar(item){
    //aca enviamos el comentario
    var textoGuardar = this.textoEnviar;
    //obtenemos algunos elementos
    if (item){
      //extraemos los valores
      var prioridadId = item.PrioridadId;
      var mroId = item.Id;
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      
      let loader = this.loading.create({
        content: 'Cargando...',
      });

      loader.present().then(() => {
        
        this.nov.putRespuesta(prioridadId, mroId, textoGuardar, instId.toString(), usuId, rolId).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            var respuesta = {
              Eliminado: 0,
              FechaCreacion: new Date(),
              Id:0,
              InstId: instId,
              MroId: mroId,
              NombreRol: item.NombreRol,
              NombreUsuario: item.NombreUsuario,
              PrioridadId: prioridadId,
              RolId: rolId,
              Texto: textoGuardar,
              UrlImagen: 'trash',
              UsuId: usuId,
              FechaString: 'hace nos segundos',
              VisibleEliminar: false
            };
            //ahora agregamos este elemento
            this.solicitudes[0].RespuestaMuro.push(respuesta);


          },
          err =>{
            console.error(err);
            loader.dismiss();
          },
          () => {
            console.log('put completed');
            //terminamos;
            loader.dismiss();
          }
        );
    
      });

    }
  }

}
