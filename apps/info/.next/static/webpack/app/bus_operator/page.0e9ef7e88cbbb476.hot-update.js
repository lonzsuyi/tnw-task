"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/bus_operator/page",{

/***/ "(app-pages-browser)/./src/app/api/operator/operator.ts":
/*!******************************************!*\
  !*** ./src/app/api/operator/operator.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOperators: function() { return /* binding */ getOperators; },\n/* harmony export */   getOperatorsUrl: function() { return /* binding */ getOperatorsUrl; }\n/* harmony export */ });\nconst getOperatorsUrl = \"/asset/json/bus-services.example.json\";\nasync function getOperators() {\n    return new Promise((resolve)=>{\n        const res = {\n            message: \"\",\n            code: 200,\n            data: [\n                {\n                    \"name\": \"Sydney Buses\",\n                    \"date\": \"25/09/2021\",\n                    \"routes\": [\n                        {\n                            \"id\": \"42612\",\n                            \"routeVariant\": \"891 2 1\",\n                            \"deviationFromTimetable\": 77\n                        },\n                        {\n                            \"id\": \"29016\",\n                            \"routeVariant\": \"400 1 1\",\n                            \"deviationFromTimetable\": 340\n                        },\n                        {\n                            \"id\": \"90467\",\n                            \"routeVariant\": \"393 1 1\",\n                            \"deviationFromTimetable\": 220\n                        },\n                        {\n                            \"id\": \"88836\",\n                            \"routeVariant\": \"M20 1 0\",\n                            \"deviationFromTimetable\": -287\n                        },\n                        {\n                            \"id\": \"79367\",\n                            \"routeVariant\": \"L21 2 1\",\n                            \"deviationFromTimetable\": 347\n                        }\n                    ]\n                },\n                {\n                    \"name\": \"Westbus\",\n                    \"date\": \"25/09/2021\",\n                    \"routes\": [\n                        {\n                            \"id\": \"94811\",\n                            \"routeVariant\": \"664 2 1\",\n                            \"deviationFromTimetable\": 164\n                        },\n                        {\n                            \"id\": \"62788\",\n                            \"routeVariant\": \"UNKNOWN\",\n                            \"deviationFromTimetable\": null\n                        },\n                        {\n                            \"id\": \"14221\",\n                            \"routeVariant\": \"834 1 1\",\n                            \"deviationFromTimetable\": 423\n                        }\n                    ]\n                },\n                {\n                    \"name\": \"Other Buses\",\n                    \"date\": \"20/09/2024\",\n                    \"routes\": [\n                        {\n                            \"id\": \"94811\",\n                            \"routeVariant\": \"664 2 1\",\n                            \"deviationFromTimetable\": 164\n                        },\n                        {\n                            \"id\": \"62788\",\n                            \"routeVariant\": \"UNKNOWN\",\n                            \"deviationFromTimetable\": null\n                        },\n                        {\n                            \"id\": \"14221\",\n                            \"routeVariant\": \"834 1 1\",\n                            \"deviationFromTimetable\": 423\n                        }\n                    ]\n                }\n            ]\n        };\n        resolve(res);\n    });\n// return (await httpRequest.get(getOperatorsUrl));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL29wZXJhdG9yL29wZXJhdG9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBWU8sTUFBTUEsa0JBQW1CLHdDQUF1QztBQUNoRSxlQUFlQztJQUNsQixPQUFPLElBQUlDLFFBQVEsQ0FBQ0M7UUFDaEIsTUFBTUMsTUFBa0M7WUFDcENDLFNBQVM7WUFDVEMsTUFBTTtZQUNOQyxNQUFNO2dCQUNGO29CQUNJLFFBQVE7b0JBQ1IsUUFBUTtvQkFDUixVQUFVO3dCQUNOOzRCQUNJLE1BQU07NEJBQ04sZ0JBQWdCOzRCQUNoQiwwQkFBMEI7d0JBQzlCO3dCQUNBOzRCQUNJLE1BQU07NEJBQ04sZ0JBQWdCOzRCQUNoQiwwQkFBMEI7d0JBQzlCO3dCQUNBOzRCQUNJLE1BQU07NEJBQ04sZ0JBQWdCOzRCQUNoQiwwQkFBMEI7d0JBQzlCO3dCQUNBOzRCQUNJLE1BQU07NEJBQ04sZ0JBQWdCOzRCQUNoQiwwQkFBMEIsQ0FBQzt3QkFDL0I7d0JBQ0E7NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7cUJBQ0g7Z0JBQ0w7Z0JBQ0E7b0JBQ0ksUUFBUTtvQkFDUixRQUFRO29CQUNSLFVBQVU7d0JBQ047NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7d0JBQ0E7NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7d0JBQ0E7NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7cUJBQ0g7Z0JBQ0w7Z0JBQ0E7b0JBQ0ksUUFBUTtvQkFDUixRQUFRO29CQUNSLFVBQVU7d0JBQ047NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7d0JBQ0E7NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7d0JBQ0E7NEJBQ0ksTUFBTTs0QkFDTixnQkFBZ0I7NEJBQ2hCLDBCQUEwQjt3QkFDOUI7cUJBQ0g7Z0JBQ0w7YUFDSDtRQUNMO1FBQ0FKLFFBQVFDO0lBQ1o7QUFDQSxtREFBbUQ7QUFDdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcGkvb3BlcmF0b3Ivb3BlcmF0b3IudHM/OWUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFJlcXVlc3QsIHsgUmVzcG9uc2VSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwUmVxdWVzdCc7XG5cbmV4cG9ydCB0eXBlIE9wZXJhdG9yID0ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRhdGU6IHN0cmluZ1xuICAgIHJvdXRlczoge1xuICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICByb3V0ZVZhcmlhbnQ6IHN0cmluZyxcbiAgICAgICAgZGV2aWF0aW9uRnJvbVRpbWV0YWJsZTogbnVsbCB8IG51bWJlclxuICAgIH1bXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0T3BlcmF0b3JzVXJsID0gYC9hc3NldC9qc29uL2J1cy1zZXJ2aWNlcy5leGFtcGxlLmpzb25gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9wZXJhdG9ycygpOiBQcm9taXNlPFJlc3BvbnNlUmVzdWx0PE9wZXJhdG9yW10+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlczogUmVzcG9uc2VSZXN1bHQ8T3BlcmF0b3JbXT4gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN5ZG5leSBCdXNlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNS8wOS8yMDIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiNDI2MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlVmFyaWFudFwiOiBcIjg5MSAyIDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldmlhdGlvbkZyb21UaW1ldGFibGVcIjogNzdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjI5MDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZVZhcmlhbnRcIjogXCI0MDAgMSAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpYXRpb25Gcm9tVGltZXRhYmxlXCI6IDM0MFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiOTA0NjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlVmFyaWFudFwiOiBcIjM5MyAxIDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldmlhdGlvbkZyb21UaW1ldGFibGVcIjogMjIwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCI4ODgzNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVWYXJpYW50XCI6IFwiTTIwIDEgMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWF0aW9uRnJvbVRpbWV0YWJsZVwiOiAtMjg3XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCI3OTM2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVWYXJpYW50XCI6IFwiTDIxIDIgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWF0aW9uRnJvbVRpbWV0YWJsZVwiOiAzNDdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZXN0YnVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI1LzA5LzIwMjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCI5NDgxMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVWYXJpYW50XCI6IFwiNjY0IDIgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWF0aW9uRnJvbVRpbWV0YWJsZVwiOiAxNjRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjYyNzg4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZVZhcmlhbnRcIjogXCJVTktOT1dOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpYXRpb25Gcm9tVGltZXRhYmxlXCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjE0MjIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZVZhcmlhbnRcIjogXCI4MzQgMSAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpYXRpb25Gcm9tVGltZXRhYmxlXCI6IDQyM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk90aGVyIEJ1c2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwLzA5LzIwMjRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCI5NDgxMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVWYXJpYW50XCI6IFwiNjY0IDIgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWF0aW9uRnJvbVRpbWV0YWJsZVwiOiAxNjRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjYyNzg4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZVZhcmlhbnRcIjogXCJVTktOT1dOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpYXRpb25Gcm9tVGltZXRhYmxlXCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjE0MjIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZVZhcmlhbnRcIjogXCI4MzQgMSAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpYXRpb25Gcm9tVGltZXRhYmxlXCI6IDQyM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKVxuICAgIH0pXG4gICAgLy8gcmV0dXJuIChhd2FpdCBodHRwUmVxdWVzdC5nZXQoZ2V0T3BlcmF0b3JzVXJsKSk7XG59Il0sIm5hbWVzIjpbImdldE9wZXJhdG9yc1VybCIsImdldE9wZXJhdG9ycyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzIiwibWVzc2FnZSIsImNvZGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/operator/operator.ts\n"));

/***/ })

});