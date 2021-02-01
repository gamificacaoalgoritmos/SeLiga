(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conquistas-conquistas-module"],{

/***/ "./src/app/conquistas/conquistas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/conquistas/conquistas.module.ts ***!
  \*************************************************/
/*! exports provided: ConquistasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquistasPageModule", function() { return ConquistasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conquistas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conquistas.page */ "./src/app/conquistas/conquistas.page.ts");







var routes = [
    {
        path: '',
        component: _conquistas_page__WEBPACK_IMPORTED_MODULE_6__["ConquistasPage"]
    }
];
var ConquistasPageModule = /** @class */ (function () {
    function ConquistasPageModule() {
    }
    ConquistasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conquistas_page__WEBPACK_IMPORTED_MODULE_6__["ConquistasPage"]]
        })
    ], ConquistasPageModule);
    return ConquistasPageModule;
}());



/***/ }),

/***/ "./src/app/conquistas/conquistas.page.html":
/*!*************************************************!*\
  !*** ./src/app/conquistas/conquistas.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons>\r\n      <ion-menu-button class=\"menuBotao\"></ion-menu-button>\r\n      <ion-title>Minhas Conquistas</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-item>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"/assets/conquistas/pontuacao/MDL017.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>Nome Medalha</h2>\r\n      <h3 class=\"descricao\">Descrição da medalha</h3>\r\n      <p class=\"codigo\">Código</p>\r\n    </ion-label>\r\n  </ion-item> -->\r\n\r\n  <ion-item *ngFor=\"let medalha of medalhas\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"{{medalha.imagem}}\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>{{medalha.titulo}}</h2>\r\n      <h3 class=\"descricao\">{{medalha.descricao}}</h3>\r\n      <p class=\"codigo\">{{medalha.codigo}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  \r\n\r\n  <!-- <ion-item>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"/assets/conquistas/pontuacao/MDL013.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>O pensador</h2>\r\n      <h3 class=\"descricao\"> Esculpido no melhor bronze da região.</h3>\r\n      <p class=\"codigo\">MDL013</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"/assets/conquistas/pontuacao/MDL019.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>Saiyajin</h2>\r\n      <h3 class=\"descricao\"> O poder surge em resposta a uma necessidade.</h3>\r\n      <p class=\"codigo\">MDL019</p>\r\n    </ion-label>\r\n  </ion-item> -->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/conquistas/conquistas.page.scss":
/*!*************************************************!*\
  !*** ./src/app/conquistas/conquistas.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#fdad1a; }\n\n.descricao {\n  font-size: 9px; }\n\n.codigo {\n  font-style: italic;\n  font-size: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ucXVpc3Rhcy9DOlxcVXNlcnNcXG1hcmNvXFxEZXNrdG9wXFxTZUxpZ2Evc3JjXFxhcHBcXGNvbnF1aXN0YXNcXGNvbnF1aXN0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQTJEO0VBQzNELG9CQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25xdWlzdGFzL2NvbnF1aXN0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcnJhU3VwZXJpb3J7XHJcbiAgICBmb250OiBpdGFsaWMgc21hbGwtY2FwcyBub3JtYWwgMThweC8xLjNlbSBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojZmRhZDFhO1xyXG59IFxyXG5cclxuLmRlc2NyaWNhb3tcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG4uY29kaWdve1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/conquistas/conquistas.page.ts":
/*!***********************************************!*\
  !*** ./src/app/conquistas/conquistas.page.ts ***!
  \***********************************************/
/*! exports provided: ConquistasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquistasPage", function() { return ConquistasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_medalha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/medalha */ "./src/app/model/medalha.ts");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var ConquistasPage = /** @class */ (function () {
    function ConquistasPage() {
        this.medalhas = [];
        this.carregarMedalhas();
    }
    ConquistasPage.prototype.ngOnInit = function () {
    };
    ConquistasPage.prototype.carregarMedalhas = function () {
        var _this = this;
        var usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                usuario.getUsuario(user.uid).then(function (usuario) {
                    var medalhas = usuario.medalhas.split(", ");
                    medalhas.forEach(function (medalhas_usuario) {
                        var medalha = new _model_medalha__WEBPACK_IMPORTED_MODULE_2__["Medalha"]();
                        medalha.getMedalha(medalhas_usuario).then(function (medalha) {
                            if (medalha.codigo != undefined) {
                                _this.medalhas.push(medalha);
                            }
                        });
                    });
                });
            }
        });
    };
    ConquistasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conquistas',
            template: __webpack_require__(/*! ./conquistas.page.html */ "./src/app/conquistas/conquistas.page.html"),
            styles: [__webpack_require__(/*! ./conquistas.page.scss */ "./src/app/conquistas/conquistas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConquistasPage);
    return ConquistasPage;
}());



/***/ })

}]);
//# sourceMappingURL=conquistas-conquistas-module.js.map