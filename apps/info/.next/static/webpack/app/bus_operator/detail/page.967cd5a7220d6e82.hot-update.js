"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/bus_operator/detail/page",{

/***/ "(app-pages-browser)/./src/app/bus_operator/detail/OperatorTable.tsx":
/*!*******************************************************!*\
  !*** ./src/app/bus_operator/detail/OperatorTable.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OperatorTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/../../node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js\");\n/* harmony import */ var _transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @transport-task/info-components */ \"(app-pages-browser)/../../libs/info-components/src/index.ts\");\n/* harmony import */ var _api_operator_operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/operator/operator */ \"(app-pages-browser)/./src/app/api/operator/operator.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// -- Query --\nfunction useQueryOperators() {\n    _s();\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useSuspenseQuery)({\n        queryKey: [\n            \"Operators\"\n        ],\n        queryFn: async ()=>{\n            const res = await (0,_api_operator_operator__WEBPACK_IMPORTED_MODULE_2__.getOperators)();\n            return res;\n        }\n    });\n    return [\n        query.data,\n        query\n    ];\n}\n_s(useQueryOperators, \"KIGsLeNGCXok2aQKtopB/X5OiKU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useSuspenseQuery\n    ];\n});\nfunction OperatorTable(param) {\n    let { name } = param;\n    var _operator_routes;\n    _s1();\n    const [data] = useQueryOperators();\n    const operator = Array.isArray(data === null || data === void 0 ? void 0 : data.data) ? data === null || data === void 0 ? void 0 : data.data.find((o)=>o.name === name) : undefined;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"pt-4 text-xl md:text-2xl font-bold\",\n                    children: \"\".concat(operator === null || operator === void 0 ? void 0 : operator.name, \" - \").concat(operator === null || operator === void 0 ? void 0 : operator.date)\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 42\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-row flex items-center px-6 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mr-2\",\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 55\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    data: operator === null || operator === void 0 ? void 0 : (_operator_routes = operator.routes) === null || _operator_routes === void 0 ? void 0 : _operator_routes.map((item)=>{\n                        const routes = item.routeVariant.split(\" \");\n                        let tagItem;\n                        if (item.deviationFromTimetable && item.deviationFromTimetable === 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"On Time\",\n                                color: \"status-ontime\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 35\n                            }, void 0);\n                        } else if (item.deviationFromTimetable && item.deviationFromTimetable > 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Late\",\n                                color: \"status-late\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 35\n                            }, void 0);\n                        } else if (item.deviationFromTimetable && item.deviationFromTimetable < 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Early\",\n                                color: \"status-early\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 35\n                            }, void 0);\n                        } else {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Unknown\",\n                                color: \"status-unknown\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 35\n                            }, void 0);\n                        }\n                        return {\n                            \"Bus Id\": item.id,\n                            \"Route Variant\": /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: routes[0]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 48\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \" \".concat(routes[1], \" \").concat(routes[2])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 76\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 42\n                            }, void 0),\n                            \"Status\": tagItem\n                        };\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s1(OperatorTable, \"v0p2Vp/K7lCz3v1prli+NVl5TRI=\", false, function() {\n    return [\n        useQueryOperators\n    ];\n});\n_c = OperatorTable;\nvar _c;\n$RefreshReg$(_c, \"OperatorTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYnVzX29wZXJhdG9yL2RldGFpbC9PcGVyYXRvclRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lEO0FBQ1U7QUFDRTtBQUVyRSxjQUFjO0FBQ2QsU0FBU0k7O0lBQ0wsTUFBTUMsUUFBUUwsdUVBQWdCQSxDQUFDO1FBQzNCTSxVQUFVO1lBQUM7U0FBWTtRQUN2QkMsU0FBUztZQUNMLE1BQU1DLE1BQU0sTUFBTUwsb0VBQVlBO1lBQzlCLE9BQU9LO1FBQ1g7SUFDSjtJQUNBLE9BQU87UUFBQ0gsTUFBTUksSUFBSTtRQUFFSjtLQUFNO0FBQzlCO0dBVFNEOztRQUNTSixtRUFBZ0JBOzs7QUFVbkIsU0FBU1UsY0FBYyxLQUEwQjtRQUExQixFQUFFQyxJQUFJLEVBQW9CLEdBQTFCO1FBV1RDOztJQVZ6QixNQUFNLENBQUNILEtBQUssR0FBR0w7SUFDZixNQUFNUSxXQUFpQ0MsTUFBTUMsT0FBTyxDQUFDTCxpQkFBQUEsMkJBQUFBLEtBQU1BLElBQUksSUFBSUEsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUNNLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFTCxJQUFJLEtBQUtBLFFBQVFNO0lBRTdHLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNBO2dCQUFJQyxXQUFVOzBCQUFjLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBc0MsVUFBR1AscUJBQUFBLCtCQUFBQSxTQUFVRCxJQUFJLEVBQUMsT0FBb0IsT0FBZkMscUJBQUFBLCtCQUFBQSxTQUFVUyxJQUFJOzs7Ozs7Ozs7OzswQkFDdEgsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0c7d0JBQU1ILFdBQVU7a0NBQU87Ozs7OztrQ0FBYyw4REFBQ0k7Ozs7Ozs7Ozs7OzBCQUUzQyw4REFBQ0w7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNsQixrRUFBS0E7b0JBQUNRLElBQUksRUFBRUcscUJBQUFBLGdDQUFBQSxtQkFBQUEsU0FBVVksTUFBTSxjQUFoQlosdUNBQUFBLGlCQUFrQmEsR0FBRyxDQUFDLENBQUNDO3dCQUNoQyxNQUFNRixTQUFTRSxLQUFLQyxZQUFZLENBQUNDLEtBQUssQ0FBQzt3QkFFdkMsSUFBSUM7d0JBQ0osSUFBSUgsS0FBS0ksc0JBQXNCLElBQUlKLEtBQUtJLHNCQUFzQixLQUFLLEdBQUc7NEJBQ2xFRCx3QkFBVSw4REFBQzNCLGdFQUFHQTtnQ0FBQzZCLE1BQUs7Z0NBQVVDLE9BQU07Ozs7Ozt3QkFDeEMsT0FBTyxJQUFJTixLQUFLSSxzQkFBc0IsSUFBSUosS0FBS0ksc0JBQXNCLEdBQUcsR0FBRzs0QkFDdkVELHdCQUFVLDhEQUFDM0IsZ0VBQUdBO2dDQUFDNkIsTUFBSztnQ0FBT0MsT0FBTTs7Ozs7O3dCQUNyQyxPQUFPLElBQUlOLEtBQUtJLHNCQUFzQixJQUFJSixLQUFLSSxzQkFBc0IsR0FBRyxHQUFHOzRCQUN2RUQsd0JBQVUsOERBQUMzQixnRUFBR0E7Z0NBQUM2QixNQUFLO2dDQUFRQyxPQUFNOzs7Ozs7d0JBQ3RDLE9BQU87NEJBQ0hILHdCQUFVLDhEQUFDM0IsZ0VBQUdBO2dDQUFDNkIsTUFBSztnQ0FBVUMsT0FBTTs7Ozs7O3dCQUN4Qzt3QkFFQSxPQUFPOzRCQUNILFVBQVVOLEtBQUtPLEVBQUU7NEJBQ2pCLCtCQUFpQiw4REFBQ0M7O2tEQUFLLDhEQUFDQztrREFBUVgsTUFBTSxDQUFDLEVBQUU7Ozs7OztrREFBVSw4REFBQ1U7a0RBQU0sSUFBaUJWLE9BQWJBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsS0FBYSxPQUFWQSxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7OzRCQUNwRixVQUFVSzt3QkFDZDtvQkFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7SUFsQ3dCbkI7O1FBQ0xOOzs7S0FES00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9idXNfb3BlcmF0b3IvZGV0YWlsL09wZXJhdG9yVGFibGUudHN4P2QyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdXNwZW5zZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFRhYmxlLCBUYWcsIExpbmsgfSBmcm9tICdAdHJhbnNwb3J0LXRhc2svaW5mby1jb21wb25lbnRzJztcbmltcG9ydCB7IGdldE9wZXJhdG9ycywgT3BlcmF0b3IgfSBmcm9tICcuLi8uLi9hcGkvb3BlcmF0b3Ivb3BlcmF0b3InO1xuXG4vLyAtLSBRdWVyeSAtLVxuZnVuY3Rpb24gdXNlUXVlcnlPcGVyYXRvcnMoKSB7XG4gICAgY29uc3QgcXVlcnkgPSB1c2VTdXNwZW5zZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnlLZXk6IFsnT3BlcmF0b3JzJ10sXG4gICAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE9wZXJhdG9ycygpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbcXVlcnkuZGF0YSwgcXVlcnldIGFzIGNvbnN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdG9yVGFibGUoeyBuYW1lIH06IHsgbmFtZTogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBbZGF0YV0gPSB1c2VRdWVyeU9wZXJhdG9ycygpO1xuICAgIGNvbnN0IG9wZXJhdG9yOiBPcGVyYXRvciB8IHVuZGVmaW5lZCA9IEFycmF5LmlzQXJyYXkoZGF0YT8uZGF0YSkgPyBkYXRhPy5kYXRhLmZpbmQoKG8pID0+IG8ubmFtZSA9PT0gbmFtZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxoMiBjbGFzc05hbWU9XCJwdC00IHRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkXCI+e2Ake29wZXJhdG9yPy5uYW1lfSAtICR7b3BlcmF0b3I/LmRhdGV9YH08L2gyPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvdyBmbGV4IGl0ZW1zLWNlbnRlciBweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMlwiPk5vdGVzOjwvbGFiZWw+PHA+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHgtNlwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtvcGVyYXRvcj8ucm91dGVzPy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVzID0gaXRlbS5yb3V0ZVZhcmlhbnQuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGV2aWF0aW9uRnJvbVRpbWV0YWJsZSAmJiBpdGVtLmRldmlhdGlvbkZyb21UaW1ldGFibGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ0l0ZW0gPSA8VGFnIHRleHQ9XCJPbiBUaW1lXCIgY29sb3I9XCJzdGF0dXMtb250aW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmRldmlhdGlvbkZyb21UaW1ldGFibGUgJiYgaXRlbS5kZXZpYXRpb25Gcm9tVGltZXRhYmxlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnSXRlbSA9IDxUYWcgdGV4dD1cIkxhdGVcIiBjb2xvcj1cInN0YXR1cy1sYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmRldmlhdGlvbkZyb21UaW1ldGFibGUgJiYgaXRlbS5kZXZpYXRpb25Gcm9tVGltZXRhYmxlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnSXRlbSA9IDxUYWcgdGV4dD1cIkVhcmx5XCIgY29sb3I9XCJzdGF0dXMtZWFybHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnSXRlbSA9IDxUYWcgdGV4dD1cIlVua25vd25cIiBjb2xvcj1cInN0YXR1cy11bmtub3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQnVzIElkJzogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdSb3V0ZSBWYXJpYW50JzogPHNwYW4+PHN0cm9uZz57cm91dGVzWzBdfTwvc3Ryb25nPjxzcGFuPntgICR7cm91dGVzWzFdfSAke3JvdXRlc1syXX1gfTwvc3Bhbj48L3NwYW4+LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1N0YXR1cyc6IHRhZ0l0ZW1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3VzcGVuc2VRdWVyeSIsIlRhYmxlIiwiVGFnIiwiZ2V0T3BlcmF0b3JzIiwidXNlUXVlcnlPcGVyYXRvcnMiLCJxdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJlcyIsImRhdGEiLCJPcGVyYXRvclRhYmxlIiwibmFtZSIsIm9wZXJhdG9yIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZCIsIm8iLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImRhdGUiLCJsYWJlbCIsInAiLCJyb3V0ZXMiLCJtYXAiLCJpdGVtIiwicm91dGVWYXJpYW50Iiwic3BsaXQiLCJ0YWdJdGVtIiwiZGV2aWF0aW9uRnJvbVRpbWV0YWJsZSIsInRleHQiLCJjb2xvciIsImlkIiwic3BhbiIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/bus_operator/detail/OperatorTable.tsx\n"));

/***/ })

});