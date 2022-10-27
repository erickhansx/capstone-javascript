"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack2_0"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_global_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/global/global.scss */ \"./src/components/global/global.scss\");\n/* harmony import */ var _components_home_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.scss */ \"./src/components/home/home.scss\");\n/* harmony import */ var _components_home_addCharApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/addCharApi.js */ \"./src/components/home/addCharApi.js\");\n/* harmony import */ var _components_home_displayCharacters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/displayCharacters */ \"./src/components/home/displayCharacters.js\");\n\n\n// import {\n//   // displayCharacters,\n//   retrieveLikes,\n//   appId,\n//   idPath,\n//   passLike,\n// } from './components/home/home.js';\n\n\n// import retrieveCharacters from './components/home/retrieveCharacters';\n\nvar appId = 'wHDqf2FyYMmzmK7MMxf9';\nvar idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/likes/\");\n(0,_components_home_displayCharacters__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_components_home_addCharApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfetch(idPath).then(function (data) {\n  return data.json();\n}).then(function (data) {\n  return console.log(data);\n});\nvar btnComments = document.querySelector('.commentsBtn');\nbtnComments.addEventListener('click', function () {\n  console.log('hola');\n});\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56de5fcef48dcac6360b")
/******/ })();
/******/ 
/******/ }
);