(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n      <div class=\"medalhaAlertCorpo\">\r\n        <img class=\"logoBarraSuperior\" src=\"/assets/icon/logoSeLiga.png\">\r\n      </div>\r\n  </ion-toolbar></ion-header>\r\n\r\n  <!--<img src=\"/assets/Telas APP.png\">-->\r\n\r\n  <!--Slides-->\r\n  <ion-content fullscreen scroll-y=\"false\">\r\n    <ion-slides pager=\"true\">\r\n\r\n      <ion-slide>\r\n          <img src=\"/assets/apresentacao/1.png\"/>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <img src=\"/assets/apresentacao/2.png\"/>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <img src=\"/assets/apresentacao/3.png\"/>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <img src=\"/assets/apresentacao/4.png\"/>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <img src=\"/assets/apresentacao/5.png\"/>\r\n      </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n      <ion-button expand=\"block\" class=\"botaoAcesso\" routerLink=\"/login\">ENTRAR</ion-button>\r\n  </ion-content>\r\n\r\n\r\n\r\n<!--<ion-content>\r\n  <ion-button routerLink='/modalidades'> Modalidades </ion-button>\r\n  <ion-button routerLink='/problema'>Problema X (estrutura da tela)</ion-button>\r\n  <ion-button routerLink='/list'>Competência X (estrutura da tela)</ion-button>\r\n  <ion-button routerLink='/teoria'> Teoria </ion-button>\r\n  <ion-button routerLink='/lista-problemas'> Lista de Problemas </ion-button>\r\n\r\n\r\n\r\n</ion-content>\r\n-->"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Configurações do botão de acesso da página principal*/\n.botaoAcesso {\n  --background: #ff914d;\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin-left: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  text-align: center;\n  font-weight: bold; }\n/*Configurações de background*/\nion-content {\n  --ion-background-color: #ffefad; }\n/*Configurações dos slides de apresentação inicial*/\nion-slides {\n  height: 83vh;\n  background-color: #ffefad; }\n/*Configurações de paginação dos slides de apresentação*/\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%; }\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n    --bullet-background: #c76e36; }\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n    --bullet-background:transparent; }\n/*Configurações da barra superior*/\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#fdaf13;\n  text-align: center; }\n.logoBarraSuperior {\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG1hcmNvXFxEZXNrdG9wXFxTZUxpZ2Evc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQix1REFBQTtBQUNBO0VBQ0kscUJBQWE7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWdCO0VBQ2hCLE9BQU07RUFDTixTQUFRO0VBQ1IsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtBQUd2Qiw4QkFBQTtBQUNBO0VBQ0UsK0JBQXVCLEVBQUE7QUFHekIsbURBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBd0IsRUFBQTtBQUcxQix3REFBQTtBQUNBO0VBQ0UsVUFBVSxFQUFBO0FBRFo7SUFHTSw0QkFBb0IsRUFBQTtBQUgxQjtJQU1JLCtCQUFvQixFQUFBO0FBSXhCLGtDQUFBO0FBQ0E7RUFDRSwyREFBMkQ7RUFDM0Qsb0JBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKkNvbmZpZ3VyYcOnw7VlcyBkbyBib3TDo28gZGUgYWNlc3NvIGRhIHDDoWdpbmEgcHJpbmNpcGFsKi9cbi5ib3Rhb0FjZXNzbyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmOTE0ZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKkNvbmZpZ3VyYcOnw7VlcyBkZSBiYWNrZ3JvdW5kKi9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZhZDsgfVxuXG4vKkNvbmZpZ3VyYcOnw7VlcyBkb3Mgc2xpZGVzIGRlIGFwcmVzZW50YcOnw6NvIGluaWNpYWwqL1xuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogODN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZhZDsgfVxuXG4vKkNvbmZpZ3VyYcOnw7VlcyBkZSBwYWdpbmHDp8OjbyBkb3Mgc2xpZGVzIGRlIGFwcmVzZW50YcOnw6NvKi9cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDUlOyB9XG4gIDpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2M3NmUzNjsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XG5cbi8qQ29uZmlndXJhw6fDtWVzIGRhIGJhcnJhIHN1cGVyaW9yKi9cbi5iYXJyYVN1cGVyaW9yIHtcbiAgZm9udDogaXRhbGljIHNtYWxsLWNhcHMgbm9ybWFsIDE4cHgvMS4zZW0gQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tYmFja2dyb3VuZDojZmRhZjEzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmxvZ29CYXJyYVN1cGVyaW9yIHtcbiAgaGVpZ2h0OiA1MHB4OyB9XG4iLCJcclxuLypDb25maWd1cmHDp8O1ZXMgZG8gYm90w6NvIGRlIGFjZXNzbyBkYSBww6FnaW5hIHByaW5jaXBhbCovXHJcbi5ib3Rhb0FjZXNzb3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmOTE0ZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgcG9zaXRpb24gOiBmaXhlZDtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBib3R0b206MDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKkNvbmZpZ3VyYcOnw7VlcyBkZSBiYWNrZ3JvdW5kKi9cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZhZDtcclxufVxyXG5cclxuLypDb25maWd1cmHDp8O1ZXMgZG9zIHNsaWRlcyBkZSBhcHJlc2VudGHDp8OjbyBpbmljaWFsKi9cclxuaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiA4M3ZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZWZhZDtcclxufVxyXG5cclxuLypDb25maWd1cmHDp8O1ZXMgZGUgcGFnaW5hw6fDo28gZG9zIHNsaWRlcyBkZSBhcHJlc2VudGHDp8OjbyovXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb257XHJcbiAgYm90dG9tOiA1JTtcclxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2M3NmUzNjtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICB9IFxyXG59XHJcblxyXG4vKkNvbmZpZ3VyYcOnw7VlcyBkYSBiYXJyYSBzdXBlcmlvciovXHJcbi5iYXJyYVN1cGVyaW9ye1xyXG4gIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIG5vcm1hbCAxOHB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC0tYmFja2dyb3VuZDojZmRhZjEzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSBcclxuXHJcbi5sb2dvQmFycmFTdXBlcmlvcntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomePage = /** @class */ (function () {
    function HomePage(alertController, authService, router) {
        var _this = this;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function () {
                    var swiper = this;
                    var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                    var params = swiper.params.coverflowEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform$$1 = swiper.translate;
                    var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var translate = params.depth;
                    // Each slide offset from center
                    for (var i = 0, length_1 = slides.length; i < length_1; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffset = $slideEl[0].swiperSlideOffset;
                        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
        this.authService.getAuth().onAuthStateChanged(function (user) {
            if (user)
                _this.router.navigate(['modalidades']);
        });
    }
    HomePage.prototype.emBreve = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Função Indisponivel!',
                            message: 'Fica atento(a)! Logo você poderá se cadastrar!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map