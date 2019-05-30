import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, ActionSheetController, ViewController  } from 'ionic-angular';
import { GlobalService } from '../../app/services/GlobalService';
import {AppSettings } from '../../app/AppSettings';
import { MenuPage } from '../menu/menu';

import * as $ from 'jquery';

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
fotoImagen;

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
      this.fotoImagen = sessionStorage.getItem('FOTO_USUARIO');
      this.image = this.fotoImagen;
      //cargar los datos del perfil
      this.cargar();


  }
  closeModal(param) {
    //this.viewCtrl.dismiss();
    this.navCtrl.setRoot(MenuPage);
  }
  cargar(){
    var ausId = sessionStorage.getItem("USU_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });

    loader.present().then(() => {
      this.global.postPerfil(ausId).subscribe(dataPer => {
        var dat = dataPer.json();
        this.setear(dat);
      },
      err => {
        console.error(err);
        loader.dismiss();
      },
      () => {
        console.log('perfil cargado');
        loader.dismiss();
      }
    );
    });
  }
  setear(miPerfil){
    this.frmApodo = miPerfil.Apodo;
    this.frmIniciales = miPerfil.Iniciales;
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
        //si no hay un archivo esto esta bien, pero si no hay archivo y ya hay una imagen asociada esta mal
        if (this.fotoImagen){
          this.fileUnoName = this.fotoImagen;
        }
        else {
          this.fileUnoName = '';
        }
        
      }
      perfilGuardar.Foto = this.fileUnoName;


      this.global.sendPerfil(this.fileUno, perfilGuardar).subscribe(
        dataArchivo1 => {

          var datos = dataArchivo1.json();
          this.global.postPerfil(perfilGuardar.AusId).subscribe(dataPer => {
            var dat = dataPer.json();
            this.setear(dat);
            if (this.fileUnoName == ''){
              sessionStorage.setItem('FOTO_USUARIO', '../assets/imgs/no-imagen.png');
              $("#imgPerfilUsuario").attr("src", '../assets/imgs/no-imagen.png');
            }
            else {
              var setFoto = AppSettings.URL_FOTOS + dat.Foto;
              sessionStorage.setItem('FOTO_USUARIO', setFoto);
              $("#imgPerfilUsuario").attr("src", setFoto);
            }
            let sms = this.presentToast('Perfil guardado con éxito.');
          });
          
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
