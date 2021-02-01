(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-crud-problemas-problemas-module"],{

/***/ "./src/app/pagina-crud/problemas/problemas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pagina-crud/problemas/problemas.module.ts ***!
  \***********************************************************/
/*! exports provided: ProblemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemasPageModule", function() { return ProblemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _problemas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./problemas.page */ "./src/app/pagina-crud/problemas/problemas.page.ts");







var routes = [
    {
        path: '',
        component: _problemas_page__WEBPACK_IMPORTED_MODULE_6__["ProblemaPage"]
    }
];
var ProblemasPageModule = /** @class */ (function () {
    function ProblemasPageModule() {
    }
    ProblemasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_problemas_page__WEBPACK_IMPORTED_MODULE_6__["ProblemaPage"]]
        })
    ], ProblemasPageModule);
    return ProblemasPageModule;
}());



/***/ }),

/***/ "./src/app/pagina-crud/problemas/problemas.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pagina-crud/problemas/problemas.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Adicionar Problema</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button [routerLink]=\"['/pagina-crud']\" expand=\"full\">Voltar</ion-button>\r\n\r\n  <form (ngSubmit)=\"submitForm(dados)\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Codigo</ion-label>\r\n        <ion-input type=\"text\" aria-required=\"\" [(ngModel)]=\"dados.codigo\" name=\"codigo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Titulo</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.titulo\" name=\"titulo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Enunciado</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.enunciado\" name=\"enunciado\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Dica</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.dica\" name=\"dica\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Imagem do codigo</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.imagemCodigo\" name=\"imagemCodigo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Imagem contexto</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.imagem\" name=\"imagem\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Pontuacão</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"dados.pontuacao\" name=\"pontuacao\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Dificuldade</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"dados.dificuldade\" name=\"dificuldade\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>AlternativaA</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.alternativaA\" name=\"alternativaA\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>AlternativaB</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.alternativaB\" name=\"alternativaB\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>AlternativaC</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.alternativaC\" name=\"alternativaC\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>AlternativaD</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"dados.alternativaD\" name=\"alternativaD\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>AlternativaCorreta</ion-label>\r\n        <ion-select [(ngModel)]=\"dados.alternativaCorreta\" name=\"alternativaCorreta\">\r\n          <ion-select-option>a</ion-select-option>\r\n          <ion-select-option>b</ion-select-option>\r\n          <ion-select-option>c</ion-select-option>\r\n          <ion-select-option>d</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button type=\"submit\" expand=\"full\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagina-crud/problemas/problemas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pagina-crud/problemas/problemas.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1jcnVkL3Byb2JsZW1hcy9wcm9ibGVtYXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pagina-crud/problemas/problemas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pagina-crud/problemas/problemas.page.ts ***!
  \*********************************************************/
/*! exports provided: ProblemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaPage", function() { return ProblemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_problema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/problema */ "./src/app/model/problema.ts");



var ProblemaPage = /** @class */ (function () {
    function ProblemaPage() {
        this.dados = {};
    }
    ProblemaPage.prototype.ngOnInit = function () {
    };
    ProblemaPage.prototype.submitForm = function (dados) {
        var problema = new _model_problema__WEBPACK_IMPORTED_MODULE_2__["Problema"](dados);
        problema.addProblema();
        alert('adicionado com sucesso');
    };
    ProblemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problemas',
            template: __webpack_require__(/*! ./problemas.page.html */ "./src/app/pagina-crud/problemas/problemas.page.html"),
            styles: [__webpack_require__(/*! ./problemas.page.scss */ "./src/app/pagina-crud/problemas/problemas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProblemaPage);
    return ProblemaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-crud-problemas-problemas-module.js.map