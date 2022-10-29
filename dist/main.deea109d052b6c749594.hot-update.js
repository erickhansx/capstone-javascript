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

/***/ "./src/components/home/passLike.js":
/*!*****************************************!*\
  !*** ./src/components/home/passLike.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar appId = 'TpmMqPZSaYcfyNoZ0kVp';\nvar idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/likes/\");\nvar passLike = function passLike() {\n  var likeDiv = document.querySelectorAll('.likeDiv');\n  likeDiv.forEach(function (div) {\n    div.addEventListener('click', function () {\n      console.log(div);\n      div.innerHTML = \"<a class=\\\"likesBtn\\\"><i class=\\\"fa-solid fa-flask\\\"></i><span>\".concat(Number(div.innerText) + 1, \"</span></a>\");\n      div.classList.add('liked');\n      var update = {\n        item_id: div.parentElement.id\n      };\n      console.log(update);\n      var options = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(update)\n      };\n      fetch(idPath, options);\n    });\n  });\n};\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// const likeDiv = document.querySelectorAll('.likeDiv');\n// const characterDiv = document.querySelectorAll('.characterDiv');\n// characterDiv.forEach((char) => {\n//   likeDiv.forEach((div) => {\n//     div.addEventListener('click', () => {\n//       const update = {\n//         item_id: char.id,\n//       };\n//       console.log(update);\n//       const options = {\n//         method: 'POST',\n//         headers: {\n//           'Content-Type': 'application/json',\n//         },\n//         body: JSON.stringify(update),\n//       };\n//       // console.log(fetch(idPath, options));\n//       div.innerHTML = `<a class=\"likesBtn\"><i class=\"fa-solid fa-flask\"></i><span>${\n//         Number(div.innerText) + 1\n//       }</span></a>`;\n//       div.classList.add('liked');\n//       console.log(Number(div.innerText) === 1);\n//     });\n//   });\n//   return;\n// btn.addEventListener('click', () => {\n//   console.log('worked');\n// if (char.lastChild.classList.contains('liked')) {\n//   return;\n// }\n// });\n// fetch(idPath, options);\n// char.lastChild.innerHTML = `<a class=\"likesBtn\"><i class=\"fa-solid fa-flask\"></i><span>${\n//   Number(char.lastChild.innerText) + 1\n// }</span></a>`;\n// char.lastChild.classList.add('liked');\n// console.log(Number(char.lastChild.innerText) === 1);\n\n//     const options = {\n\n//       method: 'POST',\n//       headers: {\n//         'Content-Type': 'application/json',\n//       },\n//       body: JSON.stringify(update),\n//     };\n//     fetch(idPath, options);\n//   });\n// } catch {\n//   console.log('error');\n// }\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passLike);\n\n//# sourceURL=webpack://webpack2.0/./src/components/home/passLike.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("860a17f625263a3c38d1")
/******/ })();
/******/ 
/******/ }
);