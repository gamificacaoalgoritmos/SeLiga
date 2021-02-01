(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./src/app/model/competencia.ts":
/*!**************************************!*\
  !*** ./src/app/model/competencia.ts ***!
  \**************************************/
/*! exports provided: Competencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Competencia", function() { return Competencia; });
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/competencia.service */ "./src/app/services/competencia.service.ts");

var Competencia = /** @class */ (function () {
    function Competencia(competencia) {
        if (competencia) {
            this.nome = competencia.nome;
            this.descricao = competencia.descricao;
            this.codigo = competencia.codigo;
            this.imagem = competencia.imagem;
            this.problemas = competencia.problemas;
            this.teoria = competencia.teoria;
            this.exemplo = competencia.exemplo;
            this.competencia = competencia;
        }
        this.competenciaService = new _services_competencia_service__WEBPACK_IMPORTED_MODULE_0__["CompetenciaService"]();
    }
    Competencia.prototype.addCompetencia = function () {
        this.competenciaService.addCompetencia(this.competencia);
    };
    Competencia.prototype.getCompetencia = function (codigo) {
        return this.competenciaService.getCompetencia(codigo);
    };
    Competencia.prototype.getCompetencias = function () {
        return this.competenciaService.getCompetencias();
    };
    Competencia.prototype.getProblemasCompetencia = function (codigo) {
        return this.competenciaService.getProblemasCompetencia(codigo);
    };
    return Competencia;
}());



/***/ }),

/***/ "./src/app/model/medalha.ts":
/*!**********************************!*\
  !*** ./src/app/model/medalha.ts ***!
  \**********************************/
/*! exports provided: Medalha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medalha", function() { return Medalha; });
/* harmony import */ var _services_medalha_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/medalha.service */ "./src/app/services/medalha.service.ts");

var Medalha = /** @class */ (function () {
    function Medalha(medalha) {
        if (medalha) {
            this.codigo = medalha.codigo;
            this.descricao = medalha.descricao;
            this.imagem = medalha.imagem;
            this.condicao = medalha.condicao;
            this.medalha = medalha;
        }
        this.medalhaService = new _services_medalha_service__WEBPACK_IMPORTED_MODULE_0__["MedalhaService"]();
    }
    Medalha.prototype.addMedalha = function () {
        this.medalhaService.addMedalha(this.medalha);
    };
    Medalha.prototype.getMedalha = function (codigo) {
        return this.medalhaService.getMedalha(codigo);
    };
    Medalha.prototype.getMedalhas = function () {
        return this.medalhaService.getMedalhas();
    };
    return Medalha;
}());



/***/ }),

/***/ "./src/app/model/modalidade.ts":
/*!*************************************!*\
  !*** ./src/app/model/modalidade.ts ***!
  \*************************************/
/*! exports provided: Modalidade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modalidade", function() { return Modalidade; });
/* harmony import */ var _services_modalidade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/modalidade.service */ "./src/app/services/modalidade.service.ts");

var Modalidade = /** @class */ (function () {
    function Modalidade(modalidade) {
        if (modalidade) {
            this.nome = modalidade.nome;
            this.descricao = modalidade.descricao;
            this.codigo = modalidade.codigo;
            this.competencias = modalidade.competencias;
            this.imagem = modalidade.imagem;
            this.modalidade = modalidade;
        }
        this.modalidadeService = new _services_modalidade_service__WEBPACK_IMPORTED_MODULE_0__["ModalidadeService"]();
    }
    Modalidade.prototype.addModalidade = function () {
        this.modalidadeService.addModalidade(this.modalidade);
    };
    Modalidade.prototype.getModalidade = function (codigo) {
        return this.modalidadeService.getModalidade(codigo);
    };
    Modalidade.prototype.getModalidades = function () {
        return this.modalidadeService.getModalidades();
    };
    Modalidade.prototype.getCompetenciasModalidade = function (codigo) {
        return this.modalidadeService.getCompetenciasModalidade(codigo);
    };
    return Modalidade;
}());



/***/ }),

/***/ "./src/app/model/problema.ts":
/*!***********************************!*\
  !*** ./src/app/model/problema.ts ***!
  \***********************************/
/*! exports provided: Problema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Problema", function() { return Problema; });
/* harmony import */ var _services_problemas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/problemas.service */ "./src/app/services/problemas.service.ts");

var Problema = /** @class */ (function () {
    function Problema(problema) {
        if (problema) {
            this.codigo = problema.codigo;
            this.titulo = problema.titulo;
            this.enunciado = problema.enunciado;
            this.dica = problema.dica;
            this.imagemCodigo = problema.imagemCodigo;
            this.imagem = problema.imagem;
            this.pontuacao = problema.pontuacao;
            this.dificuldade = problema.dificuldade;
            this.alternativaA = problema.alternativaA;
            this.alternativaB = problema.alternativaB;
            this.alternativaC = problema.alternativaC;
            this.alternativaD = problema.alternativaD;
            this.alternativaCorreta = problema.alternativaCorreta;
            this.problema = problema;
        }
        this.problemaService = new _services_problemas_service__WEBPACK_IMPORTED_MODULE_0__["ProblemaService"]();
    }
    Problema.prototype.addProblema = function () {
        this.problemaService.addProblema(this.problema);
    };
    Problema.prototype.getProblema = function (codigo) {
        return this.problemaService.getProblema(codigo);
    };
    Problema.prototype.getProblemas = function () {
        return this.problemaService.getProblemas();
    };
    return Problema;
}());



/***/ }),

/***/ "./src/app/services/competencia.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/competencia.service.ts ***!
  \*************************************************/
/*! exports provided: CompetenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaService", function() { return CompetenciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var CompetenciaService = /** @class */ (function () {
    function CompetenciaService() {
    }
    CompetenciaService.prototype.addCompetencia = function (competencia) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('competencias/' + competencia.codigo).set(competencia);
    };
    CompetenciaService.prototype.getCompetencia = function (codigo) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/competencias/' + codigo).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    CompetenciaService.prototype.getCompetencias = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/competencias/').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    CompetenciaService.prototype.getProblemasCompetencia = function (codigo) {
        return this.getCompetencia(codigo).then(function (competencia) {
            var problemas = competencia.problemas.split(", ");
            return problemas;
        });
    };
    CompetenciaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompetenciaService);
    return CompetenciaService;
}());



/***/ }),

/***/ "./src/app/services/medalha.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/medalha.service.ts ***!
  \*********************************************/
/*! exports provided: MedalhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedalhaService", function() { return MedalhaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var MedalhaService = /** @class */ (function () {
    function MedalhaService() {
    }
    MedalhaService.prototype.addMedalha = function (medalha) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('medalhas/' + medalha.codigo).set(medalha);
    };
    MedalhaService.prototype.getMedalha = function (codigo) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/medalhas/' + codigo).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    MedalhaService.prototype.getMedalhas = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/medalhas/').once('value').then(function (snapshot) {
            var medalhasArray = Object.keys(snapshot.val()).map(function (index) {
                var medalhas = snapshot.val()[index];
                return medalhas;
            });
            return medalhasArray;
        });
    };
    MedalhaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MedalhaService);
    return MedalhaService;
}());



/***/ }),

/***/ "./src/app/services/modalidade.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/modalidade.service.ts ***!
  \************************************************/
/*! exports provided: ModalidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadeService", function() { return ModalidadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var ModalidadeService = /** @class */ (function () {
    function ModalidadeService() {
    }
    ModalidadeService.prototype.addModalidade = function (modalidade) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('modalidades/' + modalidade.codigo).set(modalidade);
    };
    ModalidadeService.prototype.getModalidade = function (codigo) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/modalidades/' + codigo).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    ModalidadeService.prototype.getModalidades = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/modalidades/').once('value').then(function (snapshot) {
            var modalidadesArray = Object.keys(snapshot.val()).map(function (index) {
                var modalidades = snapshot.val()[index];
                return modalidades;
            });
            return modalidadesArray;
        });
    };
    ModalidadeService.prototype.getCompetenciasModalidade = function (codigo) {
        return this.getModalidade(codigo).then(function (modalidade) {
            var competencias = modalidade.competencias.split(", ");
            return competencias;
        });
    };
    ModalidadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalidadeService);
    return ModalidadeService;
}());



/***/ }),

/***/ "./src/app/services/problemas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/problemas.service.ts ***!
  \***********************************************/
/*! exports provided: ProblemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaService", function() { return ProblemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var ProblemaService = /** @class */ (function () {
    function ProblemaService() {
    }
    ProblemaService.prototype.addProblema = function (problema) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('problemas/' + problema.codigo).set(problema);
    };
    ProblemaService.prototype.getProblema = function (codigo) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/problemas/' + codigo).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    ProblemaService.prototype.getProblemas = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/problemas/').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    ProblemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProblemaService);
    return ProblemaService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map