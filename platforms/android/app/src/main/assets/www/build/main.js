webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
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
    NovedadService.prototype.putMuro = function (prioridadId, texto, instId, usuId, rolId) {
        var entidad = {
            InstId: instId,
            UsuId: usuId,
            PrioridadId: prioridadId,
            RolId: rolId,
            Texto: texto,
            EsCpas: 'false'
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisorImagenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the VisorImagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisorImagenPage = (function () {
    function VisorImagenPage(navCtrl, navParams, loading, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rutaImagen = this.navParams.get('item');
    }
    VisorImagenPage.prototype.closeModal = function (param) {
        this.navCtrl.pop();
    };
    VisorImagenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisorImagenPage');
    };
    VisorImagenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visor-imagen',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\visor-imagen\visor-imagen.html"*/'<!--\n  Generated template for the VisorImagenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Imágen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n  <img [src]="rutaImagen" style="width: 100%;" />\n\n</ion-content>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\visor-imagen\visor-imagen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], VisorImagenPage);
    return VisorImagenPage;
}());

//# sourceMappingURL=visor-imagen.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
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

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novedades_novedades__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__ = __webpack_require__(109);
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
                //this.navCtrl.push(NovedadesPage, {id: id});
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__novedades_novedades__["a" /* NovedadesPage */]);
                break;
        }
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngFor="let item of tarjetas">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{item.Titulo}}\n        <ion-icon name="{{item.IconoGeneral}}" style="float: right;"></ion-icon>\n        </ion-card-title>\n      <p>\n        {{item.Texto}}\n      </p>\n    </ion-card-content>\n      <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear (click)="openPage(item)" style="float:right;">\n        <ion-icon name="{{item.IconoBoton}}"></ion-icon>\n        <div>Ir...</div>\n      </button>\n    </ion-col>\n\n  </ion-row>\n  </ion-card>\n</div>\n</ion-content>\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_InicioService__["a" /* InicioService */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novedades_novedades__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__ = __webpack_require__(108);
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
    function DetailNovedadPage(navCtrl, navParams, nov, loading, toastCtrl, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nov = nov;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
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
    DetailNovedadPage.prototype.presentModalImagen = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__["a" /* VisorImagenPage */], { item: item });
        modal.present();
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
            selector: 'page-detail-novedad',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\detail-novedad\detail-novedad.html"*/'<!--\n  Generated template for the DetailNovedadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n  <div *ngFor="let item of solicitudes">\n    <ion-card>\n      <ion-card-content>\n        <!-- imagenes -->\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n          <ion-row>\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno)"/>\n            </div>\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos)" />\n            </div>\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres)" />\n            </div>\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro)" />\n            </div>\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-card-title>\n          {{item.NombreUsuario}}\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800" (click)="presentActionSheetMuro(item)"></ion-icon>\n        </ion-card-title>\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n        <p text-wrap>\n          <strong>\n            {{item.Texto}}\n          </strong>\n        </p>\n        <ion-item>\n              <ion-label stacked>Ingrese Comentario</ion-label>\n              <ion-input type="text" [(ngModel)]="textoEnviar" required></ion-input>\n        </ion-item>\n        <button style="float: right; font-size: 0.8rem;" ion-button class="bg-red-300 fg-white" (click)="enviar(item)">Enviar</button>\n\n\n        <!-- comentarios -->\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n          <ion-item>\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n<!--\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button style="width: 100%;" class="bg-red-200 fg-white" (click)="closeModal()">Cancelar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button style="width: 100%;" class="bg-red-400 fg-white" (click)="closeModal(\'actualizar\')">Aceptar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n-->\n</ion-content>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\detail-novedad\detail-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DetailNovedadPage);
    return DetailNovedadPage;
}());

//# sourceMappingURL=detail-novedad.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__novedades_novedades__ = __webpack_require__(54);
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
    function CrearNovedadPage(navCtrl, navParams, loading, acceso, modalCtrl, ini, nov, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.nov = nov;
        this.toastCtrl = toastCtrl;
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
        if (param != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__novedades_novedades__["a" /* NovedadesPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__novedades_novedades__["a" /* NovedadesPage */]);
        }
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
            _this.nov.putMuro(1, _this.textoEnviar, instId, usuId, rolId).subscribe(function (data) {
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__novedades_novedades__["a" /* NovedadesPage */]);
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
            selector: 'page-crear-novedad',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\crear-novedad\crear-novedad.html"*/'<!--\n  Generated template for the CrearNovedadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crear Novedad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full class="bg-red-200 fg-white" (click)="closeModal()">Cerrar</button>\n  <!--\n  <ion-item>\n\n\n  </ion-item>\n\n  -->\n\n  <ion-card>\n    <ion-card-header>\n      Archivos\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon name="document"></ion-icon> Archivo 1:\n          </ion-col>\n          <ion-col col-12>\n            <input type="file" accept="image/*" (change)="changeListener($event)"  #fileInput>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon name="document"></ion-icon> Archivo 2:\n          </ion-col>\n          <ion-col col-12>\n\n              <input type="file" accept="image/*" (change)="changeListenerDos($event)" #fileInput2>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon name="document"></ion-icon> Archivo 3:\n          </ion-col>\n          <ion-col col-12>\n            <input type="file"  accept="image/*"  (change)="changeListenerTres($event)"  #fileInput3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-icon name="document"></ion-icon> Archivo 4:\n          </ion-col>\n          <ion-col col-12>\n            <input type="file" accept="image/*" (change)="changeListenerCuatro($event)"  #fileInput4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Novedad\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label stacked>Ingrese Novedad\n        <ion-input type="text" [(ngModel)]="textoEnviar"></ion-input>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button full class="bg-red-300 fg-white" (click)="enviarComentario()">Guardar</button>\n\n</ion-content>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\crear-novedad\crear-novedad.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CrearNovedadPage);
    return CrearNovedadPage;
}());

//# sourceMappingURL=crear-novedad.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);


//hammer

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_novedad_detail_novedad__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visor_imagen_visor_imagen__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_crear_novedad_crear_novedad__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_services_AuthService__ = __webpack_require__(40);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_solicitudes_solicitudes__["a" /* SolicitudesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_novedades_novedades__["a" /* NovedadesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_novedad_detail_novedad__["a" /* DetailNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_visor_imagen_visor_imagen__["a" /* VisorImagenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crear_novedad_crear_novedad__["a" /* CrearNovedadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__app_services_AuthService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\home\home.html"*/'\n\n<!--SideNav-->\n\n<ion-menu side="left" [content]="content" persistent="true">\n\n  <ion-header>\n\n    <ion-toolbar color="blanco">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-col width-67>\n\n     <!-- <img src="{{usuarioAps.UrlImagen}}" style="max-width: 97%;"/>-->\n\n     <!-- <h2  text-wrap>{{usuarioAps.Nombres + \' \' + usuarioAps.ApellidoPaterno + \' \' + usuarioAps.ApellidoMaterno}}</h2>-->\n\n     <h2  text-wrap>nombre completo</h2>\n\n    </ion-col>\n\n    <div class="position-menu-bottom border-superior-menu-bottom">\n\n      <ion-row *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-list ion-item style="padding: 0; margin: 0; padding-left: 10px;">\n\n          <button menu-toggle  style="background-color: transparent; width: 100%; text-align: left;">\n\n            <ion-icon name={{p.icon}} style="padding-right:5px;"></ion-icon>\n\n            {{p.title}}\n\n          </button>\n\n        </ion-list>\n\n      </ion-row>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n<!--Fin SideNav-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SolicitudesPage);
    return SolicitudesPage;
}());

//# sourceMappingURL=solicitudes.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSettings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
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

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(204);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://apps.asambleas.cl/api/';
    AppSettings.URL_FOTOS = 'http://apps.asambleas.cl/Repositorio/';
    AppSettings.URL_RAIZ = 'http://apps.asambleas.cl/';
    return AppSettings;
}());

//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_novedad_detail_novedad__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_novedad_crear_novedad__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_InicioService__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_novedadService__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_AppSettings__ = __webpack_require__(53);
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
    function NovedadesPage(navCtrl, navParams, loading, acceso, modalCtrl, ini, nov, toastCtrl, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.acceso = acceso;
        this.modalCtrl = modalCtrl;
        this.ini = ini;
        this.nov = nov;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.image = null;
        var loader = this.loading.create({
            content: 'Cargando...',
        });
        this.solicitudes = [];
        this.image = __WEBPACK_IMPORTED_MODULE_9__app_AppSettings__["a" /* AppSettings */].URL_FOTOS + 'BB__4.png';
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
                                _this.solicitudes[s].ArchivosAdjuntos[r].Src = __WEBPACK_IMPORTED_MODULE_9__app_AppSettings__["a" /* AppSettings */].URL_RAIZ + _this.solicitudes[s].ArchivosAdjuntos[r].NombreCarpeta + '/' + _this.solicitudes[s].ArchivosAdjuntos[r].NombreArchivo;
                            }
                        }
                        //variables para controlar las imagenes adjuntas
                        if (cantidadAdjuntos == 1) {
                            muestraImagenUno = true;
                            _this.solicitudes[s].ImgUno = _this.solicitudes[s].ArchivosAdjuntos[0].Src;
                            _this.solicitudes[s].ClaseUno = 'img-100 imagenes-muro';
                            _this.solicitudes[s].ColUno = 'col-12';
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
    NovedadesPage.prototype.presentModalImagen = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__visor_imagen_visor_imagen__["a" /* VisorImagenPage */], { item: item });
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
    NovedadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedades',template:/*ion-inline-start:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\novedades\novedades.html"*/'<!--\n  Generated template for the NovedadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Novedades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button full icon-right color="light" (click)="presentModalCrearNovedad(null)">\n  Nueva Novedad\n    <ion-icon name="chatbubbles"></ion-icon>\n  </button>\n  <!-- solo para pruebas de carga de archivos -->\n\n\n  <div *ngFor="let item of solicitudes">\n    <ion-card>\n      <ion-card-content>\n        <!-- lo comentamos por mientra\n          <img [src]="image" *ngIf="image" />\n          <ion-item>\n            <label>Carga de Archivos</label>\n            <input type="file" accept="image/*" (change)="changeListener($event, item)" style="opacity: 0" #fileInp>\n\n          </ion-item>\n        -->\n        <ion-grid *ngIf="item.MuestraAdjuntos">\n          <ion-row>\n            <div [class]="item.ClaseUno" *ngIf="item.MuestraImagenUno">\n              <img [src]="item.ImgUno" (click)="presentModalImagen(item.ImgUno)" />\n            </div>\n            <div [class]="item.ClaseDos" *ngIf="item.MuestraImagenDos">\n              <img [src]="item.ImgDos" (click)="presentModalImagen(item.ImgDos)" />\n            </div>\n            <div [class]="item.ClaseTres" *ngIf="item.MuestraImagenTres">\n              <img [src]="item.ImgTres" (click)="presentModalImagen(item.ImgTres)" />\n            </div>\n            <div [class]="item.ClaseCuatro" *ngIf="item.MuestraImagenCuatro">\n              <img [src]="item.ImgCuatro" (click)="presentModalImagen(item.ImgCuatro)" />\n            </div>\n          </ion-row>\n\n        </ion-grid>\n        <ion-card-title>\n          {{item.NombreUsuario}}\n          <ion-icon name="{{item.UrlImagen}}" style="float: right;" *ngIf="item.VisibleEliminar" class="fg-teal-800"  (click)="presentActionSheetMuro(item)"></ion-icon>\n        </ion-card-title>\n        <span class="icono-fecha fg-teal-800"><ion-icon name="clock"></ion-icon> {{item.FechaString}}</span>\n        <button style="float: right; font-size: 0.8rem;" ion-button small class="bg-red-300 fg-white" (click)="presentModal(item)" >Comentar</button>\n        <p text-wrap>\n          <strong>\n            {{item.Texto}}\n          </strong>\n        </p>\n        <!-- comentarios -->\n        <ion-list *ngFor="let comen of item.RespuestaMuro">\n          <ion-item>\n            <ion-icon name="chatbubbles" item-start style="font-size: 1.8rem;" class="fg-teal-800"></ion-icon>\n            <h2><strong>{{comen.NombreUsuario}}</strong></h2>\n            <h3 style="font-size: 1.2rem;" class="fg-teal-800"><ion-icon name="clock"></ion-icon> {{comen.FechaString}}</h3>\n            <p text-wrap style="text-align: justify;">{{comen.Texto}}</p>\n            <ion-icon class="fg-teal-800" name="trash" *ngIf="comen.VisibleEliminar" item-end (click)="presentActionSheet(comen)"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-fab top right right>\n  <button ion-fab mini (click)="logout()" class="btn-color">\n    <ion-icon name="close"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"Z:\Proyectos_compartidos\AppImpacto2V\src\pages\novedades\novedades.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__app_services_InicioService__["a" /* InicioService */], __WEBPACK_IMPORTED_MODULE_8__app_services_novedadService__["a" /* NovedadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_InicioService__["a" /* InicioService */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_novedadService__["a" /* NovedadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], NovedadesPage);
    return NovedadesPage;
}());

//# sourceMappingURL=novedades.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map