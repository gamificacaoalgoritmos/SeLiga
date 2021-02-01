(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmar-email-confirmar-email-module"],{

/***/ "./src/app/confirmar-email/confirmar-email.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/confirmar-email/confirmar-email.module.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmarEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarEmailPageModule", function() { return ConfirmarEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmar_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmar-email.page */ "./src/app/confirmar-email/confirmar-email.page.ts");







var routes = [
    {
        path: '',
        component: _confirmar_email_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarEmailPage"]
    }
];
var ConfirmarEmailPageModule = /** @class */ (function () {
    function ConfirmarEmailPageModule() {
    }
    ConfirmarEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirmar_email_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarEmailPage"]]
        })
    ], ConfirmarEmailPageModule);
    return ConfirmarEmailPageModule;
}());



/***/ }),

/***/ "./src/app/confirmar-email/confirmar-email.page.html":
/*!***********************************************************!*\
  !*** ./src/app/confirmar-email/confirmar-email.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink = \"/login\">\r\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Recuperar Senha</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form (ngSubmit)=\"verificarEmail(dados)\">\r\n    <ion-list>\r\n      <ion-item>\r\n      <ion-input placeholder=\"E-mail cadastrado\" type=\"text\" [(ngModel)]=\"dados.email\" name=\"email\"></ion-input>\r\n    </ion-item>\r\n    </ion-list>\r\n    <ion-button type=\"email\" expand=\"full\" class=\"botãoEntrar\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/confirmar-email/confirmar-email.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/confirmar-email/confirmar-email.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.botãoEntrar {\n  --background: #ff914d; }\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif; }\nion-content {\n  --background: #ffff00 url('background.png') no-repeat center center / cover !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWFyLWVtYWlsL2NvbmZpcm1hci1lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbmZpcm1hci1lbWFpbC9DOlxcVXNlcnNcXG1hcmNvXFxEZXNrdG9wXFxTZUxpZ2Evc3JjXFxhcHBcXGNvbmZpcm1hci1lbWFpbFxcY29uZmlybWFyLWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxxQkFBYSxFQUFBO0FBR2pCO0VBQ0ksMkRBQTJELEVBQUE7QUFHL0Q7RUFDSSxzRkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWFyLWVtYWlsL2NvbmZpcm1hci1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYm90w6NvRW50cmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY5MTRkOyB9XG5cbi5iYXJyYVN1cGVyaW9yIHtcbiAgZm9udDogaXRhbGljIHNtYWxsLWNhcHMgbm9ybWFsIDE4cHgvMS4zZW0gQXJpYWwsIHNhbnMtc2VyaWY7IH1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmMDAgdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7IH1cbiIsIi5ib3TDo29FbnRyYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjkxNGQ7XHJcbn1cclxuXHJcbi5iYXJyYVN1cGVyaW9ye1xyXG4gICAgZm9udDogaXRhbGljIHNtYWxsLWNhcHMgbm9ybWFsIDE4cHgvMS4zZW0gQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmYwMCB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/confirmar-email/confirmar-email.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/confirmar-email/confirmar-email.page.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmarEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarEmailPage", function() { return ConfirmarEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ConfirmarEmailPage = /** @class */ (function () {
    function ConfirmarEmailPage(router, alertController, loadingCtrl) {
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.dados = {};
    }
    ConfirmarEmailPage.prototype.ngOnInit = function () {
    };
    ConfirmarEmailPage.prototype.verificarEmail = function (dados) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, usuario_existe;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
                        usuario_existe = false;
                        usuario.getUsuarios().then(function (usuarios) {
                            try {
                                usuarios.forEach(function (usuario) {
                                    if (usuario.email == dados.email) {
                                        usuario_existe = true;
                                        _this.enviarEmail(dados.email);
                                        _this.emailEnviado();
                                    }
                                });
                                if (!usuario_existe) {
                                    _this.emailNaoEncontrado();
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                            finally {
                                _this.loading.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmarEmailPage.prototype.enviarEmail = function (email) {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().sendPasswordResetEmail(email);
    };
    ConfirmarEmailPage.prototype.emailEnviado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Email enviado',
                            message: "Instruções de como recuperar sua conta foram enviadas para seu email",
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'confirm',
                                    handler: function () {
                                        _this.router.navigate(['login']);
                                    }
                                }
                            ]
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
    ConfirmarEmailPage.prototype.emailNaoEncontrado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Email inválido!',
                            message: "Seu email não foi encontrado, crie uma conta primeiro",
                            buttons: ["Ok"]
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
    ConfirmarEmailPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...', })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    ConfirmarEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmar-email',
            template: __webpack_require__(/*! ./confirmar-email.page.html */ "./src/app/confirmar-email/confirmar-email.page.html"),
            styles: [__webpack_require__(/*! ./confirmar-email.page.scss */ "./src/app/confirmar-email/confirmar-email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], ConfirmarEmailPage);
    return ConfirmarEmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=confirmar-email-confirmar-email-module.js.map