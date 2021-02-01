(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teoria-teoria-module"],{

/***/ "./src/app/teoria/teoria.module.ts":
/*!*****************************************!*\
  !*** ./src/app/teoria/teoria.module.ts ***!
  \*****************************************/
/*! exports provided: TeoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeoriaPageModule", function() { return TeoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teoria.page */ "./src/app/teoria/teoria.page.ts");







var routes = [
    {
        path: '',
        component: _teoria_page__WEBPACK_IMPORTED_MODULE_6__["TeoriaPage"]
    }
];
var TeoriaPageModule = /** @class */ (function () {
    function TeoriaPageModule() {
    }
    TeoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teoria_page__WEBPACK_IMPORTED_MODULE_6__["TeoriaPage"]]
        })
    ], TeoriaPageModule);
    return TeoriaPageModule;
}());



/***/ }),

/***/ "./src/app/teoria/teoria.page.html":
/*!*****************************************!*\
  !*** ./src/app/teoria/teoria.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-back-button text=\"\" icon=\"checkmark-circle\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Teorização\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\r\n    <ion-slide *ngFor=\"let teoria of teorias\" class=\"swiper-zoom-container\">\r\n      <div class=\"swiper-zoom-container\">\r\n        <img class=\"img\" src=\"{{teoria}}\">\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <!--\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\r\n    \r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\">\r\n        <img class=\"img\" src=\"/assets/teorias/C001/T1001.png\">\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\">\r\n        <img class=\"img\" src=\"/assets/teorias/C001/T1002.png\">\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\">\r\n        <img class=\"img\" src=\"/assets/teorias/C001/T1003.png\">\r\n      </div>\r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n  -->\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/teoria/teoria.page.scss":
/*!*****************************************!*\
  !*** ./src/app/teoria/teoria.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#ff6d05; }\n/*Configurações de paginação dos slides de apresentação*/\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%; }\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n    --bullet-background: #c76e36; }\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n    --bullet-background:transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVvcmlhL3Rlb3JpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Rlb3JpYS9DOlxcVXNlcnNcXG1hcmNvXFxEZXNrdG9wXFxTZUxpZ2Evc3JjXFxhcHBcXHRlb3JpYVxcdGVvcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSwyREFBMkQ7RUFDM0Qsb0JBQWEsRUFBQTtBQUdqQix3REFBQTtBQUNBO0VBQ0ksVUFBVSxFQUFBO0FBRGQ7SUFHUSw0QkFBb0IsRUFBQTtBQUg1QjtJQU1NLCtCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVvcmlhL3Rlb3JpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYmFycmFTdXBlcmlvciB7XG4gIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLWJhY2tncm91bmQ6I2ZmNmQwNTsgfVxuXG4vKkNvbmZpZ3VyYcOnw7VlcyBkZSBwYWdpbmHDp8OjbyBkb3Mgc2xpZGVzIGRlIGFwcmVzZW50YcOnw6NvKi9cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDUlOyB9XG4gIDpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2M3NmUzNjsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XG4iLCIuYmFycmFTdXBlcmlvcntcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZjZkMDU7XHJcbn1cclxuXHJcbi8qQ29uZmlndXJhw6fDtWVzIGRlIHBhZ2luYcOnw6NvIGRvcyBzbGlkZXMgZGUgYXByZXNlbnRhw6fDo28qL1xyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9ue1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNjNzZlMzY7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICB9IFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/teoria/teoria.page.ts":
/*!***************************************!*\
  !*** ./src/app/teoria/teoria.page.ts ***!
  \***************************************/
/*! exports provided: TeoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeoriaPage", function() { return TeoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");




var TeoriaPage = /** @class */ (function () {
    function TeoriaPage(route) {
        this.route = route;
        this.teorias = [];
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.competencia_id = this.route.snapshot.params['comp'];
        var isso = this;
        var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_3__["Competencia"]();
        competencia.getCompetencia(this.competencia_id).then(function (snapshot) {
            isso.teorias = snapshot.teoria.split(', ');
        });
    }
    TeoriaPage.prototype.ngOnInit = function () {
    };
    TeoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teoria',
            template: __webpack_require__(/*! ./teoria.page.html */ "./src/app/teoria/teoria.page.html"),
            styles: [__webpack_require__(/*! ./teoria.page.scss */ "./src/app/teoria/teoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TeoriaPage);
    return TeoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=teoria-teoria-module.js.map