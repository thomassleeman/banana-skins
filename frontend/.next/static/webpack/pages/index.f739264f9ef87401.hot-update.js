"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/useOrderJobs.js":
/*!*******************************!*\
  !*** ./utils/useOrderJobs.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useOrderJobs\": function() { return /* binding */ useOrderJobs; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar useOrderJobs = function(unorderedJobsArray) {\n    var jobsByOrderedCat = unorderedJobsArray.sort(function(a, b) {\n        return a.category.catIndex - b.category.catIndex;\n    });\n    var orderedJobsArray = jobsByOrderedCat.sort(function(a, b) {\n        if (a.category._id === b.category._id) {\n            return a.jobIndex - b.jobIndex;\n        }\n    });\n    return orderedJobsArray;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91c2VPcmRlckpvYnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxHQUFLLENBQUNBLFlBQVksR0FBRyxRQUFRLENBQVBDLGtCQUFrQixFQUFLLENBQUM7SUFDbkQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0Qsa0JBQWtCLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDMUQsTUFBTSxDQUFDRCxDQUFDLENBQUNFLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHRixDQUFDLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUNsRCxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR04sZ0JBQWdCLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDeEQsRUFBRSxFQUFFRCxDQUFDLENBQUNFLFFBQVEsQ0FBQ0csR0FBRyxLQUFLSixDQUFDLENBQUNDLFFBQVEsQ0FBQ0csR0FBRyxFQUFFLENBQUM7WUFDdEMsTUFBTSxDQUFDTCxDQUFDLENBQUNNLFFBQVEsR0FBR0wsQ0FBQyxDQUFDSyxRQUFRO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDRixnQkFBZ0I7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy91c2VPcmRlckpvYnMuanM/YjBjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlT3JkZXJKb2JzID0gKHVub3JkZXJlZEpvYnNBcnJheSkgPT4ge1xuICBjb25zdCBqb2JzQnlPcmRlcmVkQ2F0ID0gdW5vcmRlcmVkSm9ic0FycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5jYXRlZ29yeS5jYXRJbmRleCAtIGIuY2F0ZWdvcnkuY2F0SW5kZXg7XG4gIH0pO1xuICBjb25zdCBvcmRlcmVkSm9ic0FycmF5ID0gam9ic0J5T3JkZXJlZENhdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuY2F0ZWdvcnkuX2lkID09PSBiLmNhdGVnb3J5Ll9pZCkge1xuICAgICAgcmV0dXJuIGEuam9iSW5kZXggLSBiLmpvYkluZGV4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkSm9ic0FycmF5O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VPcmRlckpvYnMiLCJ1bm9yZGVyZWRKb2JzQXJyYXkiLCJqb2JzQnlPcmRlcmVkQ2F0Iiwic29ydCIsImEiLCJiIiwiY2F0ZWdvcnkiLCJjYXRJbmRleCIsIm9yZGVyZWRKb2JzQXJyYXkiLCJfaWQiLCJqb2JJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/useOrderJobs.js\n");

/***/ })

});