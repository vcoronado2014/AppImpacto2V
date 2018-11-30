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
