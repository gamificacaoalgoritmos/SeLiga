(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-crud-pagina-crud-module"],{

/***/ "./src/app/pagina-crud/pagina-crud.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pagina-crud/pagina-crud.module.ts ***!
  \***************************************************/
/*! exports provided: PaginaCRUDPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaCRUDPageModule", function() { return PaginaCRUDPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagina_crud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina-crud.page */ "./src/app/pagina-crud/pagina-crud.page.ts");







var routes = [
    {
        path: '',
        component: _pagina_crud_page__WEBPACK_IMPORTED_MODULE_6__["PaginaCRUDPage"]
    }
];
var PaginaCRUDPageModule = /** @class */ (function () {
    function PaginaCRUDPageModule() {
    }
    PaginaCRUDPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pagina_crud_page__WEBPACK_IMPORTED_MODULE_6__["PaginaCRUDPage"]]
        })
    ], PaginaCRUDPageModule);
    return PaginaCRUDPageModule;
}());



/***/ }),

/***/ "./src/app/pagina-crud/pagina-crud.page.html":
/*!***************************************************!*\
  !*** ./src/app/pagina-crud/pagina-crud.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cadastros</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <ion-button routerLink='/problemas' expand=\"full\" size=\"medium\">Adicionar problema</ion-button>\r\n  <br>\r\n  <ion-button routerLink='/competencia' expand=\"full\" size=\"medium\"> Adicionar competência</ion-button>\r\n  <br>\r\n  <ion-button routerLink='/modalidade' expand=\"full\" size=\"medium\">Adicionar modalidade</ion-button>\r\n  <br>\r\n  <ion-button routerLink='/medalha' expand=\"full\" size=\"medium\">Adicionar medalha</ion-button>\r\n\r\n</ion-content>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink = \"/home\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"home\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>"

/***/ }),

/***/ "./src/app/pagina-crud/pagina-crud.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pagina-crud/pagina-crud.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1jcnVkL3BhZ2luYS1jcnVkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pagina-crud/pagina-crud.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pagina-crud/pagina-crud.page.ts ***!
  \*************************************************/
/*! exports provided: PaginaCRUDPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaCRUDPage", function() { return PaginaCRUDPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginaCRUDPage = /** @class */ (function () {
    function PaginaCRUDPage() {
    }
    PaginaCRUDPage.prototype.ngOnInit = function () {
    };
    PaginaCRUDPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagina-crud',
            template: __webpack_require__(/*! ./pagina-crud.page.html */ "./src/app/pagina-crud/pagina-crud.page.html"),
            styles: [__webpack_require__(/*! ./pagina-crud.page.scss */ "./src/app/pagina-crud/pagina-crud.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginaCRUDPage);
    return PaginaCRUDPage;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-crud-pagina-crud-module.js.map