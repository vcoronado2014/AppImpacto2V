webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novedades_novedades__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rendicion_rendicion__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_documentos__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendario_calendario__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proyectos_proyectos__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientePage = /** @class */ (function () {
    function ClientePage(navCtrl, navParams) {
        //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /*
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
      };
      */
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__novedades_novedades__["a" /* NovedadesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__["a" /* UsuariosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__rendicion_rendicion__["a" /* RendicionPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__documentos_documentos__["a" /* DocumentosPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__calendario_calendario__["a" /* CalendarioPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_7__proyectos_proyectos__["a" /* ProyectosPage */];
    }
    ClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientePage');
    };
    ClientePage.prototype.ionViewWillEnter = function () {
        //this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    };
    ClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cliente',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\cliente\cliente.html"*/'<ion-content padding>\n\n\n\n    <ion-tabs id="tabCliente">\n\n        <ion-tab [root]="tab1Root" tabTitle="Novedades" tabIcon="chatbubbles" id="tabNovedades">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab2Root" tabTitle="Usuarios" tabIcon="people" id="tabUsuarios">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab3Root" tabTitle="Rendiciones" tabIcon="logo-usd" id="tabRendiciones">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab4Root" tabTitle="Documentos" tabIcon="document" id="tabDocumentos">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab5Root" tabTitle="Calendario" tabIcon="calendar" id="tabCalendario">\n\n        </ion-tab>        \n\n        <ion-tab [root]="tab6Root" tabTitle="Proyectos" tabIcon="book" id="tabProyectos">\n\n        </ion-tab>\n\n        <!--\n\n        <ion-tab [root]="tab1Root" tabTitle="Clientes" tabIcon="people" id="tabClientes">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab2Root"  tabTitle="Packs" tabIcon="barcode" id="tabPacks">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab3Root" tabTitle="Profesores" tabIcon="body" id="tabProfesores">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab4Root" tabTitle="Reporte" tabIcon="clipboard" id="tabPlanilla">\n\n        </ion-tab>\n\n    -->\n\n    </ion-tabs>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\cliente\cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ClientePage);
    return ClientePage;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisorImagenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//agregado ahora para las fotos
//import { PhotoViewer, PhotoViewerOptions } from '@ionic-native/photo-viewer';
/**
 * Generated class for the VisorImagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisorImagenPage = /** @class */ (function () {
    function VisorImagenPage(navCtrl, navParams, loading, toastCtrl, viewCtrl, 
        //private photoViewer: PhotoViewer,
        actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rutaImagen = this.navParams.get('item');
        this.idImagen = this.navParams.get('idImagen');
        this.mroId = this.navParams.get('MroId');
    }
    VisorImagenPage.prototype.closeModal = function (param) {
        this.viewCtrl.dismiss();
        //this.navCtrl.pop();
    };
    /*
    viewImage(){
      const option: PhotoViewerOptions = {
        share: true
      }
      alert(this.rutaImagen);
      this.photoViewer.show(this.rutaImagen, "titulo");
    }
    */
    VisorImagenPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad VisorImagenPage');
    };
    VisorImagenPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar esta imágen?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        //rutina para eliminar esta imagen
                        //this.delete(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    VisorImagenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visor-imagen',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\visor-imagen\visor-imagen.html"*/'<!--\n\n  Generated template for the VisorImagenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Imágen</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <img [src]="rutaImagen" style="width: 100%;" (click)="viewImage()" />\n\n  <ion-fab bottom right>\n\n    <button ion-fab class="bg-teal-800" (click)="presentActionSheet()"><ion-icon name="trash"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\visor-imagen\visor-imagen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], VisorImagenPage);
    return VisorImagenPage;
}());

//# sourceMappingURL=visor-imagen.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, sanitized) {
        this.http = http;
        this.sanitized = sanitized;
        //inicializamos los valores
        this.username = '';
        this.loggedIn = false;
        //this.url = config.getUrl(this.modo, 'Login');
    }
    AuthService.prototype.login = function (userInfo) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Login';
        //let url = 'http://api.asambleas.cl/api/login';
        var iJson = JSON.stringify(userInfo);
        return this.http.post(url, iJson, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        })
            .map(function (res) { return res.text(); })
            .map(function (res) {
            if (res == "error" || res == "nofound") {
                _this.loggedIn = false;
            }
            else {
                var retorno = JSON.parse(res);
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
                _this.username = userInfo.usuario;
                _this.loggedIn = true;
            }
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
        this.username = '';
        this.loggedIn = false;
    };
    AuthService.prototype.isLoggedId = function () {
        return this.loggedIn;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_novedad_crear_novedad__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editar_novedad_editar_novedad__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_InicioService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_novedadService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_AppSettings__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { } from 'ionic-nati'









/**
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovedadesPage = /** @class */ (function () {
    function NovedadesPage(navCtrl, navParams, loading, app, acceso, modalCtrl, ini, nov, viewCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.app = app;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.nov = nov;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.permisos = {
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
        };
        this.image = null;
    }
    NovedadesPage.prototype.cargar = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        this.solicitudes = [];
        this.image = __WEBPACK_IMPORTED_MODULE_10__app_AppSettings__["a" /* AppSettings */].URL_FOTOS + 'BB__4.png';
        loader.present().then(function () {
            //llamadas de negocio
            var instId = sessionStorage.getItem("INST_ID");
            var rolId = sessionStorage.getItem("ROL_ID");
            var usuId = sessionStorage.getItem("USU_ID");
            _this.ini.getMuro(instId, usuId).subscribe(function (data) {
                //datos
                _this.solicitudes = data.json();
                if (_this.solicitudes) {
                    for (var s in _this.solicitudes) {
                        //hace 3 meses xxx dias
                        var fechaStr = _this.solicitudes[s].FechaString.split(' ');
                        var mostrar = fechaStr[0] + ' ' + fechaStr[1] + ' ' + fechaStr[2];
                        _this.solicitudes[s].FechaString = mostrar;
                        _this.solicitudes[s].UrlImagen = 'trash';
                        _this.solicitudes[s].UrlImagenEdit = 'edit';
                        _this.solicitudes[s].VisibleEditar = false;
                        if (usuId == _this.solicitudes[s].UsuId)
                            _this.solicitudes[s].VisibleEditar = true;
                        //esta variable determina si hay archivos adjuntos y cuantos hay
                        var cantidadAdjuntos = 0;
                        var muestraImagenes = false;
                        var muestraImagenUno = false;
                        var muestraImagenDos = false;
                        var muestraImagenTres = false;
                        var muestraImagenCuatro = false;
                        //tratamos los archivos adjuntos
                        if (_this.solicitudes[s].ArchivosAdjuntos) {
                            //tiene archivos adjuntos
                            cantidadAdjuntos = _this.solicitudes[s].ArchivosAdjuntos.length;
                            muestraImagenes = true;
                            //recorremos los archivos adjuntos
                            for (var r in _this.solicitudes[s].ArchivosAdjuntos) {
                                _this.solicitudes[s].ArchivosAdjuntos[r].Src = __WEBPACK_IMPORTED_MODULE_10__app_AppSettings__["a" /* AppSettings */].URL_RAIZ + _this.solicitudes[s].ArchivosAdjuntos[r].NombreCarpeta + '/' + _this.solicitudes[s].ArchivosAdjuntos[r].NombreArchivo;
                            }
                        }
                        //variables para controlar las imagenes adjuntas
                        if (cantidadAdjuntos == 1) {
                            muestraImagenUno = true;
                            _this.solicitudes[s].ImgUno = _this.solicitudes[s].ArchivosAdjuntos[0].Src;
                            _this.solicitudes[s].ClaseUno = 'img-100 imagenes-muro';
                            _this.solicitudes[s].ColUno = 'col-12';
                            _this.solicitudes[s].IdUno = _this.solicitudes[s].ArchivosAdjuntos[0].Id;
                        }
                        if (cantidadAdjuntos == 2) {
                            muestraImagenUno = true;
                            muestraImagenDos = true;
                            _this.solicitudes[s].ImgUno = _this.solicitudes[s].ArchivosAdjuntos[0].Src;
                            _this.solicitudes[s].ImgDos = _this.solicitudes[s].ArchivosAdjuntos[1].Src;
                            _this.solicitudes[s].ClaseUno = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ColUno = 'col-6';
                            _this.solicitudes[s].ColDos = 'col-6';
                            _this.solicitudes[s].IdUno = _this.solicitudes[s].ArchivosAdjuntos[0].Id;
                            _this.solicitudes[s].IdDos = _this.solicitudes[s].ArchivosAdjuntos[1].Id;
                        }
                        if (cantidadAdjuntos == 3) {
                            muestraImagenUno = true;
                            muestraImagenDos = true;
                            muestraImagenTres = true;
                            _this.solicitudes[s].ImgUno = _this.solicitudes[s].ArchivosAdjuntos[0].Src;
                            _this.solicitudes[s].ImgDos = _this.solicitudes[s].ArchivosAdjuntos[1].Src;
                            _this.solicitudes[s].ImgTres = _this.solicitudes[s].ArchivosAdjuntos[2].Src;
                            _this.solicitudes[s].ClaseUno = 'img-100 imagenes-muro';
                            _this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ClaseTres = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ColUno = 'col-12';
                            _this.solicitudes[s].ColDos = 'col-6';
                            _this.solicitudes[s].ColTres = 'col-6';
                            _this.solicitudes[s].IdUno = _this.solicitudes[s].ArchivosAdjuntos[0].Id;
                            _this.solicitudes[s].IdDos = _this.solicitudes[s].ArchivosAdjuntos[1].Id;
                            _this.solicitudes[s].IdTres = _this.solicitudes[s].ArchivosAdjuntos[2].Id;
                        }
                        if (cantidadAdjuntos == 4) {
                            muestraImagenUno = true;
                            muestraImagenDos = true;
                            muestraImagenTres = true;
                            muestraImagenCuatro = true;
                            _this.solicitudes[s].ImgUno = _this.solicitudes[s].ArchivosAdjuntos[0].Src;
                            _this.solicitudes[s].ImgDos = _this.solicitudes[s].ArchivosAdjuntos[1].Src;
                            _this.solicitudes[s].ImgTres = _this.solicitudes[s].ArchivosAdjuntos[2].Src;
                            _this.solicitudes[s].ImgTres = _this.solicitudes[s].ArchivosAdjuntos[3].Src;
                            _this.solicitudes[s].ClaseUno = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ClaseDos = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ClaseTres = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ClaseCuatro = 'img-50 imagenes-muro';
                            _this.solicitudes[s].ColUno = 'col-6';
                            _this.solicitudes[s].ColDos = 'col-6';
                            _this.solicitudes[s].ColTres = 'col-6';
                            _this.solicitudes[s].ColCuatro = 'col-6';
                            _this.solicitudes[s].IdUno = _this.solicitudes[s].ArchivosAdjuntos[0].Id;
                            _this.solicitudes[s].IdDos = _this.solicitudes[s].ArchivosAdjuntos[1].Id;
                            _this.solicitudes[s].IdTres = _this.solicitudes[s].ArchivosAdjuntos[2].Id;
                            _this.solicitudes[s].IdCuatro = _this.solicitudes[s].ArchivosAdjuntos[3].Id;
                        }
                        _this.solicitudes[s].CantidadAdjuntos = cantidadAdjuntos;
                        _this.solicitudes[s].MuestraAdjuntos = muestraImagenes;
                        _this.solicitudes[s].MuestraImagenUno = muestraImagenUno;
                        _this.solicitudes[s].MuestraImagenDos = muestraImagenDos;
                        _this.solicitudes[s].MuestraImagenTres = muestraImagenTres;
                        _this.solicitudes[s].MuestraImagenCuatro = muestraImagenCuatro;
                        //*********************************************************
                        if (_this.solicitudes[s].RespuestaMuro) {
                            for (var t in _this.solicitudes[s].RespuestaMuro) {
                                var fechaStrC = _this.solicitudes[s].RespuestaMuro[t].FechaString.split(' ');
                                var mostrarC = fechaStrC[0] + ' ' + fechaStrC[1] + ' ' + fechaStrC[2];
                                _this.solicitudes[s].RespuestaMuro[t].FechaString = mostrarC;
                                _this.solicitudes[s].RespuestaMuro[t].UrlImagen = 'trash';
                            }
                        }
                    }
                }
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get completed');
                //terminamos;
                loader.dismiss();
            });
        });
    };
    NovedadesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.cargar();
            refresher.complete();
        }, 2000);
    };
    NovedadesPage.prototype.ionViewWillEnter = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.cargar();
    };
    NovedadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovedadesPage');
    };
    NovedadesPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //modal para agregar un comentario
    NovedadesPage.prototype.presentModal = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__["a" /* DetailNovedadPage */], { novedad: item });
        modal.present();
    };
    NovedadesPage.prototype.presentModalImagen = function (item, idImagen, id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__["a" /* VisorImagenPage */], { item: item, idImagen: idImagen, MroId: id });
        modal.present();
    };
    NovedadesPage.prototype.presentModalCrearNovedad = function (item) {
        if (item == null) {
            var entidad = {
                Id: 0,
                Eliminado: 0,
                InstId: sessionStorage.getItem("INST_ID"),
                RolId: sessionStorage.getItem("ROL_ID"),
                UsuId: sessionStorage.getItem("USU_ID"),
                PrioridadId: 1,
                ArchivosAdjuntos: [],
                RespuestaMuro: []
            };
            item = entidad;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__crear_novedad_crear_novedad__["a" /* CrearNovedadPage */], { item: item });
        modal.present();
    };
    NovedadesPage.prototype.presentModalEditarNovedad = function (item) {
        if (item == null) {
            var entidad = {
                Id: 0,
                Eliminado: 0,
                InstId: sessionStorage.getItem("INST_ID"),
                RolId: sessionStorage.getItem("ROL_ID"),
                UsuId: sessionStorage.getItem("USU_ID"),
                PrioridadId: 1,
                ArchivosAdjuntos: [],
                RespuestaMuro: []
            };
            item = entidad;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__editar_novedad_editar_novedad__["a" /* EditarNovedadPage */], { item: item });
        modal.present();
    };
    NovedadesPage.prototype.delete = function (item) {
        var _this = this;
        if (item) {
            var loader_1 = this.loading.create({
                content: 'eliminando...',
            });
            loader_1.present().then(function () {
                var id = item.Id;
                _this.nov.deleteRespuesta(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    //this.closeModal('actualizar');
                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                }, function (err) {
                    console.error(err);
                    loader_1.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_1.dismiss();
                });
            });
        }
    };
    NovedadesPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.delete(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    NovedadesPage.prototype.deleteMuro = function (item) {
        var _this = this;
        if (item) {
            var loader_2 = this.loading.create({
                content: 'eliminando...',
            });
            loader_2.present().then(function () {
                var id = item.Id;
                _this.nov.deleteMuro(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    //this.closeModal('actualizar');
                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                }, function (err) {
                    console.error(err);
                    loader_2.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_2.dismiss();
                });
            });
        }
    };
    NovedadesPage.prototype.presentActionSheetMuro = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.deleteMuro(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    NovedadesPage.prototype.changeListener = function ($event, item) {
        var _this = this;
        this.fileP = $event.target.files[0];
        var loader = this.loading.create({
            content: 'Cargando Archivo...',
        });
        loader.present().then(function () {
            //lo comentamos por mientras
            /*
              this.putImagen(this.fileP);
              */
            _this.image = _this.fileP.name;
            loader.dismiss();
        });
    };
    NovedadesPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    NovedadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedades',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\novedades\novedades.html"*/'<!--\n\n  Generated template for the NovedadesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Novedades</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!-- refresh-->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n      <ion-label no-padding no-margin text-center style="font-style: italic;\n\n      font-size: 0.9rem;">\n\n          Deslize hacia abajo para actualizar\n\n      </ion-label>\n\n\n\n  <button ion-button full icon-right color="light" (click)="presentModalCrearNovedad(null)"  *ngIf="permisos.CreaMuro == 1">\n\n  Nueva Novedad\n\n    <ion-icon name="chatbubbles"></ion-icon>\n\n  </button>\n\n  <!-- solo para pruebas de carga de archivos -->\n\n\n\n\n\n  <div *ngFor="let item of solicitudes">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <!-- lo comentamos por mientra\n\n          <img [src]="image" *ngIf="image" />\n\n          <ion-item>\n\n            <label>Carga de Archivos</label>\n\n            <input type="file" accept="image/*" (change)="changeListener($event, item)" style="opacity: 0" #fileInp>\n\n\n\n          </ion-item>\n\n        -->\n\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n\n          <ion-row>\n\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno, item.IdUno, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos, item.IdDos, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres, item.IdTres, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro, item.IdCuatro, item.Id)" />\n\n            </div>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n        <ion-card-title>\n\n          <ion-icon name="create" style="float: left;" *ngIf="item.VisibleEditar" class="fg-teal-800"  (click)="presentModalEditarNovedad(item)"></ion-icon>&nbsp;\n\n          {{item.NombreUsuario}}\n\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800"  (click)="presentActionSheetMuro(item)"></ion-icon>\n\n\n\n        </ion-card-title>\n\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n\n        <button style="float: right; font-size: 0.8rem;" ion-button small class="bg-red-300 fg-white" (click)="presentModal(item)" >Comentar</button>\n\n        <p text-wrap>\n\n          <strong>\n\n            {{item.Texto}}\n\n          </strong>\n\n        </p>\n\n        <!-- comentarios -->\n\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n\n          <ion-item>\n\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\novedades\novedades.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_9__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_9__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], NovedadesPage);
    return NovedadesPage;
}());

//# sourceMappingURL=novedades.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_novedadService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visor_imagen_visor_imagen__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//pages

/**
 * Generated class for the DetailNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailNovedadPage = /** @class */ (function () {
    function DetailNovedadPage(navCtrl, navParams, nov, loading, toastCtrl, viewCtrl, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nov = nov;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.permisos = {
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
        };
        this.solicitudes = [];
        this.novedad = this.navParams.get('novedad');
        if (this.novedad) {
            //esta todo ok, procesar
            this.solicitudes.push(this.novedad);
        }
    }
    DetailNovedadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailNovedadPage');
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
    };
    DetailNovedadPage.prototype.presentModalImagen = function (item, idImagen, id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__visor_imagen_visor_imagen__["a" /* VisorImagenPage */], { item: item, idImagen: idImagen, MroId: id });
        modal.present();
    };
    DetailNovedadPage.prototype.closeModal = function (param) {
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
    };
    DetailNovedadPage.prototype.enviar = function (item) {
        var _this = this;
        //aca enviamos el comentario
        var textoGuardar = this.textoEnviar;
        if (textoGuardar == '' || textoGuardar == undefined || textoGuardar == null) {
            var sms = this.presentToast('Debe ingresar un comentario válido');
        }
        else {
            //obtenemos algunos elementos
            if (item) {
                //extraemos los valores
                var prioridadId = item.PrioridadId;
                var mroId = item.Id;
                var instId = sessionStorage.getItem("INST_ID");
                var rolId = sessionStorage.getItem("ROL_ID");
                var usuId = sessionStorage.getItem("USU_ID");
                var loader_1 = this.loading.create({
                    content: 'Cargando...',
                });
                loader_1.present().then(function () {
                    _this.nov.putRespuesta(prioridadId, mroId, textoGuardar, instId.toString(), usuId, rolId).subscribe(function (data) {
                        //actualizar el contenido
                        var ret = data.json();
                        var respuesta = {
                            Eliminado: 0,
                            FechaCreacion: new Date(),
                            Id: ret.Id,
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
                        _this.solicitudes[0].RespuestaMuro.push(respuesta);
                    }, function (err) {
                        console.error(err);
                        loader_1.dismiss();
                    }, function () {
                        console.log('put completed');
                        //terminamos;
                        loader_1.dismiss();
                    });
                });
            }
        }
    };
    DetailNovedadPage.prototype.delete = function (item) {
        var _this = this;
        if (item) {
            var loader_2 = this.loading.create({
                content: 'eliminando...',
            });
            loader_2.present().then(function () {
                var id = item.Id;
                _this.nov.deleteRespuesta(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    _this.closeModal('actualizar');
                }, function (err) {
                    console.error(err);
                    loader_2.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_2.dismiss();
                });
            });
        }
    };
    DetailNovedadPage.prototype.deleteMuro = function (item) {
        var _this = this;
        if (item) {
            var loader_3 = this.loading.create({
                content: 'eliminando...',
            });
            loader_3.present().then(function () {
                var id = item.Id;
                _this.nov.deleteMuro(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    //this.closeModal('actualizar');
                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                }, function (err) {
                    console.error(err);
                    loader_3.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_3.dismiss();
                });
            });
        }
    };
    DetailNovedadPage.prototype.presentActionSheetMuro = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.deleteMuro(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DetailNovedadPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    DetailNovedadPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.delete(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DetailNovedadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-novedad',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\detail-novedad\detail-novedad.html"*/'<!--\n\n  Generated template for the DetailNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <div *ngFor="let item of solicitudes">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <!-- imagenes -->\n\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n\n          <ion-row>\n\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno, item.IdUno, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos, item.IdDos, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres, item.IdTres, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro, item.IdCuatro, item.Id)" />\n\n            </div>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n\n\n        <ion-card-title>\n\n          {{item.NombreUsuario}}\n\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800" (click)="presentActionSheetMuro(item)"></ion-icon>\n\n        </ion-card-title>\n\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n\n        <p text-wrap>\n\n          <strong>\n\n            {{item.Texto}}\n\n          </strong>\n\n        </p>\n\n        <ion-item>\n\n              <ion-label stacked>Ingrese Comentario</ion-label>\n\n              <ion-input type="text" [(ngModel)]="textoEnviar" required></ion-input>\n\n        </ion-item>\n\n        <button style="float: right; font-size: 0.8rem;" ion-button class="bg-red-300 fg-white" (click)="enviar(item)">Enviar</button>\n\n\n\n\n\n        <!-- comentarios -->\n\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n\n          <ion-item>\n\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n<!--\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button style="width: 100%;" class="bg-red-200 fg-white" (click)="closeModal()">Cancelar</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button style="width: 100%;" class="bg-red-400 fg-white" (click)="closeModal(\'actualizar\')">Aceptar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\detail-novedad\detail-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DetailNovedadPage);
    return DetailNovedadPage;
}());

//# sourceMappingURL=detail-novedad.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CrearNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearNovedadPage = /** @class */ (function () {
    function CrearNovedadPage(navCtrl, navParams, loading, acceso, modalCtrl, ini, nov, toastCtrl, viewCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.nov = nov;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.permisos = {
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
        };
        this.novedad = this.navParams.get('item');
        if (this.novedad) {
            if (this.novedad.Id > 0) {
                this.esNuevo = false;
            }
            else {
                this.esNuevo = true;
            }
        }
    }
    CrearNovedadPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad CrearNovedadPage');
    };
    CrearNovedadPage.prototype.closeModal = function (param) {
        this.viewCtrl.dismiss();
        /*
        if (param != null){
          this.navCtrl.setRoot(NovedadesPage);
        }
        else
        {
          this.navCtrl.setRoot(NovedadesPage);
        }
        */
    };
    CrearNovedadPage.prototype.changeListener = function ($event) {
        var _this = this;
        this.fileUno = $event.target.files[0];
        this.fileUnoName = this.fileUno.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    CrearNovedadPage.prototype.changeListenerDos = function ($event) {
        var _this = this;
        this.fileDos = $event.target.files[0];
        this.fileDosName = this.fileDos.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    CrearNovedadPage.prototype.changeListenerTres = function ($event) {
        var _this = this;
        this.fileTres = $event.target.files[0];
        this.fileTresName = this.fileTres.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    CrearNovedadPage.prototype.changeListenerCuatro = function ($event) {
        var _this = this;
        this.fileCuatro = $event.target.files[0];
        this.fileCuatroName = this.fileTres.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    CrearNovedadPage.prototype.enviarComentario = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            //recoger las variables para enviar
            if (_this.textoEnviar == '') {
                var toast = _this.presentToast('El texto de la novedad es obligatorio.');
                return;
            }
            //aca guardar la novedad, si todo sale bien ir guardando los demas elementos
            //setear los elementos del muro para guardar
            var instId = sessionStorage.getItem("INST_ID");
            var rolId = sessionStorage.getItem("ROL_ID");
            var usuId = sessionStorage.getItem("USU_ID");
            //para este elemento el tipoPadre = 1//novedades
            //para este elemento el nombre carpeta = 'Novedades'
            var tipoPadre = '1';
            var nombreCarpeta = 'Novedades';
            //el id es 0 porque es un elemento nuevo
            var id = '0';
            _this.nov.putMuro(1, _this.textoEnviar, instId, usuId, rolId, '0').subscribe(function (data) {
                var muro = data.json();
                if (muro) {
                    var idElemento = muro.Id.toString();
                    //esta todo correcto, ahora llamadas anidadas
                    var loaderArchivo_1 = _this.loading.create({
                        content: 'Cargando Archivos...',
                    });
                    loaderArchivo_1.present().then(function () {
                        if (_this.fileUno) {
                            //guardar archivo 1
                            _this.nov.sendFile(_this.fileUno, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo1) {
                                var datos = dataArchivo1.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 1 cargado');
                            });
                        }
                        if (_this.fileDos) {
                            //guardar archivo 2
                            _this.nov.sendFile(_this.fileDos, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo2) {
                                var datosDos = dataArchivo2.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 2 cargado');
                                //terminamos;
                            });
                        }
                        if (_this.fileTres) {
                            //guardar archivo 3
                            _this.nov.sendFile(_this.fileTres, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo3) {
                                var datosTres = dataArchivo3.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 3 cargado');
                            });
                        }
                        if (_this.fileCuatro) {
                            //guardar archivo 4
                            _this.nov.sendFile(_this.fileCuatro, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo4) {
                                var datosCuatro = dataArchivo4.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 4 cargado');
                            });
                        }
                        loaderArchivo_1.dismiss();
                        //aca esta todo ok, hay que direccionar a la pagina anterior
                        var sms = _this.presentToast('La novedad ha sido creada con éxito.');
                        //this.navCtrl.setRoot(NovedadesPage);
                        _this.viewCtrl.dismiss();
                    });
                }
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get inicio completed');
                //terminamos;
                loader.dismiss();
            });
            //loader.dismiss();
        });
    };
    CrearNovedadPage.prototype.delete = function (item) {
        var _this = this;
        if (item) {
            var loader_1 = this.loading.create({
                content: 'eliminando...',
            });
            loader_1.present().then(function () {
                var id = item.Id;
                _this.nov.deleteMuro(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    _this.closeModal('actualizar');
                }, function (err) {
                    console.error(err);
                    loader_1.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_1.dismiss();
                });
            });
        }
    };
    CrearNovedadPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.delete(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CrearNovedadPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CrearNovedadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-novedad',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\crear-novedad\crear-novedad.html"*/'<!--\n\n  Generated template for the CrearNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Crear Novedad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <!--\n\n  <ion-item>\n\n\n\n\n\n  </ion-item>\n\n\n\n  -->\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Archivos\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 1:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListener($event)"  #fileInput>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 2:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n\n\n              <input type="file" accept="image/*" (change)="changeListenerDos($event)" #fileInput2>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 3:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file"  accept="image/*"  (change)="changeListenerTres($event)"  #fileInput3>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 4:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListenerCuatro($event)"  #fileInput4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Novedad\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-label stacked>Ingrese Novedad\n\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n\n      </ion-label>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarComentario()">Guardar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\crear-novedad\crear-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CrearNovedadPage);
    return CrearNovedadPage;
}());

//# sourceMappingURL=crear-novedad.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {MatIconModule} from '@angular/material/icon';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(nav, auth, toastCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.presentToast = function (mensaje, posicion, duracion) {
            var toast = this.toastCtrl.create({
                message: mensaje,
                duration: duracion,
                position: posicion
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        };
    }
    LoginPage.prototype.Signup = function () {
        var _this = this;
        //validaciones
        if (!this.usuario) {
            var mi = this.presentToast('Nombre de usuario requerido', 'bottom', 4000);
            return;
        }
        if (!this.password) {
            var mi = this.presentToast('Password requerida', 'bottom', 4000);
            return;
        }
        var f = { usuario: this.usuario, password: this.password };
        this.auth.login(f)
            .subscribe(function (rs) { return _this.isLogged = rs; }, function (er) {
            //console.log(error)
            var mi = _this.presentToast('Usuario no exite', 'bottom', 4000);
        }, function () {
            if (_this.isLogged) {
                //this.nav.push(InicioPage)
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__cliente_cliente__["a" /* ClientePage */])
                    .then(function (data) { return console.log(data); }, function (error) {
                    //console.log(error)
                    var mi = _this.presentToast(error, 'bottom', 4000);
                });
            }
            else {
                //incorrecto
                console.log('Acceso denegado');
                var mi = _this.presentToast('Usuario no exite', 'bottom', 4000);
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ingreso</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="color-fixed">\n\n<div >\n\n  <ion-row class="encabezado">\n\n    <h2 class="titulo">Bienvenido a la Aplicación de Asambleas</h2>\n\n  </ion-row>\n\n    <ion-row class="bg-transparente">\n\n      <ion-col class="bg-transparente">\n\n        <ion-list inset class="bg-transparente fg-blanco">\n\n\n\n          <ion-item class="bg-transparente fg-blanco">\n\n            <ion-label  class="bg-transparente fg-blanco" floating>Nombre de Usuario</ion-label>\n\n            <ion-input type="text" [(ngModel)]="usuario" required class="bg-transparente fg-blanco"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item  class="bg-transparente fg-blanco">\n\n            <ion-label floating  class="bg-transparente fg-blanco">Password</ion-label>\n\n            <ion-input  class="bg-transparente fg-blanco" type="password" [(ngModel)]="password" required></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col class="signup-col">\n\n        <button ion-button class="btn-color" block (click)="Signup()">Ingresar</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n</div>\n\n<!-- fav -->\n\n  <ion-fab top right>\n\n    <button ion-fab mini class="btn-color"><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list>\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-title text-wrap>@Copyright 2018 Impacto 2V SPA</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditarNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarNovedadPage = /** @class */ (function () {
    function EditarNovedadPage(navCtrl, navParams, loading, acceso, modalCtrl, ini, viewCtrl, nov, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.viewCtrl = viewCtrl;
        this.nov = nov;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.permisos = {
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
        };
        this.novedad = this.navParams.get('item');
        if (this.novedad) {
            this.textoEnviar = this.novedad.Texto;
            if (this.novedad.Id > 0) {
                this.esNuevo = false;
            }
            else {
                this.esNuevo = true;
            }
        }
    }
    EditarNovedadPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad EditarNovedadPage');
    };
    EditarNovedadPage.prototype.closeModal = function (param) {
        this.viewCtrl.dismiss();
        /*
        if (param != null){
          this.navCtrl.setRoot(NovedadesPage);
        }
        else
        {
          this.navCtrl.setRoot(NovedadesPage);
        }
        */
    };
    EditarNovedadPage.prototype.changeListener = function ($event) {
        var _this = this;
        this.fileUno = $event.target.files[0];
        this.fileUnoName = this.fileUno.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileUnoName) {
                    //error
                    _this.fileUno = null;
                    _this.fileUnoName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    EditarNovedadPage.prototype.changeListenerDos = function ($event) {
        var _this = this;
        this.fileDos = $event.target.files[0];
        this.fileDosName = this.fileDos.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileDosName) {
                    //error
                    _this.fileDos = null;
                    _this.fileDosName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    EditarNovedadPage.prototype.changeListenerTres = function ($event) {
        var _this = this;
        this.fileTres = $event.target.files[0];
        this.fileTresName = this.fileTres.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileCuatroName) {
                if (_this.fileCuatroName == _this.fileTresName) {
                    //error
                    _this.fileTres = null;
                    _this.fileTresName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    EditarNovedadPage.prototype.changeListenerCuatro = function ($event) {
        var _this = this;
        this.fileCuatro = $event.target.files[0];
        this.fileCuatroName = this.fileTres.name;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            if (_this.fileUnoName) {
                if (_this.fileUnoName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileDosName) {
                if (_this.fileDosName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            if (_this.fileTresName) {
                if (_this.fileTresName == _this.fileCuatroName) {
                    //error
                    _this.fileCuatro = null;
                    _this.fileCuatroName = '';
                    $event.target.value = null;
                    var toast = _this.presentToast('Este archivo ya se encuentra seleccionado, elija otro');
                    loader.dismiss();
                    return;
                }
            }
            loader.dismiss();
        });
    };
    EditarNovedadPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EditarNovedadPage.prototype.enviarComentario = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            //recoger las variables para enviar
            if (_this.textoEnviar == '') {
                var toast = _this.presentToast('El texto de la novedad es obligatorio.');
                return;
            }
            //aca guardar la novedad, si todo sale bien ir guardando los demas elementos
            //setear los elementos del muro para guardar
            var instId = sessionStorage.getItem("INST_ID");
            var rolId = sessionStorage.getItem("ROL_ID");
            var usuId = sessionStorage.getItem("USU_ID");
            //para este elemento el tipoPadre = 1//novedades
            //para este elemento el nombre carpeta = 'Novedades'
            var tipoPadre = '1';
            var nombreCarpeta = 'Novedades';
            //
            var id = _this.novedad.Id.toString();
            _this.nov.putMuro(1, _this.textoEnviar, instId, usuId, rolId, id).subscribe(function (data) {
                var muro = data.json();
                if (muro) {
                    var idElemento = muro.Id.toString();
                    //esta todo correcto, ahora llamadas anidadas
                    var loaderArchivo_1 = _this.loading.create({
                        content: 'Cargando Archivos...',
                    });
                    loaderArchivo_1.present().then(function () {
                        if (_this.fileUno) {
                            //guardar archivo 1
                            _this.nov.sendFile(_this.fileUno, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo1) {
                                var datos = dataArchivo1.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 1 cargado');
                            });
                        }
                        if (_this.fileDos) {
                            //guardar archivo 2
                            _this.nov.sendFile(_this.fileDos, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo2) {
                                var datosDos = dataArchivo2.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 2 cargado');
                                //terminamos;
                            });
                        }
                        if (_this.fileTres) {
                            //guardar archivo 3
                            _this.nov.sendFile(_this.fileTres, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo3) {
                                var datosTres = dataArchivo3.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 3 cargado');
                            });
                        }
                        if (_this.fileCuatro) {
                            //guardar archivo 4
                            _this.nov.sendFile(_this.fileCuatro, idElemento, instId, tipoPadre, nombreCarpeta, id).subscribe(function (dataArchivo4) {
                                var datosCuatro = dataArchivo4.json();
                            }, function (err) {
                                console.error(err);
                            }, function () {
                                console.log('Archivo 4 cargado');
                            });
                        }
                        loaderArchivo_1.dismiss();
                        //aca esta todo ok, hay que direccionar a la pagina anterior
                        var sms = _this.presentToast('La novedad ha sido creada con éxito.');
                        //this.navCtrl.setRoot(NovedadesPage);
                        _this.viewCtrl.dismiss();
                    });
                }
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get inicio completed');
                //terminamos;
                loader.dismiss();
            });
            //loader.dismiss();
        });
    };
    EditarNovedadPage.prototype.delete = function (item) {
        var _this = this;
        if (item) {
            var loader_1 = this.loading.create({
                content: 'eliminando...',
            });
            loader_1.present().then(function () {
                var id = item.Id;
                _this.nov.deleteMuro(id).subscribe(function (data) {
                    //actualizar el contenido
                    var ret = data.json();
                    //por mientras
                    _this.closeModal('actualizar');
                }, function (err) {
                    console.error(err);
                    loader_1.dismiss();
                }, function () {
                    console.log('put completed');
                    //terminamos;
                    loader_1.dismiss();
                });
            });
        }
    };
    EditarNovedadPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Está seguro de eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.delete(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditarNovedadPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditarNovedadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-novedad',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\editar-novedad\editar-novedad.html"*/'<!--\n\n  Generated template for the EditarNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-buttons style="float: right;">\n\n      <button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Editar Novedad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Novedad\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-label stacked>Ingrese Novedad\n\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n\n      </ion-label>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Imágenes\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <div [class]="novedad.ClaseUno" *ngIf="novedad.MuestraImagenUno">\n\n            <img [src]="novedad.ImgUno"/>\n\n          </div>\n\n          <ion-col col-12 *ngIf="novedad.MuestraImagenUno == false">\n\n            <ion-icon name="document"></ion-icon> Archivo 1:\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="novedad.MuestraImagenUno == false">\n\n            <input type="file" accept="image/*" (change)="changeListener($event)"  #fileInput>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 2:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n\n\n            <input type="file" accept="image/*" (change)="changeListenerDos($event)" #fileInput2>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 3:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file"  accept="image/*"  (change)="changeListenerTres($event)"  #fileInput3>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 4:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListenerCuatro($event)"  #fileInput4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarComentario()">Guardar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\editar-novedad\editar-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], EditarNovedadPage);
    return EditarNovedadPage;
}());

//# sourceMappingURL=editar-novedad.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

//servicios


/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.usuariosArr = [];
        this.institucionesArr = [];
        this.esAdministrador = false;
        this.filtrosInstitucion = [];
        this.filtrados = [];
        this.usuariosOriginal = [];
        this.cantidadUsuarios = 0;
        this.permisos = {
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
        };
    }
    UsuariosPage.prototype.ionViewWillEnter = function () {
        var rolId = sessionStorage.getItem("ROL_ID");
        if (rolId == '1') {
            this.esAdministrador = true;
            this.nombreFiltrar = 'Todos';
        }
        this.cargarInstituciones();
        this.cargar();
    };
    UsuariosPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad SolicitudesPage');
    };
    UsuariosPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    UsuariosPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.cargar();
            refresher.complete();
        }, 2000);
    };
    UsuariosPage.prototype.cambioFiltros = function (e) {
        //console.log(e.target.value);
        if (e.NombreCompleto && e.NombreCompleto != 'Todos') {
            this.usuariosArr = this.cargarFiltros(this.usuariosOriginal, e.NombreCompleto);
        }
        else {
            //mostramos todo
            this.usuariosArr = this.usuariosOriginal;
        }
    };
    UsuariosPage.prototype.cargarFiltros = function (arreglo, elemento) {
        var _this = this;
        this.filtrados = [];
        arreglo.forEach(function (element) {
            if (element.OtroUno == elemento) {
                _this.filtrados.push(element);
            }
        });
        return this.filtrados;
    };
    UsuariosPage.prototype.cargar = function () {
        var _this = this;
        this.usuariosArr = [];
        //this.filtrosInstitucion = [];
        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.getUsuarios(instId, rolId).subscribe(function (data) {
                //los datos importantes son
                //otrosiete = id institucion
                //otrodos = eliminado
                var datos = data.json();
                _this.usuariosArr = datos.proposals;
                _this.usuariosOriginal = _this.usuariosArr;
                _this.cantidadUsuarios = _this.usuariosArr.length;
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get solicitudes completed');
                loader.dismiss();
            });
        });
    };
    UsuariosPage.prototype.cargarInstituciones = function () {
        var _this = this;
        this.filtrosInstitucion = [];
        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postInstituciones(rolId, instId).subscribe(function (data) {
                //los datos importantes son
                //otrosiete = id institucion
                //otrodos = eliminado
                var datos = data.json();
                _this.institucionesArr = datos.proposals;
                var filtroTodos = {
                    NombreCompleto: 'Todos'
                };
                /*
                this.filtrosInstitucion.push(filtroTodos);
                */
                _this.filtrosInstitucion = _this.institucionesArr;
                _this.filtrosInstitucion.splice(0, 0, filtroTodos);
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get solicitudes completed');
                loader.dismiss();
            });
        });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\usuarios\usuarios.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Usuarios</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- refresh-->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n\n    font-size: 0.9rem;">\n\n        Deslize hacia abajo para actualizar\n\n    </ion-label>\n\n    <ion-item *ngIf="esAdministrador">\n\n        <ion-label>Seleccione Institución</ion-label>\n\n        <ion-select [(ngModel)]="nombreFiltrar">\n\n          <ion-option *ngFor="let filt of filtrosInstitucion" (ionSelect)="cambioFiltros(filt)">{{filt.NombreCompleto}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    <!-- lista-->\n\n    <ion-list *ngIf="esAdministrador">\n\n        <ion-item-sliding *ngFor="let clie of usuariosArr">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <text-avatar [text]="clie.NombreCompleto" item-left></text-avatar>\n\n            </ion-avatar>\n\n            <h2>{{clie.NombreCompleto}}</h2>\n\n            <p>\n\n              {{clie.OtroUno}}\n\n              <!--\n\n              <ion-icon *ngIf="prof.Activo == 1" name="checkmark"> Activo</ion-icon>\n\n              <ion-icon *ngIf="prof.Activo == 0" name="close"> Inactivo</ion-icon>\n\n              -->\n\n            </p>\n\n          </ion-item>\n\n          <!--\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="asociarComunas(prof)">\n\n              <ion-icon name="globe"></ion-icon>\n\n              Comunas\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="editarProfesor(prof)">\n\n              <ion-icon name="create"></ion-icon>\n\n              Editar\n\n            </button>\n\n            <button ion-button color="danger" *ngIf="prof.Activo == 1"  (click)="desactivarProfesor(prof)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Eliminar\n\n            </button>\n\n            <button ion-button color="secondary" *ngIf="prof.Activo == 0"  (click)="activarProfesor(prof)">\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              Activar\n\n            </button>\n\n          </ion-item-options>\n\n        -->\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n\n\n      <ion-card *ngIf="esAdministrador == false">\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Usuarios del Sistema\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <ion-icon name="people" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <p text-wrap>Actualmente existen <strong>{{cantidadUsuarios}}</strong> usuarios para tu asamblea.</p>\n\n          </ion-item>\n\n      \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n    <button ion-fab mini (click)="logout()" class="btn-color">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendicionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_rendicion_crear_rendicion__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_GlobalService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages


//servicios



/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RendicionPage = /** @class */ (function () {
    function RendicionPage(app, navCtrl, navParams, loading, global, modalCtrl, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.acceso = acceso;
        //usuariosArr = [];
        this.rendicionesArr = [];
        this.esAdministrador = false;
        this.filtrosInstitucion = [];
        this.filtrados = [];
        this.rendicionesOriginal = [];
        this.cantidadRendiciones = 0;
        this.permisos = {
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
        };
    }
    RendicionPage.prototype.ionViewWillEnter = function () {
        var rolId = sessionStorage.getItem("ROL_ID");
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        if (rolId == '1') {
            this.esAdministrador = true;
            this.nombreFiltrar = 'Todos';
        }
        //this.cargarInstituciones();
        this.cargar();
    };
    RendicionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolicitudesPage');
        /*
        this.barChart = new Chart(this.barCanvas.nativeElement, {
    
          type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
    
      });
    
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    
          type: 'doughnut',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }
    
      });
      */
    };
    RendicionPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RendicionPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.cargar();
            refresher.complete();
        }, 2000);
    };
    RendicionPage.prototype.cambioFiltros = function (e) {
        //console.log(e.target.value);
        if (e.NombreCompleto && e.NombreCompleto != 'Todos') {
            this.rendicionesArr = this.cargarFiltros(this.rendicionesOriginal, e.NombreCompleto);
        }
        else {
            //mostramos todo
            this.rendicionesArr = this.rendicionesOriginal;
        }
    };
    RendicionPage.prototype.cargarFiltros = function (arreglo, elemento) {
        var _this = this;
        this.filtrados = [];
        arreglo.forEach(function (element) {
            if (element.OtroUno == elemento) {
                _this.filtrados.push(element);
            }
        });
        return this.filtrados;
    };
    RendicionPage.prototype.transformarFecha = function (fechaStr) {
        var retorno = fechaStr;
        var arrFecha = fechaStr.split('-');
        if (arrFecha && arrFecha.length == 3) {
            var mes = parseInt(arrFecha[0]);
            var dia = parseInt(arrFecha[1]);
            var anio = parseInt(arrFecha[2]);
            var mesStr = '';
            var diaStr = '';
            if (mes < 10) {
                mesStr = '0' + mes.toString();
            }
            else {
                mesStr = mes.toString();
            }
            if (dia < 10) {
                diaStr = '0' + dia.toString();
            }
            else {
                diaStr = dia.toString();
            }
            retorno = diaStr + '-' + mesStr + '-' + anio.toString();
        }
        return retorno;
    };
    RendicionPage.prototype.cargar = function () {
        var _this = this;
        this.rendicionesArr = [];
        //this.filtrosInstitucion = [];
        var instId = sessionStorage.getItem("INST_ID");
        var rolId = sessionStorage.getItem("ROL_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postRendiciones(instId).subscribe(function (data) {
                //los datos importantes son
                //otrosiete = id institucion
                //otrodos = eliminado
                var datos = data.json();
                var procesar = datos.proposals;
                procesar.forEach(function (rendicion) {
                    //hay que transformar la fecha ya que viene en un formato inválido
                    //m-dd-yyyy
                    rendicion.NombreUsuario = _this.transformarFecha(rendicion.NombreUsuario);
                    _this.rendicionesArr.push(rendicion);
                });
                //this.rendicionesArr = datos.proposals;
                _this.rendicionesOriginal = _this.rendicionesArr;
                _this.cantidadRendiciones = _this.rendicionesArr.length;
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get rendciones completed');
                loader.dismiss();
            });
        });
    };
    //abrir la pagina de creaciòn de rendicion
    RendicionPage.prototype.presentModal = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__crear_rendicion_crear_rendicion__["a" /* CrearRendicionPage */], { rendicion: item });
        modal.onDidDismiss(function (data) {
            // Data is your data from the modal
            if (data != undefined) {
                _this.cargar();
            }
        });
        modal.present();
    };
    RendicionPage.prototype.openUrl = function (url) {
        var browser = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        browser.create(url, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieChart'),
        __metadata("design:type", Object)
    ], RendicionPage.prototype, "pieChart", void 0);
    RendicionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rendicion',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\rendicion\rendicion.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-300 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Rendiciones</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- refresh-->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n      <ion-label no-padding no-margin text-center style="font-style: italic;\n\n          font-size: 0.9rem;">\n\n        Deslize hacia abajo para actualizar\n\n      </ion-label>\n\n    <!--\n\n    <ion-item *ngIf="esAdministrador">\n\n        <ion-label>Seleccione Institución</ion-label>\n\n        <ion-select [(ngModel)]="nombreFiltrar">\n\n          <ion-option *ngFor="let filt of filtrosInstitucion" (ionSelect)="cambioFiltros(filt)">{{filt.NombreCompleto}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    -->\n\n    <!-- lista-->\n\n    <ion-list *ngIf="esAdministrador">\n\n      \n\n        <button ion-button full icon-right color="light" (click)="presentModal(null)" *ngIf="permisos.CreaRendicion == \'1\'">\n\n          Nueva Rendición\n\n          <ion-icon name="dolar"></ion-icon>\n\n        </button>\n\n      \n\n        <ion-item-sliding *ngFor="let clie of rendicionesArr">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <!--salida-->\n\n                <ion-icon name="arrow-back" item-left *ngIf="clie.OtroUno == \'Egreso\'" style="color: red; font-size: 3em;"></ion-icon>\n\n                <!--entrada-->\n\n                <ion-icon name="arrow-forward" item-left  *ngIf="clie.OtroUno == \'Ingreso\'" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <h2>{{clie.NombreCompleto}}</h2>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div text-wrap *ngIf="clie.OtroUno == \'Egreso\'" style="color: red;">{{clie.OtroUno}}</div>\n\n                <div text-wrap *ngIf="clie.OtroUno == \'Ingreso\'">{{clie.OtroUno}}</div>\n\n              </ion-col>\n\n              <ion-col>\n\n            \n\n            \n\n                <ion-badge color="danger" *ngIf="clie.OtroUno == \'Egreso\'">{{clie.OtroCuatro}}</ion-badge>\n\n                <ion-badge *ngIf="clie.OtroUno == \'Ingreso\'">{{clie.OtroCuatro}}</ion-badge>\n\n            \n\n              </ion-col>\n\n              <ion-col center text-center>\n\n                <ion-note style="font-size: small;">\n\n                  {{clie.NombreUsuario}}\n\n                </ion-note>\n\n              </ion-col>\n\n              <!-- archivo a descargar -->\n\n              <ion-col center text-center *ngIf="clie.Rol != \'#\'">\n\n                <button ion-button icon-only (click)="openUrl(clie.Rol)" small color="secondary">\n\n                  <ion-icon name="cloud-download"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n            <span style="font-size: 0.6em;font-style: italic;">Deslice a la izquierda para ver opciones</span>\n\n          </ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary" (click)="presentModal(clie)" *ngIf="permisos.ModificaRendicion == \'1\'">\n\n              <ion-icon name="create"></ion-icon>\n\n              Editar\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n\n\n      <ion-card *ngIf="esAdministrador == false">\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Usuarios del Sistema\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <ion-icon name="people" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <p text-wrap>Actualmente existen <strong>{{cantidadUsuarios}}</strong> usuarios para tu asamblea.</p>\n\n          </ion-item>\n\n      \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\rendicion\rendicion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */]])
    ], RendicionPage);
    return RendicionPage;
}());

//# sourceMappingURL=rendicion.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearRendicionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_GlobalService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CrearRendicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearRendicionPage = /** @class */ (function () {
    function CrearRendicionPage(navCtrl, navParams, loading, modalCtrl, toastCtrl, viewCtrl, global, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.actionSheetCtrl = actionSheetCtrl;
        this.permisos = {
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
        };
        __WEBPACK_IMPORTED_MODULE_4_moment__["locale"]('es');
        //capturamos el elemento
        this.rendicion = this.navParams.get('rendicion');
        if (this.rendicion) {
            if (this.rendicion.Id > 0) {
                this.esNuevo = false;
                this.idRendicion = this.rendicion.Id;
                this.frmDetalle = this.rendicion.NombreCompleto;
                this.frmFecha = this.rendicion.NombreUsuario;
                this.frmTipoMovimiento = this.rendicion.OtroCinco;
                this.frmMonto = this.rendicion.OtroTres;
                this.frmNumeroComprobante = this.rendicion.OtroDos;
                this.urlDescarga = this.rendicion.Rol;
                this.nombreDocumento = this.rendicion.UrlDocumento;
            }
            else {
                this.esNuevo = true;
                this.idRendicion = 0;
                this.frmFecha = __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD-MM-YYYY");
            }
        }
        else {
            this.esNuevo = true;
            this.idRendicion = 0;
            this.frmFecha = __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD-MM-YYYY");
        }
    }
    CrearRendicionPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad CrearRendicionPage');
    };
    CrearRendicionPage.prototype.closeModal = function (param) {
        this.viewCtrl.dismiss();
    };
    CrearRendicionPage.prototype.changeListener = function ($event) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Verificando...',
        });
        loader.present().then(function () {
            _this.fileUno = $event.target.files[0];
            _this.fileUnoName = _this.fileUno.name;
            loader.dismiss();
        });
    };
    CrearRendicionPage.prototype.openUrl = function () {
        var url = this.urlDescarga;
        var browser = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        browser.create(url, '_blank');
    };
    CrearRendicionPage.prototype.enviarRendicion = function () {
        var _this = this;
        //validaciones
        if (this.frmDetalle == '' || this.frmDetalle == null || this.frmDetalle == undefined) {
            var toast = this.presentToast('El detalle es obligatorio.');
            return;
        }
        if (this.frmNumeroComprobante == '' || this.frmNumeroComprobante == null || this.frmNumeroComprobante == undefined) {
            var toast = this.presentToast('El nùmero de comprobante es obligatorio.');
            return;
        }
        if (this.frmMonto == '' || this.frmMonto == null || this.frmMonto == undefined) {
            var toast = this.presentToast('El monto es obligatorio.');
            return;
        }
        if (this.frmTipoMovimiento == '' || this.frmTipoMovimiento == null || this.frmTipoMovimiento == undefined) {
            var toast = this.presentToast('El tipo de movimiento es obligatorio.');
            return;
        }
        var loader = this.loading.create({
            content: 'Guardando...',
        });
        loader.present().then(function () {
            if (!_this.fileUno) {
                _this.fileUnoName = '';
            }
            var instId = sessionStorage.getItem("INST_ID");
            var rolId = sessionStorage.getItem("ROL_ID");
            var usuId = sessionStorage.getItem("USU_ID");
            _this.rendicion = {
                Id: _this.idRendicion,
                Detalle: _this.frmDetalle,
                NumeroComprobante: _this.frmNumeroComprobante,
                Monto: _this.frmMonto,
                IdTipoMovimiento: _this.frmTipoMovimiento,
                IdUsuario: usuId,
                InstId: instId,
                NombreArchivo: _this.fileUnoName
            };
            _this.global.sendRendicion(_this.fileUno, _this.rendicion).subscribe(function (dataArchivo1) {
                var datos = dataArchivo1.json();
                //loader.dismiss();
                var sms = _this.presentToast('La Rendicion ha sido creada con éxito.');
                _this.viewCtrl.dismiss(datos);
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('Archivo 1 cargado');
                loader.dismiss();
            });
        });
    };
    CrearRendicionPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CrearRendicionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-rendicion',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\crear-rendicion\crear-rendicion.html"*/'<!--\n  Generated template for the CrearRendicionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-teal-600 fg-light">\n\n  <ion-navbar>\n    <ion-title>Crear Rendición</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Fecha</ion-label>\n            <ion-input type="text" [(ngModel)]="frmFecha" [disabled]="true"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Detalle (*)</ion-label>\n          <ion-input type="text" [(ngModel)]="frmDetalle" required></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Tipo Movimiento</ion-label>\n          <ion-select [(ngModel)]="frmTipoMovimiento">\n            <ion-option value="1">Ingreso</ion-option>\n            <ion-option value="2">Egreso</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Número Comprobante (*)</ion-label>\n          <ion-input type="text" required [(ngModel)]="frmNumeroComprobante"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Monto (*)</ion-label>\n          <ion-input type="number" required [(ngModel)]="frmMonto"></ion-input>\n        </ion-item>\n\n        \n          <ion-label *ngIf="urlDescarga != \'#\'" text-center style="font-style: italic;">{{nombreDocumento}}</ion-label>\n          <button ion-button full clear (click)="openUrl()" color="secondary" *ngIf="urlDescarga != \'#\'">\n            <ion-icon name="cloud-download"></ion-icon>&nbsp;Descargar\n          </button>\n        \n\n\n        <ion-item>\n          <ion-row>\n            <ion-col col-12>\n              <ion-icon name="document"></ion-icon> Archivo:\n            </ion-col>\n            <ion-col col-12>\n              <input type="file" accept="image/*" (change)="changeListener($event)" #fileInput>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      \n      </ion-list>\n      <!--\n    <ion-card>\n      <ion-card-header>\n        Rendición\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label floating>Detalle\n          \n        </ion-label>\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n      </ion-card-content>\n    </ion-card>\n  -->\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarRendicion()">Guardar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\crear-rendicion\crear-rendicion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CrearRendicionPage);
    return CrearRendicionPage;
}());

//# sourceMappingURL=crear-rendicion.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    GlobalService.prototype.postSolicitudes = function (instId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Solicitudes';
        var dataGet = { InstId: instId };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.getUsuarios = function (instId, rolId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'ListarUsuarios?instId=' + instId + '&rolId=' + rolId;
        var dataGet = { InstId: instId };
        var data = this.http.get(url);
        return data;
    };
    GlobalService.prototype.postInstituciones = function (buscarId, idUsuario) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Institucion';
        var dataGet = { IdUsuario: idUsuario.toString() };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.postRendiciones = function (instId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Rendicion';
        var dataGet = { InstId: instId };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.postDocumentosUsuario = function (instId, usuId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'FileDocumento';
        var dataGet = { InstId: instId.toString(), UsuId: usuId.toString() };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.postCalendario = function (instId, tipo) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Calendario';
        var dataGet = { InstId: instId.toString(), Tipo: tipo.toString() };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.postProyectos = function (instId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Proyecto';
        var dataGet = { InstId: instId.toString() };
        var data = this.http.post(url, dataGet, {
            headers: this.headers
        });
        return data;
    };
    GlobalService.prototype.sendRendicion = function (File, rendicion) {
        var model = new FormData();
        model.append("UploadedImage", File);
        model.append("rendicion", JSON.stringify(rendicion));
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'File';
        var data = this.http.post(url, model, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({})
        });
        return data;
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=GlobalService.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_AppSettings__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

//servicios




/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentosPage = /** @class */ (function () {
    function DocumentosPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.documentosArr = [];
        this.permisos = {
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
        };
    }
    DocumentosPage.prototype.ionViewWillEnter = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        var rolId = sessionStorage.getItem("ROL_ID");
        this.cargar();
        //this.openUrl();
    };
    DocumentosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentosPage');
    };
    DocumentosPage.prototype.cargar = function () {
        var _this = this;
        this.documentosArr = [];
        //this.filtrosInstitucion = [];
        var instId = sessionStorage.getItem("INST_ID");
        var usuId = sessionStorage.getItem("USU_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postDocumentosUsuario(instId, usuId).subscribe(function (data) {
                var datos = data.json();
                var datosProcesar = datos.proposals;
                var urlPrevia = __WEBPACK_IMPORTED_MODULE_6__app_AppSettings__["a" /* AppSettings */].URL_RAIZ + 'Repositorio/';
                if (datosProcesar && datosProcesar.length > 0) {
                    //ahora procesamos las rutas para mostrar los archivos
                    datosProcesar.forEach(function (element) {
                        element.UrlMostrar = urlPrevia + element.NombreCompleto;
                        _this.documentosArr.push(element);
                    });
                }
                //this.documentosArr = datos.proposals;
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get rendciones completed');
                loader.dismiss();
            });
        });
    };
    DocumentosPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    DocumentosPage.prototype.openUrl = function (url) {
        var browser = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        browser.create(url, '_blank');
    };
    DocumentosPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.cargar();
            refresher.complete();
        }, 2000);
    };
    DocumentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentos',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\documentos\documentos.html"*/'<!--\n  Generated template for the DocumentosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n  <ion-navbar>\n    <ion-title>Documentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- refresh-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n                font-size: 0.9rem;">\n      Deslize hacia abajo para actualizar\n    </ion-label>\n    <!--contenido de la pagina -->\n    <!-- lista-->\n    <ion-list>\n        <ion-item-sliding *ngFor="let clie of documentosArr">\n          <ion-item>\n            <ion-avatar item-start>\n              <!--descargar-->\n                <ion-icon name="cloud-download" item-left style="font-size: 3em;" (click)="openUrl(clie.UrlMostrar)"></ion-icon>\n                \n                \n            </ion-avatar>\n            <h2 text-wrap>{{clie.NombreCompleto}}</h2>\n            <ion-badge slot="end">{{clie.OtroUno}}</ion-badge>\n            <ion-row>\n                <ion-col>\n\n                    <div text-wrap>{{clie.OtroCinco}}</div>\n\n                </ion-col>\n                <ion-col center text-center>\n                  <ion-note>\n                      {{clie.NombreUsuario}}\n                  </ion-note>\n                </ion-col>\n              </ion-row>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>    \n\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\documentos\documentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
    ], DocumentosPage);
    return DocumentosPage;
}());

//# sourceMappingURL=documentos.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_novedadService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_GlobalService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_locales_es_CL__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { } from 'ionic-nati'








Object(__WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_8__angular_common_locales_es_CL__["a" /* default */]);
/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, navParams, loading, app, acceso, modalCtrl, ini, nov, global, viewCtrl, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.app = app;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.nov = nov;
        this.global = global;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        //registerLocaleData(localeFr);
        this.permisos = {
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
        };
        this.calendar = {
            mode: 'month',
            locale: 'es-CL',
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                }
            },
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    CalendarioPage.prototype.loadEvents = function () {
        this.eventSource = this.createRandomEvents();
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarioPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalendarioPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarioPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalendarioPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarioPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    CalendarioPage.prototype.createEvents = function () {
        var _this = this;
        //registerLocaleData(localeFr);
        this.eventSource = [];
        var instId = sessionStorage.getItem("INST_ID");
        var tipo = '1';
        //var events = [];
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postCalendario(instId, tipo).subscribe(function (data) {
                var datos = data.json();
                var datosProcesar = datos;
                if (datosProcesar && datosProcesar.length > 0) {
                    //ahora procesamos las rutas para mostrar los archivos
                    datosProcesar.forEach(function (element) {
                        var mesIniC = parseInt(element.mesIni) + 1;
                        var mesTerC = parseInt(element.mesTer) + 1;
                        var fechaIni = new Date(parseInt(element.annoIni), mesIniC, parseInt(element.diaIni), parseInt(element.horaIni), parseInt(element.minutosIni), 0, 0);
                        var fechaTer = new Date(parseInt(element.annoTer), mesTerC, parseInt(element.diaTer), parseInt(element.horaTer), parseInt(element.minutosTer), 0, 0);
                        //element.allDay, element.content, element.details, element.ubication
                        var title = element.content + '-' + element.details + ', ' + element.ubication;
                        _this.eventSource.push({
                            title: title,
                            startTime: fechaIni,
                            endTime: fechaTer,
                            allDay: element.allDay
                        });
                    });
                }
                //this.documentosArr = datos.proposals;
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get rendciones completed');
                loader.dismiss();
            });
        });
    };
    CalendarioPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalendarioPage.prototype.ionViewWillEnter = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.createEvents();
        //this.openUrl();
    };
    CalendarioPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.createEvents();
            _this.today();
            refresher.complete();
        }, 2000);
    };
    CalendarioPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\calendario\calendario.html"*/'<!--\n  Generated template for the CalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n  <ion-navbar>\n    <ion-title>Calendario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- refresh-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n          font-size: 0.9rem;">\n      Deslize hacia abajo para actualizar\n    </ion-label>\n\n    <h1 text-center>{{viewTitle}}</h1>\n  <ion-row>\n      <ion-buttons end>\n          <button ion-button small [disabled]="isToday" (click)="today()">Hoy</button>\n          <button ion-button small (click)="changeMode(\'month\')">Mensual</button>\n          <button ion-button small (click)="changeMode(\'week\')">Semanal</button>\n          <button ion-button small (click)="changeMode(\'day\')">Diario</button>\n          <!-- comentado \n          <button ion-button (click)="loadEvents()">Load Events</button>-->\n      </ion-buttons>\n  </ion-row>\n  <!--\n    <calendar \n              [monthviewEventDetailTemplate]="template"\n              [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              [locale]="calendar.locale"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              step="30">\n    </calendar>\n-->\n<calendar [monthviewEventDetailTemplate]="template" [eventSource]="eventSource" [calendarMode]="calendar.mode"\n  [currentDate]="calendar.currentDate"  (onCurrentDateChanged)="onCurrentDateChanged($event)"\n  (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)"\n  (onTimeSelected)="onTimeSelected($event)" step="30">\n</calendar>\n    <ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n        <!--\n        <h5 class="noEvents" *ngIf="selectedDate.events.length == 0">No Events</h5>\n        -->\n        <ion-list>\n          <ion-item class="noEvents" *ngIf="selectedDate.events.length == 0">\n            <ion-avatar item-start>\n              <ion-icon name="calendar" item-start style="font-size: 2.5em;"></ion-icon>\n            </ion-avatar>\n            <h1 text-wrap>No hay eventos</h1>\n          </ion-item>\n        \n        </ion-list>\n        <ion-list>\n          <ion-item (click)="onEventSelected(event)" *ngFor="let event of selectedDate.events">\n              \n              <ion-avatar item-start>\n                <ion-icon name="calendar" item-start style="font-size: 2.5em;"></ion-icon>\n              </ion-avatar>\n                <h1 text-wrap>{{event.startTime | dateFormat: \'dddd DD\'}}</h1>\n                <h2 text-wrap>{{event.title}}</h2>\n                <ion-badge>{{event.startTime | dateFormat: \'DD-MM-YYYY HH:mm\'}} - {{event.endTime | dateFormat: \'DD-MM-YYYY HH:mm\'}}</ion-badge>\n              <!--\n            <p text-wrap>Start: {{event.startTime}}</p>\n            <p text-wrap>end: {{event.endTime}}</p>-->\n          </ion-item>\n        </ion-list>\n    </ng-template>\n  \n\n</ion-content>\n\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\calendario\calendario.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_5__app_services_novedadService__["a" /* NovedadService */], __WEBPACK_IMPORTED_MODULE_6__app_services_GlobalService__["a" /* GlobalService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */], useValue: 'es-CL' }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

//servicios


/**
 * Generated class for the ProyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProyectosPage = /** @class */ (function () {
    function ProyectosPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.proyectosArr = [];
        this.permisos = {
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
        };
    }
    ProyectosPage.prototype.ionViewWillEnter = function () {
        var rolId = sessionStorage.getItem("ROL_ID");
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.cargar();
    };
    ProyectosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProyectosPage');
    };
    ProyectosPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ProyectosPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.cargar();
            refresher.complete();
        }, 2000);
    };
    ProyectosPage.prototype.cargar = function () {
        var _this = this;
        this.proyectosArr = [];
        //this.filtrosInstitucion = [];
        var instId = sessionStorage.getItem("INST_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postProyectos(instId).subscribe(function (data) {
                var datos = data.json();
                _this.proyectosArr = datos.proposals;
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get proyectos completed');
                loader.dismiss();
            });
        });
    };
    ProyectosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proyectos',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\proyectos\proyectos.html"*/'<!--\n  Generated template for the ProyectosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n    <ion-navbar>\n      <ion-title>Proyectos</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n    <!-- refresh-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n                font-size: 0.9rem;">\n      Deslize hacia abajo para actualizar\n    </ion-label>\n<!-- Listado -->\n<ion-list>\n    <ion-item *ngFor="let clie of proyectosArr">\n      <h2 text-wrap>{{clie.NombreUsuario}}</h2>\n      <h3 text-wrap>{{clie.NombreCompleto}}</h3>\n      <p>\n          <ion-badge item-start>{{clie.OtroOcho}}</ion-badge>\n          <ion-badge item-end color="secondary" style="float: right;">{{clie.OtroDiez}}</ion-badge>\n      </p>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\proyectos\proyectos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
    ], ProyectosPage);
    return ProyectosPage;
}());

//# sourceMappingURL=proyectos.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_text_avatar_text_avatar__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_solicitudes_solicitudes__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_novedades_novedades__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inicio_inicio__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_novedad_detail_novedad__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_visor_imagen_visor_imagen__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_crear_novedad_crear_novedad__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editar_novedad_editar_novedad__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_usuarios_usuarios__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_rendicion_rendicion__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_documentos_documentos__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calendario_calendario__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_proyectos_proyectos__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_crear_rendicion_crear_rendicion__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_services_GlobalService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_MomentPipe__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//directivas


















//servicios


//import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';

//pipes


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_novedades_novedades__["a" /* NovedadesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_editar_novedad_editar_novedad__["a" /* EditarNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rendicion_rendicion__["a" /* RendicionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_proyectos_proyectos__["a" /* ProyectosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_crear_rendicion_crear_rendicion__["a" /* CrearRendicionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_MomentPipe__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_6__directives_text_avatar_text_avatar__["a" /* TextAvatarDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_novedades_novedades__["a" /* NovedadesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_editar_novedad_editar_novedad__["a" /* EditarNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rendicion_rendicion__["a" /* RendicionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_proyectos_proyectos__["a" /* ProyectosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_crear_rendicion_crear_rendicion__["a" /* CrearRendicionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__app_services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__app_services_GlobalService__["a" /* GlobalService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'es-CL' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://apps.asambleas.cl/api/';
    AppSettings.URL_FOTOS = 'http://apps.asambleas.cl/Repositorio/';
    AppSettings.URL_RAIZ = 'http://apps.asambleas.cl/';
    return AppSettings;
}());

//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAvatarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_generator__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextAvatarDirective = /** @class */ (function () {
    function TextAvatarDirective(element, colorGenerator) {
        this.element = element;
        this.colorGenerator = colorGenerator;
    }
    TextAvatarDirective.prototype.ngOnChanges = function (changes) {
        var text = changes['text'] ? changes['text'].currentValue : null;
        var color = changes['color'] ? changes['color'].currentValue : null;
        this.element.nativeElement.setAttribute("value", this.extractFirstCharacter(text));
        this.element.nativeElement.style.backgroundColor = this.backgroundColorHexString(color, text);
    };
    TextAvatarDirective.prototype.extractFirstCharacter = function (text) {
        return text.charAt(0) || '';
    };
    TextAvatarDirective.prototype.backgroundColorHexString = function (color, text) {
        return color || this.colorGenerator.getColor(this.extractFirstCharacter(text));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TextAvatarDirective.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TextAvatarDirective.prototype, "color", void 0);
    TextAvatarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'text-avatar',
            providers: [__WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]])
    ], TextAvatarDirective);
    return TextAvatarDirective;
}());

//# sourceMappingURL=text-avatar.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorGenerator; });
var ColorGenerator = /** @class */ (function () {
    function ColorGenerator() {
        this.COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
            '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
            '#ffb74d', '#a1887f', '#90a4ae'];
    }
    ColorGenerator.prototype.getColor = function (str) {
        return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
    };
    ColorGenerator.prototype.toNumber = function (str) {
        var h = 0;
        for (var i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
            h |= 0; // Convert to 32bit integer
        }
        return h;
    };
    ;
    return ColorGenerator;
}());

//# sourceMappingURL=color-generator.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-SG": 240,
	"./en-SG.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./ga": 260,
	"./ga.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it-ch": 273,
	"./it-ch.js": 273,
	"./it.js": 272,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ku": 281,
	"./ku.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./tg": 322,
	"./tg.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navigation, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navigation = navigation;
        var paginaUno = { title: 'Inicio', component: HomePage_1, visible: true, icon: 'home' };
        this.pages = [paginaUno];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openPage = function (pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(pages.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\home\home.html"*/'<ion-menu side="left" [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar color="blanco">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-col width-67>\n     <!-- <img src="{{usuarioAps.UrlImagen}}" style="max-width: 97%;"/>-->\n     <!-- <h2  text-wrap>{{usuarioAps.Nombres + \' \' + usuarioAps.ApellidoPaterno + \' \' + usuarioAps.ApellidoMaterno}}</h2>-->\n     <h2  text-wrap>nombre completo</h2>\n    </ion-col>\n    <div class="position-menu-bottom border-superior-menu-bottom">\n      <ion-row *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-list ion-item style="padding: 0; margin: 0; padding-left: 10px;">\n          <button menu-toggle  style="background-color: transparent; width: 100%; text-align: left;">\n            <ion-icon name={{p.icon}} style="padding-right:5px;"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n      </ion-row>\n    </div>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n<!--Fin SideNav-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages

//servicios


/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolicitudesPage = /** @class */ (function () {
    function SolicitudesPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.solicitudesArr = [];
        this.permisos = {
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
        };
    }
    SolicitudesPage.prototype.ionViewWillEnter = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        this.cargarSolicitudes();
    };
    SolicitudesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolicitudesPage');
    };
    SolicitudesPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SolicitudesPage.prototype.cargarSolicitudes = function () {
        var _this = this;
        var instId = sessionStorage.getItem("INST_ID");
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        loader.present().then(function () {
            _this.global.postSolicitudes(instId).subscribe(function (data) {
                _this.solicitudesArr = data.json();
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get solicitudes completed');
                loader.dismiss();
            });
        });
    };
    SolicitudesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-solicitudes',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\solicitudes\solicitudes.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Solicitudes</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n    <button ion-fab mini (click)="logout()" class="btn-color">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\solicitudes\solicitudes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
    ], SolicitudesPage);
    return SolicitudesPage;
}());

//# sourceMappingURL=solicitudes.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams, loading, acceso, ini) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.ini = ini;
        this.permisos = {
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
        };
        //seteamos las variables
        this.dataGeneral = [];
        this.eventos = [];
        this.proyectos = [];
        this.votaciones = [];
        this.usuarios = [];
        this.establecimientos = [];
        this.rendiciones = [];
        this.documentos = [];
        this.solicitudes = [];
        //para mostrar en la pagina de inicio
        this.tarjetas = [];
        var loader = this.loading.create({
            content: 'Cargando Inicio...',
        });
        loader.present().then(function () {
            //llamadas de negocio
            var instId = sessionStorage.getItem("INST_ID");
            var rolId = sessionStorage.getItem("ROL_ID");
            var usuId = sessionStorage.getItem("USU_ID");
            _this.ini.getInicio(instId, rolId).subscribe(function (data) {
                //acá debemos construir los objetos de persistencia
                _this.dataGeneral = data.json();
                if (_this.dataGeneral) {
                    if (_this.dataGeneral.Eventos) {
                        _this.eventos = _this.dataGeneral.Eventos;
                    }
                    /*
                    if (this.dataGeneral.Proyectos){
                      this.proyectos = this.dataGeneral.Proyectos;
                    }
                    if (this.dataGeneral.Votaciones.proposals){
                      this.votaciones = this.dataGeneral.Votaciones.proposals;
                    }
                    */
                    if (_this.dataGeneral.Usuarios) {
                        _this.usuarios = _this.dataGeneral.Usuarios;
                    }
                    if (_this.dataGeneral.Establecimientos.proposals) {
                        _this.establecimientos = _this.dataGeneral.Establecimientos.proposals;
                    }
                    if (_this.dataGeneral.Rendiciones.proposals) {
                        _this.rendiciones = _this.dataGeneral.Rendiciones.proposals;
                    }
                    if (_this.dataGeneral.Documentos.proposals) {
                        _this.documentos = _this.dataGeneral.Documentos.proposals;
                    }
                    //ahora armamos las tarjetas
                    //eventos
                    if (_this.eventos.length > 0) {
                        var entidad = {
                            Titulo: 'Eventos',
                            Texto: 'Existen ' + _this.eventos.length + ' eventos.',
                            IconoGeneral: 'calendar',
                            IconoBoton: 'arrow-forward'
                        };
                        _this.tarjetas.push(entidad);
                    }
                    /*
                    //Proyectos
                    if (this.proyectos.length > 0){
                      var entidad = {
                        Titulo: 'Proyectos',
                        Texto: 'Existen ' + this.proyectos.length + ' proyectos.',
                        IconoGeneral: 'briefcase',
                        IconoBoton: 'arrow-forward'
                      };
                      this.tarjetas.push(entidad);
      
                    }
                    //votaciones tricel
                    if (this.votaciones.length > 0){
                      var entidad = {
                        Titulo: 'Tricel',
                        Texto: 'Existen ' + this.votaciones.length + ' triceles creados.',
                        IconoGeneral: 'hammer',
                        IconoBoton: 'arrow-forward'
                      };
                      this.tarjetas.push(entidad);
      
                    }
                    */
                    //rendiciones
                    if (_this.rendiciones.length > 0) {
                        var entidad = {
                            Titulo: 'Rendiciones',
                            Texto: 'Existen ' + _this.rendiciones.length + ' rendiciones.',
                            IconoGeneral: 'stats',
                            IconoBoton: 'arrow-forward'
                        };
                        _this.tarjetas.push(entidad);
                    }
                    //documentos
                    if (_this.documentos.length > 0) {
                        var entidad = {
                            Titulo: 'Documentos',
                            Texto: 'Existen ' + _this.documentos.length + ' documentos.',
                            IconoGeneral: 'document',
                            IconoBoton: 'arrow-forward'
                        };
                        _this.tarjetas.push(entidad);
                    }
                }
                //carga de los novedades
                var loaderComen = _this.loading.create({
                    content: 'Cargando Novedades...',
                });
                loaderComen.present().then(function () {
                    _this.ini.getMuro(instId, usuId).subscribe(function (dataMuro) {
                        //elementos del muro
                        _this.solicitudes = dataMuro.json();
                        if (_this.solicitudes.length > 0) {
                            var entidad = {
                                Titulo: 'Novedades',
                                Texto: 'Existen ' + _this.solicitudes.length + ' novedades.',
                                IconoGeneral: 'chatboxes',
                                IconoBoton: 'arrow-forward'
                            };
                            _this.tarjetas.push(entidad);
                        }
                    }, function (err) {
                        console.error(err);
                        loaderComen.dismiss();
                    }, function () {
                        console.log('get comment completed');
                        //terminamos;
                        loaderComen.dismiss();
                    });
                });
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get inicio completed');
                //terminamos;
                loader.dismiss();
            });
        });
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        this.permisos = JSON.parse(sessionStorage.getItem("PERMISOS"));
        console.log('ionViewDidLoad InicioPage');
    };
    //logout
    InicioPage.prototype.logout = function () {
        this.acceso.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    InicioPage.prototype.openPage = function (nombre) {
        switch (nombre.Titulo) {
            case 'Eventos':
                alert('eventos');
                break;
            case 'Proyectos':
                alert('proyectos');
                break;
            case 'Tricel':
                alert('tricel');
                break;
            case 'Rendiciones':
                alert('rendicion');
                break;
            case 'Documentos':
                alert('documentos');
                break;
            case 'Novedades':
                //alert('documentos');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cliente_cliente__["a" /* ClientePage */]);
                //this.navCtrl.setRoot(NovedadesPage);
                break;
        }
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n  <ion-navbar>\n\n    <ion-title>Inicio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let item of tarjetas">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{item.Titulo}}\n\n        <ion-icon name="{{item.IconoGeneral}}" style="float: right;"></ion-icon>\n\n        </ion-card-title>\n\n      <p>\n\n        {{item.Texto}}\n\n      </p>\n\n    </ion-card-content>\n\n      <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left clear (click)="openPage(item)" style="float:right;">\n\n        <ion-icon name="{{item.IconoBoton}}"></ion-icon>\n\n        <div>Ir...</div>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"C:\AppImpacto\AppImpacto\AppImpacto\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, dateFormat) {
        __WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('es');
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(dateFormat);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'dateFormat' })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=MomentPipe.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovedadService = /** @class */ (function () {
    function NovedadService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    NovedadService.prototype.putRespuesta = function (prioridadId, mroId, texto, instId, usuId, rolId) {
        var entidad = {
            InstId: instId,
            UsuId: usuId,
            PrioridadId: prioridadId,
            MroId: mroId,
            RolId: rolId,
            Texto: texto
        };
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'RespuestaMuro';
        var dataGet = entidad;
        var data = this.http.put(url, dataGet, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        });
        return data;
    };
    NovedadService.prototype.putMuro = function (prioridadId, texto, instId, usuId, rolId, id) {
        var entidad = {
            InstId: instId,
            UsuId: usuId,
            PrioridadId: prioridadId,
            RolId: rolId,
            Texto: texto,
            EsCpas: 'false',
            Id: id
        };
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Muro';
        var dataGet = entidad;
        var data = this.http.put(url, dataGet, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        });
        return data;
    };
    NovedadService.prototype.sendFile = function (File, mroId, instId, tipoPadre, nombreCarpeta, id) {
        var model = new FormData();
        model.append("UploadedImage", File);
        model.append("idElemento", mroId);
        model.append("instId", instId);
        model.append("tipoPadre", tipoPadre);
        model.append("nombreCarpeta", nombreCarpeta);
        model.append("id", id);
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'ArchivoAdjunto';
        var data = this.http.post(url, model, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({})
        });
        return data;
    };
    NovedadService.prototype.deleteRespuesta = function (id) {
        var entidad = {
            Id: id,
            EsCpas: false
        };
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'RespuestaMuro';
        var dataGet = entidad;
        var data = this.http.delete(url, { params: { Id: id.toString(), EsCpas: false } });
        return data;
    };
    NovedadService.prototype.deleteMuro = function (id) {
        var entidad = {
            Id: id,
            EsCpas: false
        };
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Muro';
        var dataGet = entidad;
        var data = this.http.delete(url, { params: { Id: id.toString(), EsCpas: false } });
        return data;
    };
    NovedadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NovedadService);
    return NovedadService;
}());

//# sourceMappingURL=novedadService.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioService = /** @class */ (function () {
    function InicioService(http) {
        this.http = http;
    }
    InicioService.prototype.getInicio = function (instId, rolId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Inicio';
        var dataGet = { InstId: instId, RolId: rolId, UsuId: 0, Tipo: '1' };
        var data = this.http.post(url, dataGet, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        });
        return data;
    };
    InicioService.prototype.getMuro = function (instId, usuId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__AppSettings__["a" /* AppSettings */].API_ENDPOINT + 'Muro';
        var dataGet = { InstId: instId, UsuId: usuId };
        var data = this.http.post(url, dataGet, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        });
        return data;
    };
    InicioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InicioService);
    return InicioService;
}());

//# sourceMappingURL=InicioService.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map