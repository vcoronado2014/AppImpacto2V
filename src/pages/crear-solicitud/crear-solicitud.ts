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
  //probando camara
  image: string = null;

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
