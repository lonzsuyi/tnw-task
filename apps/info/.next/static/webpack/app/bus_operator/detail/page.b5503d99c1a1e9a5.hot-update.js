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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OperatorTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/../../node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js\");\n/* harmony import */ var _transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @transport-task/info-components */ \"(app-pages-browser)/../../libs/info-components/src/index.ts\");\n/* harmony import */ var _api_operator_operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/operator/operator */ \"(app-pages-browser)/./src/app/api/operator/operator.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// -- Query --\nfunction useQueryOperators() {\n    _s();\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useSuspenseQuery)({\n        queryKey: [\n            \"Operators\"\n        ],\n        queryFn: async ()=>{\n            const res = await (0,_api_operator_operator__WEBPACK_IMPORTED_MODULE_2__.getOperators)();\n            return res;\n        }\n    });\n    return [\n        query.data,\n        query\n    ];\n}\n_s(useQueryOperators, \"KIGsLeNGCXok2aQKtopB/X5OiKU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useSuspenseQuery\n    ];\n});\nfunction OperatorTable(param) {\n    let { name } = param;\n    var _operator_routes;\n    _s1();\n    const [data] = useQueryOperators();\n    const operator = Array.isArray(data === null || data === void 0 ? void 0 : data.data) ? data === null || data === void 0 ? void 0 : data.data.find((o)=>o.name === name) : undefined;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"pt-4 text-xl md:text-2xl font-bold\",\n                    children: \"\".concat(operator === null || operator === void 0 ? void 0 : operator.name, \" - \").concat(operator === null || operator === void 0 ? void 0 : operator.date)\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 42\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-row flex items-center px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 38\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        href: \"/bus_operator/notes/\".concat(operator === null || operator === void 0 ? void 0 : operator.name),\n                        children: \"Submit Notes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 45\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    data: operator === null || operator === void 0 ? void 0 : (_operator_routes = operator.routes) === null || _operator_routes === void 0 ? void 0 : _operator_routes.map((item)=>{\n                        const routes = item.routeVariant.split(\" \");\n                        let tagItem;\n                        if (item.deviationFromTimetable && item.deviationFromTimetable === 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"On Time\",\n                                color: \"status-ontime\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 35\n                            }, void 0);\n                        } else if (item.deviationFromTimetable && item.deviationFromTimetable > 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Late\",\n                                color: \"status-late\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 35\n                            }, void 0);\n                        } else if (item.deviationFromTimetable && item.deviationFromTimetable < 0) {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Early\",\n                                color: \"status-early\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 35\n                            }, void 0);\n                        } else {\n                            tagItem = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transport_task_info_components__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                text: \"Unknown\",\n                                color: \"status-unknown\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 35\n                            }, void 0);\n                        }\n                        return {\n                            \"Bus Id\": item.id,\n                            \"Route Variant\": /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: routes[0]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 48\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \" \".concat(routes[1], \" \").concat(routes[2])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 76\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 42\n                            }, void 0),\n                            \"Status\": tagItem\n                        };\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lon/Desktop/transport-task/apps/info/src/app/bus_operator/detail/OperatorTable.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s1(OperatorTable, \"v0p2Vp/K7lCz3v1prli+NVl5TRI=\", false, function() {\n    return [\n        useQueryOperators\n    ];\n});\n_c = OperatorTable;\nvar _c;\n$RefreshReg$(_c, \"OperatorTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYnVzX29wZXJhdG9yL2RldGFpbC9PcGVyYXRvclRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lEO0FBQ1U7QUFDRTtBQUVyRSxjQUFjO0FBQ2QsU0FBU0s7O0lBQ0wsTUFBTUMsUUFBUU4sdUVBQWdCQSxDQUFDO1FBQzNCTyxVQUFVO1lBQUM7U0FBWTtRQUN2QkMsU0FBUztZQUNMLE1BQU1DLE1BQU0sTUFBTUwsb0VBQVlBO1lBQzlCLE9BQU9LO1FBQ1g7SUFDSjtJQUNBLE9BQU87UUFBQ0gsTUFBTUksSUFBSTtRQUFFSjtLQUFNO0FBQzlCO0dBVFNEOztRQUNTTCxtRUFBZ0JBOzs7QUFVbkIsU0FBU1csY0FBYyxLQUEwQjtRQUExQixFQUFFQyxJQUFJLEVBQW9CLEdBQTFCO1FBV1RDOztJQVZ6QixNQUFNLENBQUNILEtBQUssR0FBR0w7SUFDZixNQUFNUSxXQUFpQ0MsTUFBTUMsT0FBTyxDQUFDTCxpQkFBQUEsMkJBQUFBLEtBQU1BLElBQUksSUFBSUEsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUNNLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFTCxJQUFJLEtBQUtBLFFBQVFNO0lBRTdHLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNBO2dCQUFJQyxXQUFVOzBCQUFjLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBc0MsVUFBR1AscUJBQUFBLCtCQUFBQSxTQUFVRCxJQUFJLEVBQUMsT0FBb0IsT0FBZkMscUJBQUFBLCtCQUFBQSxTQUFVUyxJQUFJOzs7Ozs7Ozs7OzswQkFDdEgsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0c7a0NBQU07Ozs7OztrQ0FBYyw4REFBQ0M7Ozs7O2tDQUFNLDhEQUFDckIsaUVBQUlBO3dCQUFDc0IsTUFBTSx1QkFBc0MsT0FBZloscUJBQUFBLCtCQUFBQSxTQUFVRCxJQUFJO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBRXJGLDhEQUFDTztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ25CLGtFQUFLQTtvQkFBQ1MsSUFBSSxFQUFFRyxxQkFBQUEsZ0NBQUFBLG1CQUFBQSxTQUFVYSxNQUFNLGNBQWhCYix1Q0FBQUEsaUJBQWtCYyxHQUFHLENBQUMsQ0FBQ0M7d0JBQ2hDLE1BQU1GLFNBQVNFLEtBQUtDLFlBQVksQ0FBQ0MsS0FBSyxDQUFDO3dCQUV2QyxJQUFJQzt3QkFDSixJQUFJSCxLQUFLSSxzQkFBc0IsSUFBSUosS0FBS0ksc0JBQXNCLEtBQUssR0FBRzs0QkFDbEVELHdCQUFVLDhEQUFDN0IsZ0VBQUdBO2dDQUFDK0IsTUFBSztnQ0FBVUMsT0FBTTs7Ozs7O3dCQUN4QyxPQUFPLElBQUlOLEtBQUtJLHNCQUFzQixJQUFJSixLQUFLSSxzQkFBc0IsR0FBRyxHQUFHOzRCQUN2RUQsd0JBQVUsOERBQUM3QixnRUFBR0E7Z0NBQUMrQixNQUFLO2dDQUFPQyxPQUFNOzs7Ozs7d0JBQ3JDLE9BQU8sSUFBSU4sS0FBS0ksc0JBQXNCLElBQUlKLEtBQUtJLHNCQUFzQixHQUFHLEdBQUc7NEJBQ3ZFRCx3QkFBVSw4REFBQzdCLGdFQUFHQTtnQ0FBQytCLE1BQUs7Z0NBQVFDLE9BQU07Ozs7Ozt3QkFDdEMsT0FBTzs0QkFDSEgsd0JBQVUsOERBQUM3QixnRUFBR0E7Z0NBQUMrQixNQUFLO2dDQUFVQyxPQUFNOzs7Ozs7d0JBQ3hDO3dCQUVBLE9BQU87NEJBQ0gsVUFBVU4sS0FBS08sRUFBRTs0QkFDakIsK0JBQWlCLDhEQUFDQzs7a0RBQUssOERBQUNDO2tEQUFRWCxNQUFNLENBQUMsRUFBRTs7Ozs7O2tEQUFVLDhEQUFDVTtrREFBTSxJQUFpQlYsT0FBYkEsTUFBTSxDQUFDLEVBQUUsRUFBQyxLQUFhLE9BQVZBLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7NEJBQ3BGLFVBQVVLO3dCQUNkO29CQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtJQWxDd0JwQjs7UUFDTE47OztLQURLTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2J1c19vcGVyYXRvci9kZXRhaWwvT3BlcmF0b3JUYWJsZS50c3g/ZDI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN1c3BlbnNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgVGFibGUsIFRhZywgTGluayB9IGZyb20gJ0B0cmFuc3BvcnQtdGFzay9pbmZvLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0T3BlcmF0b3JzLCBPcGVyYXRvciB9IGZyb20gJy4uLy4uL2FwaS9vcGVyYXRvci9vcGVyYXRvcic7XG5cbi8vIC0tIFF1ZXJ5IC0tXG5mdW5jdGlvbiB1c2VRdWVyeU9wZXJhdG9ycygpIHtcbiAgICBjb25zdCBxdWVyeSA9IHVzZVN1c3BlbnNlUXVlcnkoe1xuICAgICAgICBxdWVyeUtleTogWydPcGVyYXRvcnMnXSxcbiAgICAgICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0T3BlcmF0b3JzKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtxdWVyeS5kYXRhLCBxdWVyeV0gYXMgY29uc3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0b3JUYWJsZSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IFtkYXRhXSA9IHVzZVF1ZXJ5T3BlcmF0b3JzKCk7XG4gICAgY29uc3Qgb3BlcmF0b3I6IE9wZXJhdG9yIHwgdW5kZWZpbmVkID0gQXJyYXkuaXNBcnJheShkYXRhPy5kYXRhKSA/IGRhdGE/LmRhdGEuZmluZCgobykgPT4gby5uYW1lID09PSBuYW1lKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PGgyIGNsYXNzTmFtZT1cInB0LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWJvbGRcIj57YCR7b3BlcmF0b3I/Lm5hbWV9IC0gJHtvcGVyYXRvcj8uZGF0ZX1gfTwvaDI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93IGZsZXggaXRlbXMtY2VudGVyIHB4LTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZXM6PC9sYWJlbD48cD48L3A+PExpbmsgaHJlZj17YC9idXNfb3BlcmF0b3Ivbm90ZXMvJHtvcGVyYXRvcj8ubmFtZX1gfT5TdWJtaXQgTm90ZXM8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBweC02XCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlIGRhdGE9e29wZXJhdG9yPy5yb3V0ZXM/Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZXMgPSBpdGVtLnJvdXRlVmFyaWFudC5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdJdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kZXZpYXRpb25Gcm9tVGltZXRhYmxlICYmIGl0ZW0uZGV2aWF0aW9uRnJvbVRpbWV0YWJsZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnSXRlbSA9IDxUYWcgdGV4dD1cIk9uIFRpbWVcIiBjb2xvcj1cInN0YXR1cy1vbnRpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZGV2aWF0aW9uRnJvbVRpbWV0YWJsZSAmJiBpdGVtLmRldmlhdGlvbkZyb21UaW1ldGFibGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdJdGVtID0gPFRhZyB0ZXh0PVwiTGF0ZVwiIGNvbG9yPVwic3RhdHVzLWxhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZGV2aWF0aW9uRnJvbVRpbWV0YWJsZSAmJiBpdGVtLmRldmlhdGlvbkZyb21UaW1ldGFibGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdJdGVtID0gPFRhZyB0ZXh0PVwiRWFybHlcIiBjb2xvcj1cInN0YXR1cy1lYXJseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdJdGVtID0gPFRhZyB0ZXh0PVwiVW5rbm93blwiIGNvbG9yPVwic3RhdHVzLXVua25vd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdCdXMgSWQnOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JvdXRlIFZhcmlhbnQnOiA8c3Bhbj48c3Ryb25nPntyb3V0ZXNbMF19PC9zdHJvbmc+PHNwYW4+e2AgJHtyb3V0ZXNbMV19ICR7cm91dGVzWzJdfWB9PC9zcGFuPjwvc3Bhbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJzogdGFnSXRlbVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdXNwZW5zZVF1ZXJ5IiwiVGFibGUiLCJUYWciLCJMaW5rIiwiZ2V0T3BlcmF0b3JzIiwidXNlUXVlcnlPcGVyYXRvcnMiLCJxdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJlcyIsImRhdGEiLCJPcGVyYXRvclRhYmxlIiwibmFtZSIsIm9wZXJhdG9yIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZCIsIm8iLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImRhdGUiLCJsYWJlbCIsInAiLCJocmVmIiwicm91dGVzIiwibWFwIiwiaXRlbSIsInJvdXRlVmFyaWFudCIsInNwbGl0IiwidGFnSXRlbSIsImRldmlhdGlvbkZyb21UaW1ldGFibGUiLCJ0ZXh0IiwiY29sb3IiLCJpZCIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/bus_operator/detail/OperatorTable.tsx\n"));

/***/ })

});