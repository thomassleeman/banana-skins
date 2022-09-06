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

/***/ "./components/Column.js":
/*!******************************!*\
  !*** ./components/Column.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Job */ \"./components/Job.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _AddJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddJob */ \"./components/AddJob.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 8px;\\n  border: solid 4px #ffff;\\n  border-radius: 12px;\\n  background-color: #f1c40f;\\n  width: 20rem;\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 8px;\\n  color: #483401;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 8px;\\n  flex-grow: 1;\\n  min-height: 100px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h3(_templateObject1());\n_c1 = Title;\nvar Tasklist = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = Tasklist;\nvar Column = function(param) {\n    var catId = param.catId, title = param.title, description = param.description, index1 = param.index, jobs = param.jobs;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)(), catsData = ref.catsData, dispatch = ref.dispatch;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAddJob = ref1[0], setShowAddJob = ref1[1];\n    var handleAddJob = function(catId) {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Draggable, {\n        draggableId: catId,\n        index: index1,\n        children: function(provided1) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided1.draggableProps, {\n                ref: provided1.innerRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, _objectSpread({}, provided1.dragHandleProps, {\n                        children: title\n                    }), void 0, false, {\n                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            description,\n                            \"...index: \".concat(index1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Droppable, {\n                        droppableId: catId,\n                        type: \"job\",\n                        children: function(provided) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tasklist, _objectSpread({\n                                ref: provided.innerRef\n                            }, provided.droppableProps, {\n                                children: [\n                                    jobs.map(function(job, index) {\n                                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Job__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            job: job,\n                                            index: index\n                                        }, job._id, false, {\n                                            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 26\n                                        }, _this1));\n                                    }),\n                                    provided.placeholder\n                                ]\n                            }), void 0, true, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, _this1);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddJob__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            cursor: 'pointer'\n                        },\n                        onClick: function() {\n                            return setShowAddJob(true);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscAdd, {}, void 0, false, {\n                            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }), void 0, true, {\n                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this1);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Column.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(Column, \"q5tN00qXhZK2dIN5DPkV7kAVkXU=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext\n    ];\n});\n_c3 = Column;\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Tasklist\");\n$RefreshReg$(_c3, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbHVtbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ047QUFDVDtBQUNtQztBQUM3QjtBQUNzQjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDWCxDQVE3Qjs7Ozs7Ozs7O1FBQ3dCLENBR3hCOzs7Ozs7Ozs7UUFDNEIsQ0FJNUI7Ozs7Ozs7O0FBakJBLEdBQUssQ0FBQ1EsU0FBUyxHQUFHUiw2REFBVTtLQUF0QlEsU0FBUztBQVNmLEdBQUssQ0FBQ0UsS0FBSyxHQUFHViw0REFBUztNQUFqQlUsS0FBSztBQUlYLEdBQUssQ0FBQ0UsUUFBUSxHQUFHWiw2REFBVTtNQUFyQlksUUFBUTtBQU1kLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsUUFBd0MsQ0FBQztRQUE5Q0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsTUFBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7O0lBQ3RELEdBQUssQ0FBMEJaLEdBQWtCLEdBQWxCQSxnRUFBZ0IsSUFBdkNhLFFBQVEsR0FBZWIsR0FBa0IsQ0FBekNhLFFBQVEsRUFBRUMsUUFBUSxHQUFLZCxHQUFrQixDQUEvQmMsUUFBUTtJQUMxQixHQUFLLENBQStCbkIsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NvQixVQUFVLEdBQW1CcEIsSUFBZSxLQUFoQ3FCLGFBQWEsR0FBSXJCLElBQWU7SUFFbkQsR0FBSyxDQUFDc0IsWUFBWSxHQUFHLFFBQVEsQ0FBUFQsS0FBSyxFQUFLLENBQUMsQ0FBQztJQUVsQyxNQUFNLDZFQUNIViwwREFBUztRQUFDb0IsV0FBVyxFQUFFVixLQUFLO1FBQUVHLEtBQUssRUFBRUEsTUFBSztrQkFDeEMsUUFBUSxDQUFQUSxTQUFROzBCQUNSLE1BQU0sK0RBQUxqQixTQUFTLG9CQUFLaUIsU0FBUSxDQUFDQyxjQUFjO2dCQUFFQyxHQUFHLEVBQUVGLFNBQVEsQ0FBQ0csUUFBUTs7Z0dBQzNEbEIsS0FBSyxvQkFBS2UsU0FBUSxDQUFDSSxlQUFlO2tDQUFHZCxLQUFLOzs7Ozs7Z0dBQzFDZSxDQUFDOzs0QkFDQ2QsV0FBVzs0QkFDVixDQUFVLFlBQVEsT0FBTkMsTUFBSzs7Ozs7OztnR0FHcEJkLDBEQUFTO3dCQUFDNEIsV0FBVyxFQUFFakIsS0FBSzt3QkFBRWtCLElBQUksRUFBQyxDQUFLO2tDQUN0QyxRQUFRLENBQVBQLFFBQVE7MENBQ1IsTUFBTSwrREFBTGIsUUFBUTtnQ0FBQ2UsR0FBRyxFQUFFRixRQUFRLENBQUNHLFFBQVE7K0JBQU1ILFFBQVEsQ0FBQ1EsY0FBYzs7b0NBQzFEZixJQUFJLENBQUNnQixHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUVsQixLQUFLLEVBQUssQ0FBQzt3Q0FDekIsTUFBTSw2RUFBRWYsNENBQUc7NENBQWVpQyxHQUFHLEVBQUVBLEdBQUc7NENBQUVsQixLQUFLLEVBQUVBLEtBQUs7MkNBQS9Ca0IsR0FBRyxDQUFDQyxHQUFHOzs7OztvQ0FDMUIsQ0FBQztvQ0FFQVgsUUFBUSxDQUFDWSxXQUFXOzs7Ozs7Ozs7Ozs7O2dHQUkxQmhDLCtDQUFNOzs7OztnR0FDTmlDLENBQU07d0JBQ0xDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxNQUFNLEVBQUUsQ0FBUzt3QkFBQyxDQUFDO3dCQUM1QkMsT0FBTyxFQUFFLFFBQVE7NEJBQUZuQixNQUFNLENBQU5BLGFBQWEsQ0FBQyxJQUFJOzs4R0FFaENmLG1EQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CLENBQUM7R0F0Q0tNLE1BQU07O1FBQ3FCUCw0REFBZ0I7OztNQUQzQ08sTUFBTTtBQXVDWixFQUFLO0FBRUwsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbHVtbi5qcz9mOTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSm9iIGZyb20gJy4vSm9iJztcbmltcG9ydCB7IERyb3BwYWJsZSwgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgQWRkSm9iIGZyb20gJy4vQWRkSm9iJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi91dGlscy9jb250ZXh0JztcbmltcG9ydCB7IFZzY0FkZCB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYyc7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XG4gIHdpZHRoOiAyMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogIzQ4MzQwMTtcbmA7XG5jb25zdCBUYXNrbGlzdCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDhweDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbmA7XG5cbmNvbnN0IENvbHVtbiA9ICh7IGNhdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4LCBqb2JzIH0pID0+IHtcbiAgY29uc3QgeyBjYXRzRGF0YSwgZGlzcGF0Y2ggfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgW3Nob3dBZGRKb2IsIHNldFNob3dBZGRKb2JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEpvYiA9IChjYXRJZCkgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlIGRyYWdnYWJsZUlkPXtjYXRJZH0gaW5kZXg9e2luZGV4fT5cbiAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgPENvbnRhaW5lciB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxuICAgICAgICAgIDxUaXRsZSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHtgLi4uaW5kZXg6ICR7aW5kZXh9YH1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPXtjYXRJZH0gdHlwZT1cImpvYlwiPlxuICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICA8VGFza2xpc3QgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbiAgICAgICAgICAgICAgICB7am9icy5tYXAoKGpvYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGtleT17am9iLl9pZH0gam9iPXtqb2J9IGluZGV4PXtpbmRleH0gLz47XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvVGFza2xpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgIDxBZGRKb2IgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZEpvYih0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VnNjQWRkIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8L0RyYWdnYWJsZT5cbiAgKTtcbn07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlU3RhdGUiLCJKb2IiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJBZGRKb2IiLCJ1c2VHbG9iYWxDb250ZXh0IiwiVnNjQWRkIiwiQ29udGFpbmVyIiwiZGl2IiwiVGl0bGUiLCJoMyIsIlRhc2tsaXN0IiwiQ29sdW1uIiwiY2F0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5kZXgiLCJqb2JzIiwiY2F0c0RhdGEiLCJkaXNwYXRjaCIsInNob3dBZGRKb2IiLCJzZXRTaG93QWRkSm9iIiwiaGFuZGxlQWRkSm9iIiwiZHJhZ2dhYmxlSWQiLCJwcm92aWRlZCIsImRyYWdnYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJkcmFnSGFuZGxlUHJvcHMiLCJwIiwiZHJvcHBhYmxlSWQiLCJ0eXBlIiwiZHJvcHBhYmxlUHJvcHMiLCJtYXAiLCJqb2IiLCJfaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInN0eWxlIiwiY3Vyc29yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Column.js\n");

/***/ })

});