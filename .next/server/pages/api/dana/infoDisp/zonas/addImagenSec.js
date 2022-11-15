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
exports.id = "pages/api/dana/infoDisp/zonas/addImagenSec";
exports.ids = ["pages/api/dana/infoDisp/zonas/addImagenSec"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "mv":
/*!*********************!*\
  !*** external "mv" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/dana/infoDisp/zonas/addImagenSec.js":
/*!*******************************************************!*\
  !*** ./pages/api/dana/infoDisp/zonas/addImagenSec.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mv = __webpack_require__(/*! mv */ \"mv\");\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            // console.log(fields, files)\n            // console.log(files.file.filepath)\n            var oldPath = files.file.filepath;\n            var newPath = `./public/uploads/zonasSec/${files.file.originalFilename}`;\n            console.log(newPath);\n            mv(oldPath, newPath, function(err) {});\n            res.status(200).json({\n                fields,\n                files\n            });\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGFuYS9pbmZvRGlzcC96b25hcy9hZGRJbWFnZW5TZWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3lDO0FBQ047QUFFbkMsSUFBSUcsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUdmLE1BQU1DLE1BQU0sR0FBRztJQUNsQkMsR0FBRyxFQUFFO1FBQ0ZDLFVBQVUsRUFBRSxLQUFLO0tBQ25CO0NBQ0osQ0FBQztBQUVGLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBRS9CLE1BQU1DLElBQUksR0FBRyxNQUFNLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBSztRQUNqRCxNQUFNQyxJQUFJLEdBQUcsSUFBSWQsb0RBQVksRUFBRTtRQUU5QmMsSUFBSSxDQUFDQyxLQUFLLENBQUNQLEdBQUcsRUFBRSxDQUFDUSxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxHQUFLO1lBQ3BDLElBQUlGLEdBQUcsRUFBRSxPQUFPSCxNQUFNLENBQUNHLEdBQUcsQ0FBQztZQUMzQiw2QkFBNkI7WUFDN0IsbUNBQW1DO1lBQ25DLElBQUlHLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLFFBQVE7WUFDakMsSUFBSUMsT0FBTyxHQUFHLENBQUMsMEJBQTBCLEVBQUVKLEtBQUssQ0FBQ0UsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDLENBQUM7WUFDckJuQixFQUFFLENBQUNnQixPQUFPLEVBQUVHLE9BQU8sRUFBRSxTQUFTTixHQUFHLEVBQUUsQ0FDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSFAsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVWLE1BQU07Z0JBQUVDLEtBQUs7YUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztBQUVOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5hbGl0ZXYwLy4vcGFnZXMvYXBpL2RhbmEvaW5mb0Rpc3Avem9uYXMvYWRkSW1hZ2VuU2VjLmpzPzUzNTIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUnXHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnXHJcblxyXG52YXIgbXYgPSByZXF1aXJlKCdtdicpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gICAgfVxyXG59O1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKVxyXG4gICAgICAgXHJcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkcywgZmlsZXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLmZpbGUuZmlsZXBhdGgpXHJcbiAgICAgICAgICAgIHZhciBvbGRQYXRoID0gZmlsZXMuZmlsZS5maWxlcGF0aDtcclxuICAgICAgICAgICAgdmFyIG5ld1BhdGggPSBgLi9wdWJsaWMvdXBsb2Fkcy96b25hc1NlYy8ke2ZpbGVzLmZpbGUub3JpZ2luYWxGaWxlbmFtZX1gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdQYXRoKTtcclxuICAgICAgICAgICAgbXYob2xkUGF0aCwgbmV3UGF0aCwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGZpZWxkcywgZmlsZXMgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIkluY29taW5nRm9ybSIsInByb21pc2VzIiwiZnMiLCJtdiIsInJlcXVpcmUiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicmVxIiwicmVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJvbGRQYXRoIiwiZmlsZSIsImZpbGVwYXRoIiwibmV3UGF0aCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/dana/infoDisp/zonas/addImagenSec.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dana/infoDisp/zonas/addImagenSec.js"));
module.exports = __webpack_exports__;

})();