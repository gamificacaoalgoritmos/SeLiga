(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-crud-modalidade-modalidade-module"],{

/***/ "./src/app/pagina-crud/modalidade/modalidade.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pagina-crud/modalidade/modalidade.module.ts ***!
  \*************************************************************/
/*! exports provided: ModalidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadePageModule", function() { return ModalidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalidade.page */ "./src/app/pagina-crud/modalidade/modalidade.page.ts");







var routes = [
    {
        path: '',
        component: _modalidade_page__WEBPACK_IMPORTED_MODULE_6__["ModalidadePage"]
    }
];
var ModalidadePageModule = /** @class */ (function () {
    function ModalidadePageModule() {
    }
    ModalidadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modalidade_page__WEBPACK_IMPORTED_MODULE_6__["ModalidadePage"]]
        })
    ], ModalidadePageModule);
    return ModalidadePageModule;
}());



/***/ }),

/***/ "./src/app/pagina-crud/modalidade/modalidade.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pagina-crud/modalidade/modalidade.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Adicionar Modalidade</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button [routerLink]=\"['/pagina-crud']\" expand=\"full\">Voltar</ion-button>\r\n\r\n    <form id=\"form\" (ngSubmit)=\"submitForm(dados)\">\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Nome</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"dados.nome\" name=\"nome\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label>Descricao</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"dados.descricao\" name=\"descricao\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label>Codigo</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"dados.codigo\" name=\"codigo\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label>Competencias</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"dados.competencias\" name=\"imagem\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label>Imagem</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"dados.imagem\" name=\"problemas\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-button type=\"submit\" expand=\"full\">Enviar</ion-button>\r\n    </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagina-crud/modalidade/modalidade.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pagina-crud/modalidade/modalidade.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1jcnVkL21vZGFsaWRhZGUvbW9kYWxpZGFkZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pagina-crud/modalidade/modalidade.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pagina-crud/modalidade/modalidade.page.ts ***!
  \***********************************************************/
/*! exports provided: ModalidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadePage", function() { return ModalidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_modalidade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/modalidade */ "./src/app/model/modalidade.ts");



var ModalidadePage = /** @class */ (function () {
    function ModalidadePage() {
        this.dados = {};
    }
    ModalidadePage.prototype.ngOnInit = function () {
    };
    ModalidadePage.prototype.submitForm = function (dados) {
        var modalidade = new _model_modalidade__WEBPACK_IMPORTED_MODULE_2__["Modalidade"](dados);
        modalidade.addModalidade();
        alert('Adicionado com sucesso');
    };
    ModalidadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modalidade',
            template: __webpack_require__(/*! ./modalidade.page.html */ "./src/app/pagina-crud/modalidade/modalidade.page.html"),
            styles: [__webpack_require__(/*! ./modalidade.page.scss */ "./src/app/pagina-crud/modalidade/modalidade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalidadePage);
    return ModalidadePage;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-crud-modalidade-modalidade-module.js.map