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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Notes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @transport-task/info-components */ \"(app-pages-browser)/../../libs/info-components/src/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Notes(request) {\n    // Data\n    const name = request.searchParams.name;\n    const submit = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                className: \"w-[500px]\",\n                onSubmit: submit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"Enter Notes ...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 56\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 56\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/notes/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_c = Notes;\nvar _c;\n$RefreshReg$(_c, \"Notes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYnVzX29wZXJhdG9yL25vdGVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHc0U7QUFHdkQsU0FBU0csTUFBTUMsT0FBNkM7SUFDdkUsT0FBTztJQUNQLE1BQU1DLE9BQU9ELFFBQVFFLFlBQVksQ0FBQ0QsSUFBSTtJQUV0QyxNQUFNRSxTQUFTLENBQUNDO1FBQ1pBLE1BQU1DLGNBQWM7SUFFeEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ1gsaUVBQUlBO2dCQUFDVyxXQUFVO2dCQUFZQyxVQUFVTDs7a0NBQ2xDLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FBb0IsNEVBQUNWLGtFQUFLQTs0QkFBQ1ksYUFBWTs7Ozs7Ozs7Ozs7a0NBQ3RELDhEQUFDSDt3QkFBSUMsV0FBVTtrQ0FBb0IsNEVBQUNULG1FQUFNQTs0QkFBQ1ksTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdFO0tBbkJ3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9idXNfb3BlcmF0b3Ivbm90ZXMvcGFnZS50c3g/MzNjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ0B0cmFuc3BvcnQtdGFzay9pbmZvLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVzKHJlcXVlc3Q6IHsgc2VhcmNoUGFyYW1zOiB7IG5hbWU6IHN0cmluZzsgfTsgfSkge1xuICAgIC8vIERhdGFcbiAgICBjb25zdCBuYW1lID0gcmVxdWVzdC5zZWFyY2hQYXJhbXMubmFtZTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInctWzUwMHB4XVwiIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+PElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgTm90ZXMgLi4uXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPjxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk5vdGVzIiwicmVxdWVzdCIsIm5hbWUiLCJzZWFyY2hQYXJhbXMiLCJzdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/bus_operator/notes/page.tsx\n"));

/***/ })

});