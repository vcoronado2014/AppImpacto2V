import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
//pages
import { LoginPage } from '../login/login';
import { NovedadesPage } from '../novedades/novedades';
//servicios
import { AuthService } from '../../app/services/AuthService';
import { GlobalService } from '../../app/services/GlobalService';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
usuariosArr = [];
institucionesArr = [];
esAdministrador = false;
//para filtrar
nombreFiltrar;
filtrosInstitucion = [];
filtrados = [];
usuariosOriginal = [];
cantidadUsuarios = 0;

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingController,
    public global: GlobalService,
    public acceso: AuthService
  ) {


  }
  ionViewWillEnter() {
    var rolId = sessionStorage.getItem("ROL_ID");
    if (rolId == '1'){
      this.esAdministrador = true;
      this.nombreFiltrar = 'Todos';
    }
    this.cargarInstituciones();
    this.cargar();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }
  logout(){
    this.acceso.logout();
    //esto lo comentamos
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.cargar();
      refresher.complete();
    }, 2000);
  }
  cambioFiltros(e){
    //console.log(e.target.value);
    if (e.NombreCompleto && e.NombreCompleto != 'Todos'){
      this.usuariosArr = this.cargarFiltros(this.usuariosOriginal, e.NombreCompleto);
    }
    else {
      //mostramos todo
      this.usuariosArr = this.usuariosOriginal;

    }
  }
  cargarFiltros(arreglo, elemento){
    this.filtrados = [];
    arreglo.forEach(element => {
      if (element.OtroUno == elemento){
        this.filtrados.push(element);
      }
      
    });

    return this.filtrados;
  }
  cargar() {
    this.usuariosArr=[];
    //this.filtrosInstitucion = [];
    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.getUsuarios(instId, rolId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.usuariosArr = datos.proposals;
          this.usuariosOriginal = this.usuariosArr;
          this.cantidadUsuarios = this.usuariosArr.length;
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get solicitudes completed');
          loader.dismiss();
        }
      );
      
    });
  }
  cargarInstituciones() {
    this.filtrosInstitucion = [];

    var instId = sessionStorage.getItem("INST_ID");
    var rolId = sessionStorage.getItem("ROL_ID");
    let loader = this.loading.create({
      content: 'Cargando...',
    });
    loader.present().then(() => {
      this.global.postInstituciones(rolId, instId).subscribe(
        data => {
          //los datos importantes son
          //otrosiete = id institucion
          //otrodos = eliminado

          var datos = data.json();
          this.institucionesArr = datos.proposals;
          
          var filtroTodos = {
            NombreCompleto: 'Todos'
          };
          /*
          this.filtrosInstitucion.push(filtroTodos);
          */
          this.filtrosInstitucion = this.institucionesArr;
          this.filtrosInstitucion.splice(0, 0, filtroTodos);
        },
        err =>{ 
          console.error(err);
          loader.dismiss();
        },
        () => {
          console.log('get solicitudes completed');
          loader.dismiss();
        }
      );
      
    });
  }
}
