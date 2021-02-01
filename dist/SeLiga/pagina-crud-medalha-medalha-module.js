(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-crud-medalha-medalha-module"],{

/***/ "./src/app/pagina-crud/medalha/medalha.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pagina-crud/medalha/medalha.module.ts ***!
  \*******************************************************/
/*! exports provided: MedalhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedalhaPageModule", function() { return MedalhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medalha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medalha.page */ "./src/app/pagina-crud/medalha/medalha.page.ts");







var routes = [
    {
        path: '',
        component: _medalha_page__WEBPACK_IMPORTED_MODULE_6__["MedalhaPage"]
    }
];
var MedalhaPageModule = /** @class */ (function () {
    function MedalhaPageModule() {
    }
    MedalhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medalha_page__WEBPACK_IMPORTED_MODULE_6__["MedalhaPage"]]
        })
    ], MedalhaPageModule);
    return MedalhaPageModule;
}());



/***/ }),

/***/ "./src/app/pagina-crud/medalha/medalha.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pagina-crud/medalha/medalha.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>medalha</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button [routerLink]=\"['/pagina-crud']\" expand=\"full\">Voltar</ion-button>\r\n\r\n  <form (ngSubmit)=\"submitForm(dados)\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Codigo</ion-label>\r\n        <ion-input type=\"text\" aria-required=\"\" [(ngModel)]=\"dados.codigo\" id=\"codigo\" name=\"codigo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Imagem</ion-label>\r\n        <ion-input aria-required=\"\" type=\"text\" [(ngModel)]=\"dados.imagem\" id=\"imagem\" name=\"imagem\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Titulo</ion-label>\r\n        <ion-input aria-required=\"\" type=\"text\" [(ngModel)]=\"dados.titulo\" id=\"titulo\" name=\"titulo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Descrição</ion-label>\r\n        <ion-input aria-required=\"\" type=\"text\" [(ngModel)]=\"dados.descricao\" id=\"descricao\" name=\"descricao\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Condição</ion-label>\r\n        <ion-input aria-required=\"\" type=\"text\" [(ngModel)]=\"dados.condicao\" id=\"condicao\" name=\"condicao\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n      \r\n    <ion-button type=\"submit\" expand=\"full\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagina-crud/medalha/medalha.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pagina-crud/medalha/medalha.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1jcnVkL21lZGFsaGEvbWVkYWxoYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pagina-crud/medalha/medalha.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pagina-crud/medalha/medalha.page.ts ***!
  \*****************************************************/
/*! exports provided: MedalhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedalhaPage", function() { return MedalhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_medalha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/medalha */ "./src/app/model/medalha.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MedalhaPage = /** @class */ (function () {
    function MedalhaPage(router) {
        this.router = router;
        this.dados = {};
    }
    MedalhaPage.prototype.ngOnInit = function () {
    };
    MedalhaPage.prototype.submitForm = function (dados) {
        var medalha = new src_app_model_medalha__WEBPACK_IMPORTED_MODULE_2__["Medalha"](dados);
        medalha.addMedalha();
        alert('adicionado com sucesso');
        for (var item in medalha) {
            if (item[0] != "a" && item[0] != "g" && item[0] != "m") {
                dados[item] = "";
            }
        }
    };
    MedalhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medalha',
            template: __webpack_require__(/*! ./medalha.page.html */ "./src/app/pagina-crud/medalha/medalha.page.html"),
            styles: [__webpack_require__(/*! ./medalha.page.scss */ "./src/app/pagina-crud/medalha/medalha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MedalhaPage);
    return MedalhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-crud-medalha-medalha-module.js.map