webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novedades_novedades__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rendicion_rendicion__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_documentos__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendario_calendario__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proyectos_proyectos__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientePage = (function () {
    /*
  
  tab2Root = PacksPage;
  tab3Root = ProfesoresPage;
  tab4Root = PlanillaProfesoresPage;
*/
    function ClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    return ClientePage;
}());
ClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cliente',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\cliente\cliente.html"*/'<ion-content padding>\n\n\n\n    <ion-tabs id="tabCliente">\n\n        <ion-tab [root]="tab1Root" tabTitle="Novedades" tabIcon="chatbubbles" id="tabNovedades">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab2Root" tabTitle="Usuarios" tabIcon="people" id="tabUsuarios">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab3Root" tabTitle="Rendiciones" tabIcon="logo-usd" id="tabRendiciones">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab4Root" tabTitle="Documentos" tabIcon="document" id="tabDocumentos">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab5Root" tabTitle="Calendario" tabIcon="calendar" id="tabCalendario">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab6Root" tabTitle="Proyectos" tabIcon="book" id="tabProyectos">\n\n        </ion-tab>\n\n        <!--\n\n        <ion-tab [root]="tab1Root" tabTitle="Clientes" tabIcon="people" id="tabClientes">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab2Root"  tabTitle="Packs" tabIcon="barcode" id="tabPacks">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab3Root" tabTitle="Profesores" tabIcon="body" id="tabProfesores">\n\n        </ion-tab>\n\n        <ion-tab [root]="tab4Root" tabTitle="Reporte" tabIcon="clipboard" id="tabPlanilla">\n\n        </ion-tab>\n\n    -->\n\n    </ion-tabs>\n\n\n\n</ion-content>'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\cliente\cliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ClientePage);

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisorImagenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(205);
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

/**
 * Generated class for the VisorImagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisorImagenPage = (function () {
    function VisorImagenPage(navCtrl, navParams, loading, toastCtrl, viewCtrl, photoViewer, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.photoViewer = photoViewer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rutaImagen = this.navParams.get('item');
        this.idImagen = this.navParams.get('idImagen');
        this.mroId = this.navParams.get('MroId');
    }
    VisorImagenPage.prototype.closeModal = function (param) {
        this.viewCtrl.dismiss();
        //this.navCtrl.pop();
    };
    VisorImagenPage.prototype.viewImage = function () {
        var option = {
            share: true
        };
        alert(this.rutaImagen);
        this.photoViewer.show(this.rutaImagen, "titulo");
    };
    VisorImagenPage.prototype.ionViewDidLoad = function () {
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
    return VisorImagenPage;
}());
VisorImagenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-visor-imagen',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\visor-imagen\visor-imagen.html"*/'<!--\n\n  Generated template for the VisorImagenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Imágen</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <img [src]="rutaImagen" style="width: 100%;" (click)="viewImage()" />\n\n  <ion-fab bottom right>\n\n    <button ion-fab class="bg-teal-800" (click)="presentActionSheet()"><ion-icon name="trash"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\visor-imagen\visor-imagen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], VisorImagenPage);

//# sourceMappingURL=visor-imagen.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
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





var AuthService = (function () {
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
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
], AuthService);

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_novedad_crear_novedad__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editar_novedad_editar_novedad__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_InicioService__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_novedadService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_AppSettings__ = __webpack_require__(38);
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
var NovedadesPage = (function () {
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
    return NovedadesPage;
}());
NovedadesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-novedades',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\novedades\novedades.html"*/'<!--\n\n  Generated template for the NovedadesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Novedades</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!-- refresh-->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n      <ion-label no-padding no-margin text-center style="font-style: italic;\n\n      font-size: 0.9rem;">\n\n          Deslize hacia abajo para actualizar\n\n      </ion-label>\n\n\n\n  <button ion-button full icon-right color="light" (click)="presentModalCrearNovedad(null)">\n\n  Nueva Novedad\n\n    <ion-icon name="chatbubbles"></ion-icon>\n\n  </button>\n\n  <!-- solo para pruebas de carga de archivos -->\n\n\n\n\n\n  <div *ngFor="let item of solicitudes">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <!-- lo comentamos por mientra\n\n          <img [src]="image" *ngIf="image" />\n\n          <ion-item>\n\n            <label>Carga de Archivos</label>\n\n            <input type="file" accept="image/*" (change)="changeListener($event, item)" style="opacity: 0" #fileInp>\n\n\n\n          </ion-item>\n\n        -->\n\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n\n          <ion-row>\n\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno, item.IdUno, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos, item.IdDos, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres, item.IdTres, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro, item.IdCuatro, item.Id)" />\n\n            </div>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n        <ion-card-title>\n\n          <ion-icon name="create" style="float: left;" *ngIf="item.VisibleEditar" class="fg-teal-800"  (click)="presentModalEditarNovedad(item)"></ion-icon>&nbsp;\n\n          {{item.NombreUsuario}}\n\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800"  (click)="presentActionSheetMuro(item)"></ion-icon>\n\n\n\n        </ion-card-title>\n\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n\n        <button style="float: right; font-size: 0.8rem;" ion-button small class="bg-red-300 fg-white" (click)="presentModal(item)" >Comentar</button>\n\n        <p text-wrap>\n\n          <strong>\n\n            {{item.Texto}}\n\n          </strong>\n\n        </p>\n\n        <!-- comentarios -->\n\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n\n          <ion-item>\n\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\novedades\novedades.html"*/,
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

//# sourceMappingURL=novedades.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_novedadService__ = __webpack_require__(59);
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
var DetailNovedadPage = (function () {
    function DetailNovedadPage(navCtrl, navParams, nov, loading, toastCtrl, viewCtrl, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nov = nov;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.solicitudes = [];
        this.novedad = this.navParams.get('novedad');
        if (this.novedad) {
            //esta todo ok, procesar
            this.solicitudes.push(this.novedad);
        }
    }
    DetailNovedadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailNovedadPage');
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
    return DetailNovedadPage;
}());
DetailNovedadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-novedad',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\detail-novedad\detail-novedad.html"*/'<!--\n\n  Generated template for the DetailNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <div *ngFor="let item of solicitudes">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <!-- imagenes -->\n\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n\n          <ion-row>\n\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno, item.IdUno, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos, item.IdDos, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres, item.IdTres, item.Id)" />\n\n            </div>\n\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro, item.IdCuatro, item.Id)" />\n\n            </div>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n\n\n        <ion-card-title>\n\n          {{item.NombreUsuario}}\n\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800" (click)="presentActionSheetMuro(item)"></ion-icon>\n\n        </ion-card-title>\n\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n\n        <p text-wrap>\n\n          <strong>\n\n            {{item.Texto}}\n\n          </strong>\n\n        </p>\n\n        <ion-item>\n\n              <ion-label stacked>Ingrese Comentario</ion-label>\n\n              <ion-input type="text" [(ngModel)]="textoEnviar" required></ion-input>\n\n        </ion-item>\n\n        <button style="float: right; font-size: 0.8rem;" ion-button class="bg-red-300 fg-white" (click)="enviar(item)">Enviar</button>\n\n\n\n\n\n        <!-- comentarios -->\n\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n\n          <ion-item>\n\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n<!--\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button style="width: 100%;" class="bg-red-200 fg-white" (click)="closeModal()">Cancelar</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button style="width: 100%;" class="bg-red-400 fg-white" (click)="closeModal(\'actualizar\')">Aceptar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\detail-novedad\detail-novedad.html"*/,
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

//# sourceMappingURL=detail-novedad.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__ = __webpack_require__(59);
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
var CrearNovedadPage = (function () {
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
    return CrearNovedadPage;
}());
CrearNovedadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crear-novedad',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\crear-novedad\crear-novedad.html"*/'<!--\n\n  Generated template for the CrearNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Crear Novedad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n  <!--\n\n  <ion-item>\n\n\n\n\n\n  </ion-item>\n\n\n\n  -->\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Archivos\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 1:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListener($event)"  #fileInput>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 2:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n\n\n              <input type="file" accept="image/*" (change)="changeListenerDos($event)" #fileInput2>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 3:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file"  accept="image/*"  (change)="changeListenerTres($event)"  #fileInput3>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 4:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListenerCuatro($event)"  #fileInput4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Novedad\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-label stacked>Ingrese Novedad\n\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n\n      </ion-label>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarComentario()">Guardar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\crear-novedad\crear-novedad.html"*/,
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

//# sourceMappingURL=crear-novedad.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__ = __webpack_require__(59);
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
var EditarNovedadPage = (function () {
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
    return EditarNovedadPage;
}());
EditarNovedadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-novedad',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\editar-novedad\editar-novedad.html"*/'<!--\n\n  Generated template for the EditarNovedadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n  <ion-navbar>\n\n    <ion-buttons style="float: right;">\n\n      <button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Editar Novedad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Novedad\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-label stacked>Ingrese Novedad\n\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n\n      </ion-label>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Imágenes\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <div [class]="novedad.ClaseUno" *ngIf="novedad.MuestraImagenUno">\n\n            <img [src]="novedad.ImgUno"/>\n\n          </div>\n\n          <ion-col col-12 *ngIf="novedad.MuestraImagenUno == false">\n\n            <ion-icon name="document"></ion-icon> Archivo 1:\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="novedad.MuestraImagenUno == false">\n\n            <input type="file" accept="image/*" (change)="changeListener($event)"  #fileInput>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 2:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n\n\n            <input type="file" accept="image/*" (change)="changeListenerDos($event)" #fileInput2>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 3:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file"  accept="image/*"  (change)="changeListenerTres($event)"  #fileInput3>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon name="document"></ion-icon> Archivo 4:\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <input type="file" accept="image/*" (change)="changeListenerCuatro($event)"  #fileInput4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarComentario()">Guardar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\editar-novedad\editar-novedad.html"*/,
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

//# sourceMappingURL=editar-novedad.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
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
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ingreso</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="color-fixed">\n\n<div >\n\n  <ion-row class="encabezado">\n\n    <h2 class="titulo">Bienvenido a la Aplicación de Asambleas</h2>\n\n  </ion-row>\n\n    <ion-row class="bg-transparente">\n\n      <ion-col class="bg-transparente">\n\n        <ion-list inset class="bg-transparente fg-blanco">\n\n\n\n          <ion-item class="bg-transparente fg-blanco">\n\n            <ion-label  class="bg-transparente fg-blanco" floating>Nombre de Usuario</ion-label>\n\n            <ion-input type="text" [(ngModel)]="usuario" required class="bg-transparente fg-blanco"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item  class="bg-transparente fg-blanco">\n\n            <ion-label floating  class="bg-transparente fg-blanco">Password</ion-label>\n\n            <ion-input  class="bg-transparente fg-blanco" type="password" [(ngModel)]="password" required></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col class="signup-col">\n\n        <button ion-button class="btn-color" block (click)="Signup()">Ingresar</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n</div>\n\n<!-- fav -->\n\n  <ion-fab top right>\n\n    <button ion-fab mini class="btn-color"><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list>\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-title text-wrap>@Copyright 2018 Impacto 2V SPA</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
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
var UsuariosPage = (function () {
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
    return UsuariosPage;
}());
UsuariosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuarios',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\usuarios\usuarios.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-400 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Usuarios</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- refresh-->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n\n    font-size: 0.9rem;">\n\n        Deslize hacia abajo para actualizar\n\n    </ion-label>\n\n    <ion-item *ngIf="esAdministrador">\n\n        <ion-label>Seleccione Institución</ion-label>\n\n        <ion-select [(ngModel)]="nombreFiltrar">\n\n          <ion-option *ngFor="let filt of filtrosInstitucion" (ionSelect)="cambioFiltros(filt)">{{filt.NombreCompleto}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    <!-- lista-->\n\n    <ion-list *ngIf="esAdministrador">\n\n        <ion-item-sliding *ngFor="let clie of usuariosArr">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <text-avatar [text]="clie.NombreCompleto" item-left></text-avatar>\n\n            </ion-avatar>\n\n            <h2>{{clie.NombreCompleto}}</h2>\n\n            <p>\n\n              {{clie.OtroUno}}\n\n              <!--\n\n              <ion-icon *ngIf="prof.Activo == 1" name="checkmark"> Activo</ion-icon>\n\n              <ion-icon *ngIf="prof.Activo == 0" name="close"> Inactivo</ion-icon>\n\n              -->\n\n            </p>\n\n          </ion-item>\n\n          <!--\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="asociarComunas(prof)">\n\n              <ion-icon name="globe"></ion-icon>\n\n              Comunas\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="editarProfesor(prof)">\n\n              <ion-icon name="create"></ion-icon>\n\n              Editar\n\n            </button>\n\n            <button ion-button color="danger" *ngIf="prof.Activo == 1"  (click)="desactivarProfesor(prof)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Eliminar\n\n            </button>\n\n            <button ion-button color="secondary" *ngIf="prof.Activo == 0"  (click)="activarProfesor(prof)">\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              Activar\n\n            </button>\n\n          </ion-item-options>\n\n        -->\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n\n\n      <ion-card *ngIf="esAdministrador == false">\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Usuarios del Sistema\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <ion-icon name="people" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <p text-wrap>Actualmente existen <strong>{{cantidadUsuarios}}</strong> usuarios para tu asamblea.</p>\n\n          </ion-item>\n\n      \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n    <button ion-fab mini (click)="logout()" class="btn-color">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\usuarios\usuarios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
], UsuariosPage);

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendicionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
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
var RendicionPage = (function () {
    function RendicionPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        //usuariosArr = [];
        this.rendicionesArr = [];
        this.esAdministrador = false;
        this.filtrosInstitucion = [];
        this.filtrados = [];
        this.rendicionesOriginal = [];
        this.cantidadRendiciones = 0;
    }
    RendicionPage.prototype.ionViewWillEnter = function () {
        var rolId = sessionStorage.getItem("ROL_ID");
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
                _this.rendicionesArr = datos.proposals;
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
    return RendicionPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('pieChart'),
    __metadata("design:type", Object)
], RendicionPage.prototype, "pieChart", void 0);
RendicionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rendicion',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\rendicion\rendicion.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-300 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Rendiciones</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- refresh-->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n      <ion-label no-padding no-margin text-center style="font-style: italic;\n\n          font-size: 0.9rem;">\n\n        Deslize hacia abajo para actualizar\n\n      </ion-label>\n\n    <!--\n\n    <ion-item *ngIf="esAdministrador">\n\n        <ion-label>Seleccione Institución</ion-label>\n\n        <ion-select [(ngModel)]="nombreFiltrar">\n\n          <ion-option *ngFor="let filt of filtrosInstitucion" (ionSelect)="cambioFiltros(filt)">{{filt.NombreCompleto}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    -->\n\n    <!-- lista-->\n\n    <ion-list *ngIf="esAdministrador">\n\n        <ion-item-sliding *ngFor="let clie of rendicionesArr">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <!--salida-->\n\n                <ion-icon name="arrow-back" item-left *ngIf="clie.OtroUno == \'Egreso\'" style="color: red; font-size: 3em;"></ion-icon>\n\n                <!--entrada-->\n\n                <ion-icon name="arrow-forward" item-left  *ngIf="clie.OtroUno == \'Ingreso\'" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <h2>{{clie.NombreCompleto}}</h2>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div text-wrap  *ngIf="clie.OtroUno == \'Egreso\'" style="color: red;">{{clie.OtroUno}}</div>\n\n                    <div text-wrap  *ngIf="clie.OtroUno == \'Ingreso\'">{{clie.OtroUno}}</div>\n\n                </ion-col>\n\n                <ion-col>\n\n\n\n                    <div>{{clie.OtroCuatro}}</div>\n\n\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                  <ion-note>\n\n                      {{clie.NombreUsuario}}\n\n                  </ion-note>\n\n                </ion-col>\n\n              </ion-row>\n\n          </ion-item>\n\n          <!--\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="asociarComunas(prof)">\n\n              <ion-icon name="globe"></ion-icon>\n\n              Comunas\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary" *ngIf="prof.Activo == 1" (click)="editarProfesor(prof)">\n\n              <ion-icon name="create"></ion-icon>\n\n              Editar\n\n            </button>\n\n            <button ion-button color="danger" *ngIf="prof.Activo == 1"  (click)="desactivarProfesor(prof)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Eliminar\n\n            </button>\n\n            <button ion-button color="secondary" *ngIf="prof.Activo == 0"  (click)="activarProfesor(prof)">\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              Activar\n\n            </button>\n\n          </ion-item-options>\n\n        -->\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n\n\n      <ion-card *ngIf="esAdministrador == false">\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Usuarios del Sistema\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <ion-icon name="people" style="font-size: 3em;"></ion-icon>\n\n            </ion-avatar>\n\n            <p text-wrap>Actualmente existen <strong>{{cantidadUsuarios}}</strong> usuarios para tu asamblea.</p>\n\n          </ion-item>\n\n      \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\rendicion\rendicion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
], RendicionPage);

//# sourceMappingURL=rendicion.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_AppSettings__ = __webpack_require__(38);
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
var DocumentosPage = (function () {
    function DocumentosPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.documentosArr = [];
    }
    DocumentosPage.prototype.ionViewWillEnter = function () {
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
    return DocumentosPage;
}());
DocumentosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-documentos',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\documentos\documentos.html"*/'<!--\n  Generated template for the DocumentosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n  <ion-navbar>\n    <ion-title>Documentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- refresh-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n                font-size: 0.9rem;">\n      Deslize hacia abajo para actualizar\n    </ion-label>\n    <!--contenido de la pagina -->\n    <!-- lista-->\n    <ion-list>\n        <ion-item-sliding *ngFor="let clie of documentosArr">\n          <ion-item>\n            <ion-avatar item-start>\n              <!--descargar-->\n                <ion-icon name="cloud-download" item-left style="font-size: 3em;" (click)="openUrl(clie.UrlMostrar)"></ion-icon>\n                \n                \n            </ion-avatar>\n            <h2 text-wrap>{{clie.NombreCompleto}}</h2>\n            <ion-badge slot="end">{{clie.OtroUno}}</ion-badge>\n            <ion-row>\n                <ion-col>\n\n                    <div text-wrap>{{clie.OtroCinco}}</div>\n\n                </ion-col>\n                <ion-col center text-center>\n                  <ion-note>\n                      {{clie.NombreUsuario}}\n                  </ion-note>\n                </ion-col>\n              </ion-row>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>    \n\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\documentos\documentos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
], DocumentosPage);

//# sourceMappingURL=documentos.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(214);
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
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = (function () {
    function CalendarioPage(app, navCtrl, navParams, loading, global, acceso, cal) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.cal = cal;
        this.calendar = {
            mode: 'month',
            locale: 'es-ES',
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
    CalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarioPage');
    };
    CalendarioPage.prototype.logout = function () {
        this.acceso.logout();
        //esto lo comentamos
        //this.navCtrl.setRoot(LoginPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CalendarioPage.prototype.ionViewWillEnter = function () {
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
    return CalendarioPage;
}());
CalendarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendario',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\calendario\calendario.html"*/'<!--\n  Generated template for the CalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n    <ion-navbar>\n      <ion-title>Calendario</ion-title>\n\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n  <!-- refresh-->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-label no-padding no-margin text-center style="font-style: italic;\n                      font-size: 0.9rem;">\n    Deslize hacia abajo para actualizar\n  </ion-label>\n  <h1 text-center>{{viewTitle}}</h1>\n  <ion-row>\n      <ion-buttons end>\n          <button ion-button small [disabled]="isToday" (click)="today()">Hoy</button>\n          <button ion-button small (click)="changeMode(\'month\')">Mensual</button>\n          <button ion-button small (click)="changeMode(\'week\')">Semanal</button>\n          <button ion-button small (click)="changeMode(\'day\')">Diario</button>\n          <!-- comentado \n          <button ion-button (click)="loadEvents()">Load Events</button>-->\n      </ion-buttons>\n  </ion-row>\n    <calendar \n              [monthviewEventDetailTemplate]="template"\n              [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              [locale]="calendar.locale"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              step="30">\n    </calendar>\n\n    <ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n        <!--\n        <h5 class="noEvents" *ngIf="selectedDate.events.length == 0">No Events</h5>\n        -->\n        <ion-list>\n          <ion-item class="noEvents" *ngIf="selectedDate.events.length == 0">\n            <ion-avatar item-start>\n              <ion-icon name="calendar" item-start style="font-size: 2.5em;"></ion-icon>\n            </ion-avatar>\n            <h1 text-wrap>No hay eventos</h1>\n          </ion-item>\n        \n        </ion-list>\n        <ion-list>\n          <ion-item (click)="onEventSelected(event)" *ngFor="let event of selectedDate.events">\n              \n              <ion-avatar item-start>\n                <ion-icon name="calendar" item-start style="font-size: 2.5em;"></ion-icon>\n              </ion-avatar>\n                <h1 text-wrap>{{event.startTime | dateFormat: \'dddd DD\'}}</h1>\n                <h2 text-wrap>{{event.title}}</h2>\n                <ion-badge>{{event.startTime | dateFormat: \'DD-MM-YYYY HH:mm\'}} - {{event.endTime | dateFormat: \'DD-MM-YYYY HH:mm\'}}</ion-badge>\n              <!--\n            <p text-wrap>Start: {{event.startTime}}</p>\n            <p text-wrap>end: {{event.endTime}}</p>-->\n          </ion-item>\n        </ion-list>\n    </ng-template>\n\n\n\n\n</ion-content>\n<ion-fab top right right>\n<button ion-fab mini (click)="logout()" class="btn-color">\n  <ion-icon name="close"></ion-icon>\n</button>\n</ion-fab>\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\calendario\calendario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */]])
], CalendarioPage);

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
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
var ProyectosPage = (function () {
    function ProyectosPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.proyectosArr = [];
    }
    ProyectosPage.prototype.ionViewWillEnter = function () {
        var rolId = sessionStorage.getItem("ROL_ID");
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
    return ProyectosPage;
}());
ProyectosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proyectos',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\proyectos\proyectos.html"*/'<!--\n  Generated template for the ProyectosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n    <ion-navbar>\n      <ion-title>Proyectos</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n    <!-- refresh-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-label no-padding no-margin text-center style="font-style: italic;\n                font-size: 0.9rem;">\n      Deslize hacia abajo para actualizar\n    </ion-label>\n<!-- Listado -->\n<ion-list>\n    <ion-item *ngFor="let clie of proyectosArr">\n      <h2 text-wrap>{{clie.NombreUsuario}}</h2>\n      <h3 text-wrap>{{clie.NombreCompleto}}</h3>\n      <p>\n          <ion-badge item-start>{{clie.OtroOcho}}</ion-badge>\n          <ion-badge item-end color="secondary" style="float: right;">{{clie.OtroDiez}}</ion-badge>\n      </p>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\proyectos\proyectos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
], ProyectosPage);

//# sourceMappingURL=proyectos.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
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




var GlobalService = (function () {
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
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GlobalService);

//# sourceMappingURL=GlobalService.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);


//hammer

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_text_avatar_text_avatar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cliente_cliente__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_solicitudes_solicitudes__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_novedades_novedades__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_inicio_inicio__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_novedad_detail_novedad__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_visor_imagen_visor_imagen__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crear_novedad_crear_novedad__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editar_novedad_editar_novedad__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_usuarios_usuarios__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_rendicion_rendicion__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_documentos_documentos__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendario_calendario__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_proyectos_proyectos__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_services_GlobalService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_MomentPipe__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//agregado ahora para ver el album de fotos en las novedades

//directivas




















//pipes

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_novedades_novedades__["a" /* NovedadesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editar_novedad_editar_novedad__["a" /* EditarNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_usuarios_usuarios__["a" /* UsuariosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_rendicion_rendicion__["a" /* RendicionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_documentos_documentos__["a" /* DocumentosPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_calendario_calendario__["a" /* CalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_proyectos_proyectos__["a" /* ProyectosPage */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_MomentPipe__["a" /* MomentPipe */],
            __WEBPACK_IMPORTED_MODULE_7__directives_text_avatar_text_avatar__["a" /* TextAvatarDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_novedades_novedades__["a" /* NovedadesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editar_novedad_editar_novedad__["a" /* EditarNovedadPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_usuarios_usuarios__["a" /* UsuariosPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_rendicion_rendicion__["a" /* RendicionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_documentos_documentos__["a" /* DocumentosPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_calendario_calendario__["a" /* CalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_proyectos_proyectos__["a" /* ProyectosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_inicio_inicio__["a" /* InicioPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_25__app_services_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'http://apps.asambleas.cl/api/';
AppSettings.URL_FOTOS = 'http://apps.asambleas.cl/Repositorio/';
AppSettings.URL_RAIZ = 'http://apps.asambleas.cl/';
//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAvatarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_generator__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextAvatarDirective = (function () {
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
    return TextAvatarDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TextAvatarDirective.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TextAvatarDirective.prototype, "color", void 0);
TextAvatarDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: 'text-avatar',
        providers: [__WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]])
], TextAvatarDirective);

//# sourceMappingURL=text-avatar.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorGenerator; });
var ColorGenerator = (function () {
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

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(110);
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





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, navigation, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navigation = navigation;
        var paginaUno = { title: 'Inicio', component: HomePage_1, visible: true, icon: 'home' };
        /*
        var paginaDos = {title: 'Ajustes', component: AjustesPage, visible: true, icon: 'construct'};
        var paginaTres = {title: 'Acerca de',component: AyudaPage, visible: true, icon: 'warning'};
        var paginaCuatro = {title: 'Antecedentes', component: AntecedentesPage, visible: true, icon: 'list-box'};
        var paginaCinco = {title: 'Calendario', component: CalendarioPage, segment:'calendario/:this.usuarioAps', visible: true, icon: 'calendar'};
        var paginaSeis = {title: 'Familia', component: FamiliaPage, visible: true, icon: 'people'};
        var paginaSiete = {title:'Detalle-usuario', component: DetailUsuarioPage, defaultHistory: [AntecedentesPage], visible:true, icon:'contact'};
        var paginaOcho = {title:'Detalle-citas', component: DetailCitasPage, defaultHistory: [CalendarioPage], visible:true, icon:'create'};
        var paginaNueve = {title:'Ordenes', component: OrdenesPage, visible:true, icon:'create'};
        */
        this.pages = [paginaUno];
    }
    HomePage.prototype.openPage = function (pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(pages.component);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\home\home.html"*/'\n\n<!--SideNav-->\n\n<ion-menu side="left" [content]="content" persistent="true">\n\n  <ion-header>\n\n    <ion-toolbar color="blanco">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-col width-67>\n\n     <!-- <img src="{{usuarioAps.UrlImagen}}" style="max-width: 97%;"/>-->\n\n     <!-- <h2  text-wrap>{{usuarioAps.Nombres + \' \' + usuarioAps.ApellidoPaterno + \' \' + usuarioAps.ApellidoMaterno}}</h2>-->\n\n     <h2  text-wrap>nombre completo</h2>\n\n    </ion-col>\n\n    <div class="position-menu-bottom border-superior-menu-bottom">\n\n      <ion-row *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-list ion-item style="padding: 0; margin: 0; padding-left: 10px;">\n\n          <button menu-toggle  style="background-color: transparent; width: 100%; text-align: left;">\n\n            <ion-icon name={{p.icon}} style="padding-right:5px;"></ion-icon>\n\n            {{p.title}}\n\n          </button>\n\n        </ion-list>\n\n      </ion-row>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n<!--Fin SideNav-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__ = __webpack_require__(33);
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
var SolicitudesPage = (function () {
    function SolicitudesPage(app, navCtrl, navParams, loading, global, acceso) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.global = global;
        this.acceso = acceso;
        this.solicitudesArr = [];
    }
    SolicitudesPage.prototype.ionViewWillEnter = function () {
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
    return SolicitudesPage;
}());
SolicitudesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-solicitudes',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\solicitudes\solicitudes.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n\n\n    <ion-navbar>\n\n      <ion-title>Solicitudes</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n<ion-fab top right right>\n\n    <button ion-fab mini (click)="logout()" class="btn-color">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\solicitudes\solicitudes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */]])
], SolicitudesPage);

//# sourceMappingURL=solicitudes.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(60);
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
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, loading, acceso, ini) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.ini = ini;
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
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"W:\impacto2v\AppImpacto2V_new\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="mui--bg-color-red-500 fg-light">\n\n  <ion-navbar>\n\n    <ion-title>Inicio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let item of tarjetas">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{item.Titulo}}\n\n        <ion-icon name="{{item.IconoGeneral}}" style="float: right;"></ion-icon>\n\n        </ion-card-title>\n\n      <p>\n\n        {{item.Texto}}\n\n      </p>\n\n    </ion-card-content>\n\n      <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left clear (click)="openPage(item)" style="float:right;">\n\n        <ion-icon name="{{item.IconoBoton}}"></ion-icon>\n\n        <div>Ir...</div>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"W:\impacto2v\AppImpacto2V_new\src\pages\inicio\inicio.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 424:
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


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, dateFormat) {
        __WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('es');
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(dateFormat);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'dateFormat' })
], MomentPipe);

//# sourceMappingURL=MomentPipe.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
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
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ku": 280,
	"./ku.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mn": 290,
	"./mn.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./mt": 294,
	"./mt.js": 294,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./ug-cn": 329,
	"./ug-cn.js": 329,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
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
webpackContext.id = 426;

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
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




var NovedadService = (function () {
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
    return NovedadService;
}());
NovedadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NovedadService);

//# sourceMappingURL=novedadService.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
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




var InicioService = (function () {
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
    return InicioService;
}());
InicioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], InicioService);

//# sourceMappingURL=InicioService.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map