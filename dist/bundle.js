/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './src/components/Product/Product.ts':
			/*!*******************************************!*\
  !*** ./src/components/Product/Product.ts ***!
  \*******************************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardProducts: () => (/* binding */ CardProducts),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'./Product.css\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n\nvar CardProducts;\n(function (CardProducts) {\n    CardProducts["uid"] = "uid";\n    CardProducts["totle"] = "totle";\n    CardProducts["price"] = "price";\n    CardProducts["category"] = "category";\n    CardProducts["description"] = "description";\n    CardProducts["image"] = "image";\n    CardProducts["rating"] = "rating";\n})(CardProducts || (CardProducts = {}));\nclass products extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \'open\' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            uid: null,\n            totle: null,\n            price: null,\n            category: null,\n            description: null,\n            image: null,\n            rating: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue = \'\') {\n        switch (propName) {\n            case CardProducts.uid:\n                this.uid = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n\n                    <div class=\'info-container \'>\n                        <p><b> Id: </b>${this.uid}</p>\n                        <p><b> Title: </b>${this.totle}</p>\n                        <p><b> Price: </b>${this.price}</p>\n                        <p><b> Category: </b>${this.category}</p>\n                        <p><b> Description: </b>${this.description}</p>\n                        <p><b> Image: </b>${this.image}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3> Raiting: ${this.rating}</h3>\n                    </div>\n               </section>\n               `;\n        }\n        const cssProduct = this.ownerDocument.createElement(\'style\');\n        cssProduct.innerHTML = Object(function webpackMissingModule() { var e = new Error("Cannot find module \'./Product.css\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssProduct);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\ncustomElements.define(\'product\', products);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Product/Product.ts?'
				);

				/***/
			},

		/***/ './src/components/ShoppingCartItem/ShoppingCartItem.ts':
			/*!*************************************************************!*\
  !*** ./src/components/ShoppingCartItem/ShoppingCartItem.ts ***!
  \*************************************************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AttributeItem: () => (/* binding */ AttributeItem),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'./ShoppingCartItem.css\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n\nvar AttributeItem;\n(function (AttributeItem) {\n    AttributeItem["totle"] = "totle";\n    AttributeItem["image"] = "image";\n    AttributeItem["price"] = "price";\n})(AttributeItem || (AttributeItem = {}));\nclass shoppingItem extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \'open\' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            totle: null,\n            image: null,\n            price: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n\n                  <div class=\'info-container \'>\n                      <p><b> Title: </b>${this.totle}</p>\n                      <p><b> Image: </b>${this.image}</p>\n                      <p><b> Price: </b>${this.price}</p>\n                  </div>\n             </section>\n             `;\n            const cssItems = this.ownerDocument.createElement(\'style\');\n            cssItems.innerHTML = Object(function webpackMissingModule() { var e = new Error("Cannot find module \'./ShoppingCartItem.css\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssItems);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shoppingItem);\ncustomElements.define(\'Shopping-Item \', shoppingItem);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/ShoppingCartItem/ShoppingCartItem.ts?'
				);

				/***/
			},

		/***/ './src/components/indexPadre.ts':
			/*!**************************************!*\
  !*** ./src/components/indexPadre.ts ***!
  \**************************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Products: () => (/* reexport safe */ _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]),\n/* harmony export */   shoppingitem: () => (/* reexport safe */ _ShoppingCartItem_ShoppingCartItem__WEBPACK_IMPORTED_MODULE_1__["default"])\n/* harmony export */ });\n/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product/Product */ "./src/components/Product/Product.ts");\n/* harmony import */ var _ShoppingCartItem_ShoppingCartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCartItem/ShoppingCartItem */ "./src/components/ShoppingCartItem/ShoppingCartItem.ts");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexPadre.ts?'
				);

				/***/
			},

		/***/ './src/indexAbuelo.ts':
			/*!****************************!*\
  !*** ./src/indexAbuelo.ts ***!
  \****************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_indexPadre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/indexPadre */ \"./src/components/indexPadre.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/indexAbuelo.ts?"
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module can't be inlined because the eval devtool is used.
	/******/ var __webpack_exports__ = __webpack_require__('./src/indexAbuelo.ts');
	/******/
	/******/
})();
