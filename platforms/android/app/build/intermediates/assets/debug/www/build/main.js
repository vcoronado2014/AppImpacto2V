webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    //public static API_ENDPOINT = 'http://apps.asambleas.cl/api/';
    AppSettings.API_ENDPOINT = 'http://localhost:58013/api/';
    AppSettings.URL_FOTOS = 'http://172.16.0.241/MiFamilia.WebApi/';
    return AppSettings;
}());

//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(203);
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
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovedadesPage = (function () {
    function NovedadesPage(navCtrl, navParams, loading, acceso, modalCtrl, ini) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        this.solicitudes = [];
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
    }
    NovedadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovedadesPage');
    };
    NovedadesPage.prototype.logout = function () {
        this.acceso.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //modal para agregar un comentario
    NovedadesPage.prototype.presentModal = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__["a" /* DetailNovedadPage */], { novedad: item });
        modal.present();
    };
    NovedadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedades',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\novedades\novedades.html"*/'<!--\n\n  Generated template for the NovedadesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Novedades</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button full icon-right color="light">\n\n  Nueva Novedad\n\n    <ion-icon name="chatbubbles"></ion-icon>\n\n  </button>\n\n  <div *ngFor="let item of solicitudes">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{item.NombreUsuario}}\n\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800"></ion-icon>\n\n        </ion-card-title>\n\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n\n        <button style="float: right; font-size: 0.8rem;" ion-button small class="bg-red-300 fg-white" (click)="presentModal(item)" >Comentar</button>\n\n        <p text-wrap>\n\n          <strong>\n\n            {{item.Texto}}\n\n          </strong>\n\n        </p>\n\n        <!-- comentarios -->\n\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n\n          <ion-item>\n\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\novedades\novedades.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
    ], NovedadesPage);
    return NovedadesPage;
}());

//# sourceMappingURL=novedades.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novedades_novedades__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(203);
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
            content: 'Cargando...',
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
                });
            }, function (err) {
                console.error(err);
                loader.dismiss();
            }, function () {
                console.log('get completed');
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
                //this.navCtrl.push(NovedadesPage, {id: id});
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__novedades_novedades__["a" /* NovedadesPage */]);
                break;
        }
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Inicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div *ngFor="let item of tarjetas">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{item.Titulo}}\n\n        <ion-icon name="{{item.IconoGeneral}}" style="float: right;"></ion-icon>\n\n        </ion-card-title>\n\n      <p>\n\n        {{item.Texto}}\n\n      </p>\n\n    </ion-card-content>\n\n      <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left clear (click)="openPage(item)" style="float:right;">\n\n        <ion-icon name="{{item.IconoBoton}}"></ion-icon>\n\n        <div>Ir...</div>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n<ion-fab top right right>\n\n  <button ion-fab mini (click)="logout()" class="btn-color">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novedades_novedades__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__ = __webpack_require__(279);
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
 * Generated class for the DetailNovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailNovedadPage = (function () {
    function DetailNovedadPage(navCtrl, navParams, nov, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nov = nov;
        this.loading = loading;
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
    DetailNovedadPage.prototype.closeModal = function (param) {
        if (param != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__novedades_novedades__["a" /* NovedadesPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__novedades_novedades__["a" /* NovedadesPage */]);
        }
    };
    DetailNovedadPage.prototype.enviar = function (item) {
        var _this = this;
        //aca enviamos el comentario
        var textoGuardar = this.textoEnviar;
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
                        Id: 0,
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
    };
    DetailNovedadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-novedad',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\detail-novedad\detail-novedad.html"*/'<!--\n  Generated template for the DetailNovedadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n  <div *ngFor="let item of solicitudes">\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          {{item.NombreUsuario}}\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800"></ion-icon>\n        </ion-card-title>\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n        <p text-wrap>\n          <strong>\n            {{item.Texto}}\n          </strong>\n        </p>\n        <ion-item>\n              <ion-label stacked>Ingrese Comentario</ion-label>\n              <ion-input type="text" [(ngModel)]="textoEnviar" required></ion-input>\n        </ion-item> \n        <button style="float: right; font-size: 0.8rem;" ion-button small class="bg-red-300 fg-white" (click)="enviar(item)">Enviar</button>\n\n\n        <!-- comentarios -->\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n          <ion-item>\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n<!--\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button style="width: 100%;" class="bg-red-200 fg-white" (click)="closeModal()">Cancelar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button style="width: 100%;" class="bg-red-400 fg-white" (click)="closeModal(\'actualizar\')">Aceptar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n-->\n</ion-content>\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\detail-novedad\detail-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], DetailNovedadPage);
    return DetailNovedadPage;
}());

//# sourceMappingURL=detail-novedad.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
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
    InicioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InicioService);
    return InicioService;
}());

//# sourceMappingURL=InicioService.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);


//hammer

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_novedad_detail_novedad__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_services_AuthService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__["a" /* NovedadesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__["a" /* NovedadesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__app_services_AuthService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
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
    NovedadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NovedadService);
    return NovedadService;
}());

//# sourceMappingURL=novedadService.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
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
    HomePage_1 = HomePage;
    HomePage.prototype.openPage = function (pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(pages.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\home\home.html"*/'\n<!--SideNav-->\n<ion-menu side="left" [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar color="blanco">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-col width-67>\n     <!-- <img src="{{usuarioAps.UrlImagen}}" style="max-width: 97%;"/>-->\n     <!-- <h2  text-wrap>{{usuarioAps.Nombres + \' \' + usuarioAps.ApellidoPaterno + \' \' + usuarioAps.ApellidoMaterno}}</h2>-->\n     <h2  text-wrap>nombre completo</h2>\n    </ion-col>\n    <div class="position-menu-bottom border-superior-menu-bottom">\n      <ion-row *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-list ion-item style="padding: 0; margin: 0; padding-left: 10px;">\n          <button menu-toggle  style="background-color: transparent; width: 100%; text-align: left;">\n            <ion-icon name={{p.icon}} style="padding-right:5px;"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n      </ion-row>\n    </div>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n<!--Fin SideNav-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolicitudesPage = (function () {
    function SolicitudesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SolicitudesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolicitudesPage');
    };
    SolicitudesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-solicitudes',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\solicitudes\solicitudes.html"*/'<!--\n  Generated template for the SolicitudesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Solicitudes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\solicitudes\solicitudes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SolicitudesPage);
    return SolicitudesPage;
}());

//# sourceMappingURL=solicitudes.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(201);
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
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */])
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
            selector: 'page-login',template:/*ion-inline-start:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ingreso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="color-fixed">\n<div >\n  <ion-row class="encabezado">\n    <h2 class="titulo">Bienvenido a la Aplicación de Asambleas</h2>\n  </ion-row>\n    <ion-row class="bg-transparente">\n      <ion-col class="bg-transparente">\n        <ion-list inset class="bg-transparente fg-blanco">\n\n          <ion-item class="bg-transparente fg-blanco">\n            <ion-label  class="bg-transparente fg-blanco" floating>Nombre de Usuario</ion-label>\n            <ion-input type="text" [(ngModel)]="usuario" required class="bg-transparente fg-blanco"></ion-input>\n          </ion-item>\n\n          <ion-item  class="bg-transparente fg-blanco">\n            <ion-label floating  class="bg-transparente fg-blanco">Password</ion-label>\n            <ion-input  class="bg-transparente fg-blanco" type="password" [(ngModel)]="password" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="btn-color" block (click)="Signup()">Ingresar</button>\n\n      </ion-col>\n    </ion-row>\n</div>\n<!-- fav -->\n  <ion-fab top right>\n    <button ion-fab mini class="btn-color"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title text-wrap>@Copyright 2018 Impacto 2V SPA</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\APP_IMPACTO2V\AppImpacto2V\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
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




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
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
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map