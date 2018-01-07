webpackJsonp([0],{

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://apps.asambleas.cl/api/';
    AppSettings.URL_FOTOS = 'http://172.16.0.241/MiFamilia.WebApi/';
    return AppSettings;
}());

//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novedades_novedades__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(202);
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
                    if (_this.dataGeneral.Proyectos) {
                        _this.proyectos = _this.dataGeneral.Proyectos;
                    }
                    if (_this.dataGeneral.Votaciones.proposals) {
                        _this.votaciones = _this.dataGeneral.Votaciones.proposals;
                    }
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
                    //Proyectos
                    if (_this.proyectos.length > 0) {
                        var entidad = {
                            Titulo: 'Proyectos',
                            Texto: 'Existen ' + _this.proyectos.length + ' proyectos.',
                            IconoGeneral: 'briefcase',
                            IconoBoton: 'arrow-forward'
                        };
                        _this.tarjetas.push(entidad);
                    }
                    //votaciones tricel
                    if (_this.votaciones.length > 0) {
                        var entidad = {
                            Titulo: 'Tricel',
                            Texto: 'Existen ' + _this.votaciones.length + ' triceles creados.',
                            IconoGeneral: 'hammer',
                            IconoBoton: 'arrow-forward'
                        };
                        _this.tarjetas.push(entidad);
                    }
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
            selector: 'page-inicio',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngFor="let item of tarjetas">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{item.Titulo}}\n        <ion-icon name="{{item.IconoGeneral}}" style="float: right;"></ion-icon>\n        </ion-card-title>\n      <p>\n        {{item.Texto}}\n      </p>\n    </ion-card-content>\n      <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear (click)="openPage(item)" style="float:right;">\n        <ion-icon name="{{item.IconoBoton}}"></ion-icon>\n        <div>Ir...</div>\n      </button>\n    </ion-col>\n\n  </ion-row>\n  </ion-card>\n</div>\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__ = __webpack_require__(202);
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
    function NovedadesPage(navCtrl, navParams, loading, acceso, ini) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
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
    NovedadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedades',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\novedades\novedades.html"*/'<!--\n  Generated template for the NovedadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Novedades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full icon-right color="light">\n  Nueva Novedad\n    <ion-icon name="chatbubbles"></ion-icon>\n  </button>\n  <div *ngFor="let item of solicitudes">\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          {{item.NombreUsuario}}\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar"></ion-icon>\n        </ion-card-title>\n        <span class="icono-fecha"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n        <button style="float: right; font-size: 0.8rem;" ion-button small color="light">Comentar</button>\n        <p text-wrap>\n          {{item.Texto}}\n        </p>\n        <!-- comentarios -->\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n          <ion-item>\n            <ion-icon name="chatbubbles" item-start style="color:darkgray; font-size: 1.8rem;"></ion-icon>\n            <h2>{{comen.NombreUsuario}}</h2>\n            <h3 style="font-size: 1.2rem;color:darkgray;"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n            <ion-icon style="color:darkgray;" name="trash" *ngIf="comen.VisibleEliminar" item-end></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\novedades\novedades.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_InicioService__["a" /* InicioService */]])
    ], NovedadesPage);
    return NovedadesPage;
}());

//# sourceMappingURL=novedades.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(199);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);


//hammer

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_services_AuthService__ = __webpack_require__(51);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__app_services_AuthService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\home\home.html"*/'\n\n<!--SideNav-->\n\n<ion-menu side="left" [content]="content" persistent="true">\n\n  <ion-header>\n\n    <ion-toolbar color="blanco">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-col width-67>\n\n     <!-- <img src="{{usuarioAps.UrlImagen}}" style="max-width: 97%;"/>-->\n\n     <!-- <h2  text-wrap>{{usuarioAps.Nombres + \' \' + usuarioAps.ApellidoPaterno + \' \' + usuarioAps.ApellidoMaterno}}</h2>-->\n\n     <h2  text-wrap>nombre completo</h2>\n\n    </ion-col>\n\n    <div class="position-menu-bottom border-superior-menu-bottom">\n\n      <ion-row *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-list ion-item style="padding: 0; margin: 0; padding-left: 10px;">\n\n          <button menu-toggle  style="background-color: transparent; width: 100%; text-align: left;">\n\n            <ion-icon name={{p.icon}} style="padding-right:5px;"></ion-icon>\n\n            {{p.title}}\n\n          </button>\n\n        </ion-list>\n\n      </ion-row>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n<!--Fin SideNav-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-solicitudes',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\solicitudes\solicitudes.html"*/'<!--\n\n  Generated template for the SolicitudesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Solicitudes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\solicitudes\solicitudes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SolicitudesPage);
    return SolicitudesPage;
}());

//# sourceMappingURL=solicitudes.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(200);
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
            selector: 'page-login',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ingreso</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="color-fixed">\n\n<div >\n\n  <ion-row class="encabezado">\n\n    <h2 class="titulo">Bienvenido a la Aplicación de Asambleas</h2>\n\n  </ion-row>\n\n    <ion-row class="bg-transparente">\n\n      <ion-col class="bg-transparente">\n\n        <ion-list inset class="bg-transparente fg-blanco">\n\n\n\n          <ion-item class="bg-transparente fg-blanco">\n\n            <ion-label  class="bg-transparente fg-blanco" floating>Nombre de Usuario</ion-label>\n\n            <ion-input type="text" [(ngModel)]="usuario" required class="bg-transparente fg-blanco"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item  class="bg-transparente fg-blanco">\n\n            <ion-label floating  class="bg-transparente fg-blanco">Password</ion-label>\n\n            <ion-input  class="bg-transparente fg-blanco" type="password" [(ngModel)]="password" required></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col class="signup-col">\n\n        <button ion-button class="btn-color" block (click)="Signup()">Ingresar</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n</div>\n\n<!-- fav -->\n\n  <ion-fab top right>\n\n    <button ion-fab mini class="btn-color"><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list>\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-title text-wrap>@Copyright 2018 Impacto 2V SPA</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(199);
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

},[203]);
//# sourceMappingURL=main.js.map