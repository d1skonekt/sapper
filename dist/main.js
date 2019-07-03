/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bomb.js":
/*!*********************!*\
  !*** ./src/Bomb.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bomb; });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\n\nclass Bomb extends _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, context, sandbox) {\n        super(x, y, context);\n        this.sandbox = sandbox;\n    }\n\n    click() {\n        this.sandbox.showAllBomb();\n        this.node.style.background = '#F00';\n        this.updateState();\n    }\n\n    updateState() {\n        this.state = 1;\n    }\n\n    render() {\n        if (this.state !== null) {\n            this.node.innerHTML = '*';\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Bomb.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cell; });\nclass Cell {\n    constructor(x, y, context, width = 25, height = 25) {\n        this.x = x;\n        this.y = y;\n        this.state = null;\n        this.node = document.createElement('div');\n        this.node.node = this;\n\n        context.appendChild(this.node);\n        this.node.style.border = '1px solid #333';\n        this.node.style.width = width + 'px';\n        this.node.style.height = height + 'px';\n        this.node.style.position = 'absolute';\n        this.node.style.boxSizing = 'border-box';\n        this.node.style.background = '#CCC';\n\n        this.node.style.left = x * width + 'px';\n        this.node.style.top = y * height + 'px';\n    }\n\n    updateState() {\n\n    }\n\n    click() {\n\n    }\n\n    render() {\n\n    }\n}\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/EmptyCell.js":
/*!**************************!*\
  !*** ./src/EmptyCell.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmptyCell; });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\n\nclass EmptyCell extends _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, context, sandbox) {\n        super(x, y, context);\n        this.sandbox = sandbox;\n    }\n\n    click() {\n        const count = this.sandbox.getCountBomb(this.x, this.y);\n        if (count > 0) {\n            this.node.innerHTML = count;\n            this.updateState();\n        } else {\n            this.node.innerHTML = '';\n            this.updateState();\n            this.sandbox.showNearEmptyCell(this.sandbox.index);\n           \n        }\n\n    }\n\n    updateState() {\n        this.state = 1;\n    }\n\n    render() {\n        if (this.state !== null) {\n            this.node.style.background = '#FFF'\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/EmptyCell.js?");

/***/ }),

/***/ "./src/GameField.js":
/*!**************************!*\
  !*** ./src/GameField.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameField; });\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bomb */ \"./src/Bomb.js\");\n/* harmony import */ var _EmptyCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyCell */ \"./src/EmptyCell.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\n\n\n\nclass GameField {\n\tconstructor(width = 10, height = 10, context = document.body) {\n\t\tthis.listCell = [];\n\t\tlet temp = -1;\n\t\tfor (let y = 0; y < height; y++) {\n\t\t\tfor (let x = 0; x < width; x++) {\n\t\t\t\ttemp += 1;\n\t\t\t\tconst Cell = Math.random() > .9 ? _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _EmptyCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\t\t\t\tconst sandbox = {\n\t\t\t\t\tgetCountBomb: this.getCountBomb.bind(this),\n\t\t\t\t\tshowAllBomb: this.showAllBomb.bind(this),\n\t\t\t\t\tshowNearEmptyCell: this.showNearEmptyCell.bind(this),\n\t\t\t\t\tindex: temp\n\t\t\t\t};\n\n\t\t\t\tthis.listCell.push(new Cell(x, y, context, sandbox))\n\t\t\t}\n\t\t}\n\n\t\tdocument.body.addEventListener('click', (event) => {\n\t\t\tconst cell = event.target.node;\n\n\t\t\tif (cell instanceof _Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n\t\t\t\tcell.click();\n\t\t\t\tthis.render();\n\t\t\t}\n\n\t\t})\n\n\t}\n\n\tgetCellByPosition(x, y) {\n\t\treturn this.listCell.filter(cell => cell.x === x && cell.y === y)[0];\n\t}\n\n\tshowNearEmptyCell(index) {\n\n\t\tif (index % 10 == 9) {\n\t\t\tthis.showMe(this.listCell[index - 1])\n\t\t\tthis.showMe(this.listCell[index - 10])\n\t\t\tthis.showMe(this.listCell[index + 10])\n\t\t\tthis.showMe(this.listCell[index - 11])\n\t\t\tthis.showMe(this.listCell[index + 9])\n\t\t} else if (index % 10 == 0) {\n\t\t\tthis.showMe(this.listCell[index + 1])\n\t\t\tthis.showMe(this.listCell[index - 10])\n\t\t\tthis.showMe(this.listCell[index + 10])\n\t\t\tthis.showMe(this.listCell[index + 11])\n\t\t\tthis.showMe(this.listCell[index - 9])\n\t\t} else {\n\t\t\tthis.showMe(this.listCell[index + 1])\n\t\t\tthis.showMe(this.listCell[index - 1])\n\t\t\tthis.showMe(this.listCell[index - 10])\n\t\t\tthis.showMe(this.listCell[index + 10])\n\t\t\tthis.showMe(this.listCell[index + 11])\n\t\t\tthis.showMe(this.listCell[index - 11])\n\t\t\tthis.showMe(this.listCell[index + 9])\n\t\t\tthis.showMe(this.listCell[index - 9])\n\t\t}\n\n\n\t}\n\n\tshowMe(cell) {\n\t\tif (cell && cell.state != 1) {\n\t\t\tcell.click();\n\t\t}\n\t}\n\n\n\tgetCountBomb(x, y) {\n\t\treturn [\n\t\t\t[x - 1, y - 1],\n\t\t\t[x, y - 1],\n\t\t\t[x + 1, y - 1],\n\n\t\t\t[x + 1, y],\n\t\t\t[x - 1, y],\n\n\t\t\t[x - 1, y + 1],\n\t\t\t[x, y + 1],\n\t\t\t[x + 1, y + 1]\n\n\t\t].reduce((acc, currentValue) => {\n\t\t\tif (this.getCellByPosition(...currentValue) instanceof _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n\t\t\t\treturn acc + 1\n\t\t\t}\n\t\t\treturn acc\n\t\t}, 0);\n\t}\n\n\tshowAllBomb() {\n\t\tthis.listCell\n\t\t\t.filter(cell => cell instanceof _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\t\t\t.forEach(cell => cell.updateState())\n\n\t}\n\n\trender() {\n\t\tthis.listCell.forEach((cell) => cell.render())\n\t}\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/GameField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameField */ \"./src/GameField.js\");\n\n\nconst gameField = new _GameField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngameField.render();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });