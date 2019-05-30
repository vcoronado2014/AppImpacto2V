import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController  } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
frmNombre;
frmApodo;
frmIniciales;

fileUno: File;
fileUnoName: any;
image: string = null;
perfil = {
  Foto: '',
  Iniciales: '',
  Apodo: '',
  AusId: 0
};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private global: GlobalService,
    private viewCtrl: ViewController
    ) {
      this.frmNombre = sessionStorage.getItem('PERSONA_NOMBRE');
      this.perfil = JSON.parse(sessionStorage.getItem('PERFIL_USUARIO'));
      if (this.perfil){
        this.image = this.perfil.Foto;
        this.frmApodo = this.perfil.Apodo;
        this.frmIniciales = this.perfil.Iniciales;

      }

  }
  enviarPerfil(){
    //validaciones
 

    let loader = this.loading.create({
      content: 'Guardando...',
    });

    loader.present().then(() => {
      var perfilGuardar = {
        Apodo: '',
        Iniciales: '',
        AusId: '0',
        Foto: ''
      }
      if (this.frmApodo == null || this.frmApodo == undefined) {
        perfilGuardar.Apodo = '';
      }
      else{
        perfilGuardar.Apodo = this.frmApodo;
      }
      if (this.frmIniciales == null || this.frmIniciales == undefined) {
        perfilGuardar.Iniciales = '';
      }
      else {
        perfilGuardar.Iniciales = this.frmIniciales;
      }
      perfilGuardar.AusId = sessionStorage.getItem("USU_ID");
      

      if (!this.fileUno){
        this.fileUnoName = '';
      }
      perfilGuardar.Foto = this.fileUnoName;


      this.global.sendPerfil(this.fileUno, perfilGuardar).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          this.global.postPerfil(perfilGuardar.AusId).subscribe(dataPer => {
            var dat = dataPer.json();
            sessionStorage.setItem('PERFIL_USUARIO', dat);
            let sms = this.presentToast('Perfil guardado con éxito.');
          });
          //loader.dismiss();

          //setear los datos de session storage


          //this.viewCtrl.dismiss(datos);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
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
        //ahora setear la imagen de la variable de session
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }

}
