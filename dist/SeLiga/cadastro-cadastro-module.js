(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "./src/app/cadastro/cadastro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/cadastro/cadastro.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]
    }
];
var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.page.html":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink = \"/login\">\r\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cadastre-se</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n     <!-- <img src=\"/assets/icon/logoSeLiga.png\" class=\"imgTopo\"> -->\r\n    \r\n    <ion-list>\r\n        <ion-item>\r\n          <ion-input placeholder=\"Nome Completo\" required [(ngModel)]=\"usuario.nome\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-input placeholder=\"User\" required [(ngModel)]=\"usuario.nick\"></ion-input>\r\n          </ion-item>\r\n        <ion-item>\r\n          <ion-input placeholder=\"Email\" required [(ngModel)]=\"usuario.email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-input placeholder=\"Senha\" required type=\"password\" [(ngModel)]=\"usuario.senha\"></ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n\r\n        <ion-button class = \"botãoCadastro\" expand=\"block\" (click)=\"cadastrar()\">Cadastrar</ion-button>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif; }\n.imgTopo {\n  max-width: 100px;\n  max-height: 150px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.botãoCadastro {\n  --background:#ff914d; }\nion-content {\n  --background: #ffff00 url('background.png') no-repeat center center / cover !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWRhc3Ryby9DOlxcVXNlcnNcXG1hcmNvXFxEZXNrdG9wXFxTZUxpZ2Evc3JjXFxhcHBcXGNhZGFzdHJvXFxjYWRhc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMkRBQTJELEVBQUE7QUFFL0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUNKLEVBQUE7QUFDQTtFQUNJLG9CQUFhLEVBQUE7QUFHakI7RUFDSSxzRkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJhcnJhU3VwZXJpb3Ige1xuICBmb250OiBpdGFsaWMgc21hbGwtY2FwcyBub3JtYWwgMThweC8xLjNlbSBBcmlhbCwgc2Fucy1zZXJpZjsgfVxuXG4uaW1nVG9wbyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4uYm90w6NvQ2FkYXN0cm8ge1xuICAtLWJhY2tncm91bmQ6I2ZmOTE0ZDsgfVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYwMCB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgIWltcG9ydGFudDsgfVxuIiwiLmJhcnJhU3VwZXJpb3J7XHJcbiAgICBmb250OiBpdGFsaWMgc21hbGwtY2FwcyBub3JtYWwgMThweC8xLjNlbSBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uaW1nVG9wb3tcclxuICAgIG1heC13aWR0aDoxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6MTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbn1cclxuLmJvdMOjb0NhZGFzdHJve1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZjkxNGQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmYwMCB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var CadastroPage = /** @class */ (function () {
    function CadastroPage(authService, loadingCtrl, toastCtrl, usuarioService) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.usuarioService = usuarioService;
        this.usuario = {};
    }
    CadastroPage.prototype.ngOnInit = function () {
    };
    CadastroPage.prototype.cadastrar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, usuario, error_1, erro_nao_cadastrado, code;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.cadastrar(this.usuario)];
                    case 3:
                        user = _a.sent();
                        user.user.sendEmailVerification();
                        this.presentToast("Por favor, confirmar o e-mail");
                        usuario = {
                            codigo: user.user.uid,
                            nome: this.usuario['nome'],
                            nick: this.usuario['nick'],
                            email: this.usuario['email'],
                            pontuacao: 0,
                            problemas_respondidos: "",
                            quantidade_problemas_respondidos: 0,
                            medalhas: "",
                            quantidade_medalhas: 0
                        };
                        this.usuarioService.addUsuario(usuario);
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        erro_nao_cadastrado = true;
                        for (code in src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].error_codes) {
                            if (error_1.code == code) {
                                erro_nao_cadastrado = false;
                                this.presentToast(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].error_codes[code]);
                            }
                        }
                        if (erro_nao_cadastrado) {
                            this.presentToast(error_1.message);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CadastroPage.prototype.presentLoading = function () {
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
    CadastroPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.page.html */ "./src/app/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module.js.map