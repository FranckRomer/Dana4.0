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
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/auth/logout.js":
/*!**********************************!*\
  !*** ./pages/api/auth/logout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logoutHandler)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction logoutHandler(req, res) {\n    const { myTokenName  } = req.cookies;\n    if (!myTokenName) {\n        return res.status(401).json({\n            error: \"Not logged in\"\n        });\n    }\n    const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"myTokenName\", null, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"strict\",\n        maxAge: 0,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", serialized);\n    return res.status(200).json({\n        message: \"Logout successful\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRXBCLFNBQVNDLGFBQWEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxXQUFXLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxPQUFPO0lBQ25DLElBQUksQ0FBQ0QsV0FBVyxFQUFFO1FBQ2hCLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE1BQU1DLFVBQVUsR0FBR1QsaURBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ2hEVSxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUVDLGFBVkMsS0FVd0IsWUFBWTtRQUM3Q0MsUUFBUSxFQUFFLFFBQVE7UUFDbEJDLE1BQU0sRUFBRSxDQUFDO1FBQ1RDLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUVGWixHQUFHLENBQUNhLFNBQVMsQ0FBQyxZQUFZLEVBQUVQLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLE9BQU9OLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJVLE9BQU8sRUFBRSxtQkFBbUI7S0FDN0IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbmFsaXRldjAvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQuanM/YzJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dvdXRIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBteVRva2VuTmFtZSB9ID0gcmVxLmNvb2tpZXM7XHJcbiAgaWYgKCFteVRva2VuTmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwiTm90IGxvZ2dlZCBpblwiIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShcIm15VG9rZW5OYW1lXCIsIG51bGwsIHtcclxuICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgIG1heEFnZTogMCxcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gIH0pO1xyXG5cclxuICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBzZXJpYWxpemVkKTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgbWVzc2FnZTogXCJMb2dvdXQgc3VjY2Vzc2Z1bFwiLFxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsImxvZ291dEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJteVRva2VuTmFtZSIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/logout.js"));
module.exports = __webpack_exports__;

})();