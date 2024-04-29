/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Product/Product.ts":
/*!*******************************************!*\
  !*** ./src/components/Product/Product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardProducts\": () => (/* binding */ CardProducts),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './Product.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar CardProducts;\n(function (CardProducts) {\n    CardProducts[\"image\"] = \"image\";\n    CardProducts[\"title\"] = \"Title\";\n    CardProducts[\"description\"] = \"description\";\n    CardProducts[\"category\"] = \"category\";\n    CardProducts[\"price\"] = \"price\";\n    CardProducts[\"ratingcount\"] = \"ratingcount\";\n    CardProducts[\"ratingrate\"] = \"ratingrate\";\n})(CardProducts || (CardProducts = {}));\nclass products extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            Title: null,\n            description: null,\n            category: null,\n            price: null,\n            ratingcount: null,\n            ratingrate: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case CardProducts.price:\n                this.price = newValue ? Number(newValue) : undefined;\n                break;\n            case CardProducts.ratingcount:\n                this.ratingcount = newValue ? Number(newValue) : undefined;\n                break;\n            case CardProducts.ratingrate:\n                this.ratingrate = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n\n\t\t\t<section class=\"cardSection\">\n\n\t\t\t<div class=\"card\">\n\n\t\t\t\t <img class=\"image\" src=\"${this.image}\" alt=\"\">\n\t\t\t\t <h1 class=\"title\">Title: ${this.title}</h1>\n\t\t\t\t <p class=\"text\">Description: ${this.description}</p>\n\t\t\t\t <p>Rating: rate: ${this.ratingcount} count: ${this.ratingrate}</p>\n\t\t\t\t <h3>Price: ${this.price}</h3>\n\t\t\t\t <button class=\"botonleg\" type=\"button\">ADD PRODUCT</button>\n\t\t </div>\n </section>\n               `;\n        }\n        const cssProduct = this.ownerDocument.createElement('style');\n        cssProduct.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Product.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssProduct);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\ncustomElements.define('my-product', products);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Product/Product.ts?");

/***/ }),

/***/ "./src/components/ShoppingCartItem/ShoppingCartItem.ts":
/*!*************************************************************!*\
  !*** ./src/components/ShoppingCartItem/ShoppingCartItem.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeItem\": () => (/* binding */ AttributeItem),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './ShoppingCartItem.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar AttributeItem;\n(function (AttributeItem) {\n    AttributeItem[\"image\"] = \"image\";\n    AttributeItem[\"title\"] = \"Title\";\n    AttributeItem[\"price\"] = \"price\";\n})(AttributeItem || (AttributeItem = {}));\nclass shoppingItem extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            Title: null,\n            price: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case AttributeItem.price:\n                this.price = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n\n                  <div class='card-shopping'>\n\t\t\t\t\t\t\t\t\t<img class=\"image\" src=\"${this.image}\" alt=\"\">\n\t\t\t\t          <h1 class=\"title\">Title: ${this.title}</h1>\n\t\t\t\t          <h3>Price: ${this.price}</h3>\n                  </div>\n             </section>\n             `;\n            const cssItems = this.ownerDocument.createElement('style');\n            cssItems.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './ShoppingCartItem.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssItems);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shoppingItem);\ncustomElements.define('shopping-item', shoppingItem);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/ShoppingCartItem/ShoppingCartItem.ts?");

/***/ }),

/***/ "./src/components/indexPadre.ts":
/*!**************************************!*\
  !*** ./src/components/indexPadre.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Products\": () => (/* reexport safe */ _Product_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"shoppingitem\": () => (/* reexport safe */ _ShoppingCartItem_ShoppingCartItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product/Product */ \"./src/components/Product/Product.ts\");\n/* harmony import */ var _ShoppingCartItem_ShoppingCartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCartItem/ShoppingCartItem */ \"./src/components/ShoppingCartItem/ShoppingCartItem.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexPadre.ts?");

/***/ }),

/***/ "./src/indexAbuelo.ts":
/*!****************************!*\
  !*** ./src/indexAbuelo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_indexPadre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/indexPadre */ \"./src/components/indexPadre.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './IndexAbuelo.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        const something = this.ownerDocument.createElement('card-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n        const cssAbuelo = this.ownerDocument.createElement('styles');\n        cssAbuelo.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './IndexAbuelo.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(cssAbuelo);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/indexAbuelo.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Product/Product */ \"./src/components/Product/Product.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.GetProductsData)();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            const Storage = JSON.stringify(_store_index__WEBPACK_IMPORTED_MODULE_1__.appState);\n            localStorage.setItem('Appstate', Storage);\n            const actionget = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.GetshoppingData)();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(actionget);\n            const Storageget = JSON.stringify(_store_index__WEBPACK_IMPORTED_MODULE_1__.appState);\n            localStorage.setItem('Appstate', Storageget);\n        });\n    }\n    render() {\n        const localstorage = window.localStorage;\n        const local = JSON.parse(localstorage.getItem('Appstate'));\n        local.products.forEach((products) => {\n            var _a;\n            const card = this.ownerDocument.createElement('my-product');\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.image, products.image);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.title, products.title);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.description, products.description);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.category, products.category);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.price, JSON.stringify(products.price));\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.ratingcount, JSON.stringify(products.rating.rate));\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.CardProducts.ratingrate, JSON.stringify(products.rating.count));\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('card-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getProducts.ts":
/*!*************************************!*\
  !*** ./src/services/getProducts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShoppingCart\": () => (/* binding */ getShoppingCart)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getShoppingCart = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const getdataShopping = yield fetch('https://fakestoreapi.com/products').then((res) => res.json());\n        console.log(getdataShopping);\n        return getdataShopping;\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getProducts.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetProductsData\": () => (/* binding */ GetProductsData),\n/* harmony export */   \"GetshoppingData\": () => (/* binding */ GetshoppingData),\n/* harmony export */   \"SaveshoppingData\": () => (/* binding */ SaveshoppingData)\n/* harmony export */ });\n/* harmony import */ var _services_getProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getProducts */ \"./src/services/getProducts.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst GetProductsData = () => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_0__.getShoppingCart)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.productActions.getPRODUCTS,\n        payload: data,\n    };\n});\nconst GetshoppingData = () => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_0__.getShoppingCart)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.shoppingActions.getSHOPPING,\n        payload: data,\n    };\n});\nconst SaveshoppingData = (product) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.shoppingActions.saveSHOPPING,\n        payload: product,\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\nlet appState = {\n    products: [],\n    shopping: [],\n};\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    appState = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, clone);\n    observers.forEach((o) => o.render());\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    console.log(action, payload);\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.productActions.getPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.shoppingActions.getSHOPPING:\n            return Object.assign(Object.assign({}, currentState), { shopping: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productActions\": () => (/* binding */ productActions),\n/* harmony export */   \"shoppingActions\": () => (/* binding */ shoppingActions)\n/* harmony export */ });\nvar productActions;\n(function (productActions) {\n    productActions[\"getPRODUCTS\"] = \"getPRODUCTS\";\n})(productActions || (productActions = {}));\nvar shoppingActions;\n(function (shoppingActions) {\n    shoppingActions[\"getSHOPPING\"] = \"getSHOPPING\";\n    shoppingActions[\"saveSHOPPING\"] = \"saveSHOPPING\";\n})(shoppingActions || (shoppingActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/indexAbuelo.ts");
/******/ 	
/******/ })()
;