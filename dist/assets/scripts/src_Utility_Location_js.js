"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_place"] = self["webpackChunkmy_place"] || []).push([["src_Utility_Location_js"],{

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCoordsFromAddress: () => (/* binding */ getCoordsFromAddress)\n/* harmony export */ });\nconst GOOGLE_API_KEY = 'AIzaSyDVWeXw2KBRezUScPalu5fAwZnJJHKBGLA';\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates - Please try again');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBsYWNlLy4vc3JjL1V0aWxpdHkvTG9jYXRpb24uanM/NDJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHT09HTEVfQVBJX0tFWSA9ICdBSXphU3lEVldlWHcyS0JSZXpVU2NQYWx1NWZBd1puSkpIS0JHTEEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpIHtcclxuICBjb25zdCB1cmxBZGRyZXNzID0gZW5jb2RlVVJJKGFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7dXJsQWRkcmVzc30ma2V5PSR7R09PR0xFX0FQSV9LRVl9YFxyXG4gICk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29vcmRpbmF0ZXMgLSBQbGVhc2UgdHJ5IGFnYWluJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKGRhdGEuZXJyb3JfbWVzc2FnZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3JfbWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb29yZGluYXRlcyA9IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

/***/ })

}]);