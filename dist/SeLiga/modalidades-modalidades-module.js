(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalidades-modalidades-module"],{

/***/ "./src/app/modalidades/modalidades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modalidades/modalidades.module.ts ***!
  \***************************************************/
/*! exports provided: ModalidadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadesPageModule", function() { return ModalidadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalidades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalidades.page */ "./src/app/modalidades/modalidades.page.ts");







var routes = [
    {
        path: '',
        component: _modalidades_page__WEBPACK_IMPORTED_MODULE_6__["ModalidadesPage"]
    }
];
var ModalidadesPageModule = /** @class */ (function () {
    function ModalidadesPageModule() {
    }
    ModalidadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modalidades_page__WEBPACK_IMPORTED_MODULE_6__["ModalidadesPage"]]
        })
    ], ModalidadesPageModule);
    return ModalidadesPageModule;
}());



/***/ }),

/***/ "./src/app/modalidades/modalidades.page.html":
/*!***************************************************!*\
  !*** ./src/app/modalidades/modalidades.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"barraSuperior\">\r\n      <ion-buttons>\r\n        <ion-menu-button class=\"menuBotao\"></ion-menu-button>\r\n        <ion-title>Modalidades</ion-title>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  \r\n     <span *ngFor=\"let modalidade of modalidades\"> \r\n      <ion-img id=\"{{modalidade.codigo}}\" *ngIf=\"modalidade.codigo != 'M003' && modalidade.disabled == false\" [routerLink]=\"['/competencias', modalidade.codigo]\" src=\"{{modalidade.imagem}}\" ></ion-img>\r\n      \r\n      <ion-img id=\"{{modalidade.codigo}}\" *ngIf=\"modalidade.codigo != 'M003' && modalidade.disabled == true\" src=\"{{modalidade.imagem}}\" ></ion-img>\r\n      \r\n      <ion-img id=\"{{modalidade.codigo}}\" *ngIf=\"modalidade.codigo == 'M003'\" (click)=\"emBreve()\" src=\"{{modalidade.imagem}}\"></ion-img> \r\n     </span>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/modalidades/modalidades.page.scss":
/*!***************************************************!*\
  !*** ./src/app/modalidades/modalidades.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalidade-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.ButtonCard {\n  position: relative; }\n\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#fdad1a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxpZGFkZXMvQzpcXFVzZXJzXFxtYXJjb1xcRGVza3RvcFxcU2VMaWdhL3NyY1xcYXBwXFxtb2RhbGlkYWRlc1xcbW9kYWxpZGFkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLDJEQUEyRDtFQUMzRCxvQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxpZGFkZXMvbW9kYWxpZGFkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsaWRhZGUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuQnV0dG9uQ2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbiAgfVxyXG5cclxuICAuYmFycmFTdXBlcmlvcntcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZGFkMWE7XHJcbn0gXHJcbiAgXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/modalidades/modalidades.page.ts":
/*!*************************************************!*\
  !*** ./src/app/modalidades/modalidades.page.ts ***!
  \*************************************************/
/*! exports provided: ModalidadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadesPage", function() { return ModalidadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");
/* harmony import */ var _model_modalidade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/modalidade */ "./src/app/model/modalidade.ts");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");






var ModalidadesPage = /** @class */ (function () {
    function ModalidadesPage(alertController) {
        this.alertController = alertController;
        this.modalidades = [];
        this.listarModalidades();
    }
    ModalidadesPage.prototype.ngOnInit = function () {
    };
    ModalidadesPage.prototype.listarModalidades = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isso, modalidade;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isso = this;
                        modalidade = new _model_modalidade__WEBPACK_IMPORTED_MODULE_4__["Modalidade"]();
                        return [4 /*yield*/, modalidade.getModalidades().then(function (snapshot) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var modalidades, i;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                modalidades = Object.keys(snapshot);
                                                return [4 /*yield*/, isso.bloquearModalidades(snapshot)];
                                            case 1:
                                                snapshot = _a.sent();
                                                for (i = 0; i < modalidades.length; i++) {
                                                    isso.modalidades.push(snapshot[modalidades[i]]); //transformar num array
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalidadesPage.prototype.bloquearModalidades = function (modalidades) {
        modalidades.forEach(function (mod, index) {
            if (mod.codigo != "M001") {
                var modalidade = modalidades[index - 1];
                var competencias = modalidade.competencias.split(", ");
                var ultima_competencia = competencias[competencias.length - 1];
                var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_3__["Competencia"]();
                competencia.getCompetencia(ultima_competencia).then(function (competencia_dados) {
                    var problemas = competencia_dados.problemas.split(", ");
                    var ultimo_problema = problemas[problemas.length - 1];
                    var usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
                    usuario.getProblemasRespondidos().then(function (problemas) {
                        var respondido = false;
                        problemas.forEach(function (problema) {
                            if (problema == ultimo_problema) {
                                respondido = true;
                            }
                        });
                        if (respondido) {
                            mod.disabled = false;
                        }
                        else {
                            mod.disabled = true;
                        }
                        respondido = false;
                    });
                });
            }
            else {
                mod.disabled = false;
            }
        });
        return modalidades;
    };
    ModalidadesPage.prototype.emBreve = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Modalidade em desenvolvimento...',
                            message: 'Esta modalidade ainda está sendo desenvolvida pela equipe do Se Liga Aê! :(... <br> Mas você ainda pode aprender esta linguagem com as apostilas disponíveis em nosso site!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalidadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modalidades',
            template: __webpack_require__(/*! ./modalidades.page.html */ "./src/app/modalidades/modalidades.page.html"),
            styles: [__webpack_require__(/*! ./modalidades.page.scss */ "./src/app/modalidades/modalidades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ModalidadesPage);
    return ModalidadesPage;
}());



/***/ })

}]);
//# sourceMappingURL=modalidades-modalidades-module.js.map