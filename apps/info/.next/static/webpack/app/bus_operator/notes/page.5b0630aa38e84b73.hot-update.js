"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/bus_operator/notes/page",{

/***/ "(app-pages-browser)/./src/app/bus_operator/notes/page.tsx":
/*!*********************************************!*\
  !*** ./src/app/bus_operator/notes/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Notes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @transport-task/info-components */ \"(app-pages-browser)/../../libs/info-components/src/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Notes(request) {\n    // Data\n    const name = request.searchParams.name;\n    const submit = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Form, {\n            className: \"w-[500px]\",\n            onSubmit: submit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        placeholder: \"Enter Notes ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 52\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 52\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_c = Notes;\nvar _c;\n$RefreshReg$(_c, \"Notes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYnVzX29wZXJhdG9yL25vdGVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHc0U7QUFHdkQsU0FBU0csTUFBTUMsT0FBNkM7SUFDdkUsT0FBTztJQUNQLE1BQU1DLE9BQU9ELFFBQVFFLFlBQVksQ0FBQ0QsSUFBSTtJQUV0QyxNQUFNRSxTQUFTLENBQUNDO1FBQ1pBLE1BQU1DLGNBQWM7SUFFeEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ1gsaUVBQUlBO1lBQUNXLFdBQVU7WUFBWUMsVUFBVUw7OzhCQUNsQyw4REFBQ0c7b0JBQUlDLFdBQVU7OEJBQW9CLDRFQUFDVixrRUFBS0E7d0JBQUNZLGFBQVk7Ozs7Ozs7Ozs7OzhCQUN0RCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQW9CLDRFQUFDVCxtRUFBTUE7d0JBQUNZLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7S0FqQndCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2J1c19vcGVyYXRvci9ub3Rlcy9wYWdlLnRzeD8zM2M1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnQHRyYW5zcG9ydC10YXNrL2luZm8tY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZXMocmVxdWVzdDogeyBzZWFyY2hQYXJhbXM6IHsgbmFtZTogc3RyaW5nOyB9OyB9KSB7XG4gICAgLy8gRGF0YVxuICAgIGNvbnN0IG5hbWUgPSByZXF1ZXN0LnNlYXJjaFBhcmFtcy5uYW1lO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ3LVs1MDBweF1cIiBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+PElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgTm90ZXMgLi4uXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+PEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiTm90ZXMiLCJyZXF1ZXN0IiwibmFtZSIsInNlYXJjaFBhcmFtcyIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/bus_operator/notes/page.tsx\n"));

/***/ })

});