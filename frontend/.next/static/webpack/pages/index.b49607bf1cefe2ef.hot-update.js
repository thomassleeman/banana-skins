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

/***/ "./utils/useUpdateDatabase.js":
/*!************************************!*\
  !*** ./utils/useUpdateDatabase.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUpdateDatabase\": function() { return /* binding */ useUpdateDatabase; }\n/* harmony export */ });\n/* harmony import */ var _Users_thomassleeman_Documents_projects_banana_skins_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_thomassleeman_Documents_projects_banana_skins_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_thomassleeman_Documents_projects_banana_skins_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar useUpdateDatabase = function() {\n    var _ref = _asyncToGenerator(_Users_thomassleeman_Documents_projects_banana_skins_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(endPoint, data) {\n        var url, body, options;\n        return _Users_thomassleeman_Documents_projects_banana_skins_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    url = \"http://127.0.0.1:7000/api/v1/\";\n                    body = JSON.stringify({\n                        data: data\n                    });\n                    options = {\n                        method: 'PUT',\n                        body: body,\n                        headers: {\n                            'Content-type': 'application/json'\n                        }\n                    };\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(url).concat(endPoint), options);\n                case 6:\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                8\n            ]\n        ]);\n    }));\n    return function useUpdateDatabase(endPoint, data) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91c2VVcGRhdGVEYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsR0FBSyxDQUFDRSxpQkFBaUI7OE1BQUcsUUFBUSxTQUFEQyxRQUFRLEVBQUVDLElBQUksRUFBSyxDQUFDO1lBQ3BEQyxHQUFHLEVBRUhDLElBQUksRUFJSkMsT0FBTzs7OztvQkFOUEYsR0FBRyxHQUFHRywrQkFBa0I7b0JBRXhCRixJQUFJLEdBQUdLLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7d0JBQzNCUixJQUFJLEVBQUVBLElBQUk7b0JBQ1osQ0FBQztvQkFFS0csT0FBTyxHQUFHLENBQUM7d0JBQ2ZNLE1BQU0sRUFBRSxDQUFLO3dCQUNiUCxJQUFJLEVBQUVBLElBQUk7d0JBQ1ZRLE9BQU8sRUFBRSxDQUFDOzRCQUNSLENBQWMsZUFBRSxDQUFrQjt3QkFDcEMsQ0FBQztvQkFDSCxDQUFDOzs7MkJBRU9DLEtBQUssQ0FBRSxHQUFRWixNQUFRLENBQWRFLEdBQUcsRUFBWSxPQUFURixRQUFRLEdBQUlJLE9BQU87Ozs7Ozs7b0JBR3hDUyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O0lBRWYsQ0FBQztvQkFwQllmLGlCQUFpQixDQUFVQyxRQUFRLEVBQUVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlVXBkYXRlRGF0YWJhc2UuanM/OWZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlRGF0YWJhc2UgPSBhc3luYyAoZW5kUG9pbnQsIGRhdGEpID0+IHtcbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuZGV2VXJsO1xuXG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgZGF0YTogZGF0YSxcbiAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGJvZHk6IGJvZHksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9O1xuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKGAke3VybH0ke2VuZFBvaW50fWAsIG9wdGlvbnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGAke3VybH0ke2VuZFBvaW50fWAsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVVwZGF0ZURhdGFiYXNlIiwiZW5kUG9pbnQiLCJkYXRhIiwidXJsIiwiYm9keSIsIm9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiZGV2VXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/useUpdateDatabase.js\n");

/***/ })

});