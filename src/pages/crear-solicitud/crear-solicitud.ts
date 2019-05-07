import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-crear-solicitud',
  templateUrl: 'crear-solicitud.html',
})
export class CrearSolicitudPage {
  modificado = false;
  frmTexto: any;
  frmPrioridad: any;
  fileUno: File;
  fileUnoName: any;
  idSolicitud = 0;
  solicitud: any;
  //probando camara
  image: string = null;
  esComentario = false;
  mroId: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private global: GlobalService,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera
  ) {
    moment.locale('es');
    this.frmPrioridad = "0";
    this.mroId = 0;
    this.solicitud = this.navParams.get('solicitud');
    if (this.solicitud){
      //viene una a editar
      this.idSolicitud = this.solicitud.Id;
      this.esComentario = true;
      this.mroId = this.solicitud.MroId;
      //ojo con esto porque este caso se produce solo cuando esta creando un
      //comentario a la solicitud
      //el tipo padre es 3
    }
    else{
      this.idSolicitud = 0;
      this.esComentario = false;
    }

  }
  changeListener($event) : void {

    let loader = this.loading.create({
      content: 'Verificando...',
    });

    loader.present().then(() => {
      this.fileUno  = $event.target.files[0];
      this.fileUnoName = this.fileUno.name;

      //this.image = `data:image/jpeg;base64,${$event.target.files[0]}`;
      this.fileChange($event);

      loader.dismiss();
    });
  }
  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.image = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearSolicitudPage');
  }
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      //aca hay que setear los nombres
      //fileUno, fileUnoName

    })
    .catch(error =>{
      console.error( error );
    });
  }
  enviarSolicitud(){
    let loader = this.loading.create({
      content: 'Guardando...',
    });
  
    loader.present().then(() => {
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      
      var comentario = {
        Id: this.idSolicitud.toString(),
        InstId: instId.toString(),
        PrioridadId: this.frmPrioridad,
        RolId: rolId.toString(),
        Texto: this.frmTexto,
        UsuId: usuId.toString(),
        Eliminado: '0'
      };
  
      this.global.createComentario(comentario).subscribe(
        dataArchivo1 => {
  
          var datos = dataArchivo1.json();
          //loader.dismiss();
          let sms = this.presentToast('Comentario Guardado con éxito.');
          //this.viewCtrl.dismiss(datos);
          this.modificado = true;
          this.frmTexto = '';
          //ahora recogemos los valores desde el retorno
          var idElemento = datos.Id; //mroId
          var tipoPadre = '2'; //para las imagenes de las solicitudes
          var nombreCarpeta = 'Novedades';
          var id = 0;//en este caso el id va cero por ser un elemento nuevo
          //ahora se debería enviar la imagen obtenida
          
          if (this.fileUno) {
            //guardar archivo 1
            this.global.sendFile(this.fileUno, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
              dataArchivo1 => {
                var datos = dataArchivo1.json();
              },
              err => {
                console.error(err);
              },
              () => {
                console.log('Archivo 1 cargado');
              }
            );
          }
          //ahora el dismiss
          this.viewCtrl.dismiss(datos);
        },
        err => {
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('Guardado');
          loader.dismiss();
        }
      );
  
  
    });
  }
  crear() {
    if (this.frmTexto == null || this.frmTexto == undefined) {
      let sms = this.presentToast('Debe ingresar texto para enviar');
      return;
    }
    if (this.esComentario == false) {
      this.enviarSolicitud();
    }
    else {
      //aca guardar el comentario
      this.enviarComentario();
    }
  }
  enviarComentario(){
    let loader = this.loading.create({
      content: 'Guardando...',
    });

    loader.present().then(() => {
      var instId = sessionStorage.getItem("INST_ID");
      var rolId = sessionStorage.getItem("ROL_ID");
      var usuId = sessionStorage.getItem("USU_ID");
      var comentario = {
        InstId: instId.toString(),
        MroId: this.mroId.toString(),
        PrioridadId: this.frmPrioridad,
        RolId: rolId.toString(),
        Texto: this.frmTexto,
        UsuId: usuId.toString()
      };

      this.global.putComentario(comentario).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          //loader.dismiss();
          let sms = this.presentToast('Comentario Guardado con éxito.');
          this.modificado = true;
          this.frmTexto = '';
          //ahora recogemos los valores desde el retorno
          var idElemento = datos.Id; //mroId
          var tipoPadre = '3'; //para las imagenes de los comentarios solicitudes
          var nombreCarpeta = 'Novedades';
          var id = 0;//en este caso el id va cero
          //ahora se debería enviar la imagen obtenida
          
          if (this.fileUno) {
            //guardar archivo 1
            this.global.sendFile(this.fileUno, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(
              dataArchivo1 => {
                var datos = dataArchivo1.json();
              },
              err => {
                console.error(err);
              },
              () => {
                console.log('Archivo 1 cargado');
              }
            );
          }
          //ahora el dismiss
          this.viewCtrl.dismiss(datos);
        },
        err => {
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('Archivo 1 cargado');
          loader.dismiss();
        }
      );


    });
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  closeModal(param) {
    if (this.modificado) {
      this.viewCtrl.dismiss('datos');
    }
    else {
      this.viewCtrl.dismiss();
    }
      
  }

}
