"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Zonas/ZonaMapa/[zonaMapa]",{

/***/ "./component/dana/BotonZonaSec/index.js":
/*!**********************************************!*\
  !*** ./component/dana/BotonZonaSec/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ZonaDisp_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/ZonaDisp.module.css */ \"./styles/ZonaDisp.module.css\");\n/* harmony import */ var _styles_ZonaDisp_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ZonaDisp_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction BotonZonaSec(props) {\n    var stylePosicion = {\n        left: props.Data.left,\n        top: props.Data.top\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ZonaDisp_module_css__WEBPACK_IMPORTED_MODULE_2___default().Cubo),\n        style: stylePosicion,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/Zonas/ZonaMapa/\" + props.Data.tipo,\n                className: (_styles_ZonaDisp_module_css__WEBPACK_IMPORTED_MODULE_2___default().LinkZonaSec),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/uploads/disp/\" + props.Data.tipo\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paco_\\\\dev\\\\Accesa\\\\Dana4.0\\\\Dana4.0\\\\component\\\\dana\\\\BotonZonaSec\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paco_\\\\dev\\\\Accesa\\\\Dana4.0\\\\Dana4.0\\\\component\\\\dana\\\\BotonZonaSec\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\paco_\\\\dev\\\\Accesa\\\\Dana4.0\\\\Dana4.0\\\\component\\\\dana\\\\BotonZonaSec\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paco_\\\\dev\\\\Accesa\\\\Dana4.0\\\\Dana4.0\\\\component\\\\dana\\\\BotonZonaSec\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 13\n    }, this);\n}\n_c = BotonZonaSec;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    BotonZonaSec: BotonZonaSec\n});\nvar _c;\n$RefreshReg$(_c, \"BotonZonaSec\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZGFuYS9Cb3RvblpvbmFTZWMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRCO0FBQzRCO0FBRXhELFNBQVNFLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO0lBQ3pCLElBQU1DLGFBQWEsR0FBRztRQUNsQkMsSUFBSSxFQUFFRixLQUFLLENBQUNHLElBQUksQ0FBQ0QsSUFBSTtRQUNyQkUsR0FBRyxFQUFFSixLQUFLLENBQUNHLElBQUksQ0FBQ0MsR0FBRztLQUN0QjtJQUNELHFCQUVRLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIseUVBQVc7UUFBRVUsS0FBSyxFQUFFUCxhQUFhO2tCQUM3Qyw0RUFBQ1EsUUFBTTtZQUFDQyxJQUFJLEVBQUMsRUFBRTtzQkFDWCw0RUFBQ2Isa0RBQUk7Z0JBQUNjLElBQUksRUFBRSxrQkFBa0IsR0FBR1gsS0FBSyxDQUFDRyxJQUFJLENBQUNTLElBQUk7Z0JBQUVOLFNBQVMsRUFBRVIsZ0ZBQWtCOzBCQUMzRSw0RUFBQ2dCLEtBQUc7b0JBQUNDLEdBQUcsRUFBRSxnQkFBZ0IsR0FBR2YsS0FBSyxDQUFDRyxJQUFJLENBQUNTLElBQUk7Ozs7O3dCQUFLOzs7OztvQkFDOUM7Ozs7O2dCQUNGOzs7OztZQUNQLENBRWI7QUFDTCxDQUFDO0FBaEJRYixLQUFBQSxZQUFZO0FBa0JyQiwrREFBZTtJQUFDQSxZQUFZLEVBQVpBLFlBQVk7Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZGFuYS9Cb3RvblpvbmFTZWMvaW5kZXguanM/M2RjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvWm9uYURpc3AubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEJvdG9uWm9uYVNlYyhwcm9wcykge1xyXG4gICAgY29uc3Qgc3R5bGVQb3NpY2lvbiA9IHtcclxuICAgICAgICBsZWZ0OiBwcm9wcy5EYXRhLmxlZnQsXHJcbiAgICAgICAgdG9wOiBwcm9wcy5EYXRhLnRvcCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3Vib30gc3R5bGU9e3N0eWxlUG9zaWNpb259ID5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ab25hcy9ab25hTWFwYS9cIiArIHByb3BzLkRhdGEudGlwb30gY2xhc3NOYW1lPXtzdHlsZXMuTGlua1pvbmFTZWN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy91cGxvYWRzL2Rpc3AvJyArIHByb3BzLkRhdGEudGlwbyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7Qm90b25ab25hU2VjfSJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwiQm90b25ab25hU2VjIiwicHJvcHMiLCJzdHlsZVBvc2ljaW9uIiwibGVmdCIsIkRhdGEiLCJ0b3AiLCJkaXYiLCJjbGFzc05hbWUiLCJDdWJvIiwic3R5bGUiLCJidXR0b24iLCJ0eXBlIiwiaHJlZiIsInRpcG8iLCJMaW5rWm9uYVNlYyIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/dana/BotonZonaSec/index.js\n"));

/***/ })

});