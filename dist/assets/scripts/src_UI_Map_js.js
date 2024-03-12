"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_place"] = self["webpackChunkmy_place"] || []).push([["src_UI_Map_js"],{

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Map: () => (/* binding */ Map)\n/* harmony export */ });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvVUkvTWFwLmpzP2I1NzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgY29uc3RydWN0b3IoY29vcmRzKSB7XHJcbiAgICAvLyB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRzO1xyXG4gICAgdGhpcy5yZW5kZXIoY29vcmRzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjb29yZGluYXRlcykge1xyXG4gICAgaWYgKCFnb29nbGUpIHtcclxuICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBsb2FkIG1hcHMgbGlicmFyeSAtIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG4gICAgICB6b29tOiAxNixcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ })

}]);