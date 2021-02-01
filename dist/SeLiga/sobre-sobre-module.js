(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "./src/app/sobre/sobre.module.ts":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.module.ts ***!
  \***************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre.page */ "./src/app/sobre/sobre.page.ts");







var routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]
    }
];
var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]]
        })
    ], SobrePageModule);
    return SobrePageModule;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.page.html":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-buttons>\r\n      <ion-menu-button class=\"menuBotao\"></ion-menu-button>\r\n      <ion-title>Sobre Nós</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-slides pager=true>\r\n      <ion-slide>\r\n        <img src=\"/assets/sobre/slides-sobre/slide-02.JPG\">\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"/assets/sobre/slides-sobre/slide-01.jpg\">\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"/assets/sobre/slides-sobre/slide-03.jpeg\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title>Quem somos nós?</ion-card-title>\r\n      <ion-card-subtitle><b>Projeto de Gamificação para o Ensino de Algotimos</b></ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content class=\"corpoDeTexto\">\r\n      <div>O embrião do projeto de extensão \"Gamificação para o Ensino de Algoritmos\" nasceu no ano de 2017, no IFPE\r\n        Campus Garanhuns, a partir de uma integração entre as disciplinas de Educação Física e Algoritmos. Neste ano,\r\n        foi desenvolvido um jogo de tabuleiro, intitulado “Java Project”, cujo principal objetivo era abordar a lógica\r\n        de programação com uma nova \"roupagem\", visto os altos índices de reprovação na disciplina de Algoritmos. </div>\r\n      <div>Com o resultado positivo que foi recebido, percebeu-se que a proposta poderia ser amadurecida e se tornar um\r\n        projeto no Campus, e assim foi feito.</div>\r\n      <div>O projeto foi realizado em 2018 e a equipe reformulou todo o funcionamento e a lógica do primeiro tabuleiro e\r\n        produziu um novo, intitulado “Programming”, que contava agora com três modalidades que poderiam ser adaptadas no\r\n        mesmo tabuleiro: uma que somente utilizava lógica de programação (intitulada “Arbitrária/Wally”), e outras duas\r\n        com linguagem técnica: uma na linguagem Java e outra pseudolinguagem Portugol. Os resultados também foram muito\r\n        positivos, tanto com o público interno, quanto o externo. </div>\r\n      <div>Em 2019 o projeto foi renovado, trazendo agora uma nova proposta: o desenvolvimento de um aplicativo móvel\r\n        (este que você está usando!) que pudesse utilizar os mesmos conceitos dos jogos desenvolvidos anteriormente e\r\n        também ensinar e estimular o aprendizado em lógica de programação. </div>\r\n      <div>No decorrer dos projetos, a equipe desenvolveu toda uma plataforma, nomeada “Se Liga Aê!”, que tem como\r\n        objetivo acompanhar todo o processo de ensino-aprendizagem. Como se trata de uma plataforma, ela, além de\r\n        incluir o jogo de tabuleiro Programming, também possui materiais de estudo, como algumas apostilas, calendários,\r\n        folhas de planejamento, etc. </div><br>\r\n      <div>\r\n        Você pode acessar o site do Se Liga Aê! clicando <a\r\n          href=\"https://seligaaeifpe.wixsite.com/seligaae-ifpe2018\">aqui</a>.\r\n      </div>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Créditos do App/Copyright ©</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle><b>Equipe de Desenvolvimento</b></ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content class=\"corpoDeTexto\">\r\n\r\n      <!--<ul>\r\n        <li>Clara Larissa Duarte Trajano Dias (técnica em Informática pelo IFPE, claralarissa.ifpe@gmail.com)</li>\r\n        <li>Marcos Gabriel Rodrigues Melo (técnico em Informática pelo IFPE, marcos.grm@yahoo.com)</li>\r\n        <li>Alephy Vinícius Rossi Cardoso da Silva (técnico em Informática pelo IFPE, alephyvinicius18@gmail.com)</li>\r\n        <li>Equipe Se Liga Aê! © (seligaae.ifpe@gmail.com)</li>\r\n        <li>Eduardo Garcia Wanderley (orientador)</li>\r\n        <li>Renata Garcia Wanderley (professora colaboradora)</li>\r\n        <li>Leonardo Soares e Silva (professor colaborador)</li>\r\n      </ul>-->\r\n\r\n      <div class=\"chip\">\r\n        <img src=\"/assets/sobre/marcos.jpeg\" alt=\"Person\" width=\"96\" height=\"96\">\r\n        Marcos Gabriel Rodrigues Melo\r\n      </div>\r\n      <br><br>\r\n      <div class=\"chip\">\r\n        <img src=\"/assets/sobre/clara.jpeg\" alt=\"Person\" width=\"96\" height=\"96\">\r\n        Clara Larissa Duarte Trajano Dias\r\n      </div>\r\n      <br><br>\r\n      <div class=\"chip\">\r\n        <img src=\"/assets/sobre/alephy.jpeg\" alt=\"Person\" width=\"96\" height=\"96\">\r\n        Alephy Vinícius Rossi Cardoso da Silva\r\n      </div>\r\n      <br><br>\r\n      <div class=\"chip\">\r\n        <img src=\"/assets/sobre/filipe.jpeg\" alt=\"Person\" width=\"96\" height=\"96\">\r\n        Filipe Paulino Barbosa\r\n      </div>\r\n    </ion-card-content>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle><b>Orientação</b></ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"corpoDeTexto\">\r\n      <ul>\r\n        <li>Eduardo Garcia Wanderley (orientador)</li>\r\n        <li>Renata Garcia Wanderley (professora colaboradora)</li>\r\n        <li>Leonardo Soares e Silva (professor colaborador)</li>\r\n      </ul>\r\n    </ion-card-content>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle><b>Agradecimentos Especiais</b></ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"corpoDeTexto\">\r\n      <div>Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco - Campus Garanhuns\r\n        (portal.ifpe.edu.br/campus/garanhuns),\r\n        João Paulo dos Santos Oliveira (professor colaborador), David Alain do Nascimento (docente), Eduardo De Melo\r\n        Vasconcelos (docente),\r\n        Ewerton Menezes de Mendonça (docente), Elmano Ramalho Cavalcanti (docente), Fabrício Barros Cabral (docente),\r\n        Marcelo Silva Santos (docente),\r\n        Tiago Lima (docente), Carlos Magno Silva de Menezes (docente), Vilmar Santos Nepomuceno (docente), Cosmo Mariano\r\n        da Silva Junior (docente),\r\n        Margarete Maria da Silva (pedagoga), Yasmim Adrieny da Silva Sales (estudante), Eduarda Ciriaco Manenti\r\n        (estudante), Carlos Sabino de França Neto (estudante),\r\n        João Vinícius Faustino Revoredo (estudante), Letícia Barbosa (estudante) e\r\n        demais profissionais,\r\n        docentes e estudantes envolvidos, de forma direta ou indireta, na formulação e produção da plataforma Se\r\n        Liga!©.</div>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <footer>\r\n    <p class=\"rodape\">© 2019 Se Liga Aê! Todos os direitos reservados.\r\n      <br> Gamificação para o ensino de Algoritmos - IFPE Campus Garanhuns</p>\r\n  </footer>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/sobre/sobre.page.scss":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#fdad1a; }\n\n.corBotao {\n  --background: #fdad1a;\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif; }\n\n.corpoDeTexto {\n  font-family: Arial;\n  font-size: 10pt; }\n\n.chip {\n  display: inline-block;\n  padding: 0 25px;\n  height: 60px;\n  font-size: 11px;\n  line-height: 60px;\n  border-radius: 25px;\n  background-color: #f1f1f1; }\n\n.chip img {\n  float: left;\n  margin: 0 10px 0 -25px;\n  height: 65px;\n  width: 65px;\n  border-radius: 50%; }\n\n.rodape {\n  font-family: Arial;\n  font-size: xx-small;\n  text-align: center;\n  color: #b8b8b8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvQzpcXFVzZXJzXFxtYXJjb1xcRGVza3RvcFxcU2VMaWdhL3NyY1xcYXBwXFxzb2JyZVxcc29icmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQTJEO0VBQzNELG9CQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUJBQWE7RUFDYiwyREFBMkQsRUFBQTs7QUFHL0Q7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zb2JyZS9zb2JyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycmFTdXBlcmlvcntcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZGFkMWE7XHJcbn0gXHJcbi5jb3JCb3Rhb3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZkYWQxYTtcclxuICAgIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29ycG9EZVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uY2hpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAuY2hpcCBpbWcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIC0yNXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucm9kYXBlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2I4YjhiOFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/sobre/sobre.page.ts":
/*!*************************************!*\
  !*** ./src/app/sobre/sobre.page.ts ***!
  \*************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SobrePage = /** @class */ (function () {
    function SobrePage() {
    }
    SobrePage.prototype.ngOnInit = function () {
    };
    SobrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.page.html */ "./src/app/sobre/sobre.page.html"),
            styles: [__webpack_require__(/*! ./sobre.page.scss */ "./src/app/sobre/sobre.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SobrePage);
    return SobrePage;
}());



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module.js.map