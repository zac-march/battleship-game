/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: rgb(0, 0, 0);\n  --background-colour: #eee;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background-colour);\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter,\nmain {\n  padding: 15px 25% 15px 25%;\n  text-align: center;\n}\n\n@media only screen and (max-width: 900px) {\n  header,\n  footer,\n  main {\n    padding: 15px;\n    text-align: center;\n  }\n}\n\nheader {\n  font-size: 3rem;\n}\n\nmain {\n  flex-grow: 1;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.github-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.705);\n}\n\n.fa-github {\n  font-size: 1.5rem;\n  transition: transform 0.2s ease-in-out;\n  color: rgba(0, 0, 0, 0.705);\n}\n\nfooter > a:hover > i {\n  transform: rotate(-2deg) scale(1.1);\n}\n\n/* Game */\n\n.boards {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  .boards {\n    grid-auto-flow: row;\n  }\n}\n\n.board {\n  display: grid;\n  background-color: rgb(255, 68, 0);\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgb(94, 160, 204);\n  outline: 1px black solid;\n  aspect-ratio: 1/1;\n  cursor: crosshair;\n  min-width: 2ch;\n}\n\n.cell-hover {\n  background-color: rgb(237, 255, 250);\n}\n\n.shake {\n  animation: shake 0.5s;\n}\n\n.miss-image {\n  width: 60%;\n  height: 60%;\n}\n\n.hit-image {\n  width: 90%;\n  height: 90%;\n}\n\n.attack-image {\n  justify-self: center;\n  align-self: center;\n  background: none;\n  border: 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  padding: 1px;\n  background-origin: content-box;\n  aspect-ratio: 1/1;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n#game-message {\n  padding: 1rem;\n  font-size: 1.5rem;\n}\n\n.game-options {\n  text-align: start;\n  overflow: hidden;\n  padding: 1rem 0rem;\n  height: min-content;\n}\n\n.hidden {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n}\n\n#rotation-cb + label,\n.reset-btn {\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: hsla(0, 0%, 45%, 0.696);\n  color: white;\n  padding: 10px;\n  width: max-content;\n  justify-self: center;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-size: 0.9rem;\n}\n\n#rotation-cb + label:hover,\n.reset-btn {\n  background-color: hsla(0, 0%, 45%, 0.813);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,0CAA0C;EAC1C,wBAAwB;EACxB,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE;;;IAGE,aAAa;IACb,kBAAkB;EACpB;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;EACtC,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,mCAAmC;EACnC,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;EACZ,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE;IACE,2CAA2C;EAC7C;EACA;IACE,8CAA8C;EAChD;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,6CAA6C;EAC/C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,6CAA6C;EAC/C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,6CAA6C;EAC/C;AACF;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,yCAAyC;EACzC,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mDAAmD;EACnD,iBAAiB;AACnB;;AAEA;;EAEE,yCAAyC;AAC3C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n\n:root {\n  --font-color: rgb(0, 0, 0);\n  --background-colour: #eee;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background-colour);\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter,\nmain {\n  padding: 15px 25% 15px 25%;\n  text-align: center;\n}\n\n@media only screen and (max-width: 900px) {\n  header,\n  footer,\n  main {\n    padding: 15px;\n    text-align: center;\n  }\n}\n\nheader {\n  font-size: 3rem;\n}\n\nmain {\n  flex-grow: 1;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.github-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.705);\n}\n\n.fa-github {\n  font-size: 1.5rem;\n  transition: transform 0.2s ease-in-out;\n  color: rgba(0, 0, 0, 0.705);\n}\n\nfooter > a:hover > i {\n  transform: rotate(-2deg) scale(1.1);\n}\n\n/* Game */\n\n.boards {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 2rem;\n}\n\n@media only screen and (max-width: 500px) {\n  .boards {\n    grid-auto-flow: row;\n  }\n}\n\n.board {\n  display: grid;\n  background-color: rgb(255, 68, 0);\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgb(94, 160, 204);\n  outline: 1px black solid;\n  aspect-ratio: 1/1;\n  cursor: crosshair;\n  min-width: 2ch;\n}\n\n.cell-hover {\n  background-color: rgb(237, 255, 250);\n}\n\n.shake {\n  animation: shake 0.5s;\n}\n\n.miss-image {\n  width: 60%;\n  height: 60%;\n}\n\n.hit-image {\n  width: 90%;\n  height: 90%;\n}\n\n.attack-image {\n  justify-self: center;\n  align-self: center;\n  background: none;\n  border: 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  padding: 1px;\n  background-origin: content-box;\n  aspect-ratio: 1/1;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n#game-message {\n  padding: 1rem;\n  font-size: 1.5rem;\n}\n\n.game-options {\n  text-align: start;\n  overflow: hidden;\n  padding: 1rem 0rem;\n  height: min-content;\n}\n\n.hidden {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n}\n\n#rotation-cb + label,\n.reset-btn {\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: hsla(0, 0%, 45%, 0.696);\n  color: white;\n  padding: 10px;\n  width: max-content;\n  justify-self: center;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-size: 0.9rem;\n}\n\n#rotation-cb + label:hover,\n.reset-btn {\n  background-color: hsla(0, 0%, 45%, 0.813);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Classes/Gameboard.ts":
/*!**********************************!*\
  !*** ./src/Classes/Gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gameboard = void 0;
const Ship_1 = __webpack_require__(/*! ./Ship */ "./src/Classes/Ship.ts");
class Gameboard {
    constructor() {
        this.lastAttackSuccess = false;
        this.boardArr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.fleet = [];
        this.presetShips = [
            new Ship_1.Ship(5),
            new Ship_1.Ship(4),
            new Ship_1.Ship(3),
            new Ship_1.Ship(3),
            new Ship_1.Ship(2),
        ];
        this.lastAttackSuccess = false;
    }
    placeShip(shipObj, coordinates, orientation) {
        const placedCells = this.getPlacedCells(shipObj, coordinates, orientation);
        placedCells.forEach((cell) => this.setCell([cell[0], cell[1]], 1));
        this.fleet.push({
            shipObj,
            placedCells,
        });
    }
    recieveAttack([x, y]) {
        const hitShip = this.fleet.find((ship) => ship.placedCells.some((cell) => cell[0] === x && cell[1] === y));
        if (hitShip) {
            hitShip.shipObj.hit();
            this.setCell([x, y], -1);
            this.lastAttackSuccess = true;
        }
        else {
            this.setCell([x, y], -2);
            this.lastAttackSuccess = false;
        }
    }
    detectGameOver() {
        const sunkValues = this.fleet.map((ship) => ship.shipObj.isSunk());
        return sunkValues.every((value) => value);
    }
    getAttackableCells(subset) {
        if (subset !== undefined) {
            return subset.filter((cell) => this.getCell(cell) >= 0);
        }
        else {
            const attackableCells = [];
            for (let x = 0; x < this.boardArr.length; x++) {
                for (let y = 0; y < this.boardArr[x].length; y++) {
                    if (this.getCell([x, y]) >= 0)
                        attackableCells.push([x, y]);
                }
            }
            return attackableCells;
        }
    }
    getCell([x, y]) {
        if (x > 9 || y > 9 || x < 0 || y < 0)
            throw new Error(`Coordinates ${[x, y]}, is outside the gameboard`);
        return this.boardArr[x][y];
    }
    setCell([x, y], value) {
        this.boardArr[x][y] = value;
    }
    isOutsideBoard(cell) {
        if (cell[0] > 9 || cell[1] > 9 || cell[0] < 0 || cell[1] < 0) {
            return true;
        }
        return false;
    }
    isValidPlacement(shipObj, coordinates, orientation) {
        const placedCells = this.getPlacedCells(shipObj, coordinates, orientation);
        if (placedCells.some((cell) => this.isOutsideBoard(cell))) {
            return false;
        }
        else {
            return isSpaceEmpty(this.boardArr);
        }
        function isSpaceEmpty(boardArray) {
            return !placedCells.some((cell) => boardArray[cell[0]][cell[1]] != 0);
        }
    }
    getPlacedCells(shipObj, coordinates, orientation) {
        const placedCells = [];
        let newCoordinates = [...coordinates];
        for (let i = 0; i < shipObj.length; i++) {
            const [x, y] = newCoordinates;
            placedCells.push([x, y]);
            orientation === "vertical" ? newCoordinates[0]++ : newCoordinates[1]++;
        }
        return placedCells;
    }
    isCellHit([x, y]) {
        return this.boardArr[x][y] === -1 || this.boardArr[x][y] === -2;
    }
    isCellShip([x, y]) {
        return this.boardArr[x][y] === 1 || this.boardArr[x][y] === -1;
    }
    setRandomFleet() {
        for (let ship of this.presetShips) {
            let isValid = false;
            while (!isValid) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
                isValid = this.isValidPlacement(ship, [x, y], orientation);
                if (isValid) {
                    this.placeShip(ship, [x, y], orientation);
                }
            }
        }
    }
    isShipSunk(coordinate) {
        const index = this.getIndexOfShip(coordinate);
        return this.fleet[index].shipObj.isSunk();
    }
    getIndexOfShip(coordinate) {
        for (let index = 0; index < this.fleet.length; index++) {
            const ship = this.fleet[index];
            for (let i = 0; i < ship.placedCells.length; i++) {
                const cell = ship.placedCells[i];
                if (cell[0] === coordinate[0] && cell[1] === coordinate[1]) {
                    return index;
                }
            }
        }
    }
}
exports.Gameboard = Gameboard;


/***/ }),

/***/ "./src/Classes/Player.ts":
/*!*******************************!*\
  !*** ./src/Classes/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Gameboard_1 = __webpack_require__(/*! ./Gameboard */ "./src/Classes/Gameboard.ts");
class Player {
    constructor(isTurn, isOpponent) {
        this.board = new Gameboard_1.Gameboard();
        this.isTurn = isTurn;
        this.isOpponent = isOpponent;
    }
    takeTurn(rival, coordinates) {
        rival.board.recieveAttack(coordinates);
        this.lastAttackSuccess = rival.board.lastAttackSuccess;
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/Classes/PlayerAI.ts":
/*!*********************************!*\
  !*** ./src/Classes/PlayerAI.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerAI = void 0;
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Classes/Player.ts");
class PlayerAI extends Player_1.Player {
    constructor(isTurn, isOpponent) {
        super(isTurn, isOpponent);
        this.attackQueue = [];
    }
    takeTurn(rival) {
        let targetCells;
        let usedAttackQueue = false;
        this.attackQueue.length;
        if (this.attackQueue.length <= 0) {
            targetCells = rival.board.getAttackableCells();
        }
        else {
            targetCells = this.attackQueue;
            usedAttackQueue = true;
        }
        const randCellIndex = Math.floor(Math.random() * targetCells.length);
        const attackedCell = targetCells[randCellIndex];
        rival.board.recieveAttack(attackedCell);
        this.lastAttackSuccess = rival.board.lastAttackSuccess;
        this.lastAttackedCell = attackedCell;
        if (usedAttackQueue)
            this.attackQueue.splice(randCellIndex, 1);
        this.updateAttackQueue(rival, attackedCell);
    }
    updateAttackQueue(rival, attackedCell) {
        if (this.lastAttackSuccess) {
            if (rival.board.isShipSunk(attackedCell)) {
                this.attackQueue = [];
            }
            else {
                this.setAttackQueue(rival, attackedCell);
            }
        }
    }
    setAttackQueue(rival, cell) {
        let surroundingCells = [
            [cell[0] - 1, cell[1]],
            [cell[0] + 1, cell[1]],
            [cell[0], cell[1] - 1],
            [cell[0], cell[1] + 1],
        ];
        surroundingCells = surroundingCells.filter((cell) => !rival.board.isOutsideBoard(cell));
        const attackableCells = rival.board.getAttackableCells(surroundingCells);
        this.attackQueue.push(...this.attackQueue, ...attackableCells);
        this.attackQueue = [...new Set(attackableCells)];
    }
}
exports.PlayerAI = PlayerAI;


/***/ }),

/***/ "./src/Classes/Ship.ts":
/*!*****************************!*\
  !*** ./src/Classes/Ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ship = void 0;
class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
    }
    isSunk() {
        return this.hitCount === this.length;
    }
    hit() {
        this.hitCount += 1;
    }
}
exports.Ship = Ship;


/***/ }),

/***/ "./src/Components/board.ts":
/*!*********************************!*\
  !*** ./src/Components/board.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boardComponent = void 0;
const Hit = __webpack_require__(/*! ./../images/fire.svg */ "./src/images/fire.svg");
const Miss = __webpack_require__(/*! ./../images/splash.svg */ "./src/images/splash.svg");
function boardComponent(participant) {
    const boardSize = participant.board.boardArr.length;
    const container = document.createElement("div");
    refresh();
    function refresh() {
        container.innerHTML = "";
        const boardContent = loadBoardContent();
        container.appendChild(boardContent);
    }
    function loadBoardContent() {
        const boardGrid = document.createElement("div");
        boardGrid.style.gridTemplateColumns = `repeat(${boardSize}, 1fr`;
        boardGrid.className = "board";
        for (let i = 0; i < boardSize * boardSize; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            const coordinate = [Math.floor(i / boardSize), i % boardSize];
            const cellValue = participant.board.getCell(coordinate).toString();
            cell.dataset.coordinate = coordinate.toString();
            cell.dataset.value = cellValue;
            if (participant.board.isCellShip(coordinate)) {
                if (!participant.isOpponent || cellValue == "-1") {
                    const cellColour = getShipColour(coordinate);
                    cell.style.backgroundColor = cellColour;
                }
            }
            if (participant.board.isCellHit(coordinate)) {
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("attack-image");
                let imageSrc;
                if (cellValue == "-1") {
                    imageSrc = `url(${Hit})`;
                    imageContainer.classList.add("hit-image");
                }
                else if (cellValue == "-2") {
                    imageSrc = `url(${Miss})`;
                    imageContainer.classList.add("miss-image");
                }
                imageContainer.style.backgroundImage = imageSrc;
                cell.append(imageContainer);
            }
            boardGrid.appendChild(cell);
        }
        return boardGrid;
    }
    function getShipColour(coordinate) {
        const shipIndex = participant.board.getIndexOfShip(coordinate);
        const colour = ((200 - 100) / participant.board.presetShips.length) * shipIndex + 100;
        return `rgb(${colour}, ${colour}, ${colour})`;
    }
    return { container, refresh };
}
exports.boardComponent = boardComponent;


/***/ }),

/***/ "./src/Components/game.ts":
/*!********************************!*\
  !*** ./src/Components/game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.game = void 0;
const Player_1 = __webpack_require__(/*! ../Classes/Player */ "./src/Classes/Player.ts");
const PlayerAI_1 = __webpack_require__(/*! ../Classes/PlayerAI */ "./src/Classes/PlayerAI.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/Components/board.ts");
const options_1 = __webpack_require__(/*! ./options */ "./src/Components/options.ts");
function game() {
    const gameStateMessage = document.querySelector("#game-message");
    const main = document.body.querySelector("main");
    const boardsContainer = document.createElement("div");
    main.append(boardsContainer);
    boardsContainer.className = "boards";
    let opponentBoard;
    let playerBoard;
    let opponent;
    let player;
    const options = (0, options_1.loadGameOptions)();
    setGame("setup");
    function setGame(gameState) {
        switch (gameState) {
            case "setup":
                options.loadSetupOptions();
                setupGame();
                break;
            case "play":
                options.clearOptions();
                playGame();
                break;
            case "end":
                options.loadEndOptions();
                endGame();
                break;
        }
    }
    function setupGame() {
        gameStateMessage.textContent = "Setup you fleet!\n";
        opponent = new PlayerAI_1.PlayerAI(false, true);
        player = new Player_1.Player(true, false);
        opponent.board.setRandomFleet();
        playerBoard = (0, board_1.boardComponent)(player);
        opponentBoard = (0, board_1.boardComponent)(opponent);
        boardsContainer.append(playerBoard.container, opponentBoard.container);
        playerBoard.container.addEventListener("click", placePlayerShip);
        playerBoard.container.addEventListener("mouseover", handlePlacementHover);
        playerBoard.container.addEventListener("mouseout", handlePlacementHover);
        playerBoard.refresh();
        opponentBoard.refresh();
        function placePlayerShip(e) {
            const orientation = getOrientation();
            const cell = getCellData(e.target);
            const shipIndex = player.board.fleet.length;
            if (cell.value != 0)
                return;
            const currentShip = player.board.presetShips[shipIndex];
            const isValid = player.board.isValidPlacement(currentShip, cell.coordinates, orientation);
            if (!isValid)
                return;
            player.board.placeShip(currentShip, cell.coordinates, orientation);
            playerBoard.refresh();
            if (player.board.fleet.length >= player.board.presetShips.length) {
                playerBoard.container.removeEventListener("mouseover", handlePlacementHover);
                playerBoard.container.removeEventListener("mouseout", handlePlacementHover);
                playerBoard.container.removeEventListener("click", placePlayerShip);
                setGame("play");
            }
        }
        function getOrientation() {
            const rotationCb = document.querySelector("#rotation-cb");
            if (rotationCb.checked) {
                return "horizontal";
            }
            else
                return "vertical";
        }
        function handlePlacementHover(e) {
            const isMouseOver = e.type === "mouseover" ? true : false;
            if (!e.target.classList.contains("cell"))
                return;
            const elements = getHoveredCells(e.target);
            if (elements.length < 0)
                return;
            elements.forEach((element) => {
                if (isMouseOver)
                    element.classList.add("cell-hover");
                else
                    element.classList.remove("cell-hover");
            });
        }
        function getHoveredCells(currentCell) {
            const currentShip = player.board.presetShips[player.board.fleet.length];
            const orientation = getOrientation();
            const cell = getCellData(currentCell);
            if (!player.board.isValidPlacement(currentShip, cell.coordinates, orientation))
                return [];
            return player.board
                .getPlacedCells(currentShip, cell.coordinates, orientation)
                .map((coordinate) => document.querySelector(`[data-coordinate="${coordinate}"]`))
                .filter((element) => element !== null);
        }
    }
    function playGame() {
        gameStateMessage.textContent = "Attack the enemy!";
        opponentBoard.container.addEventListener("click", handlePlayerAttack);
        function handlePlayerAttack(e) {
            const cellData = getCellData(e.target);
            if (cellData.value < 0)
                return;
            player.takeTurn(opponent, cellData.coordinates);
            opponentBoard.refresh();
            if (player.lastAttackSuccess) {
                const cellElement = getCellElement(cellData.coordinates, opponentBoard.container);
                handleShakeEffect(cellElement);
            }
            setTimeout(() => {
                opponent.takeTurn(player);
                playerBoard.refresh();
                if (opponent.lastAttackSuccess) {
                    const cellElement = getCellElement(opponent.lastAttackedCell, playerBoard.container);
                    handleShakeEffect(cellElement);
                }
            }, Math.random() * (1200 - 300) + 300);
            function handleShakeEffect(element) {
                element.classList.add("shake");
                setTimeout(() => element.classList.remove("shake"), 500);
            }
            if (player.board.detectGameOver() || opponent.board.detectGameOver()) {
                opponentBoard.container.removeEventListener("click", handlePlayerAttack);
                setGame("end");
            }
        }
    }
    function endGame() {
        let message;
        message = opponent.board.detectGameOver() ? "You win!" : "You lose :(";
        gameStateMessage.textContent = "Game over!\n" + message;
        const resetBtn = document.querySelector(".reset-btn");
        resetBtn.addEventListener("click", () => {
            boardsContainer.innerHTML = "";
            setGame("setup");
        });
    }
    function getCellElement(coordinates, boardContainer) {
        return boardContainer.querySelector(`[data-coordinate="${coordinates}"]`);
    }
    function getCellData(element) {
        const value = parseInt(element.getAttribute("data-value"));
        const coordinatesString = element
            .getAttribute("data-coordinate")
            .split(",");
        const coordinates = [
            parseInt(coordinatesString[0]),
            parseInt(coordinatesString[1]),
        ];
        return { element, value, coordinates };
    }
}
exports.game = game;


/***/ }),

/***/ "./src/Components/message.ts":
/*!***********************************!*\
  !*** ./src/Components/message.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadGameMessage = void 0;
function loadGameMessage() {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.classList.add("game-message-container");
    main.append(container);
    const gameStateMessage = document.createElement("p");
    gameStateMessage.id = "game-message";
    container.append(gameStateMessage);
}
exports.loadGameMessage = loadGameMessage;


/***/ }),

/***/ "./src/Components/options.ts":
/*!***********************************!*\
  !*** ./src/Components/options.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadGameOptions = void 0;
function loadGameOptions() {
    const container = document.querySelector(".game-message-container");
    const gameOptions = document.createElement("div");
    gameOptions.classList.add("game-options");
    container.append(gameOptions);
    function loadEndOptions() {
        clearOptions();
        const resetButton = document.createElement("button");
        resetButton.classList.add("reset-btn");
        resetButton.textContent = "Reset";
        gameOptions.append(resetButton);
    }
    function loadSetupOptions() {
        clearOptions();
        const rotationCb = document.createElement("input");
        rotationCb.type = "checkbox";
        rotationCb.classList.add("hidden");
        rotationCb.id = "rotation-cb";
        rotationCb.name = "rotation-cb";
        const rotationLbl = document.createElement("label");
        rotationLbl.htmlFor = "rotation-cb";
        rotationLbl.textContent = "Rotation: Vertical";
        gameOptions.append(rotationCb, rotationLbl);
        rotationCb.addEventListener("change", function () {
            if (this.checked) {
                rotationLbl.textContent = "Rotation: Horizontal";
            }
            else {
                rotationLbl.textContent = "Rotation: Vertical";
            }
        });
    }
    function clearOptions() {
        gameOptions.innerHTML = "";
    }
    return { loadEndOptions, loadSetupOptions, clearOptions };
}
exports.loadGameOptions = loadGameOptions;


/***/ }),

/***/ "./src/images/fire.svg":
/*!*****************************!*\
  !*** ./src/images/fire.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a77cb15a6c91526271c.svg";

/***/ }),

/***/ "./src/images/splash.svg":
/*!*******************************!*\
  !*** ./src/images/splash.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8a7f6835186de4a9116.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.css */ "./src/style.css");
const game_1 = __webpack_require__(/*! ./Components/game */ "./src/Components/game.ts");
const message_1 = __webpack_require__(/*! ./Components/message */ "./src/Components/message.ts");
(0, message_1.loadGameMessage)();
(0, game_1.game)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkEsMEVBQThCO0FBRTlCLE1BQWEsU0FBUztJQU1wQjtRQUZBLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUdqQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxD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QUFPLEVBQUU7Z0JBQ2hCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQzthQUNoRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsWUFBWTtRQUNuQixXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxDQUFDO0FBekNELDBDQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQUEsMERBQXFCO0FBQ3JCLHdGQUF5QztBQUN6QyxpR0FBdUQ7QUFHdkQsNkJBQWUsR0FBRSxDQUFDO0FBQ2xCLGVBQUksR0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9DbGFzc2VzL0dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvQ2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0NsYXNzZXMvUGxheWVyQUkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0NsYXNzZXMvU2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvQ29tcG9uZW50cy9ib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvQ29tcG9uZW50cy9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9Db21wb25lbnRzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0NvbXBvbmVudHMvb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG91cjogI2VlZTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIsXFxubWFpbiB7XFxuICBwYWRkaW5nOiAxNXB4IDI1JSAxNXB4IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaGVhZGVyLFxcbiAgZm9vdGVyLFxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXG59XFxuXFxuZm9vdGVyID4gYTpob3ZlciA+IGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIEdhbWUgKi9cXG5cXG4uYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuYm9hcmRzIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIH1cXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2OCwgMCk7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDE2MCwgMjA0KTtcXG4gIG91dGxpbmU6IDFweCBibGFjayBzb2xpZDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBtaW4td2lkdGg6IDJjaDtcXG59XFxuXFxuLmNlbGwtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjU1LCAyNTApO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcbn1cXG5cXG4ubWlzcy1pbWFnZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5oaXQtaW1hZ2Uge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4uYXR0YWNrLWltYWdlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XFxuICB9XFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG59XFxuXFxuI2dhbWUtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5nYW1lLW9wdGlvbnMge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jcm90YXRpb24tY2IgKyBsYWJlbCxcXG4ucmVzZXQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDQ1JSwgMC42OTYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNyb3RhdGlvbi1jYiArIGxhYmVsOmhvdmVyLFxcbi5yZXNldC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgNDUlLCAwLjgxMyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7OztJQUdFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSw4Q0FBOEM7RUFDaEQ7RUFDQTtJQUNFLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSw2Q0FBNkM7RUFDL0M7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbURBQW1EO0VBQ25ELGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx5Q0FBeUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG91cjogI2VlZTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIsXFxubWFpbiB7XFxuICBwYWRkaW5nOiAxNXB4IDI1JSAxNXB4IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaGVhZGVyLFxcbiAgZm9vdGVyLFxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXG59XFxuXFxuZm9vdGVyID4gYTpob3ZlciA+IGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIEdhbWUgKi9cXG5cXG4uYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuYm9hcmRzIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIH1cXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2OCwgMCk7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDE2MCwgMjA0KTtcXG4gIG91dGxpbmU6IDFweCBibGFjayBzb2xpZDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBtaW4td2lkdGg6IDJjaDtcXG59XFxuXFxuLmNlbGwtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjU1LCAyNTApO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcbn1cXG5cXG4ubWlzcy1pbWFnZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5oaXQtaW1hZ2Uge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4uYXR0YWNrLWltYWdlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XFxuICB9XFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXG4gIH1cXG59XFxuXFxuI2dhbWUtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5nYW1lLW9wdGlvbnMge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jcm90YXRpb24tY2IgKyBsYWJlbCxcXG4ucmVzZXQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDQ1JSwgMC42OTYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNyb3RhdGlvbi1jYiArIGxhYmVsOmhvdmVyLFxcbi5yZXNldC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgNDUlLCAwLjgxMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmRBcnI6IG51bWJlcltdW107XG4gIGZsZWV0OiBhbnlbXTtcbiAgcHJlc2V0U2hpcHM6IFNoaXBbXTtcbiAgbGFzdEF0dGFja1N1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkQXJyID0gW1xuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIF07XG5cbiAgICB0aGlzLmZsZWV0ID0gW107XG5cbiAgICB0aGlzLnByZXNldFNoaXBzID0gW1xuICAgICAgbmV3IFNoaXAoNSksXG4gICAgICBuZXcgU2hpcCg0KSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICBdO1xuXG4gICAgdGhpcy5sYXN0QXR0YWNrU3VjY2VzcyA9IGZhbHNlO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXBPYmo6IFNoaXAsIGNvb3JkaW5hdGVzOiBudW1iZXJbXSwgb3JpZW50YXRpb246IHN0cmluZykge1xuICAgIGNvbnN0IHBsYWNlZENlbGxzID0gdGhpcy5nZXRQbGFjZWRDZWxscyhzaGlwT2JqLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgIHBsYWNlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHRoaXMuc2V0Q2VsbChbY2VsbFswXSwgY2VsbFsxXV0sIDEpKTtcblxuICAgIHRoaXMuZmxlZXQucHVzaCh7XG4gICAgICBzaGlwT2JqLFxuICAgICAgcGxhY2VkQ2VsbHMsXG4gICAgfSk7XG4gIH1cblxuICByZWNpZXZlQXR0YWNrKFt4LCB5XTogbnVtYmVyW10pIHtcbiAgICBjb25zdCBoaXRTaGlwID0gdGhpcy5mbGVldC5maW5kKChzaGlwKSA9PlxuICAgICAgc2hpcC5wbGFjZWRDZWxscy5zb21lKChjZWxsOiBudW1iZXJbXSkgPT4gY2VsbFswXSA9PT0geCAmJiBjZWxsWzFdID09PSB5KVxuICAgICk7XG5cbiAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgaGl0U2hpcC5zaGlwT2JqLmhpdCgpO1xuICAgICAgdGhpcy5zZXRDZWxsKFt4LCB5XSwgLTEpO1xuICAgICAgdGhpcy5sYXN0QXR0YWNrU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q2VsbChbeCwgeV0sIC0yKTtcbiAgICAgIHRoaXMubGFzdEF0dGFja1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RHYW1lT3ZlcigpIHtcbiAgICBjb25zdCBzdW5rVmFsdWVzID0gdGhpcy5mbGVldC5tYXAoKHNoaXApID0+IHNoaXAuc2hpcE9iai5pc1N1bmsoKSk7XG4gICAgcmV0dXJuIHN1bmtWYWx1ZXMuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSk7XG4gIH1cblxuICBnZXRBdHRhY2thYmxlQ2VsbHMoc3Vic2V0PzogbnVtYmVyW11bXSkge1xuICAgIGlmIChzdWJzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHN1YnNldC5maWx0ZXIoKGNlbGw6IG51bWJlcltdKSA9PiB0aGlzLmdldENlbGwoY2VsbCkgPj0gMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGF0dGFja2FibGVDZWxsczogbnVtYmVyW11bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZEFyclt4XS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmdldENlbGwoW3gsIHldKSA+PSAwKSBhdHRhY2thYmxlQ2VsbHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0YWNrYWJsZUNlbGxzO1xuICAgIH1cbiAgfVxuXG4gIGdldENlbGwoW3gsIHldOiBudW1iZXJbXSkge1xuICAgIGlmICh4ID4gOSB8fCB5ID4gOSB8fCB4IDwgMCB8fCB5IDwgMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29vcmRpbmF0ZXMgJHtbeCwgeV19LCBpcyBvdXRzaWRlIHRoZSBnYW1lYm9hcmRgKTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZEFyclt4XVt5XTtcbiAgfVxuXG4gIHNldENlbGwoW3gsIHldOiBudW1iZXJbXSwgdmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuYm9hcmRBcnJbeF1beV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGlzT3V0c2lkZUJvYXJkKGNlbGw6IG51bWJlcltdKSB7XG4gICAgaWYgKGNlbGxbMF0gPiA5IHx8IGNlbGxbMV0gPiA5IHx8IGNlbGxbMF0gPCAwIHx8IGNlbGxbMV0gPCAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWYWxpZFBsYWNlbWVudChzaGlwT2JqOiBTaGlwLCBjb29yZGluYXRlczogbnVtYmVyW10sIG9yaWVudGF0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwbGFjZWRDZWxscyA9IHRoaXMuZ2V0UGxhY2VkQ2VsbHMoc2hpcE9iaiwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChwbGFjZWRDZWxscy5zb21lKChjZWxsKSA9PiB0aGlzLmlzT3V0c2lkZUJvYXJkKGNlbGwpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNTcGFjZUVtcHR5KHRoaXMuYm9hcmRBcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3BhY2VFbXB0eShib2FyZEFycmF5OiBudW1iZXJbXVtdKSB7XG4gICAgICByZXR1cm4gIXBsYWNlZENlbGxzLnNvbWUoKGNlbGwpID0+IGJvYXJkQXJyYXlbY2VsbFswXV1bY2VsbFsxXV0gIT0gMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGxhY2VkQ2VsbHMoc2hpcE9iajogU2hpcCwgY29vcmRpbmF0ZXM6IG51bWJlcltdLCBvcmllbnRhdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgcGxhY2VkQ2VsbHMgPSBbXTtcbiAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBbLi4uY29vcmRpbmF0ZXNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3gsIHldID0gbmV3Q29vcmRpbmF0ZXM7XG4gICAgICBwbGFjZWRDZWxscy5wdXNoKFt4LCB5XSk7XG4gICAgICBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gbmV3Q29vcmRpbmF0ZXNbMF0rKyA6IG5ld0Nvb3JkaW5hdGVzWzFdKys7XG4gICAgfVxuICAgIHJldHVybiBwbGFjZWRDZWxscztcbiAgfVxuXG4gIGlzQ2VsbEhpdChbeCwgeV06IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRBcnJbeF1beV0gPT09IC0xIHx8IHRoaXMuYm9hcmRBcnJbeF1beV0gPT09IC0yO1xuICB9XG5cbiAgaXNDZWxsU2hpcChbeCwgeV06IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRBcnJbeF1beV0gPT09IDEgfHwgdGhpcy5ib2FyZEFyclt4XVt5XSA9PT0gLTE7XG4gIH1cblxuICBzZXRSYW5kb21GbGVldCgpIHtcbiAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMucHJlc2V0U2hpcHMpIHtcbiAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIWlzVmFsaWQpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgICAgIGlzVmFsaWQgPSB0aGlzLmlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgW3gsIHldLCBvcmllbnRhdGlvbik7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZVNoaXAoc2hpcCwgW3gsIHldLCBvcmllbnRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1NoaXBTdW5rKGNvb3JkaW5hdGU6IG51bWJlcltdKSB7XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0SW5kZXhPZlNoaXAoY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXRbaW5kZXhdLnNoaXBPYmouaXNTdW5rKCk7XG4gIH1cblxuICBnZXRJbmRleE9mU2hpcChjb29yZGluYXRlOiBudW1iZXJbXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuZmxlZXRbaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnBsYWNlZENlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBzaGlwLnBsYWNlZENlbGxzW2ldO1xuICAgICAgICBpZiAoY2VsbFswXSA9PT0gY29vcmRpbmF0ZVswXSAmJiBjZWxsWzFdID09PSBjb29yZGluYXRlWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGJvYXJkOiBHYW1lYm9hcmQ7XG4gIGlzVHVybjogYm9vbGVhbjtcbiAgaXNPcHBvbmVudDogYm9vbGVhbjtcbiAgbGFzdEF0dGFja1N1Y2Nlc3M6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoaXNUdXJuOiBib29sZWFuLCBpc09wcG9uZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmlzVHVybiA9IGlzVHVybjtcbiAgICB0aGlzLmlzT3Bwb25lbnQgPSBpc09wcG9uZW50O1xuICB9XG5cbiAgdGFrZVR1cm4ocml2YWw6IFBsYXllciwgY29vcmRpbmF0ZXM/OiBudW1iZXJbXSkge1xuICAgIHJpdmFsLmJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIHRoaXMubGFzdEF0dGFja1N1Y2Nlc3MgPSByaXZhbC5ib2FyZC5sYXN0QXR0YWNrU3VjY2VzcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJBSSBleHRlbmRzIFBsYXllciB7XG4gIGF0dGFja1F1ZXVlOiBudW1iZXJbXVtdO1xuICBsYXN0QXR0YWNrZWRDZWxsOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3Rvcihpc1R1cm46IGJvb2xlYW4sIGlzT3Bwb25lbnQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihpc1R1cm4sIGlzT3Bwb25lbnQpO1xuICAgIHRoaXMuYXR0YWNrUXVldWUgPSBbXTtcbiAgfVxuXG4gIHRha2VUdXJuKHJpdmFsOiBQbGF5ZXIpIHtcbiAgICBsZXQgdGFyZ2V0Q2VsbHM6IG51bWJlcltdW107XG4gICAgbGV0IHVzZWRBdHRhY2tRdWV1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRoaXMuYXR0YWNrUXVldWUubGVuZ3RoO1xuICAgIGlmICh0aGlzLmF0dGFja1F1ZXVlLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0YXJnZXRDZWxscyA9IHJpdmFsLmJvYXJkLmdldEF0dGFja2FibGVDZWxscygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRDZWxscyA9IHRoaXMuYXR0YWNrUXVldWU7XG4gICAgICB1c2VkQXR0YWNrUXVldWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRDZWxsSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRDZWxscy5sZW5ndGgpO1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IHRhcmdldENlbGxzW3JhbmRDZWxsSW5kZXhdO1xuICAgIHJpdmFsLmJvYXJkLnJlY2lldmVBdHRhY2soYXR0YWNrZWRDZWxsKTtcbiAgICB0aGlzLmxhc3RBdHRhY2tTdWNjZXNzID0gcml2YWwuYm9hcmQubGFzdEF0dGFja1N1Y2Nlc3M7XG4gICAgdGhpcy5sYXN0QXR0YWNrZWRDZWxsID0gYXR0YWNrZWRDZWxsO1xuXG4gICAgaWYgKHVzZWRBdHRhY2tRdWV1ZSkgdGhpcy5hdHRhY2tRdWV1ZS5zcGxpY2UocmFuZENlbGxJbmRleCwgMSk7XG5cbiAgICB0aGlzLnVwZGF0ZUF0dGFja1F1ZXVlKHJpdmFsLCBhdHRhY2tlZENlbGwpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBdHRhY2tRdWV1ZShyaXZhbDogUGxheWVyLCBhdHRhY2tlZENlbGw6IG51bWJlcltdKSB7XG4gICAgaWYgKHRoaXMubGFzdEF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgIGlmIChyaXZhbC5ib2FyZC5pc1NoaXBTdW5rKGF0dGFja2VkQ2VsbCkpIHtcbiAgICAgICAgdGhpcy5hdHRhY2tRdWV1ZSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRhY2tRdWV1ZShyaXZhbCwgYXR0YWNrZWRDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRBdHRhY2tRdWV1ZShyaXZhbDogUGxheWVyLCBjZWxsOiBudW1iZXJbXSkge1xuICAgIGxldCBzdXJyb3VuZGluZ0NlbGxzID0gW1xuICAgICAgW2NlbGxbMF0gLSAxLCBjZWxsWzFdXSxcbiAgICAgIFtjZWxsWzBdICsgMSwgY2VsbFsxXV0sXG4gICAgICBbY2VsbFswXSwgY2VsbFsxXSAtIDFdLFxuICAgICAgW2NlbGxbMF0sIGNlbGxbMV0gKyAxXSxcbiAgICBdO1xuXG4gICAgc3Vycm91bmRpbmdDZWxscyA9IHN1cnJvdW5kaW5nQ2VsbHMuZmlsdGVyKFxuICAgICAgKGNlbGwpID0+ICFyaXZhbC5ib2FyZC5pc091dHNpZGVCb2FyZChjZWxsKVxuICAgICk7XG4gICAgY29uc3QgYXR0YWNrYWJsZUNlbGxzID0gcml2YWwuYm9hcmQuZ2V0QXR0YWNrYWJsZUNlbGxzKHN1cnJvdW5kaW5nQ2VsbHMpO1xuICAgIHRoaXMuYXR0YWNrUXVldWUucHVzaCguLi50aGlzLmF0dGFja1F1ZXVlLCAuLi5hdHRhY2thYmxlQ2VsbHMpO1xuICAgIHRoaXMuYXR0YWNrUXVldWUgPSBbLi4ubmV3IFNldChhdHRhY2thYmxlQ2VsbHMpXTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBsZW5ndGg6IG51bWJlcjtcbiAgaGl0Q291bnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsZW5ndGg6IG51bWJlcikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdENvdW50ID09PSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdENvdW50ICs9IDE7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLy4uL0NsYXNzZXMvUGxheWVyXCI7XG5pbXBvcnQgKiBhcyBIaXQgZnJvbSBcIi4vLi4vaW1hZ2VzL2ZpcmUuc3ZnXCI7XG5pbXBvcnQgKiBhcyBNaXNzIGZyb20gXCIuLy4uL2ltYWdlcy9zcGxhc2guc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBib2FyZENvbXBvbmVudChwYXJ0aWNpcGFudDogUGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkU2l6ZSA9IHBhcnRpY2lwYW50LmJvYXJkLmJvYXJkQXJyLmxlbmd0aDtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZWZyZXNoKCk7XG5cbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBib2FyZENvbnRlbnQgPSBsb2FkQm9hcmRDb250ZW50KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkQm9hcmRDb250ZW50KCkge1xuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRHcmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyYDtcbiAgICBib2FyZEdyaWQuY2xhc3NOYW1lID0gXCJib2FyZFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemUgKiBib2FyZFNpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcblxuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtNYXRoLmZsb29yKGkgLyBib2FyZFNpemUpLCBpICUgYm9hcmRTaXplXTtcbiAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHBhcnRpY2lwYW50LmJvYXJkLmdldENlbGwoY29vcmRpbmF0ZSkudG9TdHJpbmcoKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlID0gY29vcmRpbmF0ZS50b1N0cmluZygpO1xuICAgICAgY2VsbC5kYXRhc2V0LnZhbHVlID0gY2VsbFZhbHVlO1xuXG4gICAgICBpZiAocGFydGljaXBhbnQuYm9hcmQuaXNDZWxsU2hpcChjb29yZGluYXRlKSkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYW50LmlzT3Bwb25lbnQgfHwgY2VsbFZhbHVlID09IFwiLTFcIikge1xuICAgICAgICAgIGNvbnN0IGNlbGxDb2xvdXIgPSBnZXRTaGlwQ29sb3VyKGNvb3JkaW5hdGUpO1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbENvbG91cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFydGljaXBhbnQuYm9hcmQuaXNDZWxsSGl0KGNvb3JkaW5hdGUpKSB7XG4gICAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImF0dGFjay1pbWFnZVwiKTtcbiAgICAgICAgbGV0IGltYWdlU3JjOiBzdHJpbmc7XG4gICAgICAgIGlmIChjZWxsVmFsdWUgPT0gXCItMVwiKSB7XG4gICAgICAgICAgaW1hZ2VTcmMgPSBgdXJsKCR7SGl0fSlgO1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaXQtaW1hZ2VcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbFZhbHVlID09IFwiLTJcIikge1xuICAgICAgICAgIGltYWdlU3JjID0gYHVybCgke01pc3N9KWA7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1pc3MtaW1hZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1hZ2VTcmM7XG4gICAgICAgIGNlbGwuYXBwZW5kKGltYWdlQ29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmRHcmlkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcENvbG91cihjb29yZGluYXRlOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IHBhcnRpY2lwYW50LmJvYXJkLmdldEluZGV4T2ZTaGlwKGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IGNvbG91ciA9XG4gICAgICAoKDIwMCAtIDEwMCkgLyBwYXJ0aWNpcGFudC5ib2FyZC5wcmVzZXRTaGlwcy5sZW5ndGgpICogc2hpcEluZGV4ICsgMTAwO1xuICAgIHJldHVybiBgcmdiKCR7Y29sb3VyfSwgJHtjb2xvdXJ9LCAke2NvbG91cn0pYDtcbiAgfVxuXG4gIHJldHVybiB7IGNvbnRhaW5lciwgcmVmcmVzaCB9O1xufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvUGxheWVyXCI7XG5pbXBvcnQgeyBQbGF5ZXJBSSB9IGZyb20gXCIuLi9DbGFzc2VzL1BsYXllckFJXCI7XG5pbXBvcnQgeyBib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBsb2FkR2FtZU9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lKCkge1xuICBjb25zdCBnYW1lU3RhdGVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLW1lc3NhZ2VcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmFwcGVuZChib2FyZHNDb250YWluZXIpO1xuICBib2FyZHNDb250YWluZXIuY2xhc3NOYW1lID0gXCJib2FyZHNcIjtcbiAgbGV0IG9wcG9uZW50Qm9hcmQ6IHsgY29udGFpbmVyOiBhbnk7IHJlZnJlc2g6IGFueSB9O1xuICBsZXQgcGxheWVyQm9hcmQ6IHsgY29udGFpbmVyOiBhbnk7IHJlZnJlc2g6IGFueSB9O1xuICBsZXQgb3Bwb25lbnQ6IFBsYXllckFJO1xuICBsZXQgcGxheWVyOiBQbGF5ZXI7XG4gIGNvbnN0IG9wdGlvbnMgPSBsb2FkR2FtZU9wdGlvbnMoKTtcbiAgc2V0R2FtZShcInNldHVwXCIpO1xuXG4gIGZ1bmN0aW9uIHNldEdhbWUoZ2FtZVN0YXRlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGdhbWVTdGF0ZSkge1xuICAgICAgY2FzZSBcInNldHVwXCI6XG4gICAgICAgIG9wdGlvbnMubG9hZFNldHVwT3B0aW9ucygpO1xuICAgICAgICBzZXR1cEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGxheVwiOlxuICAgICAgICBvcHRpb25zLmNsZWFyT3B0aW9ucygpO1xuICAgICAgICBwbGF5R2FtZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgb3B0aW9ucy5sb2FkRW5kT3B0aW9ucygpO1xuICAgICAgICBlbmRHYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgICBnYW1lU3RhdGVNZXNzYWdlLnRleHRDb250ZW50ID0gXCJTZXR1cCB5b3UgZmxlZXQhXFxuXCI7XG4gICAgb3Bwb25lbnQgPSBuZXcgUGxheWVyQUkoZmFsc2UsIHRydWUpO1xuICAgIHBsYXllciA9IG5ldyBQbGF5ZXIodHJ1ZSwgZmFsc2UpO1xuXG4gICAgb3Bwb25lbnQuYm9hcmQuc2V0UmFuZG9tRmxlZXQoKTtcblxuICAgIHBsYXllckJvYXJkID0gYm9hcmRDb21wb25lbnQocGxheWVyKTtcbiAgICBvcHBvbmVudEJvYXJkID0gYm9hcmRDb21wb25lbnQob3Bwb25lbnQpO1xuXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJCb2FyZC5jb250YWluZXIsIG9wcG9uZW50Qm9hcmQuY29udGFpbmVyKTtcblxuICAgIHBsYXllckJvYXJkLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VQbGF5ZXJTaGlwKTtcbiAgICBwbGF5ZXJCb2FyZC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVQbGFjZW1lbnRIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBoYW5kbGVQbGFjZW1lbnRIb3Zlcik7XG5cbiAgICBwbGF5ZXJCb2FyZC5yZWZyZXNoKCk7XG4gICAgb3Bwb25lbnRCb2FyZC5yZWZyZXNoKCk7XG5cbiAgICBmdW5jdGlvbiBwbGFjZVBsYXllclNoaXAoZSkge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuICAgICAgY29uc3QgY2VsbCA9IGdldENlbGxEYXRhKGUudGFyZ2V0KTtcbiAgICAgIGNvbnN0IHNoaXBJbmRleCA9IHBsYXllci5ib2FyZC5mbGVldC5sZW5ndGg7XG5cbiAgICAgIGlmIChjZWxsLnZhbHVlICE9IDApIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBwbGF5ZXIuYm9hcmQucHJlc2V0U2hpcHNbc2hpcEluZGV4XTtcblxuICAgICAgY29uc3QgaXNWYWxpZCA9IHBsYXllci5ib2FyZC5pc1ZhbGlkUGxhY2VtZW50KFxuICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgY2VsbC5jb29yZGluYXRlcyxcbiAgICAgICAgb3JpZW50YXRpb25cbiAgICAgICk7XG5cbiAgICAgIGlmICghaXNWYWxpZCkgcmV0dXJuO1xuXG4gICAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBjZWxsLmNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICBwbGF5ZXJCb2FyZC5yZWZyZXNoKCk7XG5cbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZmxlZXQubGVuZ3RoID49IHBsYXllci5ib2FyZC5wcmVzZXRTaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICBoYW5kbGVQbGFjZW1lbnRIb3ZlclxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJCb2FyZC5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlb3V0XCIsXG4gICAgICAgICAgaGFuZGxlUGxhY2VtZW50SG92ZXJcbiAgICAgICAgKTtcbiAgICAgICAgcGxheWVyQm9hcmQuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVBsYXllclNoaXApO1xuICAgICAgICBzZXRHYW1lKFwicGxheVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uQ2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNyb3RhdGlvbi1jYlwiXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAocm90YXRpb25DYi5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgIH0gZWxzZSByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYWNlbWVudEhvdmVyKGU6IGFueSkge1xuICAgICAgY29uc3QgaXNNb3VzZU92ZXIgPSBlLnR5cGUgPT09IFwibW91c2VvdmVyXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHJldHVybjtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0SG92ZXJlZENlbGxzKGUudGFyZ2V0KTtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPCAwKSByZXR1cm47XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpc01vdXNlT3ZlcikgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1ob3ZlclwiKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLWhvdmVyXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG92ZXJlZENlbGxzKGN1cnJlbnRDZWxsOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHBsYXllci5ib2FyZC5wcmVzZXRTaGlwc1twbGF5ZXIuYm9hcmQuZmxlZXQubGVuZ3RoXTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcbiAgICAgIGNvbnN0IGNlbGwgPSBnZXRDZWxsRGF0YShjdXJyZW50Q2VsbCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXBsYXllci5ib2FyZC5pc1ZhbGlkUGxhY2VtZW50KFxuICAgICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICAgIGNlbGwuY29vcmRpbmF0ZXMsXG4gICAgICAgICAgb3JpZW50YXRpb25cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmRcbiAgICAgICAgLmdldFBsYWNlZENlbGxzKGN1cnJlbnRTaGlwLCBjZWxsLmNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbilcbiAgICAgICAgLm1hcCgoY29vcmRpbmF0ZSkgPT5cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlPVwiJHtjb29yZGluYXRlfVwiXWApXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudCAhPT0gbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gICAgZ2FtZVN0YXRlTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIHRoZSBlbmVteSFcIjtcbiAgICBvcHBvbmVudEJvYXJkLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheWVyQXR0YWNrKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXllckF0dGFjayhlOiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgICBjb25zdCBjZWxsRGF0YSA9IGdldENlbGxEYXRhKGUudGFyZ2V0KTtcbiAgICAgIGlmIChjZWxsRGF0YS52YWx1ZSA8IDApIHJldHVybjtcblxuICAgICAgcGxheWVyLnRha2VUdXJuKG9wcG9uZW50LCBjZWxsRGF0YS5jb29yZGluYXRlcyk7XG4gICAgICBvcHBvbmVudEJvYXJkLnJlZnJlc2goKTtcblxuICAgICAgaWYgKHBsYXllci5sYXN0QXR0YWNrU3VjY2Vzcykge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudCA9IGdldENlbGxFbGVtZW50KFxuICAgICAgICAgIGNlbGxEYXRhLmNvb3JkaW5hdGVzLFxuICAgICAgICAgIG9wcG9uZW50Qm9hcmQuY29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGhhbmRsZVNoYWtlRWZmZWN0KGNlbGxFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9wcG9uZW50LnRha2VUdXJuKHBsYXllcik7XG4gICAgICAgIHBsYXllckJvYXJkLnJlZnJlc2goKTtcbiAgICAgICAgaWYgKG9wcG9uZW50Lmxhc3RBdHRhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBnZXRDZWxsRWxlbWVudChcbiAgICAgICAgICAgIG9wcG9uZW50Lmxhc3RBdHRhY2tlZENlbGwsXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5jb250YWluZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGhhbmRsZVNoYWtlRWZmZWN0KGNlbGxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yYW5kb20oKSAqICgxMjAwIC0gMzAwKSArIDMwMCk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVNoYWtlRWZmZWN0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpLCA1MDApO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVyLmJvYXJkLmRldGVjdEdhbWVPdmVyKCkgfHwgb3Bwb25lbnQuYm9hcmQuZGV0ZWN0R2FtZU92ZXIoKSkge1xuICAgICAgICBvcHBvbmVudEJvYXJkLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBoYW5kbGVQbGF5ZXJBdHRhY2tcbiAgICAgICAgKTtcbiAgICAgICAgc2V0R2FtZShcImVuZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmRHYW1lKCkge1xuICAgIGxldCBtZXNzYWdlOiBzdHJpbmc7XG4gICAgbWVzc2FnZSA9IG9wcG9uZW50LmJvYXJkLmRldGVjdEdhbWVPdmVyKCkgPyBcIllvdSB3aW4hXCIgOiBcIllvdSBsb3NlIDooXCI7XG4gICAgZ2FtZVN0YXRlTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiR2FtZSBvdmVyIVxcblwiICsgbWVzc2FnZTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnRuXCIpO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBib2FyZHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNldEdhbWUoXCJzZXR1cFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENlbGxFbGVtZW50KGNvb3JkaW5hdGVzOiBudW1iZXJbXSwgYm9hcmRDb250YWluZXI6IGFueSkge1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlPVwiJHtjb29yZGluYXRlc31cIl1gKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRDZWxsRGF0YShlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzU3RyaW5nID0gZWxlbWVudFxuICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZVwiKVxuICAgICAgLnNwbGl0KFwiLFwiKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcbiAgICAgIHBhcnNlSW50KGNvb3JkaW5hdGVzU3RyaW5nWzBdKSxcbiAgICAgIHBhcnNlSW50KGNvb3JkaW5hdGVzU3RyaW5nWzFdKSxcbiAgICBdO1xuICAgIHJldHVybiB7IGVsZW1lbnQsIHZhbHVlLCBjb29yZGluYXRlcyB9O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEdhbWVNZXNzYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1tZXNzYWdlLWNvbnRhaW5lclwiKTtcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcblxuICBjb25zdCBnYW1lU3RhdGVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGdhbWVTdGF0ZU1lc3NhZ2UuaWQgPSBcImdhbWUtbWVzc2FnZVwiO1xuICBjb250YWluZXIuYXBwZW5kKGdhbWVTdGF0ZU1lc3NhZ2UpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRHYW1lT3B0aW9ucygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lc3NhZ2UtY29udGFpbmVyXCIpO1xuICBjb25zdCBnYW1lT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW9wdGlvbnNcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQoZ2FtZU9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIGxvYWRFbmRPcHRpb25zKCkge1xuICAgIGNsZWFyT3B0aW9ucygpO1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzZXQtYnRuXCIpO1xuICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIGdhbWVPcHRpb25zLmFwcGVuZChyZXNldEJ1dHRvbik7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkU2V0dXBPcHRpb25zKCkge1xuICAgIGNsZWFyT3B0aW9ucygpO1xuICAgIGNvbnN0IHJvdGF0aW9uQ2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcm90YXRpb25DYi50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHJvdGF0aW9uQ2IuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByb3RhdGlvbkNiLmlkID0gXCJyb3RhdGlvbi1jYlwiO1xuICAgIHJvdGF0aW9uQ2IubmFtZSA9IFwicm90YXRpb24tY2JcIjtcblxuICAgIGNvbnN0IHJvdGF0aW9uTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHJvdGF0aW9uTGJsLmh0bWxGb3IgPSBcInJvdGF0aW9uLWNiXCI7XG4gICAgcm90YXRpb25MYmwudGV4dENvbnRlbnQgPSBcIlJvdGF0aW9uOiBWZXJ0aWNhbFwiO1xuICAgIGdhbWVPcHRpb25zLmFwcGVuZChyb3RhdGlvbkNiLCByb3RhdGlvbkxibCk7XG5cbiAgICByb3RhdGlvbkNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICByb3RhdGlvbkxibC50ZXh0Q29udGVudCA9IFwiUm90YXRpb246IEhvcml6b250YWxcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdGF0aW9uTGJsLnRleHRDb250ZW50ID0gXCJSb3RhdGlvbjogVmVydGljYWxcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyT3B0aW9ucygpIHtcbiAgICBnYW1lT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIHsgbG9hZEVuZE9wdGlvbnMsIGxvYWRTZXR1cE9wdGlvbnMsIGNsZWFyT3B0aW9ucyB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL0NvbXBvbmVudHMvZ2FtZVwiO1xuaW1wb3J0IHsgbG9hZEdhbWVNZXNzYWdlIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBsb2FkR2FtZU9wdGlvbnMgfSBmcm9tIFwiLi9Db21wb25lbnRzL29wdGlvbnNcIjtcblxubG9hZEdhbWVNZXNzYWdlKCk7XG5nYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=