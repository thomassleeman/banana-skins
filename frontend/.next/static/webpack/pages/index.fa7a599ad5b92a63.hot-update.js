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

/***/ "./components/Kanban.js":
/*!******************************!*\
  !*** ./components/Kanban.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useCreateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCreateOptions */ \"./utils/useCreateOptions.js\");\n/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetch */ \"./utils/useFetch.js\");\n/* harmony import */ var _utils_useHandleOnDragEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHandleOnDragEnd */ \"./utils/useHandleOnDragEnd.js\");\n/* harmony import */ var _utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useUpdateDatabase */ \"./utils/useUpdateDatabase.js\");\n/* harmony import */ var _utils_useCopyArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useCopyArray */ \"./utils/useCopyArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import handleOnDragEnd from '../utils/handleOnDragEnd';\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section(_templateObject());\n_c = Container;\nvar Kanban = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(), jobsData = ref.jobsData, catsData = ref.catsData, dispatch = ref.dispatch;\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        console.log('result: ', result);\n        var copyArray = function(array) {\n            var arrayString = JSON.stringify(array);\n            var arrayCopy = JSON.parse(arrayString);\n            return arrayCopy;\n        };\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = copyArray(catsData);\n            //Update state optimistically\n            //a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, catsData[source.index]);\n            //b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            //c) Update state\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newColumnOrder\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('categories/reorder', newColumnOrder);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            // 1. Moving within the same column\n            if (destination.droppableId === source.droppableId) {\n                var newJobsOrder = copyArray(jobsData);\n                //Update state optimistically\n                //a) reorder jobs based on drag\n                newJobsOrder.splice(source.index, 1);\n                newJobsOrder.splice(destination.index, 0, jobsData[source.index]);\n                //b) Update index of each category\n                //BUG This is wrong for jobs\n                newJobsOrder = newJobsOrder.map(function(job) {});\n                //c) Update state\n                dispatch({\n                    type: 'UPDATE_JOBS',\n                    payload: newJobsOrder\n                });\n                //update database\n                (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('jobs/reorderColumn', newJobsOrder);\n                return;\n            }\n            // 2. Moving between columns\n            if (destination.droppableId !== source.droppableId) {\n            //Reorder indicies of source column\n            //Change category of draggable\n            //Reorder indicies of destination column\n            }\n        }\n    });\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.Droppable, {\n            droppableId: \"Kanban\",\n            direction: \"horizontal\",\n            type: \"column\",\n            children: function(provided) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided.droppableProps, {\n                    ref: provided.innerRef,\n                    children: [\n                        catsData.map(function(cat, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                catId: cat._id,\n                                title: cat.title,\n                                description: cat.description,\n                                index: index\n                            }, cat._id, false, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, _this1));\n                        }),\n                        provided.placeholder\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this));\n};\n_s(Kanban, \"Y/gdk4bzWhv2HeSxhLKjFlBD9ks=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c1 = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRixRQUFRLENBQUNHLFFBQVE7O3dCQUMzRGpDLFFBQVEsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQVBhLEdBQUcsRUFBRWhCLEtBQUssRUFBSyxDQUFDOzRCQUM3QixNQUFNLDZFQUNIakMsK0NBQU07Z0NBRUxrRCxLQUFLLEVBQUVELEdBQUcsQ0FBQ0UsR0FBRztnQ0FDZEMsS0FBSyxFQUFFSCxHQUFHLENBQUNHLEtBQUs7Z0NBQ2hCQyxXQUFXLEVBQUVKLEdBQUcsQ0FBQ0ksV0FBVztnQ0FDNUJwQixLQUFLLEVBQUVBLEtBQUs7K0JBSlBnQixHQUFHLENBQUNFLEdBQUc7Ozs7O3dCQU9sQixDQUFDO3dCQUNBTixRQUFRLENBQUNTLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQyxDQUFDO0dBM0dLekMsTUFBTTs7UUFDK0JYLDREQUFnQjs7O01BRHJEVyxNQUFNO0FBNkdaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LYW5iYW4uanM/NzUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgaGFuZGxlT25EcmFnRW5kIGZyb20gJy4uL3V0aWxzL2hhbmRsZU9uRHJhZ0VuZCc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nO1xuaW1wb3J0IHsgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvY29udGV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNyZWF0ZU9wdGlvbnMgfSBmcm9tICcuLi91dGlscy91c2VDcmVhdGVPcHRpb25zJztcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSAnLi4vdXRpbHMvdXNlRmV0Y2gnO1xuaW1wb3J0IHsgdXNlSGFuZGxlT25EcmFnRW5kIH0gZnJvbSAnLi4vdXRpbHMvdXNlSGFuZGxlT25EcmFnRW5kJztcbmltcG9ydCB7IHVzZVVwZGF0ZURhdGFiYXNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlVXBkYXRlRGF0YWJhc2UnO1xuaW1wb3J0IHVzZUNvcHlBcnJheSBmcm9tICcuLi91dGlscy91c2VDb3B5QXJyYXknO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEthbmJhbiA9ICgpID0+IHtcbiAgY29uc3QgeyBqb2JzRGF0YSwgY2F0c0RhdGEsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy9IQU5ETEUgT04gRFJBRyBFTkQvLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgY29uc3QgaGFuZGxlT25EcmFnRW5kID0gdXNlQ2FsbGJhY2soKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzdGluYXRpb24sIHNvdXJjZSwgZHJhZ2dhYmxlSWQsIHR5cGUgfSA9IHJlc3VsdDtcbiAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpO1xuXG4gICAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgICBjb25zdCBhcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcbiAgICAgIGNvbnN0IGFycmF5Q29weSA9IEpTT04ucGFyc2UoYXJyYXlTdHJpbmcpO1xuXG4gICAgICByZXR1cm4gYXJyYXlDb3B5O1xuICAgIH07XG5cbiAgICBpZiAoIWRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCAmJlxuICAgICAgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIENPTFVNTlMgKi9cbiAgICBpZiAodHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGxldCBuZXdDb2x1bW5PcmRlciA9IGNvcHlBcnJheShjYXRzRGF0YSk7XG5cbiAgICAgIC8vVXBkYXRlIHN0YXRlIG9wdGltaXN0aWNhbGx5XG4gICAgICAvL2EpIHJlb3JkZXIgY29sdW1ucyBiYXNlZCBvbiBkcmFnXG4gICAgICBuZXdDb2x1bW5PcmRlci5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTtcbiAgICAgIG5ld0NvbHVtbk9yZGVyLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgY2F0c0RhdGFbc291cmNlLmluZGV4XSk7XG4gICAgICAvL2IpIFVwZGF0ZSBpbmRleCBvZiBlYWNoIGNhdGVnb3J5XG4gICAgICBuZXdDb2x1bW5PcmRlciA9IG5ld0NvbHVtbk9yZGVyLm1hcCgoY29sKSA9PiB7XG4gICAgICAgIGNvbC5jYXRJbmRleCA9IG5ld0NvbHVtbk9yZGVyLmluZGV4T2YoY29sKTtcbiAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgIH0pO1xuXG4gICAgICAvL2MpIFVwZGF0ZSBzdGF0ZVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0NBVFMnLCBwYXlsb2FkOiBuZXdDb2x1bW5PcmRlciB9KTtcblxuICAgICAgLy91cGRhdGUgZGF0YWJhc2VcbiAgICAgIHVzZVVwZGF0ZURhdGFiYXNlKCdjYXRlZ29yaWVzL3Jlb3JkZXInLCBuZXdDb2x1bW5PcmRlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogSk9CUyAqL1xuICAgIGlmICh0eXBlID09PSAnam9iJykge1xuICAgICAgLy8gMS4gTW92aW5nIHdpdGhpbiB0aGUgc2FtZSBjb2x1bW5cbiAgICAgIGlmIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkKSB7XG4gICAgICAgIGxldCBuZXdKb2JzT3JkZXIgPSBjb3B5QXJyYXkoam9ic0RhdGEpO1xuXG4gICAgICAgIC8vVXBkYXRlIHN0YXRlIG9wdGltaXN0aWNhbGx5XG4gICAgICAgIC8vYSkgcmVvcmRlciBqb2JzIGJhc2VkIG9uIGRyYWdcbiAgICAgICAgbmV3Sm9ic09yZGVyLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgICBuZXdKb2JzT3JkZXIuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBqb2JzRGF0YVtzb3VyY2UuaW5kZXhdKTtcblxuICAgICAgICAvL2IpIFVwZGF0ZSBpbmRleCBvZiBlYWNoIGNhdGVnb3J5XG4gICAgICAgIC8vQlVHIFRoaXMgaXMgd3JvbmcgZm9yIGpvYnNcbiAgICAgICAgbmV3Sm9ic09yZGVyID0gbmV3Sm9ic09yZGVyLm1hcCgoam9iKSA9PiB7fSk7XG5cbiAgICAgICAgLy9jKSBVcGRhdGUgc3RhdGVcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0pPQlMnLCBwYXlsb2FkOiBuZXdKb2JzT3JkZXIgfSk7XG5cbiAgICAgICAgLy91cGRhdGUgZGF0YWJhc2VcbiAgICAgICAgdXNlVXBkYXRlRGF0YWJhc2UoJ2pvYnMvcmVvcmRlckNvbHVtbicsIG5ld0pvYnNPcmRlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gTW92aW5nIGJldHdlZW4gY29sdW1uc1xuXG4gICAgICBpZiAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgIT09IHNvdXJjZS5kcm9wcGFibGVJZCkge1xuICAgICAgICAvL1Jlb3JkZXIgaW5kaWNpZXMgb2Ygc291cmNlIGNvbHVtblxuICAgICAgICAvL0NoYW5nZSBjYXRlZ29yeSBvZiBkcmFnZ2FibGVcbiAgICAgICAgLy9SZW9yZGVyIGluZGljaWVzIG9mIGRlc3RpbmF0aW9uIGNvbHVtblxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiS2FuYmFuXCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHR5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIDxDb250YWluZXIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cbiAgICAgICAgICAgIHtjYXRzRGF0YS5tYXAoKGNhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICBrZXk9e2NhdC5faWR9XG4gICAgICAgICAgICAgICAgICBjYXRJZD17Y2F0Ll9pZH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtjYXQudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y2F0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHBhYmxlPlxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2FuYmFuO1xuIl0sIm5hbWVzIjpbIkRyYWdEcm9wQ29udGV4dCIsIkNvbHVtbiIsIkRyb3BwYWJsZSIsInVzZUdsb2JhbENvbnRleHQiLCJzdHlsZWQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ3JlYXRlT3B0aW9ucyIsInVzZUZldGNoIiwidXNlSGFuZGxlT25EcmFnRW5kIiwidXNlVXBkYXRlRGF0YWJhc2UiLCJ1c2VDb3B5QXJyYXkiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiS2FuYmFuIiwiam9ic0RhdGEiLCJjYXRzRGF0YSIsImRpc3BhdGNoIiwiaGFuZGxlT25EcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY29weUFycmF5IiwiYXJyYXkiLCJhcnJheVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnJheUNvcHkiLCJwYXJzZSIsImRyb3BwYWJsZUlkIiwiaW5kZXgiLCJuZXdDb2x1bW5PcmRlciIsInNwbGljZSIsIm1hcCIsImNvbCIsImNhdEluZGV4IiwiaW5kZXhPZiIsInBheWxvYWQiLCJuZXdKb2JzT3JkZXIiLCJqb2IiLCJvbkRyYWdFbmQiLCJkaXJlY3Rpb24iLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJjYXQiLCJjYXRJZCIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ })

});