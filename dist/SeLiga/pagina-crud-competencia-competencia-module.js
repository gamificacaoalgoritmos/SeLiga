(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-crud-competencia-competencia-module"],{

/***/ "./src/app/pagina-crud/competencia/competencia.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pagina-crud/competencia/competencia.module.ts ***!
  \***************************************************************/
/*! exports provided: CompetenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaPageModule", function() { return CompetenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _competencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competencia.page */ "./src/app/pagina-crud/competencia/competencia.page.ts");







var routes = [
    {
        path: '',
        component: _competencia_page__WEBPACK_IMPORTED_MODULE_6__["CompetenciaPage"]
    }
];
var CompetenciaPageModule = /** @class */ (function () {
    function CompetenciaPageModule() {
    }
    CompetenciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_competencia_page__WEBPACK_IMPORTED_MODULE_6__["CompetenciaPage"]]
        })
    ], CompetenciaPageModule);
    return CompetenciaPageModule;
}());



/***/ }),

/***/ "./src/app/pagina-crud/competencia/competencia.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pagina-crud/competencia/competencia.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Adicionar Competência</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-button [routerLink]=\"['/pagina-crud']\" expand=\"full\">Voltar</ion-button>\r\n\r\n  <form id=\"form\" (ngSubmit)=\"submitForm(dados)\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Nome</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.nome\" name=\"nome\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Descricao</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.descricao\" name=\"descricao\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Codigo</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.codigo\" name=\"codigo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Imagem</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.imagem\" name=\"imagem\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Problemas</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.problemas\" name=\"problemas\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Teoria</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.teoria\" name=\"teoria\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Exemplo</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.exemplo\" name=\"exemplo\"></ion-input>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n    <ion-button type=\"submit\" expand=\"full\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagina-crud/competencia/competencia.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pagina-crud/competencia/competencia.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1jcnVkL2NvbXBldGVuY2lhL2NvbXBldGVuY2lhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pagina-crud/competencia/competencia.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pagina-crud/competencia/competencia.page.ts ***!
  \*************************************************************/
/*! exports provided: CompetenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaPage", function() { return CompetenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/competencia */ "./src/app/model/competencia.ts");



var CompetenciaPage = /** @class */ (function () {
    function CompetenciaPage() {
        this.dados = {};
    }
    CompetenciaPage.prototype.ngOnInit = function () {
    };
    CompetenciaPage.prototype.submitForm = function (dados) {
        this.competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_2__["Competencia"](dados);
        this.competencia.addCompetencia();
        alert('Adicionado com sucesso');
    };
    CompetenciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competencia',
            template: __webpack_require__(/*! ./competencia.page.html */ "./src/app/pagina-crud/competencia/competencia.page.html"),
            styles: [__webpack_require__(/*! ./competencia.page.scss */ "./src/app/pagina-crud/competencia/competencia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompetenciaPage);
    return CompetenciaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-crud-competencia-competencia-module.js.map