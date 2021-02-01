(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["problema-problema-module"],{

/***/ "./node_modules/canvas-confetti/dist/confetti.module.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/canvas-confetti/dist/confetti.module.mjs ***!
  \***************************************************************/
/*! exports provided: default, create */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
// canvas-confetti v1.3.1 built on 2020-10-16T14:05:34.896Z
var module = {};

// source content
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;
            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: Math.random() * Math.PI,
      color: hexToRgb(opts.color),
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      random: Math.random() + 5,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += 0.1;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 5;
    fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
    fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();

    if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var colors = prop(options, 'colors');
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            scalar: scalar
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  module.exports = confettiCannon(null, { useWorker: true, resize: true });
  module.exports.create = confettiCannon;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this;
})(), module, false));

// end source content

/* harmony default export */ __webpack_exports__["default"] = (module.exports);
var create = module.exports.create;


/***/ }),

/***/ "./src/app/problema/problema.module.ts":
/*!*********************************************!*\
  !*** ./src/app/problema/problema.module.ts ***!
  \*********************************************/
/*! exports provided: ProblemaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaPageModule", function() { return ProblemaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _problema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./problema.page */ "./src/app/problema/problema.page.ts");







var routes = [
    {
        path: '',
        component: _problema_page__WEBPACK_IMPORTED_MODULE_6__["ProblemaPage"]
    }
];
var ProblemaPageModule = /** @class */ (function () {
    function ProblemaPageModule() {
    }
    ProblemaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_problema_page__WEBPACK_IMPORTED_MODULE_6__["ProblemaPage"]]
        })
    ], ProblemaPageModule);
    return ProblemaPageModule;
}());



/***/ }),

/***/ "./src/app/problema/problema.page.html":
/*!*********************************************!*\
  !*** ./src/app/problema/problema.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"barraSuperior\">\r\n    <ion-title id=\"titulo\"><span id=\"teste\"></span></ion-title>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"exibeDica()\">\r\n        <ion-icon name=\"bulb\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button id=\"buttonEliminaIncorreta\" (click)=\"eliminaIncorreta()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button> \r\n      <ion-button >\r\n          <ion-icon name=\"bug\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card  style=\"overflow:scroll\"> \r\n      <img  src=\"/assets/cardEnunciado.png\">\r\n      <ion-card-content class = \"enunciado\">\r\n          <span id=\"enunciado\"> </span>\r\n      </ion-card-content>\r\n  </ion-card>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\r\n      <ion-slide>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <div class=\"swiper-zoom-container\">\r\n              <img id=\"programador\" src=\"\">\r\n            </div>\r\n          </ion-card-content>\r\n          <div class=\"fa-blink texto-slides\">\r\n            Gire o card deslizando-o para a esquerda\r\n            <img src=\"/assets/icons/drag-left.gif\" class=\"drag-icon\">\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <div class=\"swiper-zoom-container\">\r\n              <img id=\"contexto\" src=\"\">\r\n            </div>\r\n          </ion-card-content>\r\n          <div class=\"fa-blink texto-slides\">\r\n            Gire o card deslizando-o para a direita\r\n           <img src=\"/assets/icons/drag-right.gif\" class=\"drag-icon\">\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n    </ion-slides>\r\n    \r\n \r\n\r\n  <!--<ion-fab-button class = \"buttonOne\" color=\"warning\"><ion-icon name=\"color-wand\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button class = \"buttonTw\"color=\"warning\"><ion-icon name=\"bulb\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button class = \"buttonTre\" color=\"warning\"> <ion-icon name=\"alert\"></ion-icon> </ion-fab-button>\r\n    -->\r\n  <!-- <br>\r\n          descrição\r\n          <br>-->\r\n\r\n    <div class=\"alternativas\">\r\n      <!--{{respostaCorreta}}-->\r\n      <ion-button color=\"light\" class=\"buttonBorda\" expand=\"block\" (click)=\"corrigeResposta('a')\" id=\"a\"><span id=\"a\"></span></ion-button>\r\n      <ion-button color=\"light\" class=\"buttonBorda\" expand=\"block\" (click)=\"corrigeResposta('b')\" id=\"b\"><span id=\"b\"></span></ion-button>\r\n      <ion-button color=\"light\" class=\"buttonBorda\" expand=\"block\" (click)=\"corrigeResposta('c')\" id=\"c\"><span id=\"c\"></span></ion-button>\r\n      <ion-button color=\"light\" class=\"buttonBorda\" expand=\"block\" (click)=\"corrigeResposta('d')\" id=\"d\"><span id=\"d\"></span></ion-button>\r\n    </div>\r\n\r\n  <footer>\r\n      <p class=\"rodape\">© 2019 Se Liga Aê! Todos os direitos reservados.\r\n        <br> Gamificação para o ensino de Algoritmos - IFPE Campus Garanhuns</p>\r\n  </footer>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/problema/problema.page.scss":
/*!*********************************************!*\
  !*** ./src/app/problema/problema.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rodape {\n  font-family: Arial;\n  font-size: xx-small;\n  text-align: center;\n  color: #b8b8b8; }\n\n.tituloQuestao {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  font-weight: bold; }\n\n.barraSuperior {\n  font: italic small-caps normal 18px/1.3em Arial, sans-serif;\n  --background:#ff6d05; }\n\n.buttonBorda {\n  font: small-caps normal 12px/1.3em Arial, sans-serif;\n  box-shadow: 4px 4px 5px 0px rgba(99, 99, 99, 0.75);\n  margin-top: 12px; }\n\n.alternativas {\n  padding: 8px; }\n\nion-card-subtitle {\n  font: normal 18px/1.3em Arial, sans-serif;\n  text-align: center;\n  color: #000000; }\n\n.enunciado {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  font-size: 14px;\n  padding-top: 5%; }\n\n@-webkit-keyframes fa-blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fa-blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 0; } }\n\n.fa-blink {\n  -webkit-animation: fa-blink 7s linear infinite;\n  animation: fa-blink 7s linear infinite alternate; }\n\n.texto-slides {\n  font-style: italic;\n  font-size: 12px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.drag-icon {\n  max-width: 60px;\n  max-height: 60px;\n  width: auto;\n  height: auto;\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvYmxlbWEvQzpcXFVzZXJzXFxtYXJjb1xcRGVza3RvcFxcU2VMaWdhL3NyY1xcYXBwXFxwcm9ibGVtYVxccHJvYmxlbWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FDSixFQUFBOztBQUNBO0VBQ0kseUNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwyREFBMkQ7RUFDM0Qsb0JBQWEsRUFBQTs7QUFHakI7RUFDSSxvREFBb0Q7RUFHcEQsa0RBQTBEO0VBQzFELGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHlDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFJbkI7RUFDSTtJQUFLLFVBQVUsRUFBQTtFQUNmO0lBQU0sWUFBWSxFQUFBO0VBQ2xCO0lBQU8sVUFBVSxFQUFBLEVBQUE7O0FBSHJCO0VBQ0k7SUFBSyxVQUFVLEVBQUE7RUFDZjtJQUFNLFlBQVksRUFBQTtFQUNsQjtJQUFPLFVBQVUsRUFBQSxFQUFBOztBQUlyQjtFQUNFLDhDQUE4QztFQUk5QyxnREFBZ0QsRUFBQTs7QUFJbEQ7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ibGVtYS9wcm9ibGVtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9kYXBlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2I4YjhiOFxyXG59XHJcbi50aXR1bG9RdWVzdGFve1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuLmJhcnJhU3VwZXJpb3J7XHJcbiAgICBmb250OiBpdGFsaWMgc21hbGwtY2FwcyBub3JtYWwgMThweC8xLjNlbSBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIC0tYmFja2dyb3VuZDojZmY2ZDA1O1xyXG59XHJcblxyXG4uYnV0dG9uQm9yZGF7XHJcbiAgICBmb250OiBzbWFsbC1jYXBzIG5vcm1hbCAxMnB4LzEuM2VtIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggcmdiYSg5OSwgOTksIDk5LCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgNHB4IDRweCA1cHggMHB4IHJnYmEoOTksIDk5LCA5OSwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDRweCA0cHggNXB4IDBweCByZ2JhKDk5LCA5OSwgOTksIDAuNzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLmFsdGVybmF0aXZhc3tcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBmb250OiBub3JtYWwgMThweC8xLjNlbSBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5lbnVuY2lhZG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLy9FZmVpdG8gYXBhcmVjZS1kZXNhcGFyZWNlIGRvcyB0ZXh0b3MgZGUgaW5zdHJ1w6fDo28gZG9zIHNsaWRlc1xyXG5Aa2V5ZnJhbWVzIGZhLWJsaW5rIHtcclxuICAgIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgNTAlIHsgb3BhY2l0eTogMC41OyB9XHJcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG4vL0VmZWl0byBzb21icmEgbm9zIGJvdMO1ZXMgZGUgYWx0ZXJuYXRpdmFcclxuLmZhLWJsaW5rIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtYmxpbmsgN3MgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYS1ibGluayA3cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogZmEtYmxpbmsgN3MgbGluZWFyIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogZmEtYmxpbmsgN3MgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogZmEtYmxpbmsgN3MgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLy90ZXh0b3MgZSDDrWNvbmUgaW5zdHJ1dGl2b3MgZG8gc2xpZGUgZGUgaW1hZ2VucyBkbyBwcm9ibGVtYVxyXG4udGV4dG8tc2xpZGVze1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy9jZW50cmFsaXphIGhvcml6b250YWxtZW50ZVxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vY2V0cmFsaXphIHZlcnRpY2FsbWVudGVcclxufVxyXG4uZHJhZy1pY29ue1xyXG4gICAgbWF4LXdpZHRoOjYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjYwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/problema/problema.page.ts":
/*!*******************************************!*\
  !*** ./src/app/problema/problema.page.ts ***!
  \*******************************************/
/*! exports provided: ProblemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaPage", function() { return ProblemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_problemas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/problemas.service */ "./src/app/services/problemas.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_competencia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/competencia */ "./src/app/model/competencia.ts");
/* harmony import */ var _model_modalidade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/modalidade */ "./src/app/model/modalidade.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _model_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/usuario */ "./src/app/model/usuario.ts");
/* harmony import */ var _model_problema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/problema */ "./src/app/model/problema.ts");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs");
/* harmony import */ var _model_medalha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/medalha */ "./src/app/model/medalha.ts");













var ProblemaPage = /** @class */ (function () {
    function ProblemaPage(router, route, problemaService, alertController, usuarioService) {
        this.router = router;
        this.route = route;
        this.problemaService = problemaService;
        this.alertController = alertController;
        this.usuarioService = usuarioService;
        this.problema_respondido = false;
        this.problemas_da_competencia = [];
        this.afs = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        //Configurações do slide de imagens (contexto e código do programador)
        this.slideOpts = {
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "flip");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    var overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    var swiper = this;
                    var $ = swiper.$, slides = swiper.slides, rtl = swiper.rtlTranslate;
                    for (var i = 0; i < slides.length; i += 1) {
                        var $slideEl = slides.eq(i);
                        var progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) {
                            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        }
                        var offset$$1 = $slideEl[0].swiperSlideOffset;
                        var rotate = -180 * progress;
                        var rotateY = rotate;
                        var rotateX = 0;
                        var tx = -offset$$1;
                        var ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (rtl) {
                            rotateY = -rotateY;
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (swiper.params.flipEffect.slideShadows) {
                            // Set shadows
                            var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        $slideEl
                            .transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    var slides = swiper.slides, activeIndex = swiper.activeIndex, $wrapperEl = swiper.$wrapperEl;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        var eventTriggered_1 = false;
                        // eslint-disable-next-line
                        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                            if (eventTriggered_1)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered_1 = true;
                            swiper.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (var i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            }
        };
    }
    ProblemaPage.prototype.ngOnInit = function () {
        var _this = this;
        var isso = this;
        this.id = this.route.snapshot.params['id'];
        this.competencia_id = this.route.snapshot.params['comp'];
        var competencia = new _model_competencia__WEBPACK_IMPORTED_MODULE_6__["Competencia"]();
        competencia.getCompetencia(this.competencia_id).then(function (competencia) {
            isso.competencia = competencia;
            _this.problemas_da_competencia = competencia['problemas'].split(", ");
        });
        this.getProblema(this.id);
        //verificar se o problema foi respondido
        var problemas_respondidos;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                isso.usuarioService.getUsuario(user.uid).then(function (snapshot) {
                    problemas_respondidos = snapshot.problemas_respondidos.split(', ');
                    problemas_respondidos.forEach(function (item) {
                        if (item == isso.id) {
                            //desativar botoes e colorir de verde
                            isso.problema_respondido = true;
                            var botoes = document.getElementsByClassName("buttonBorda");
                            var botao = document.getElementById("buttonEliminaIncorreta");
                            botao.disabled = true;
                            for (var item_1 in botoes) {
                                if (botoes[item_1].id != isso.respostaCorreta && typeof (botoes[item_1].id) == "string") {
                                    //botões errados
                                    var disabled = document.createAttribute('disabled');
                                    disabled.value = "true";
                                    botoes[item_1].attributes.setNamedItem(disabled);
                                    botoes[item_1].setAttribute("color", "danger");
                                }
                                else if (botoes[item_1].id == isso.respostaCorreta && typeof (botoes[item_1].id) == "string") {
                                    //botão certo
                                    var disabled = document.createAttribute('disabled');
                                    disabled.value = "true";
                                    botoes[item_1].attributes.setNamedItem(disabled);
                                    botoes[item_1].setAttribute("color", "success");
                                }
                            }
                        }
                    });
                });
            }
        });
        //
        this.modalidade_id = this.route.snapshot.params['mod'];
        var modalidade = new _model_modalidade__WEBPACK_IMPORTED_MODULE_7__["Modalidade"]();
        modalidade.getModalidade(this.modalidade_id).then(function (modalidade) {
            isso.modalidade = modalidade;
            isso.competencias_da_modalidade = modalidade['competencias'].split(", ");
        });
    };
    //Exibe dica em um botão alert
    ProblemaPage.prototype.exibeDica = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Dica',
                            message: this.dica,
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
    //Corrige resposta, recebendo como parâmetro uma string correspondente à alternativa selecionada no HTML
    ProblemaPage.prototype.corrigeResposta = function (identificador) {
        var _this = this;
        var this1 = this;
        if (identificador == this.respostaCorreta) {
            //salva problema respondido no usuario
            firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                    var usuario_1, problema;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (user) {
                            usuario_1 = new _model_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
                            usuario_1.setProblemaRespondido(user.uid, this1.id);
                            problema = new _model_problema__WEBPACK_IMPORTED_MODULE_10__["Problema"]();
                            problema.getProblema(this1.id).then(function (problema) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, usuario_1.somarPontuacao(problema.pontuacao)];
                                        case 1:
                                            _a.sent();
                                            this1.verificarMedalha();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [2 /*return*/];
                    });
                });
            });
            var ultimo = false;
            var ultimaCompetencia = false;
            for (var i = 0; i < this.problemas_da_competencia.length; i++) {
                if (i == (this.problemas_da_competencia.length - 1) && this.problemas_da_competencia[i] == this.id) {
                    for (var j = 0; j < this.competencias_da_modalidade.length; j++) {
                        if (j == this.competencias_da_modalidade.length - 1 && this.competencia_id == this.competencias_da_modalidade[j]) {
                            ultimaCompetencia = true;
                            this.alertUltimaCompetencia();
                        }
                    }
                    ultimo = true;
                    if (ultimaCompetencia == false)
                        this.alertUltimoProblema();
                }
            }
            if (ultimo == false) {
                var problema = new _model_problema__WEBPACK_IMPORTED_MODULE_10__["Problema"]();
                problema.getProblema(this1.id).then(function (problema) {
                    _this.alertAcerto(problema.pontuacao);
                });
            }
        }
        else {
            this.alertErro();
        }
    };
    ProblemaPage.prototype.verificarMedalha = function () {
        var _this = this;
        var this1 = this;
        var medalha = new _model_medalha__WEBPACK_IMPORTED_MODULE_12__["Medalha"]();
        medalha.getMedalhas().then(function (medalhas) {
            var usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
            medalhas.forEach(function (medalha) {
                usuario.getUsuario(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid).then(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var pontuacao, quantidade_problemas_respondidos, medalhas_usuario, medalha_existe;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                pontuacao = user.pontuacao;
                                quantidade_problemas_respondidos = user.quantidade_problemas_respondidos;
                                medalhas_usuario = user.medalhas.split(", ");
                                medalha_existe = false;
                                return [4 /*yield*/, medalhas_usuario.forEach(function (medalha_usuario) {
                                        if (medalha.codigo == medalha_usuario) {
                                            medalha_existe = true;
                                        }
                                    })];
                            case 1:
                                _a.sent();
                                if (!!medalha_existe) return [3 /*break*/, 6];
                                if (!(medalha.isPontuacao == true)) return [3 /*break*/, 4];
                                if (!(pontuacao >= medalha.condicao)) return [3 /*break*/, 3];
                                this1.alertMedalhaPontuacao(medalha);
                                return [4 /*yield*/, usuario.addMedalhaUsuario(user.codigo, medalha.codigo)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [3 /*break*/, 6];
                            case 4:
                                if (!(quantidade_problemas_respondidos >= medalha.condicao)) return [3 /*break*/, 6];
                                this1.alertMedalhaQtdProblemas(medalha);
                                return [4 /*yield*/, usuario.addMedalhaUsuario(user.codigo, medalha.codigo)];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
    };
    //Alert para medalhas de pontuação
    ProblemaPage.prototype.alertMedalhaPontuacao = function (medalha) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Voc\u00EA desbloqueou uma nova medalha!",
                            message: "\n      <div class=\"medalhaAlertCorpo\">\n          <div> Voc\u00EA alcan\u00E7ou " + medalha.condicao + " pontos! Vamos comemorar!</div>\n          <br>\n          <img class=\"medalhaAlertImagem\" src=\"" + medalha.imagem + "\" alt=\"imagem da medalha\" style=\"border-radius: 2px\">\n          <br>\n          <div class= \"medalhaAlertTitulo\"> " + medalha.titulo + " </div>\n          <div class=\"medalhaAlertDescricao\"> " + medalha.descricao + " </div>\n          <br/>\n      </div>\n        ",
                            buttons: ["OK"]
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
    //Alert para medalhas de quantidade de problemas respondidos
    ProblemaPage.prototype.alertMedalhaQtdProblemas = function (medalha) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Voc\u00EA desbloqueou uma nova medalha!",
                            message: "\n    <div class=\"medalhaAlertCorpo\">\n        <div> Voc\u00EA j\u00E1 respondeu " + medalha.condicao + " problema(s)! Vamos comemorar!</div>\n        <br>\n        <img class=\"medalhaAlertImagem\" src=\"" + medalha.imagem + "\" alt=\"imagem da medalha\" style=\"border-radius: 2px\">\n        <br>\n        <div class= \"medalhaAlertTitulo\"> " + medalha.titulo + " </div>\n        <div class=\"medalhaAlertDescricao\"> " + medalha.descricao + " </div>\n        <br/>\n    </div>\n      ",
                            buttons: ["OK"]
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
    //Alert de RESPOSTA CORRETA
    ProblemaPage.prototype.alertAcerto = function (pontuacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, botoes, item, disabled, disabled;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'VOCÊ ACERTOU!',
                            message: 'Parabéns, você recebeu ' + pontuacao + " pontos!",
                            buttons: [
                                {
                                    text: 'Próximo problema',
                                    role: 'next',
                                    handler: function () {
                                        var isso = _this;
                                        for (var i = 0; i < _this.problemas_da_competencia.length; i++) {
                                            if (isso.id == _this.problemas_da_competencia[i]) {
                                                _this.router.navigate(['/problema', isso.modalidade_id, isso.competencia_id, _this.problemas_da_competencia[i + 1]]).then(function (nav) {
                                                    window.location.reload();
                                                });
                                            }
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        botoes = document.getElementsByClassName("buttonBorda");
                        for (item in botoes) {
                            if (botoes[item].id != this.respostaCorreta && typeof (botoes[item].id) == "string") {
                                disabled = document.createAttribute('disabled');
                                disabled.value = "true";
                                botoes[item].attributes.setNamedItem(disabled);
                                botoes[item].setAttribute("color", "danger");
                            }
                            else if (botoes[item].id == this.respostaCorreta && typeof (botoes[item].id) == "string") {
                                disabled = document.createAttribute('disabled');
                                disabled.value = "true";
                                botoes[item].attributes.setNamedItem(disabled);
                                botoes[item].setAttribute("color", "success");
                            }
                        }
                        this.confete(); //Solta confete
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProblemaPage.prototype.alertUltimoProblema = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Parabéns!',
                            message: 'Você concluiu a Competência ' + this.competencia.nome + "!",
                            buttons: [
                                {
                                    text: 'Próxima Competência',
                                    role: 'next',
                                    handler: function () {
                                        console.log('Proxima competencia');
                                        for (var i = 0; i < _this.competencias_da_modalidade.length; i++) {
                                            if (_this.competencias_da_modalidade[i] == _this.competencia_id) {
                                                _this.router.navigate(['/lista-problemas', _this.modalidade_id, _this.competencias_da_modalidade[i + 1]]).then(function (nav) {
                                                    window.location.reload();
                                                });
                                            }
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        this.confete();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Alert de RESPOSTA INCORRETA
    ProblemaPage.prototype.alertErro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'RESPOSTA ERRADA!',
                            message: 'Você errou a resposta! :( <br>Mas não desanime! Você tem outra chance! <br> Lembre-se que você ainda pode usar os poderes de Wally: exibir dica ou eliminar uma resposta incorreta.',
                            buttons: [
                                {
                                    text: 'Tentar novamente'
                                }, {
                                    text: 'Exibir Dica',
                                    handler: function () {
                                        _this.exibeDica();
                                    }
                                }
                            ]
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
    ProblemaPage.prototype.alertUltimaCompetencia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Parabéns!',
                            message: 'Você concluiu a ' + this.modalidade.nome + "!",
                            buttons: [{
                                    text: 'Voltar para Modalidades',
                                    role: 'next',
                                    handler: function () {
                                        _this.router.navigate(['/modalidades']).then(function (param) {
                                            window.location.reload();
                                        });
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        this.confete();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Elimina uma das respostas incorretas
    ProblemaPage.prototype.eliminaIncorreta = function () {
        var alternativas = ['a', 'b', 'c', 'd'];
        var correta = alternativas.indexOf(this.respostaCorreta);
        alternativas.splice(correta, 1); //Remove resposta correta do array
        var eliminada = Math.floor(Math.random() * 3); //Gera número aleatório entre 0 e 2 (índice entre as 3 alternativas erradas)
        console.log("A alternativa eliminada foi a letra " + alternativas[eliminada]);
        var botao = document.getElementById("buttonEliminaIncorreta");
        botao.disabled = true;
        var botaoEliminada = document.getElementById(alternativas[eliminada]);
        botaoEliminada.disabled = true;
        botaoEliminada.setAttribute("color", "danger");
        this.alertAltRemovida(alternativas[eliminada]);
    };
    //Alert que mostra qual das alternativas foi eliminada
    ProblemaPage.prototype.alertAltRemovida = function (alt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Wally mandou dizer que...',
                            message: 'A alternativa (' + alt + ') está incorreta! <br> Ainda restam três alternativas para você escolher.',
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
    //Animação de confetti
    ProblemaPage.prototype.confete = function () {
        canvas_confetti__WEBPACK_IMPORTED_MODULE_11__["create"](undefined, { resize: true, useWorker: false })({
            shapes: ['circle', 'circle', 'square'],
            particleCount: 400,
            spread: 90,
            gravity: 2,
            origin: {
                y: (0),
                x: (1)
            }
        });
    };
    ProblemaPage.prototype.getProblema = function (codigo) {
        var agora = this;
        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/problemas/' + codigo).once('value').then(function (snapshot) {
            agora.mudarHtml(snapshot.val());
        });
    };
    ProblemaPage.prototype.mudarHtml = function (data) {
        // document.getElementById('titulo').innerHTML = data['titulo']
        document.getElementById('teste').innerHTML = data['titulo'];
        document.getElementById('enunciado').innerHTML = data['enunciado'];
        document.getElementById('a').innerHTML = data['alternativaA'];
        document.getElementById('b').innerHTML = data['alternativaB'];
        document.getElementById('c').innerHTML = data['alternativaC'];
        document.getElementById('d').innerHTML = data['alternativaD'];
        this.dica = data['dica'];
        this.respostaCorreta = data['alternativaCorreta'];
        var imgCodigo = document.getElementById('programador');
        imgCodigo['src'] = data['imagemCodigo'];
        var imgContexto = document.getElementById('contexto');
        imgContexto['src'] = data['imagem'];
    };
    ProblemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problema',
            template: __webpack_require__(/*! ./problema.page.html */ "./src/app/problema/problema.page.html"),
            styles: [__webpack_require__(/*! ./problema.page.scss */ "./src/app/problema/problema.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_problemas_service__WEBPACK_IMPORTED_MODULE_3__["ProblemaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"]])
    ], ProblemaPage);
    return ProblemaPage;
}());



/***/ })

}]);
//# sourceMappingURL=problema-problema-module.js.map