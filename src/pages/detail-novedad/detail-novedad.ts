import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController, ModalController, ViewController   } from 'ionic-angular';


import { NovedadesPage } from '../novedades/novedades';
import { NovedadService } from '../../app/services/novedadService';

//pages
import { VisorImagenPage } from '../visor-imagen/visor-imagen';

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
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nov: NovedadService,
    public loading: LoadingController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController
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
    this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
  }
  presentModalImagen(item, idImagen, id) {

    let modal = this.modalCtrl.create(VisorImagenPage, { item: item, idImagen: idImagen, MroId: id });
    modal.present();
  }
  closeModal(param) {
    this.viewCtrl.dismiss();
    /*
    if (param != null){
      this.navCtrl.push(NovedadesPage);
    }
    else
    {
      this.navCtrl.push(NovedadesPage);
    }
    */

  }
  enviar(item){
    //aca enviamos el comentario
    var textoGuardar = this.textoEnviar;
    if (textoGuardar == '' || textoGuardar == undefined || textoGuardar == null){
      let sms = this.presentToast('Debe ingresar un comentario válido');
    }
    else{
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
                Id:ret.Id,
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
  delete(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.nov.deleteRespuesta(id).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //por mientras
            this.closeModal('actualizar');
          },
          err => {
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

  deleteMuro(item){
    if (item){

      let loader = this.loading.create({
        content: 'eliminando...',
      });

      loader.present().then(() => {
        var id = item.Id;
        this.nov.deleteMuro(id).subscribe(
          data => {
            //actualizar el contenido
            var ret = data.json();
            //por mientras
            //this.closeModal('actualizar');
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          },
          err => {
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
  presentActionSheetMuro(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Está seguro de eliminar?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            this.deleteMuro(item);
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

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
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

}
