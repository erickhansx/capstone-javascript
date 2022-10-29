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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_global_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/global/global.scss */ \"./src/components/global/global.scss\");\n/* harmony import */ var _components_stage_comments_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stage-comments/style.css */ \"./src/components/stage-comments/style.css\");\n/* harmony import */ var _components_home_displayCharacters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/displayCharacters.js */ \"./src/components/home/displayCharacters.js\");\n/* harmony import */ var _components_home_home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.scss */ \"./src/components/home/home.scss\");\n\n\n\n\nvar appId = 'wHDqf2FyYMmzmK7MMxf9';\nvar idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/likes/\");\n(0,_components_home_displayCharacters_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfetch(idPath).then(function (data) {\n  return data.json();\n}).then(function (data) {\n  return console.log(data);\n});\n\n// const appId = 'TpmMqPZSaYcfyNoZ0kVp';\n// const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;\n// fetch(idPath)\n//   .then((data) => data.json())\n//   .then((data) => console.log(data));\n\n// const options = {\n//   method: 'POST',\n//   headers: {\n//     'Content-Type': 'application/json',\n//   },\n// };\n\n// const newGame = async () => {\n//   await\n// };\n\n// console.log(\n//   fetch(\n//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',\n//     options\n//   ).then((res) => res.text())\n// );\n\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1b7ee61cf52f73473a43")
/******/ })();
/******/ 
/******/ }
);