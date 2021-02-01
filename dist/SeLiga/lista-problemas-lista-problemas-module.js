(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-problemas-lista-problemas-module"],{

/***/ "./src/app/lista-problemas/lista-problemas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/lista-problemas/lista-problemas.module.ts ***!
  \***********************************************************/
/*! exports provided: ListaProblemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProblemasPageModule", function() { return ListaProblemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_problemas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-problemas.page */ "./src/app/lista-problemas/lista-problemas.page.ts");







var routes = [
    {
        path: '',
        component: _lista_problemas_page__WEBPACK_IMPORTED_MODULE_6__["ListaProblemasPage"]
    }
];
var ListaProblemasPageModule = /** @class */ (function () {
    function ListaProblemasPageModule() {
    }
    ListaProblemasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_problemas_page__WEBPACK_IMPORTED_MODULE_6__["ListaProblemasPage"]]
        })
    ], ListaProblemasPageModule);
    return ListaProblemasPageModule;
}());



/***/ }),

/***/ "./src/app/lista-problemas/lista-problemas.page.html":
/*!***********************************************************!*\
  !*** ./src/app/lista-problemas/lista-problemas.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n      <ion-buttons slot=\"secondary\">\r\n        <ion-button [routerLink] =\"['/teoria', id]\">\r\n          <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button [routerLink] =\"['/exemplificacao', id]\">\r\n          <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title id=\"titulo\"></ion-title>\r\n    </ion-toolbar>\r\n  <ion-list id=\"lista_problemas\">\r\n\r\n    <ion-item *ngFor=\"let problema of problemas\">\r\n      <ion-fab-button disabled=\"{{problema.disabled}}\" size=\"small\" [routerLink] =\"['/problema', modalidade_id, id, problema.codigo]\" color=\"dark\">\r\n        <ion-icon name=\"play\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-label>\r\n        {{problema.titulo}}\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink = \"/home\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"home\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/lista-problemas/lista-problemas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/lista-problemas/lista-problemas.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".CardForm {\n  text-align: center; }\n\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#ff6d05; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtcHJvYmxlbWFzL0M6XFxVc2Vyc1xcbWFyY29cXERlc2t0b3BcXFNlTGlnYS9zcmNcXGFwcFxcbGlzdGEtcHJvYmxlbWFzXFxsaXN0YS1wcm9ibGVtYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksMkRBQTJEO0VBQzNELG9CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0YS1wcm9ibGVtYXMvbGlzdGEtcHJvYmxlbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5DYXJkRm9ybXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmFycmFTdXBlcmlvcntcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZjZkMDU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lista-problemas/lista-problemas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/lista-problemas/lista-problemas.page.ts ***!
  \*********************************************************/
/*! exports provided: ListaProblemasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProblemasPage", function() { return ListaProblemasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");
/* harmony import */ var _model_problema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/problema */ "./src/app/model/problema.ts");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");







var ListaProblemasPage = /** @class */ (function () {
    function ListaProblemasPage(route) {
        this.route = route;
        this.problemas = [];
        this.teorias = "";
        this.link_exemplo = "";
        this.modalidade_id = this.route.snapshot.params['mod'];
        this.id = this.route.snapshot.params['comp'];
        var isso = this;
        var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_4__["Competencia"]();
        competencia.getCompetencia(this.id).then(function (snapshot) {
            isso.listarProblemas(snapshot);
        });
        isso.problemas.reverse();
    }
    ListaProblemasPage.prototype.ngOnInit = function () {
    };
    ListaProblemasPage.prototype.listarProblemas = function (competencia) {
        var problemas = competencia['problemas'].split(", ");
        document.getElementById('titulo').innerHTML = competencia['nome'];
        var isso = this;
        problemas.forEach(function (codigo_problema) {
            var problema = new _model_problema__WEBPACK_IMPORTED_MODULE_5__["Problema"]();
            problema.getProblema(codigo_problema).then(function (snapshot) {
                isso.bloquearProblemas(competencia, codigo_problema, snapshot);
            });
        });
    };
    ListaProblemasPage.prototype.bloquearProblemas = function (competencia, codigo, snapshot) {
        var problemas = competencia['problemas'].split(", ");
        var isso = this;
        snapshot.disabled = false;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                var usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
                usuario.getUsuario(user.uid).then(function (value) {
                    var usuario = value;
                    var array_problemas = usuario.problemas_respondidos.split(", ");
                    var problemas_nao_respondidos = [];
                    var problemas_respondidos = [];
                    var problema_nao_respondido = true;
                    problemas.forEach(function (codigo_problema) {
                        array_problemas.forEach(function (codigo_problema_respondido) {
                            if (codigo_problema == codigo_problema_respondido) {
                                problema_nao_respondido = false;
                            }
                        });
                        if (problema_nao_respondido) {
                            problemas_nao_respondidos.push(codigo_problema);
                        }
                        else {
                            problemas_respondidos.push(codigo_problema);
                        }
                        problema_nao_respondido = true;
                    });
                    problemas_nao_respondidos.reverse();
                    for (var j = problemas_nao_respondidos.length - 2; j >= 0; j--) {
                        if (problemas_nao_respondidos[j] == codigo) {
                            snapshot.disabled = true;
                        }
                    }
                    isso.problemas.push(snapshot);
                    if (problemas.length == isso.problemas.length) {
                        isso.problemas.reverse();
                    }
                });
            }
        });
    };
    ListaProblemasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-problemas',
            template: __webpack_require__(/*! ./lista-problemas.page.html */ "./src/app/lista-problemas/lista-problemas.page.html"),
            styles: [__webpack_require__(/*! ./lista-problemas.page.scss */ "./src/app/lista-problemas/lista-problemas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListaProblemasPage);
    return ListaProblemasPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-problemas-lista-problemas-module.js.map