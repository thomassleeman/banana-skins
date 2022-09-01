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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useCreateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCreateOptions */ \"./utils/useCreateOptions.js\");\n/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetch */ \"./utils/useFetch.js\");\n/* harmony import */ var _utils_useHandleOnDragEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHandleOnDragEnd */ \"./utils/useHandleOnDragEnd.js\");\n/* harmony import */ var _utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useUpdateDatabase */ \"./utils/useUpdateDatabase.js\");\n/* harmony import */ var _utils_useCopyArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useCopyArray */ \"./utils/useCopyArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import handleOnDragEnd from '../utils/handleOnDragEnd';\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section(_templateObject());\n_c = Container;\nvar Kanban = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(), jobsData = ref.jobsData, catsData = ref.catsData, dispatch = ref.dispatch;\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        console.log('result: ', result);\n        var copyArray = function(array) {\n            var arrayString = JSON.stringify(array);\n            var arrayCopy = JSON.parse(arrayString);\n            return arrayCopy;\n        };\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = copyArray(catsData);\n            //Update state optimistically\n            //a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, catsData[source.index]);\n            //b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            console.log(\"new column order: {newColumnOrder}\");\n            //c) Update state\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newColumnOrder\n            });\n            //update database\n            var body = JSON.stringify({\n                data: newColumnOrder\n            });\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('categories/reorder', body);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            // 1. Moving within the same column\n            if (destination.droppableId === source.droppableId) {\n                var newJobsOrderString = JSON.stringify(jobsData);\n                var newJobsOrder = JSON.parse(newJobsOrderString);\n                //Update state optimistically\n                //a) reorder jobs based on drag\n                newJobsOrder.splice(source.index, 1);\n                newJobsOrder.splice(destination.index, 0, jobsData[source.index]);\n                //b) Update index of each category\n                newJobsOrder.map(function(job) {\n                    job.index = newJobsOrder.indexOf(job);\n                });\n                //c) Update state\n                dispatch({\n                    type: 'UPDATE_JOBS',\n                    payload: newJobsOrder\n                });\n                //update database\n                var body1 = JSON.stringify({\n                    data: newJobsOrder\n                });\n                (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('jobs/reorderColumn', body1);\n                return;\n            }\n            if (destination.droppableId !== source.droppableId) {\n            //Reorder indicies of source column\n            //Change category of draggable\n            //Reorder indicies of destination column\n            }\n        }\n    // Moving within the same list\n    // const start = catsData[source.droppableId];\n    // const finish = catsData[destination.droppableId];\n    // if (start === finish) {\n    //   const newTaskIds = Array.from(start.taskIds);\n    //   newTaskIds.splice(source.index, 1);\n    //   newTaskIds.splice(destination.index, 0, draggableId);\n    //   const newColumn = {\n    //     ...start,\n    //     taskIds: newTaskIds,\n    //   };\n    //   const newData = {\n    //     ...data,\n    //     columns: {\n    //       ...data.columns,\n    //       [newColumn.id]: newColumn,\n    //     },\n    //   };\n    //   setData(newData);\n    // }\n    //Moving from one list to another\n    // const startTaskIds = Array.from(start.taskIds);\n    // startTaskIds.splice(source.index, 1);\n    // const newStart = {\n    //   ...start,\n    //   taskIds: startTaskIds,\n    // };\n    // const finishTaskIds = Array.from(finish.taskIds);\n    // finishTaskIds.splice(destination.index, 0, draggableId);\n    // const newFinish = {\n    //   ...finish,\n    //   taskIds: finishTaskIds,\n    // };\n    // const newData = {\n    //   ...data,\n    //   columns: {\n    //     ...data.columns,\n    //     [newStart.id]: newStart,\n    //     [newFinish.id]: newFinish,\n    //   },\n    // };\n    // setData(newData);\n    });\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.Droppable, {\n            droppableId: \"Kanban\",\n            direction: \"horizontal\",\n            type: \"column\",\n            children: function(provided) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided.droppableProps, {\n                    ref: provided.innerRef,\n                    children: [\n                        catsData.map(function(cat, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                catId: cat._id,\n                                title: cat.title,\n                                description: cat.description,\n                                index: index\n                            }, cat._id, false, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                lineNumber: 162,\n                                columnNumber: 17\n                            }, _this1));\n                        }),\n                        provided.placeholder\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 159,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n            lineNumber: 157,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n        lineNumber: 156,\n        columnNumber: 5\n    }, _this));\n};\n_s(Kanban, \"Y/gdk4bzWhv2HeSxhLKjFlBD9ks=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c1 = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0NBQU07Z0NBRUxxRCxLQUFLLEVBQUVELEdBQUcsQ0FBQ0UsR0FBRztnQ0FDZEMsS0FBSyxFQUFFSCxHQUFHLENBQUNHLEtBQUs7Z0NBQ2hCQyxXQUFXLEVBQUVKLEdBQUcsQ0FBQ0ksV0FBVztnQ0FDNUJ2QixLQUFLLEVBQUVBLEtBQUs7K0JBSlBtQixHQUFHLENBQUNFLEdBQUc7Ozs7O3dCQU9sQixDQUFDO3dCQUNBTixRQUFRLENBQUNTLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQyxDQUFDO0dBL0pLNUMsTUFBTTs7UUFDK0JYLDREQUFnQjs7O01BRHJEVyxNQUFNO0FBaUtaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LYW5iYW4uanM/NzUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgaGFuZGxlT25EcmFnRW5kIGZyb20gJy4uL3V0aWxzL2hhbmRsZU9uRHJhZ0VuZCc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nO1xuaW1wb3J0IHsgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvY29udGV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNyZWF0ZU9wdGlvbnMgfSBmcm9tICcuLi91dGlscy91c2VDcmVhdGVPcHRpb25zJztcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSAnLi4vdXRpbHMvdXNlRmV0Y2gnO1xuaW1wb3J0IHsgdXNlSGFuZGxlT25EcmFnRW5kIH0gZnJvbSAnLi4vdXRpbHMvdXNlSGFuZGxlT25EcmFnRW5kJztcbmltcG9ydCB7IHVzZVVwZGF0ZURhdGFiYXNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlVXBkYXRlRGF0YWJhc2UnO1xuaW1wb3J0IHVzZUNvcHlBcnJheSBmcm9tICcuLi91dGlscy91c2VDb3B5QXJyYXknO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEthbmJhbiA9ICgpID0+IHtcbiAgY29uc3QgeyBqb2JzRGF0YSwgY2F0c0RhdGEsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy9IQU5ETEUgT04gRFJBRyBFTkQvLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgY29uc3QgaGFuZGxlT25EcmFnRW5kID0gdXNlQ2FsbGJhY2soKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzdGluYXRpb24sIHNvdXJjZSwgZHJhZ2dhYmxlSWQsIHR5cGUgfSA9IHJlc3VsdDtcbiAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpO1xuXG4gICAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgICBjb25zdCBhcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcbiAgICAgIGNvbnN0IGFycmF5Q29weSA9IEpTT04ucGFyc2UoYXJyYXlTdHJpbmcpO1xuXG4gICAgICByZXR1cm4gYXJyYXlDb3B5O1xuICAgIH07XG5cbiAgICBpZiAoIWRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCAmJlxuICAgICAgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIENPTFVNTlMgKi9cbiAgICBpZiAodHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbk9yZGVyID0gY29weUFycmF5KGNhdHNEYXRhKTtcblxuICAgICAgLy9VcGRhdGUgc3RhdGUgb3B0aW1pc3RpY2FsbHlcbiAgICAgIC8vYSkgcmVvcmRlciBjb2x1bW5zIGJhc2VkIG9uIGRyYWdcbiAgICAgIG5ld0NvbHVtbk9yZGVyLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgbmV3Q29sdW1uT3JkZXIuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjYXRzRGF0YVtzb3VyY2UuaW5kZXhdKTtcbiAgICAgIC8vYikgVXBkYXRlIGluZGV4IG9mIGVhY2ggY2F0ZWdvcnlcbiAgICAgIG5ld0NvbHVtbk9yZGVyID0gbmV3Q29sdW1uT3JkZXIubWFwKChjb2wpID0+IHtcbiAgICAgICAgY29sLmNhdEluZGV4ID0gbmV3Q29sdW1uT3JkZXIuaW5kZXhPZihjb2wpO1xuICAgICAgICByZXR1cm4gY29sO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBuZXcgY29sdW1uIG9yZGVyOiB7bmV3Q29sdW1uT3JkZXJ9YCk7XG5cbiAgICAgIC8vYykgVXBkYXRlIHN0YXRlXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfQ0FUUycsIHBheWxvYWQ6IG5ld0NvbHVtbk9yZGVyIH0pO1xuXG4gICAgICAvL3VwZGF0ZSBkYXRhYmFzZVxuICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZGF0YTogbmV3Q29sdW1uT3JkZXIsXG4gICAgICB9KTtcbiAgICAgIHVzZVVwZGF0ZURhdGFiYXNlKCdjYXRlZ29yaWVzL3Jlb3JkZXInLCBib2R5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBKT0JTICovXG4gICAgaWYgKHR5cGUgPT09ICdqb2InKSB7XG4gICAgICAvLyAxLiBNb3Zpbmcgd2l0aGluIHRoZSBzYW1lIGNvbHVtblxuICAgICAgaWYgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQpIHtcbiAgICAgICAgY29uc3QgbmV3Sm9ic09yZGVyU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoam9ic0RhdGEpO1xuICAgICAgICBjb25zdCBuZXdKb2JzT3JkZXIgPSBKU09OLnBhcnNlKG5ld0pvYnNPcmRlclN0cmluZyk7XG5cbiAgICAgICAgLy9VcGRhdGUgc3RhdGUgb3B0aW1pc3RpY2FsbHlcbiAgICAgICAgLy9hKSByZW9yZGVyIGpvYnMgYmFzZWQgb24gZHJhZ1xuICAgICAgICBuZXdKb2JzT3JkZXIuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgICAgIG5ld0pvYnNPcmRlci5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGpvYnNEYXRhW3NvdXJjZS5pbmRleF0pO1xuICAgICAgICAvL2IpIFVwZGF0ZSBpbmRleCBvZiBlYWNoIGNhdGVnb3J5XG4gICAgICAgIG5ld0pvYnNPcmRlci5tYXAoKGpvYikgPT4ge1xuICAgICAgICAgIGpvYi5pbmRleCA9IG5ld0pvYnNPcmRlci5pbmRleE9mKGpvYik7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2MpIFVwZGF0ZSBzdGF0ZVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfSk9CUycsIHBheWxvYWQ6IG5ld0pvYnNPcmRlciB9KTtcblxuICAgICAgICAvL3VwZGF0ZSBkYXRhYmFzZVxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGRhdGE6IG5ld0pvYnNPcmRlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHVzZVVwZGF0ZURhdGFiYXNlKCdqb2JzL3Jlb3JkZXJDb2x1bW4nLCBib2R5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgIT09IHNvdXJjZS5kcm9wcGFibGVJZCkge1xuICAgICAgICAvL1Jlb3JkZXIgaW5kaWNpZXMgb2Ygc291cmNlIGNvbHVtblxuICAgICAgICAvL0NoYW5nZSBjYXRlZ29yeSBvZiBkcmFnZ2FibGVcbiAgICAgICAgLy9SZW9yZGVyIGluZGljaWVzIG9mIGRlc3RpbmF0aW9uIGNvbHVtblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1vdmluZyB3aXRoaW4gdGhlIHNhbWUgbGlzdFxuICAgIC8vIGNvbnN0IHN0YXJ0ID0gY2F0c0RhdGFbc291cmNlLmRyb3BwYWJsZUlkXTtcbiAgICAvLyBjb25zdCBmaW5pc2ggPSBjYXRzRGF0YVtkZXN0aW5hdGlvbi5kcm9wcGFibGVJZF07XG5cbiAgICAvLyBpZiAoc3RhcnQgPT09IGZpbmlzaCkge1xuICAgIC8vICAgY29uc3QgbmV3VGFza0lkcyA9IEFycmF5LmZyb20oc3RhcnQudGFza0lkcyk7XG4gICAgLy8gICBuZXdUYXNrSWRzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgIC8vICAgbmV3VGFza0lkcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGRyYWdnYWJsZUlkKTtcbiAgICAvLyAgIGNvbnN0IG5ld0NvbHVtbiA9IHtcbiAgICAvLyAgICAgLi4uc3RhcnQsXG4gICAgLy8gICAgIHRhc2tJZHM6IG5ld1Rhc2tJZHMsXG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAvLyAgICAgLi4uZGF0YSxcbiAgICAvLyAgICAgY29sdW1uczoge1xuICAgIC8vICAgICAgIC4uLmRhdGEuY29sdW1ucyxcbiAgICAvLyAgICAgICBbbmV3Q29sdW1uLmlkXTogbmV3Q29sdW1uLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfTtcbiAgICAvLyAgIHNldERhdGEobmV3RGF0YSk7XG4gICAgLy8gfVxuXG4gICAgLy9Nb3ZpbmcgZnJvbSBvbmUgbGlzdCB0byBhbm90aGVyXG4gICAgLy8gY29uc3Qgc3RhcnRUYXNrSWRzID0gQXJyYXkuZnJvbShzdGFydC50YXNrSWRzKTtcbiAgICAvLyBzdGFydFRhc2tJZHMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgLy8gY29uc3QgbmV3U3RhcnQgPSB7XG4gICAgLy8gICAuLi5zdGFydCxcbiAgICAvLyAgIHRhc2tJZHM6IHN0YXJ0VGFza0lkcyxcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IGZpbmlzaFRhc2tJZHMgPSBBcnJheS5mcm9tKGZpbmlzaC50YXNrSWRzKTtcbiAgICAvLyBmaW5pc2hUYXNrSWRzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgZHJhZ2dhYmxlSWQpO1xuICAgIC8vIGNvbnN0IG5ld0ZpbmlzaCA9IHtcbiAgICAvLyAgIC4uLmZpbmlzaCxcbiAgICAvLyAgIHRhc2tJZHM6IGZpbmlzaFRhc2tJZHMsXG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgLy8gICAuLi5kYXRhLFxuICAgIC8vICAgY29sdW1uczoge1xuICAgIC8vICAgICAuLi5kYXRhLmNvbHVtbnMsXG4gICAgLy8gICAgIFtuZXdTdGFydC5pZF06IG5ld1N0YXJ0LFxuICAgIC8vICAgICBbbmV3RmluaXNoLmlkXTogbmV3RmluaXNoLFxuICAgIC8vICAgfSxcbiAgICAvLyB9O1xuICAgIC8vIHNldERhdGEobmV3RGF0YSk7XG4gIH0pO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZXR1cm4gKFxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmR9PlxuICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIkthbmJhblwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiB0eXBlPVwiY29sdW1uXCI+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICA8Q29udGFpbmVyIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0+XG4gICAgICAgICAgICB7Y2F0c0RhdGEubWFwKChjYXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgICAgICAga2V5PXtjYXQuX2lkfVxuICAgICAgICAgICAgICAgICAgY2F0SWQ9e2NhdC5faWR9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17Y2F0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3BwYWJsZT5cbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEthbmJhbjtcbiJdLCJuYW1lcyI6WyJEcmFnRHJvcENvbnRleHQiLCJDb2x1bW4iLCJEcm9wcGFibGUiLCJ1c2VHbG9iYWxDb250ZXh0Iiwic3R5bGVkIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNyZWF0ZU9wdGlvbnMiLCJ1c2VGZXRjaCIsInVzZUhhbmRsZU9uRHJhZ0VuZCIsInVzZVVwZGF0ZURhdGFiYXNlIiwidXNlQ29weUFycmF5IiwiQ29udGFpbmVyIiwic2VjdGlvbiIsIkthbmJhbiIsImpvYnNEYXRhIiwiY2F0c0RhdGEiLCJkaXNwYXRjaCIsImhhbmRsZU9uRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiZHJhZ2dhYmxlSWQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImNvcHlBcnJheSIsImFycmF5IiwiYXJyYXlTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYXJyYXlDb3B5IiwicGFyc2UiLCJkcm9wcGFibGVJZCIsImluZGV4IiwibmV3Q29sdW1uT3JkZXIiLCJzcGxpY2UiLCJtYXAiLCJjb2wiLCJjYXRJbmRleCIsImluZGV4T2YiLCJwYXlsb2FkIiwiYm9keSIsImRhdGEiLCJuZXdKb2JzT3JkZXJTdHJpbmciLCJuZXdKb2JzT3JkZXIiLCJqb2IiLCJvbkRyYWdFbmQiLCJkaXJlY3Rpb24iLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJjYXQiLCJjYXRJZCIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ })

});