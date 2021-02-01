(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exemplificacao-exemplificacao-module"],{

/***/ "./src/app/exemplificacao/exemplificacao.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/exemplificacao/exemplificacao.module.ts ***!
  \*********************************************************/
/*! exports provided: ExemplificacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExemplificacaoPageModule", function() { return ExemplificacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exemplificacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exemplificacao.page */ "./src/app/exemplificacao/exemplificacao.page.ts");







var routes = [
    {
        path: '',
        component: _exemplificacao_page__WEBPACK_IMPORTED_MODULE_6__["ExemplificacaoPage"]
    }
];
var ExemplificacaoPageModule = /** @class */ (function () {
    function ExemplificacaoPageModule() {
    }
    ExemplificacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exemplificacao_page__WEBPACK_IMPORTED_MODULE_6__["ExemplificacaoPage"]]
        })
    ], ExemplificacaoPageModule);
    return ExemplificacaoPageModule;
}());



/***/ }),

/***/ "./src/app/exemplificacao/exemplificacao.page.html":
/*!*********************************************************!*\
  !*** ./src/app/exemplificacao/exemplificacao.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons slot=\"secondary\">\r\n      <!-- <ion-button href=\"/assets/exemplificacao/wally/C001.png\" download=\"Exemplificação Wally C001.png\">\r\n        <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\r\n      </ion-button> -->\r\n      <ion-back-button text=\"\" icon=\"checkmark-circle\"></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      Exemplificação\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\">\r\n        <img class=\"img\" src=\"{{exemplo}}\">\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/exemplificacao/exemplificacao.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/exemplificacao/exemplificacao.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#ff6d05; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlbXBsaWZpY2FjYW8vQzpcXFVzZXJzXFxtYXJjb1xcRGVza3RvcFxcU2VMaWdhL3NyY1xcYXBwXFxleGVtcGxpZmljYWNhb1xcZXhlbXBsaWZpY2FjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQTJEO0VBQzNELG9CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leGVtcGxpZmljYWNhby9leGVtcGxpZmljYWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycmFTdXBlcmlvcntcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZjZkMDU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/exemplificacao/exemplificacao.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/exemplificacao/exemplificacao.page.ts ***!
  \*******************************************************/
/*! exports provided: ExemplificacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExemplificacaoPage", function() { return ExemplificacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");




var ExemplificacaoPage = /** @class */ (function () {
    function ExemplificacaoPage(route) {
        this.route = route;
        this.exemplo = "";
        this.competencia_id = this.route.snapshot.params['comp'];
        var isso = this;
        var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_3__["Competencia"]();
        competencia.getCompetencia(this.competencia_id).then(function (snapshot) {
            isso.exemplo = snapshot.exemplo;
        });
    }
    ExemplificacaoPage.prototype.ngOnInit = function () {
    };
    ExemplificacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exemplificacao',
            template: __webpack_require__(/*! ./exemplificacao.page.html */ "./src/app/exemplificacao/exemplificacao.page.html"),
            styles: [__webpack_require__(/*! ./exemplificacao.page.scss */ "./src/app/exemplificacao/exemplificacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExemplificacaoPage);
    return ExemplificacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=exemplificacao-exemplificacao-module.js.map