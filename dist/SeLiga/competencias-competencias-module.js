(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competencias-competencias-module"],{

/***/ "./src/app/competencias/competencias.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/competencias/competencias.module.ts ***!
  \*****************************************************/
/*! exports provided: CompetenciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasPageModule", function() { return CompetenciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _competencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competencias.page */ "./src/app/competencias/competencias.page.ts");







var routes = [
    {
        path: '',
        component: _competencias_page__WEBPACK_IMPORTED_MODULE_6__["CompetenciasPage"]
    }
];
var CompetenciasPageModule = /** @class */ (function () {
    function CompetenciasPageModule() {
    }
    CompetenciasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_competencias_page__WEBPACK_IMPORTED_MODULE_6__["CompetenciasPage"]]
        })
    ], CompetenciasPageModule);
    return CompetenciasPageModule;
}());



/***/ }),

/***/ "./src/app/competencias/competencias.page.html":
/*!*****************************************************!*\
  !*** ./src/app/competencias/competencias.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">      \r\n    <ion-buttons>\r\n    <ion-button routerLink =\"/modalidades\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <ion-title>Competências da Modalidade</ion-title>\r\n  </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>  \r\n<!-- <ion-card class = \"CardForm\" color = '' *ngFor=\"let c of competencias\">\r\n      <ion-card-header>\r\n        <ion-img src=\"/assets/competencias/C001.png\"></ion-img>\r\n      </ion-card-header>\r\n  </ion-card>\r\n-->\r\n  \r\n  <ion-item *ngFor=\"let competencia of competencias\">\r\n    <button id=\"{{competencia.codigo}}\" disabled=\"true\"  [routerLink]=\"['/lista-problemas', id, competencia.codigo]\">\r\n      <img src=\"{{competencia.imagem}}\">\r\n    </button>\r\n  </ion-item>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/competencias/competencias.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/competencias/competencias.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n\n.imgBorda {\n  border: 1px inset white; }\n\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#ff6d05; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0ZW5jaWFzL0M6XFxVc2Vyc1xcbWFyY29cXERlc2t0b3BcXFNlTGlnYS9zcmNcXGFwcFxcY29tcGV0ZW5jaWFzXFxjb21wZXRlbmNpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0MsdUJBQW9DLEVBQUE7O0FBRXJDO0VBQ0UsMkRBQTJEO0VBQzNELG9CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wZXRlbmNpYXMvY29tcGV0ZW5jaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uaW1nQm9yZGF7XHJcblx0Ym9yZGVyOiAxcHggaW5zZXQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5iYXJyYVN1cGVyaW9ye1xyXG4gIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC0tYmFja2dyb3VuZDojZmY2ZDA1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/competencias/competencias.page.ts":
/*!***************************************************!*\
  !*** ./src/app/competencias/competencias.page.ts ***!
  \***************************************************/
/*! exports provided: CompetenciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasPage", function() { return CompetenciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_modalidade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/modalidade */ "./src/app/model/modalidade.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");








var CompetenciasPage = /** @class */ (function () {
    function CompetenciasPage(route, usuarioService, alertController) {
        this.route = route;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.competencias = [];
        this.id = this.route.snapshot.params['id'];
        var isso = this;
        var modalidade = new _model_modalidade__WEBPACK_IMPORTED_MODULE_4__["Modalidade"]();
        modalidade.getModalidade(this.id).then(function (snapshot) {
            isso.listarModalidades(snapshot);
        });
    }
    CompetenciasPage.prototype.listarModalidades = function (modalidade) {
        var competencias = modalidade['competencias'].split(', ');
        var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_2__["Competencia"]();
        var isso = this;
        for (var i = 0; i < competencias.length; i++) {
            competencia.getCompetencia(competencias[i]).then(function (snapshot) {
                isso.competencias.push(snapshot);
            });
        }
        isso.verificarCompetenciasConcluidas();
    };
    CompetenciasPage.prototype.verificarCompetenciasConcluidas = function () {
        var modalidade = new _model_modalidade__WEBPACK_IMPORTED_MODULE_4__["Modalidade"]();
        modalidade.getCompetenciasModalidade(this.id).then(function (competencias_codigos) {
            competencias_codigos.forEach(function (competencia_codigo, index_competencias) {
                var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_2__["Competencia"]();
                //verifica se o usuario respondeu o ultimo problema da modalidade e libera a proxima
                competencia.getProblemasCompetencia(competencia_codigo).then(function (codigos_problemas_competencia) {
                    document.getElementById(competencias_codigos[0]).removeAttribute("disabled"); //desbloqueia a 1 competencia
                    var quantidade_problemas_competencia_respondidos = 0;
                    var quantidade_codigos_problemas_competencia = codigos_problemas_competencia.length;
                    codigos_problemas_competencia.forEach(function (codigo_problema_competencia, index) {
                        var usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
                        usuario.getProblemasRespondidos().then(function (codigos_problemas_respondidos) {
                            codigos_problemas_respondidos.forEach(function (codigo_problema_respondido) {
                                if (index == codigos_problemas_competencia.length - 1) {
                                    if (codigo_problema_competencia == codigo_problema_respondido) {
                                        document.getElementById(competencias_codigos[index_competencias + 1]).removeAttribute('disabled');
                                    }
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    CompetenciasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competencias',
            template: __webpack_require__(/*! ./competencias.page.html */ "./src/app/competencias/competencias.page.html"),
            styles: [__webpack_require__(/*! ./competencias.page.scss */ "./src/app/competencias/competencias.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], CompetenciasPage);
    return CompetenciasPage;
}());



/***/ })

}]);
//# sourceMappingURL=competencias-competencias-module.js.map