"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ profileHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction profileHandler(req, res) {\n    const { myTokenName  } = req.cookies;\n    if (!myTokenName) {\n        return res.status(401).json({\n            error: \"Not logged in\"\n        });\n    }\n    const { username , proyect  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(myTokenName, \"secret\");\n    return res.status(200).json({\n        username,\n        proyect\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFaEIsU0FBU0MsY0FBYyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUVDLFdBQVcsR0FBRSxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFDbkMsSUFBSSxDQUFDRCxXQUFXLEVBQUU7UUFDaEIsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsZUFBZTtTQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLE9BQU8sR0FBRSxHQUFHViwwREFBVSxDQUFDSSxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQy9ELE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUUsUUFBUTtRQUFFQyxPQUFPO0tBQUUsQ0FBQyxDQUFDO0FBQ3JELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5hbGl0ZXYwLy4vcGFnZXMvYXBpL3Byb2ZpbGUuanM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGVIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBteVRva2VuTmFtZSB9ID0gcmVxLmNvb2tpZXM7XHJcbiAgaWYgKCFteVRva2VuTmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwiTm90IGxvZ2dlZCBpblwiIH0pO1xyXG4gIH1cclxuICBjb25zdCB7IHVzZXJuYW1lICxwcm95ZWN0IH0gPSBqd3QudmVyaWZ5KG15VG9rZW5OYW1lLCBcInNlY3JldFwiKTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VybmFtZSwgcHJveWVjdCB9KTtcclxufSJdLCJuYW1lcyI6WyJqd3QiLCJwcm9maWxlSGFuZGxlciIsInJlcSIsInJlcyIsIm15VG9rZW5OYW1lIiwiY29va2llcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJuYW1lIiwicHJveWVjdCIsInZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile.js"));
module.exports = __webpack_exports__;

})();